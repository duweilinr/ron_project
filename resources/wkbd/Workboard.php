  <?php
session_start();
//	Workboard.php supports all problem types.
//	callers: Pframe1 (not yet) and Pframe2
//	rev. 08/24/2014  rcr

//echo print_r($_SESSION);	//	for debug dump to screen	

$psetid= $_SESSION['psetid'];	// use as page local vbl
$prid= 	 $_SESSION['prid'];

include "./headers/hd_".$psetid."_P".$prid.".php";	 // header data
include "./instances/in_".$psetid."_P".$prid.".php"; // instance & soln

include "./ippFcns_php/processansP.php";	// processes ansP from user
include "./ippFcns_php/slAppend.php";		// writes session data to log
include "./ippFcns_php/evalansWb.php";		// processes WorkBoard input
//include "./ippFcns_php/processBeambd.php";	// processes Beamboard input
//include "./ippFcns_php/evalansSVxMx.php";	// get Beamboard VxS,MxS answers

	
//	WorkBoard submit action --------------------------------------------------->
if (isset($_POST['sbmtreset'])) {
	$_SESSION['wbtxt']= "";
	$_SESSION['wbmsg']= "";
	}
else if (isset($_POST['sbmtwbeval'])) {
	$wbansin=$_POST['wbansin'];
	$_SESSION['wbtxt']= $wbansin;	// for display
	$testx= "no";
	$wbeval= evalansWb( $wbansin,$testx ); 	// puts result in $wbmsg and $wbeval
	}

else if (isset($_POST['sbmttestx'])) {
	$wbansin=$_POST['wbansin'];
	$_SESSION['wbtxt']= $wbansin;	// for display
	$testx= "yes";
	$wbeval= evalansWb( $wbansin,$testx ); 	// puts result in $wbmsg and $wbeval
	}
	
?>


<!DOCTYPE html>
<html>
<head>
<title>Workboard.php</title>

<link href="../style_ipp_3.css" rel="stylesheet" type="text/css">
<?php include "../nocache.php"; ?>

<?php
$psetid= $_SESSION['psetid'];
$prid= $_SESSION['prid'];
$cvgetfil= "./canvases/cv_".$psetid."_P".$prid.".js";
print "<script type='text/javascript' src='".$cvgetfil."'></script>";
?>

</head>


<body style="background-color:gray";>

<div style="position:relative; width:900px; border:1px solid green; padding:0px;">

<!-- problem statement -------------------------------------------------------->
<div class="divwrap" style="position:relative; width:880px; padding:5px; border:0px; background-color:mintgreen;" >
<h3 style="text-align:left;"><?php print $_SESSION['prtitle']; ?></h3>
<?php
$nprlines= $_SESSION['nprlines'];
for ($i=0; $i<$nprlines; $i++) {
	print '<p class="p5">'.$_SESSION['prline'][$i].'</p>';
}
?>
<hr>
</div>




<!-- Workboard ---------------------------------------------------------------->
<div class="divwrap" style="position:relative; width:886px; ">
<p class='p8' style='font-size:14px;'><b> WORKBOARD</b></p>

<form name="myWkBd" action="<?php echo $_SERVER['PHP_SELF']?>" autocomplete="off" method="post">

<p class="p2"><textarea name="wbansin" id="wbansin" class="fixed" rows="10" cols="104"><?php echo $_SESSION['wbtxt'];?></textarea></p>
<!-- Message line --->
<?php
	$wbmsg= $_SESSION['wbmsg'];
	print "<p class='p8' style='font-size:14px;'><b>Message: " . $wbmsg . "</b></p>";
?>
<!-- Controls section --->
<p class="p2">
 <input name="sbmtwbeval" type="submit" value="EVALUATE">&#160;&#160;&#160;
 <input name="sbmtreset" type="submit" value="RESET">&#160;&#160;&#160;
 <input name="sbmttestx" type="submit" value="TESTx">&#160;&#160;&#160;
 <a href="./STATHelpWkbd.html" target="_blank"><b> HELP </b></a>	
</p>
</form>
<hr>
</div>

<!-- Debug section --->
<div class="divwrap" style="position:relative; width:886px; ">
<?php
$dbgflag=$_SESSION['dbgflag'];
if ($dbgflag) {
	$wbdebug= $_SESSION['wbdebug'];
	print "<p class='p4' style='text-align:left'>".$wbdebug."</p>";
}
?>
</div>

</div>
</body>
</html>
