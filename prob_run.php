
<!DOCTYPE html>
<!-- prob_run.php: 08_24_17
(1) Adds cvs3 for progress meter.
(2) Adds PROGRESS METER and showANSWER features.
(3) Adds convert of special symbols (unicode) in prblin.
(4) Adds text line for each answer part derived from prblin.
--->
<html lang="en-US">
<head>
<meta http-equiv="Content-Type" content="text/html" charset="utf-8"/>
<meta http-equiv="Content-Script-Type" content="text/javascript">

<?php
// get current problem id
$fileid=  	   "./curr_prob.txt";
$filestr= 	   file_get_contents($fileid);
$data=   	   json_decode($filestr);
$unitid=  	   $data->unitid;
$prbnum=  	   $data->prbnum;
$showANSWER=   $data->showANSWER;

// set page title <title>prob_type_1</title>
$titletxt= "<title>".$unitid."_".$prbnum."_specialsymbol</title>\n";
print $titletxt;

// include the file for canvas draw functions cvs1 and cvs2 
$probid= $unitid.'_'.$prbnum;
$cvsfil= "./Units/U_".$unitid."/".$probid."/".$probid."_cvs.js";
print "<script type='text/javascript' src='".$cvsfil."'></script>";
?>

<link href="./style_prob.css" rel="stylesheet" type="text/css">

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script> 

<script type="text/javascript" src="./lib_utils_js.js"></script>
<script type="text/javascript" src="./lib_cDraw1.js"></script>
<script type="text/javascript" src="./lib_cDraw2.js"></script>

<script>
var probapp = angular.module('probApp', []);
probapp.controller('probCtrl', function($scope,$http)
{
// on load action ------------------------------------------------------------->
onloadInit();
function onloadInit()
{
	var sysdat= init_sys_data();
	$scope.hdrstr= sysdat.hdrstr;
	$scope.ftrstr= sysdat.ftrstr;
	
	$scope.marks=     sysdat.marks;
	$scope.codearray= sysdat.codearr;

	$scope.unitid= 		 <?php print "'".$unitid."'" ?>;
	$scope.prbnum= 		 <?php print "'".$prbnum."'" ?>;
	$scope.showANSWER=   <?php print "'".$showANSWER."'" ?>;

	// get unit title from label and build pagehdr
	var unitidx= $scope.unitid;
	var unitarr= get_unit_index();			// title, short, nprobs
	var utitle=  "";
	for (var i=0; i<unitarr.length; i++) {
		var ulabel= unitarr[i].label;
		if (unitidx == ulabel) {
			utitle= unitarr[i].title;
		}
	}	
	var pnum=       $scope.prbnum;
	$scope.pagehdr= utitle.concat(": problem ",pnum);	
	
	// initialize scope data
	$scope.prblin= [""];
	$scope.prtext= [""];
	
	$scope.ninst=  0;
	$scope.ivstr=  "";
	$scope.ivcode= "";

	$scope.avlin=   [""];
	$scope.nparts=  0;
	$scope.ansarr=  [];
	$scope.ansrmsg= "";	
	
	$scope.evalmsg= "";

	// get the problem data for display
	$http({
		method: 'POST',
		data:	{ unitid: $scope.unitid,
				  prbnum: $scope.prbnum },
		url:    './dbget.php'		
	}).then(function successCallback(response) {
		var result=    response.data;  // returned object is 'result'
		var prtemp=    result.prblin;		
		$scope.avlin=  result.avlin;		
		var avlins=    $scope.avlin;
		$scope.nparts= avlins.length;		
		
		// Process problem description to replace special symbols.
		var strarr=    [];
		var mark1=     $scope.marks[0];
		var mark2=     $scope.marks[1];
		var codearr=   $scope.codearray;
		strarr=        doConvertSpecSymb(prtemp,mark1,mark2,codearr);
		var lenstrarr= strarr.length;			
				
		// Split prob text into body (prtext) and answer parts (atext).
		// Do it this way to preserve existing defn file formats,
		// which only have prblin statement.				
		var atext= [];
		var j=     0;		// index for atext
		var	k=	   0;		// index for prblin
		for (var i=0; i<lenstrarr; i++) {
			var pos1= strarr[i].indexOf('(');
			if (pos1 == 0) {
				atext[j]= strarr[i];
				j= j+1;
			}
			else {
				$scope.prtext[k]= strarr[i];
			}
		}
		
		// draw "layer1" canvas - fixed content
		$scope.xydata= drawCvs1();	// used to draw "layer2" canvas

		// Build ansarr from avlin to support display like this:
		// aptext:		(2) Find Rx and Ry.
		// subp,ptries:     Rx= [ input21 ], Ry= [ input22 ]		<ptries>
		var npts= $scope.nparts;
		for ( var i=0; i<npts; i++) {
			var aptext= atext[i];		// generated above from prblin
			var avlini= avlins[i];
			var avlist= avlini.split(",");
			// convert this answer line
			strarr= doConvertSpecSymb(avlist,mark1,mark2,codearr);
			avlist= strarr;		
			var subarr= [];
			var nsub=   avlist.length;
			for (var j=0; j<nsub; j++) {
				var text=  avlist[j];
				var list=  text.split(":");				
				subarr[j]= {lbl:list[0],val:""};
			}	
			$scope.ansarr[i]= {aptext:aptext,subp:subarr,ptries:0};
		}
				
		// get the first instance
		$scope.INST();			
	}, function errorCallback(response) {
		var status=     response.status;
		var statusText= response.statusText;			
		var errout= "error= ".concat(status,", ",statusText);
		console.log(errout);	
	})	
}
	
// user call for new instance ------------------------------------------------>
$scope.INST= function()
{			
	// clear answer vbl structure	
	var avlins= $scope.avlin;
	var np=     avlins.length;
	for ( var i=0; i<np; i++ ) {
		$scope.CLR(i);
		$scope.ansarr[i].ptries= 0;
	}
	$scope.evalmsg= "";
	$scope.ansrmsg= "";
	
	// get new instance
	$http({
		method: 'POST',
		data:	{ caller: "prob_run" },
		url:    './doINST.php'
	}).then(function successCallback(response) {
		var result=    response.data;		
		$scope.ninst=  result.ninst;
		var ivstrraw=  result.ivstr;
		var strarrraw= [ivstrraw];
		var strarr=    [];
		var mark1=     $scope.marks[0];
		var mark2=     $scope.marks[1];
		var codearr=   $scope.codearray;
		var getivstr=  doConvertSpecSymb(strarrraw,mark1,mark2,codearr);
		$scope.ivstr=  getivstr[0];
		$scope.ivcode= result.ivcode;				
		// instance-based drawing
		drawCvs2($scope.xydata,$scope.ivcode);
	}, function errorCallback(response) {
		var status=     response.status;
		var statusText= response.statusText;			
		var errout=     "error= ".concat(status,", ",statusText);
		console.log(errout);	
	})
}

// user call for evaluation --------------------------------------------------->
$scope.EVAL= function(pnxin)
{	
	var errormsg= "Missing data entry in part (";
	var error= false;
	var pnx=   pnxin;		// make vbl local
	var anspn= $scope.ansarr[pnx];
	var subs=  anspn.subp;
	var nsubs= subs.length;	
	// create the Pvstr values string
	var Pvstr=  subs[0].val;		// first answer of part pnx
	if (Pvstr === "") { error=true; }
	for (var i=1; i<nsubs; i++) {
		var inp= subs[i].val;
		if (inp === "") { error= true; }
		Pvstr=   Pvstr.concat(",",inp);
	}
	if (error) {
		$scope.evalmsg= errormsg.concat((pnx+1),")");
		return ;
	}	

	// POST data to doEVAL
	$http({
	  method: 'POST',
	  data:   { pnx:   pnx,
				Pvstr: Pvstr
			  },
	  url:    './doEVAL.php'					
	}).then(function successCallback(response) {
		var result=  response.data; 	// returned object
		var evalstr= result.evalstr;
		var ptryarr= result.ptryarr;
		var ansYES=  result.ansYES;
		$scope.evalmsg= "(".concat(pnx+1,") ",evalstr);

		for (var i=0; i<$scope.nparts; i++) {
			var ntry= String(ptryarr[i]);
			var ans=  ansYES[i];
			var text= ntry.concat(" ",ans);
			$scope.ansarr[i].ptries= text;
		}

	}, function errorCallback(response) {
		var status=     response.status;
		var statusText= response.statusText;			
		var errout=     "error= ".concat(status,", ",statusText);
		console.log(errout);	
	})
}
 
// user wants to clear answer line -------------------------------------------->
$scope.CLR= function(pnx)
{
	var anspn= $scope.ansarr[pnx];
	var subs=  anspn.subp;
	var nsubs= subs.length;	
	for (var i=0; i<nsubs; i++) {
		subs[i].val= "";
	}
	return ;
}

// user wants to see answer --------------------------------------------------->
$scope.ANS= function(pnx)
{
	if ($scope.showANSWER === "OFF") {
		$scope.ansrmsg= "Show answer feature is OFF.";
		return ;
	}

	$http({
		  method: 'POST',
		  data:   {	pnx:   pnx },
		  url:    './doANS.php'
	}).then(function successCallback(response) {
		var result=              response.data; 	// returned object		
		//$scope.ansarr[pnx].eval= result.avvalstr;
		var val= result.avvalstr;
		var strmsg= '('.concat(pnx+1,') ',val);
		$scope.ansrmsg= strmsg;
	}, function errorCallback(response) {
			var status=     response.status;
			var statusText= response.statusText;			
			var errout= "error= ".concat(status,", ",statusText);
			console.log(errout);	
	})	
}
     
// message line --------------------------------------------------------------->
$scope.msglineCLR= function(msg) {
	if (msg == "evalmsg") {
		$scope.evalmsg= "";				
	}
	else if (msg == "ansrmsg") {
		$scope.ansrmsg= "";				
	}
}

})    
</script>

</head>


<body id="bodywrap" ng-app="probApp" ng-controller="probCtrl">

<!-- Wrap for entire page ----------------------------------------------------->
<div id="pagewrap">


<!-- problem id ---------------------------------------------------------------
<br>
<div>
 <h2>&emsp;{{unitid}}&#160;{{prbnum}}</h2>
</div>
-->
<!-- Show title --------------------------------------------------------------->
<div>
<h2 class="h2style" style="text-align:center"><b>{{pagehdr}}</b></h2>
</div>
<hr class="std1" />

<!-- problem statement -------------------------------------------------------->
<div style="padding:0px 10px 0px 0px;">
 <p class="p1020" ng-repeat="x in prtext">{{x}}</p>
</div>

<!-- Image or canvas ---------------------------------------------------------->
<br>
<div id="cvswrap" style="width:804px; height:502px; margin:auto; border:solid gray 1px;">
 <canvas id="layer1" width="800px" height="500px" margin="auto"></canvas>
 <canvas id="layer2" width="800px" height="500px" margin="auto"></canvas>
 <canvas id="layer3" width="800px" height="500px" margin="auto"></canvas> 
</div>

<!-- instance variables ------------------------------------------------------->
<br>
<div>
 <p class="p1020">
	<button ng-click="INST()"><b>GET INST</b></button>
	&emsp;{{ninst}}: {{ivstr}}</p>
</div>
		
<!-- answer parts -------------------------------------------------------------> 
<hr>
<div class="apwrap" ng-app="probApp" ng-repeat="x in ansarr" style="border:solid red 0px;">
  <div class="aptext" style="border:solid green 0px;">
	<p>{{x.aptext}}</p>
  </div>

  <div class="aplinin" style="border:solid blue 0px;">
  <div class="aptxtinp" ng-repeat="y in x.subp" style="border:solid red 0px;">
	<span ng-repeat="y in x.subp">
	 <b>{{y.lbl}}=&#160;<input type="text" size="10" ng-model="y.val"></b>
	</span>
  </div> 
  <div class="aptries" ng-class="{red:x.ptries<0,green:x.ptries>=0}">{{x.ptries}} 
  </div>   
  <div class="apEVAL" style="border:solid red 0px;"><b>  
    <button type="button" ng-click="EVAL($index)"><b>EVAL</b></button>
  </div> 
  <div class="apCLR" style="border:solid red 0px;">
    <button ng-click="CLR($index)"><b>CLR</b></button>
  </div>
  <div class="apANS" style="border:solid red 0px;">
    <button ng-click="ANS($index)"><b>ANS</b></button>
  </div>
  </div> 
</div>

<!-- Answer message section --------------------------------------------------->
<hr>
<div class="aphdr" style="border:solid green 0px;">
 <div class="msglbl" style="border:solid red 0px;"><b>Evaluation:</b></div>
 <div class="msgline" style="border:solid red 0px;">{{evalmsg}}</div> 
 <div class="msgCLR" style="border:solid red 0px;">
 <button ng-click="msglineCLR('evalmsg')"><b>CLEAR</b></button></div>
</div>
<div  class="aphdr" style="border:solid blue 0px;">
 <div class="msglbl" style="border:solid red 0px;"><b>Answer:</b></div>
 <div class="msgline" style="border:solid red 0px;">{{ansrmsg}}</div> 
 <div class="msgCLR" style="border:solid red 0px;">
 <button ng-click="msglineCLR('ansrmsg')"><b>CLEAR</b></button></div>
</div>

<!-- Footer ------------------------------------------------------------------->
<hr>
<div  style="border:solid orange 0px;">
 <p id="pftr"><b>{{hdrstr}} :: {{ftrstr}}</b></p>
</div>

</div>
<!-- bottom of page ----------------------------------------------------------->

<!-- Page must load completely before this script can run properly ------------>

</body>
</html>