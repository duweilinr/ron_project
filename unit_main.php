
<!DOCTYPE html>
<!-- unit_main.php		v.08/27/2017 ------------------------------------------>
<!-- 				Adds PROGRESS METER and SHOW ANSWER. -->
<!--				Uses template approach based on unitid and nprobs. -->
<html lang="en-US">
<head>
<meta http-equiv="Content-Type" content="text/html"; charset="utf-8"/>
<meta http-equiv="Content-Script-Type" content="text/javascript">
<!--<title>unit_main</title>-->

<?php
// get current unit id
$fileid=       "./curr_prob.txt";
$filestr=      file_get_contents($fileid);
$data=         json_decode($filestr);

$unitid=  	   $data->unitid;
$nprobs=  	   $data->unitnp;
$prbnum=  	   $data->prbnum;
$showPROGRESS= $data->showPROGRESS;
$showANSWER=   $data->showANSWER;

// set page title
$titletxt= "<title>".$unitid."</title>";
print $titletxt;
?>

<link href="./style_unit.css" rel="stylesheet" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

<script type="text/javascript" src="./lib_utils_js.js"></script>
<script type="text/javascript" src="./lib_cDraw1.js"></script>

<script>
var unitApp = angular.module('unitApp', []);
unitApp.controller('unitCtrl', function($scope,$http)
{
// on load action ------------------------------------------------------------->
onloadInit();
function onloadInit()
{
	var sysdat=    init_sys_data();
	var hdrstr=    sysdat.hdrstr;
	$scope.ftrstr= sysdat.ftrstr;
	
	$scope.unitid= 		 <?php print "'".$unitid."'" ?>;
	$scope.nprobs= 		 <?php print $nprobs ?>;	
	$scope.prbnum= 		 <?php print $prbnum ?>;
	$scope.showPROGRESS= <?php print "'".$showPROGRESS."'" ?>;
	$scope.showANSWER=   <?php print "'".$showANSWER."'" ?>;	
	
	var unitidx= $scope.unitid;
	
	// get unit title from label and build pagehdr
	var unitarr= get_unit_index();			// title, short, nprobs
	var utitle=  "";
	for (var i=0; i<unitarr.length; i++) {
		var ulabel= unitarr[i].label;
		if (unitidx == ulabel) {
			utitle= unitarr[i].title;
		}
	}	
	$scope.pagehdr= hdrstr.concat(": ",utitle);
	
	// build rowarr from unitid and nprobs	
	var nprobsx=   $scope.nprobs;	
	$scope.rowarr= [];	// where rowarr[i]= {rowtext:"Problems 1 to 3",
						//	 				 rowfigs:[{imgurl:"urli1"},
						//			  		 		  {imgurl:"urli2"},
						//			  		          {imgurl:"urli3"}]
	var nrows= parseInt(($scope.nprobs+2)/3);

	// imgurl for problem i:
	// "./Units/U_<unitid>/<unitid>_<i>/<unitid>_<i>_thumb.JPG"		
	var str1= "./Units/U_".concat(unitidx,"/",unitidx,"_");
	var str2= "/".concat(unitidx,"_");
	var str3= "_thumb.JPG";
	
	for (var i=0; i<nrows; i++) {
		var ns= 3*i +1;		// first prob num for this row
		var ne= ns +2;
		if (ne > $scope.nprobs) { ne= $scope.nprobs; }
		var je= ne -ns +1;
		if (ne>ns) {
			var rowtext= "Problems ".concat(ns," to ",ne);			
		}
		else {
			rowtext= "Problem ".concat(ns);
		}
		var imgurl=  "";
		var rowfigs= [];
		for (var j=0; j<je; j++) {
			imgurl=     str1.concat(ns+j,str2,ns+j,str3);
			rowfigs[j]= {imgurl:imgurl};
		}
		$scope.rowarr[i]= {	rowtext:rowtext, rowfigs:rowfigs };
	}

	$scope.noteline= "";
}

// showPROGRESS toggle switch ------------------------------------------------->
$scope.doPROGRESS= function() {
	var state= $scope.showPROGRESS;
	if ( state == "OFF") {
		$scope.showPROGRESS= "ON";
	}
	else {
		$scope.showPROGRESS= "OFF";
	}
}

// showANSWER toggle switch --------------------------------------------------->
$scope.doshowANSWER= function() {
	var state= $scope.showANSWER;
	if ( state == "OFF") {
		$scope.showANSWER= "ON";
	}
	else {
		$scope.showANSWER= "OFF";
	}
}

// myMouseClick problem selector ---------------------------------------------->
$scope.myMouseClick= function(arg)
{
	// example: arg= "./Units/U_Coords/Coords_1/Coords_1_thumb.JPG"	
	var parts= arg.split('_');
	var prob=  parts[3];
	
	if (prob <= $scope.nprobs) {
		$scope.prbnum= prob;
		$http({
			method: 'POST',
			data: {	caller:       "unit_main",
					unitid:       $scope.unitid,
					unitnp:		  $scope.nprobs,
					prbnum:       $scope.prbnum,
					showPROGRESS: $scope.showPROGRESS,
					showANSWER:	  $scope.showANSWER,
					ninst:		  0,
					ivcode:		  "",
					avvalarr:	  [],
					ptryarr:	  [],
					ansYES:		  []
				  },
			url:    './cpWrite.php'
		}).then(function successCallback(response) {
			var result=   response.data; 	// returned object is 'result'
			var probfile= "./prob_run.php";
			window.open(probfile);
		}, function errorCallback(response) {
			var status=     response.status;
			var statusText= response.statusText;			
			var errout=     "error= ".concat(status,", ",statusText);
			console.log(errout);	
		})						
	}	
}
})
</script>

</head>


<body id="bodywrap" ng-app="unitApp" ng-controller="unitCtrl">

<!-- Wrap for entire page ----------------------------------------------------->
<div id="pagewrap">

<!-- Show title --------------------------------------------------------------->
<div>
<h1 class="h1style" style="text-align:center"><b>{{pagehdr}}</b></h1>
</div>
<hr class="std1" />

<br>
<!-- Dashboard requests ------------------------------------------------------->
<div style="height:36px; left:30px; width:740px; border:solid green 2px;">
 <div style="position:absolute; top:9px; left:10px; width:100px; border:solid red 0px;">
	<b>Run Controls:</b>
 </div>
 <div style="position:absolute; top:7px; left:120px; width:190px; border:solid red 0px;">
	<button ng-click="doPROGRESS()"><b>PROGRESS &#160;METER</b></button><b> &#160;&#160;{{showPROGRESS}}</b>
 </div>
 <div style="position:absolute; top:7px; left:340px; width:175px; border:solid red 0px;">
	<button ng-click="doshowANSWER()"><b>SHOW &#160;ANSWER</b></button><b> &#160;&#160;{{showANSWER}}</b>
 </div>
</div>

<br>
<div>
<p class="p30"><b>Click on the figure to select a problem.</b></p>
</div>

<!-- problem index thumbs -----------------------------------------------------> 
<hr>
<div  ng-app="unitApp" ng-repeat="x in rowarr" style="width:795px; margin:5px 5px 5px 5px; border:solid red 0px;">

  <div style="width:785px; margin:5px 5px 5px 5px; border:solid green 0px;">
	<p>&emsp;{{x.rowtext}}</p>
  </div>
  
  <div style="position:relative; width:785px; height:160px; margin:5px 5px 5px 5px; border:solid blue 0px;">

	<span ng-repeat="y in x.rowfigs">
		&emsp;<img style="height:150px; width:240px; border:2px solid gray;" ng-src="{{y.imgurl}}" ng-click="myMouseClick(y.imgurl)"/>
	</span>
  </div>
  
</div>

<hr>
<!-- General control requests ------------------------------------------------->
<div style="height:30px;">
  <p class="p30"><button onclick="doRETURN()"><b>RETURN</b></button>
  &emsp;&emsp;<button onclick="doHELP()"><b>HELP</b></button>
  &emsp;&emsp;<button onclick="doCLRMSG()"><b>CLEAR MSG</b></button>
  </p>
</div>

<hr>
<!-- MESSAGE line instance request -------------------------------------------->
<div> 
 <p class="p30"><b>NOTES: </b>{{noteline}}</i></p>
</div>

<hr class="std1" />
<!-- Footer ------------------------------------------------------------------->
<div>
 <p id="pftr"><b>{{ftrstr}}</b></p>
</div>

</div>

<!-- Page must load completely before this can run properly ------------------->

</body>
</html>