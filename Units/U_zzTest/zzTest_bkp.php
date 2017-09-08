
<!DOCTYPE html>
<!-- zzTest.php		v.07/06/2017	------------------------------------------->
<!-- 				Adds PROGRESS METER. -->
<!--				Uses template approach based on nprobs. -->
<html lang="en-US">
<head>
<meta http-equiv="Content-Type" content="text/html"; charset="utf-8"/>
<meta http-equiv="Content-Script-Type" content="text/javascript">

<?php
// get current unit id
$fileid=  "../../curr_prob.txt";
$filestr= file_get_contents($fileid);
$data=    json_decode($filestr);
$unitid=  		$data->unitid;
$nprobs=  		$data->unitnp;
$prbnum=  		$data->prbnum;
$showPROGRESS= 	$data->showPROGRESS;

// set page title
$titletxt= "<title>".$unitid."</title>";
print $titletxt;
?>

<link href="../../style_unit.css" rel="stylesheet" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

<script type="text/javascript" src="../../lib_utils_js.js"></script>
<script type="text/javascript" src="../../lib_cDraw1.js"></script>

<script>
var unitApp = angular.module('unitApp', []);
unitApp.controller('unitCtrl', function($scope,$http)
{
// on load action ------------------------------------------------------------->
onloadInit();
function onloadInit()
{
	var sysdat=    init_sys_data();
	$scope.hdrstr= sysdat.hdrstr;
	$scope.ftrstr= sysdat.ftrstr;

	$scope.unitid= 		 <?php print "'".$unitid."'" ?>;
	$scope.nprobs= 		 <?php print $nprobs ?>;	
	$scope.prbnum= 		 <?php print $prbnum ?>;
	$scope.showPROGRESS= <?php print "'".$showPROGRESS."'" ?>;
	
	var unitidx= $scope.unitid;
	var nprobsx= $scope.nprobs;
	
	// build rowarr from unitid and nprobs
	$scope.rowarr= [];	// where rowarr[i]= {rowlbl:"Problems 1 to 3",
						//	 				 imgurl1:"urli1",
						//			  		 imgurl2:"urli2",
						//			  		 imgurl3:"urli3"}
	var nrows= parseInt(($scope.nprobs+2)/3);

	// imgurl: "./zzTest_1/zzTest_1_thumb.JPG"	
	var str1= "./".concat(unitidx,"_");
	var str2= "/".concat(unitidx,"_");
	var str3= "_thumb.JPG";
	
	for (var i=0; i<nrows; i++) {
		var ns= 3*i +1;		// first prob num for this row
		var ne= ns +2;
		if (ne > $scope.nprobs) { ne= $scope.nprobs; }
		var je= ne -ns +1;
		var rowtxt= "Problems ".concat(ns," to ",ne);		
		var imgurl= ["","",""];
		for (var j=0; j<je; j++) {
			imgurl[j]= str1.concat(ns+j,str2,ns+j,str3);
		}
		$scope.rowarr[i]= {	rowlbl: rowtxt,
							imgurl: imgurl
						  };
	}	
	
	$scope.noteline=     "none";
}

// showPROGRESS toggle switch ------------------------------------------------->
$scope.doPROGRESS= function() {
	var state= $scope.showPROGRESS;
	if ( state == "OFF") {
		state= "ON";
	}
	else {
		state= "OFF";
	}
	$scope.showPROGRESS= state;
}

// myMouseClick problem selector ---------------------------------------------->
$scope.myMouseClick= function(arg)
{
	if (arg < $scope.nprobs) {
		$scope.prbnum= arg+1;
		$http({
			method: 'POST',
			data:	{ unitid:       $scope.unitid,
					  nprobs:		$scope.nprobs,
					  prbnum:       $scope.prbnum,
					  showPROGRESS: $scope.showPROGRESS	},
			url:    '../../cpSetup.php'
		}).then(function successCallback(response) {
			var result=   response.data; 	// returned object is 'result'
			//var probfile= "../../prob_run.php";
			var probfile= "../../prob_run_dev.php";			
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
<h1 class="h1style" style="text-align:center"><b>{{hdrstr}}: Testing</b></h1>
</div>

<hr class="std1" />
<br>
<div>
<p class="p30"><b>Click on the figure to select a problem.</b></p>
</div>

<br>
<!-- Problem requests --------------------------------------------------------->
<div class="imgrow" ng-app="probApp" ng-repeat="x in rowarr" style="border:solid red 0px;">
  <p class="p30" style="text-align:left"><b>{{x.rowlbl}}</b></p>
  <img class="imgcol1" ng-click="myMouseClick(3*$index)"   ng-src="{{x.imgurl[0]}}"/>
  <img class="imgcol2" ng-click="myMouseClick(3*$index+1)" ng-src="{{x.imgurl[1]}}"/>
  <img class="imgcol3" ng-click="myMouseClick(3*$index+2)" ng-src="{{x.imgurl[2]}}"/>
</div>

<hr>
<!-- MESSAGE line instance request -------------------------------------------->
<div> 
 <p class="p30"><b>NOTES: </b>{{noteline}}</p>
 <p class="p30">INTERNAL NOTES: <i>(img is 240x150)</i></p> 
</div>

<br>
<!-- Dashboard requests ------------------------------------------------------->
<div style="height:30px;">
 <p class="p30"><button ng-click="doPROGRESS()"><b>PROGRESS &#160;METER</b></button><b> &#160;&#160;{{showPROGRESS}}</b></p>
</div>

<br>
<!-- General control requests ------------------------------------------------->
<div style="height:30px;">
  <p class="p30"><button onclick="doRETURN()"><b>RETURN</b></button>
  &emsp;&emsp;<button onclick="doHELP()"><b>HELP</b></button>
  &emsp;&emsp;<button onclick="doCLRMSG()"><b>CLEAR MSG</b></button>
  </p>
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