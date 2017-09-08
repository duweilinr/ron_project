
<!DOCTYPE html>
<html lang="en-US">
<head>
<meta http-equiv="Content-Type" content="text/html" charset="utf-8"/>
<meta http-equiv="Content-Script-Type" content="text/javascript">
<title>cvs_workboard</title>

<?php
// get current problem id
$fileid=  "./curr_prob_id.txt";
$filestr= file_get_contents($fileid);
$data=    json_decode($filestr);
$unitid=  $data->unitid;
$prbnum=  $data->prbnum;
// include canvas lib default for cvs1 and cvs2 
$cvsfil=  "./cvs_lib_wkbd.js";
print "<script type='text/javascript' src='".$cvsfil."'></script>";
?>

<link href="./style_prob.css" rel="stylesheet" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script> 
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
	$scope.unitid=  <?php print "'".$unitid."'" ?>;
	$scope.prbnum=  <?php print "'".$prbnum."'" ?>;
	$scope.xydata=  {};	

	$scope.msgline= "";
	$scope.ftrstr=  "app4STATICS";

	// get the figure data for display
	$scope.xydata= drawCvs1(); // draw cvs1 fig or show image	
      
// message line ---------------------------------------------------------------> 
$scope.msglineCLR= function() {
	$scope.msgline= "";
}

}
})    
</script>

</head>


<body id="bodywrap" ng-app="probApp" ng-controller="probCtrl">

<!-- Wrap for entire page ----------------------------------------------------->
<div id="pagewrap">

<!-- Header section ----------------------------------------------------------->
<div>
<br>
<h1 class="h1style" style="text-align:center">Canvas workboard</h1>
<h2 class="h2style" style="text-align: center">Use this workboard to build a figure for {{unitid}}&#160;{{prbnum}}</h2>
</div>

<!-- Image or canvas ---------------------------------------------------------->
<br>
<div id="cvswrap" style="width:804px; height:504px; border:solid gray 1px;">
 <canvas id="layer1" width="800px" height="500px"></canvas>
 <canvas id="layer2" width="800px" height="500px"></canvas> 
</div>

<hr>
<div>
 <p class="p1020"><b>Message: </b>{{msgline}} 
	&emsp;<button ng-click="msglineCLR()"><b>CLEAR</b></button>
</b></button></p>	
</div>

<!-- Footer ------------------------------------------------------------------->
<hr>
<div>
 <p class="p1020" style="text-align:center"><b><span ng-bind="ftrstr"></span></b></p>
</div>
<!-- bottom of page ----------------------------------------------------------->

<!-- Page must load completely before this script can run properly ------------>

</body>
</html>