
<!DOCTYPE html>
<html lang="en-US">
<head>
<meta http-equiv="Content-Type" content="text/html" charset="utf-8"/>
<meta http-equiv="Content-Script-Type" content="text/javascript">
<title>cvs_wkbd_img</title>

<?php
// get current problem id
$fileid=  "./curr_prob_id.txt";
$filestr= file_get_contents($fileid);
$data=    json_decode($filestr);
$unitid=  $data->unitid;
$prbnum=  $data->prbnum;
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
	var unit=       $scope.unitid;
	var pnum=       $scope.prbnum;
	var prbid=      unit.concat("_",pnum);
	$scope.imgfil=  "./Units/U_".concat(unit,"/dbs/cvs_",prbid,"_img.JPG"); 
	$scope.imgdataorig= {w:"",h:""};
	$scope.imgdata=     {w:"",h:""};	

	$scope.msgline= "";
	$scope.ftrstr=  "app4STATICS";

	//	Display the image
	$scope.imageObj=  new Image();
	// this functioncode runs after the rest of onloadInit code
	$scope.imageObj.onload = function() {
		var wi=    $scope.imageObj.width; 
		var hi=    $scope.imageObj.height;
		var xleft= (800-wi)/2;
		var ytop=  (500-hi)/2;
		var cid=   "layer1";
		var c=     document.getElementById(cid);
		var ctx=   c.getContext('2d');
		ctx.clearRect(0, 0, c.width, c.height);			
		ctx.drawImage($scope.imageObj,xleft,ytop,wi,hi);
		var imsg= "Original image data:&emsp;width= ".concat(wi,", height= ",hi);
		document.getElementById("imgmsg").innerHTML= imsg.bold();
		$scope.imgdataorig= { w:wi,h:hi };
		$scope.imgdata=     { w:wi,h:hi };
	}
	$scope.imageObj.src=  $scope.imgfil;
	$scope.imageObj.id=   "fig1";
}
    
// change image data ----------------------------------------------------------> 
$scope.doENTER= function() {
	var wi=    $scope.imgdata.w;
	var hi=    $scope.imgdata.h;
	var xleft= (800-wi)/2;
	var ytop=  (500-hi)/2;	
	
	var cid=   "layer1";
	var c=     document.getElementById(cid);
	var ctx=   c.getContext('2d');
	ctx.clearRect(0, 0, c.width, c.height);	
	ctx.drawImage($scope.imageObj,xleft,ytop,wi,hi);
	$scope.imgdata= { w:wi,h:hi };	
}

// reset image data -----------------------------------------------------------> 
$scope.doRESET= function() {
	$scope.imgdata= $scope.imgdataorig;
	
	var wi=    $scope.imgdata.w;
	var hi=    $scope.imgdata.h;
	var xleft= (800-wi)/2;
	var ytop=  (500-hi)/2;	

	var cid=   "layer1";
	var c=     document.getElementById(cid);
	var ctx=   c.getContext('2d');
	ctx.clearRect(0, 0, c.width, c.height);	
	ctx.drawImage($scope.imageObj,xleft,ytop,wi,hi);
}

// save image and thumb ------------------------------------------------------> 
$scope.doSAVE= function() {
	var cid=    "layer1";
	var c=      document.getElementById(cid);

	var wi=    $scope.imgdata.w;
	var hi=    $scope.imgdata.h;
	var wth=   240;
	var hth=   hi*wth/240;
	if ( hth > 150) {
		hth= 150;
		wth= wi*hth/150;
	}		
	//alert("wth,hth= "+wth+", "+hth);
	var thumb=    new Image();	
	thumb.width=  wth;
	thumb.height= hth;
	
	// save image and thumb
	$http({
		method: 'POST',
		data:	{ caller: "cvs_wkbd_img",
				  unitid: $scope.unitid,
				  prbnum: $scope.prbnum,
				  image:  $scope.imageObj,
				  thumb:  thumb },
		url:    './cvs_Saveimg.php'
	}).then(function successCallback(response) {
		var result= response.data; 	// returned object is 'result'
		var reply=	result.output;				alert("reply= "+reply);
	}, function errorCallback(response) {
		var status=     response.status;
		var statusText= response.statusText;			
		var errout=     "error= ".concat(status,", ",statusText);
		console.log(errout);	
	})
}
  
// message line ---------------------------------------------------------------> 
$scope.msglineCLR= function() {
	$scope.msgline= "";
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
<h2 class="h2style" style="text-align:center">Canvas workboard for images</h2>
<h3 class="h3style" style="text-align: center">Use this workboard to set figure display parameters for problem {{unitid}}_{{prbnum}}</h3>
</div>

<!-- Canvas ------------------------------------------------------------------->
<br>
<div id="cvswrap" style="width:804px; height:504px; border:solid gray 1px;">
 <canvas id="layer1" width="800px" height="500px"></canvas>
 <canvas id="layer2" width="800px" height="500px"></canvas> 
</div>

<div>
 <br>
 <p class="p1020"><b>Canvas is 800px wide by 500px high.</b></p>
 <p class="p1020" id="imgmsg"><b>(image msg)</b></p>
</div>

<!-- Change display parameters ------------------------------------------------>
<hr>
<div>
 <p class="p1020"><b>Change image
 &emsp;width&#160;<input type="text" size="2" ng-model="imgdata.w">
 &emsp;height&#160;<input type="text" size="2" ng-model="imgdata.h">
 &emsp;&emsp;<button ng-click="doENTER()"><b>ENTER</b></button>
 &emsp;&emsp;<button ng-click="doRESET()"><b>RESET</b></button>
 &emsp;&emsp;<button ng-click="doSAVE()">SAVE IMAGE</button></p> 
 </p>
</div>
 
<!-- message line ------------------------------------------------------------->
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