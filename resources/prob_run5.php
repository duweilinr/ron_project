
<!DOCTYPE html>
<!-- prob_run5.php: 06_20_17 -->
<html lang="en-US">
<head>
<meta http-equiv="Content-Type" content="text/html" charset="utf-8"/>
<meta http-equiv="Content-Script-Type" content="text/javascript">

<?php
// get current problem id
$fileid=  "./curr_prob.txt";
$filestr= file_get_contents($fileid);
$data=    json_decode($filestr);
$unitid=  $data->unitid;
$prbnum=  $data->prbnum;
// set page title <title>prob_type_1</title>
$titletxt= "<title>".$unitid."_".$prbnum."</title>\n";
print $titletxt;
// include the file for canvas draw functions cvs1 and cvs2 
$probid= $unitid.'_'.$prbnum;
$cvsfil= "./Units/U_".$unitid."/".$probid."/".$probid."_cvs.js";
print "<script type='text/javascript' src='".$cvsfil."'></script>";
?>

<!--<link href="./style_prob_2.css" rel="stylesheet" type="text/css">-->
<link href="./style_prob_5.css" rel="stylesheet" type="text/css">

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script> 
<script src="./lib_sysdata.js"></script>
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

	$scope.unitid= <?php print "'".$unitid."'" ?>;
	$scope.prbnum= <?php print "'".$prbnum."'" ?>;

	$scope.evalmsg= "";
	$scope.ansrmsg= "";
		
	// get the problem data for display
	$http({
		method: 'POST',
		data:	{ unitid: $scope.unitid,
				  prbnum: $scope.prbnum },
		url:    './dbget5.php'		
	}).then(function successCallback(response) {
		var result=    response.data;  // returned object is 'result'
		$scope.prblin= result.prblin;
		$scope.avlin=  result.avlin;

		var xydat=     drawCvs1();
		var x0=        xydat.x0;
		$scope.xydata= xydat;

		$scope.ninst=  0;		
		// build ansarr from avlin, where
		// ansarr[i]= { subp:[{lbl:"nami1", val:"<P input1>"},
		//					  {lbl:"nami2", val:"<P input2>"},...]}
		$scope.ansarr= [];
		var avlins= $scope.avlin;
		var np=     avlins.length;
		for ( var i=0; i<np; i++) {
			var avlini= avlins[i];
			var avlist= avlini.split(",");
			var subarr= [];
			var nsub=   avlist.length;
			for (var j=0; j<nsub; j++) {
				var text=  avlist[j];
				var list=  text.split(":");				
				subarr[j]= {lbl:list[0],val:""};
			}	
			$scope.ansarr[i]= {subp:subarr};
		}

		// get the first instance	
		$scope.INST('new');			
	}, function errorCallback(response) {
		var status=     response.status;
		var statusText= response.statusText;			
		var errout= "error= ".concat(status,", ",statusText);
		console.log(errout);	
	})	

// user call for new instance ------------------------------------------------>
$scope.INST= function(arg)
{		
	var state= arg;		// 'new' or 'old'
	
	// clear answer vbl structure	
	var avlins= $scope.avlin;
	var np=     avlins.length;
	for ( var i=0; i<np; i++ ) {
		$scope.CLR(i);		
	}
	$scope.evalmsg= "";
	$scope.ansrmsg= "";
	
	// get new instance
	$http({
		method: 'POST',
		data:	{ unitid: $scope.unitid,
				  prbnum: $scope.prbnum,
				  state:  state  },
		url:    './doINST5.php'
	}).then(function successCallback(response) {
		var result=    response.data; 
		$scope.ninst=  result.ninst;
		$scope.ivstr=  result.ivstr;
		$scope.ivcode= result.ivcode;;				
		// instance-based drawing
		var xydat=  $scope.xydata;
		drawCvs2(xydat,$scope.ivcode);	
	}, function errorCallback(response) {
		var status=     response.status;
		var statusText= response.statusText;			
		var errout=     "error= ".concat(status,", ",statusText);
		console.log(errout);	
	})
}

// user call for evaluation -------------------------------------------------->
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
	  data:   { caller:"prob_run2",
				unitid:$scope.unitid,
				prbnum:$scope.prbnum,
				pnx:   pnx,
				Pvstr: Pvstr },
	  url:    './doEVAL5.php'					
	}).then(function successCallback(response) {
		var result=  response.data; 	// returned object
		var evalstr= result.evalstr;
		var strmsg=  '('.concat(pnx+1,') ',evalstr);
		$scope.evalmsg= strmsg;					
	}, function errorCallback(response) {
		var status=     response.status;
		var statusText= response.statusText;			
		var errout= "error= ".concat(status,", ",statusText);
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
	$http({
		  method: 'POST',
		  data:   { caller:"prob_run2",
					unitid:$scope.unitid,
					prbnum:$scope.prbnum,
					pnx:   pnx },
		  url:    './doANS5.php'
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

}
})    
</script>

</head>


<body id="bodywrap" ng-app="probApp" ng-controller="probCtrl">

<!-- Wrap for entire page ----------------------------------------------------->
<div id="pagewrap">

<!-- problem id --------------------------------------------------------------->
<br>
<div>
 <h2>&emsp;{{unitid}}&#160;{{prbnum}}</h2>
</div>

<!-- problem statement -------------------------------------------------------->
<div style="padding:0px 10px 0px 0px;">
 <p class="p1020" ng-repeat="x in prblin">{{x}}</p>
</div>

<!-- Image or canvas ---------------------------------------------------------->
<br>
<div id="cvswrap" style="width:804px; height:504px; border:solid gray 1px;">
 <canvas id="layer1" width="800px" height="500px"></canvas>
 <canvas id="layer2" width="800px" height="500px"></canvas> 
</div>

<!-- instance variables ------------------------------------------------------->
<br>
<div>
 <p class="p1020">
	<button ng-click="INST('old')"><b>GET INST</b></button>
	&emsp;{{ninst}}: {{ivstr}}</p>
</div>
		
<!-- answer parts and message line --------------------------------------------> 
<hr>
<div class="aphdr" ng-app="probApp" ng-repeat="x in ansarr">
  <div class="apindex" style="border:solid red 0px;">
    <p><b>({{$index+1}})</b></p>
  </div>
  <div class="aptxtinp" ng-repeat="y in x.subp" style="border:solid red 0px;">
	<span ng-repeat="y in x.subp"><b>
	 &#160;&#160;{{y.lbl}}=&#160;<input type="text" size="10" ng-model="y.val"></b>
	</span>
  </div>  
  <div class="apEVAL" style="border:solid red 0px;"><b>  
    <button type="button" ng-click="EVAL($index)"><b>EVAL</b></button>
  </div> 
  <div class="apCLR" style="border:solid red 0px;">
    <b><button ng-click="CLR($index)"><b>CLR</b></button>
  </div>
  <div class="apANS" style="border:solid red 0px;">
    <b><button ng-click="ANS($index)"><b>ANS</b></button>
  </div>
</div>

<hr>
<div class="aphdr">
 <div class="msglbl" style="border:solid red 0px;"><b>Evaluation:</b></div>
 <div class="msgline" style="border:solid red 0px;">{{evalmsg}}</div> 
 <div class="msgCLR" style="border:solid red 0px;">
 <button ng-click="msglineCLR('evalmsg')"><b>CLEAR</b></button></div>
</div>
<div class="aphdr">
 <div class="msglbl" style="border:solid red 0px;"><b>Answer:</b></div>
 <div class="msgline" style="border:solid red 0px;">{{ansrmsg}}</div> 
 <div class="msgCLR" style="border:solid red 0px;">
 <button ng-click="msglineCLR('ansrmsg')"><b>CLEAR</b></button></div>
</div>

<!-- Footer ------------------------------------------------------------------->
<hr>
<div>
 <p class="p1020" style="text-align:center"><b>{{hdrstr}} :: {{ftrstr}}</b></p>
 
</div>
<!-- bottom of page ----------------------------------------------------------->

<!-- Page must load completely before this script can run properly ------------>

</body>
</html>