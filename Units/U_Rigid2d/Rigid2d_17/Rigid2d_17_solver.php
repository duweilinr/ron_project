<?php
// File: Rigid2d_17_solver.php	rev. 07/12/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$WBC= $ivvallist[0];
$a=   $ivvallist[1];
$b=   $ivvallist[2];
$c=   $ivvallist[3];

// run the solution code
$WAB= 60*$a;
$WCD= 45*$c;
	
$FAx= 0;
$FBx= 0;
$FCx= 0;
$FDx= 0;
		
$FCy= $WCD/2;
$FBy= $WBC -$FCy;
$FDy= $WCD -$FCy;
$FAy= $WAB -$FBy;

$MA=  $a*$WAB/2 +$a*$FBy;

// pack the results	
$avvallist[0]= $FAx;
$avvallist[1]= $FAy;
$avvallist[2]= $MA;
$avvallist[3]= $FDx;
$avvallist[4]= $FDy;
$avvallist[5]= $FBx;
$avvallist[6]= $FBy;
$avvallist[7]= $FCx;
$avvallist[8]= $FCy;

// return to caller
return $avvallist;
}
?>