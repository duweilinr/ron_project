
<!DOCTYPE html>
<!-- scorecard.php		v.07/28/2017	--------------------------------------->
<!-- 	Shows nbr tries, status, time for each answer part. -->

<html lang="en-US">
<head>
<meta http-equiv="Content-Type" content="text/html"; charset="utf-8"/>
<meta http-equiv="Content-Script-Type" content="text/javascript">
<title>scorecard</title>;

<?php
// get current unit id
$fileid=  "./curr_prob.txt";
$filestr= file_get_contents($fileid);
$data=    json_decode($filestr);
$unitid=  $data->unitid;
$nprobs=  $data->unitnp;
$prbnum=  $data->prbnum;

// get current status
$fileid=  "./curr_inst.txt";
$filestr= file_get_contents($fileid);
$data=    json_decode($filestr);
$ptryarr= $data->ptryarr;
//$resarr=  $data->resarr;
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
	$scope.hdrstr= sysdat.hdrstr;
	$scope.ftrstr= sysdat.ftrstr;
	$scope.noteline= "(none)";

	$scope.unitid= <?php print "'".$unitid."'" ?>;
	$scope.nprobs= <?php print $nprobs ?>;	
	$scope.prbnum= <?php print $prbnum ?>;
	
	$scope.ptryarr= 
}


</head>


<body id="bodywrap" ng-app="unitApp" ng-controller="unitCtrl">

<!-- Wrap for entire page ----------------------------------------------------->
<div id="pagewrap">

<!-- Show title --------------------------------------------------------------->
<div>
<h1 class="h1style" style="text-align:center"><b>{{hdrstr}}: {{unitid}}</b></h1>
</div>
<h2 class="h2style" style="text-align: center">Scorecard shows current status</h2>
<hr class="std1" />

<br>
<!-- Status table ------------------------------------------------------------->
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
 <p class="p30"><b>NOTES: </b>{{noteline}}&emsp;&emsp;<i>(img is 240x150)</i></p>
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