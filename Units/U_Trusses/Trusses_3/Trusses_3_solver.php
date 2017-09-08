<?php
// File: Trusses_3_solver.php	rev. 08/05/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1= $ivvallist[0];
$F2= $ivvallist[1];
$F3= $ivvallist[2];
$h=  $ivvallist[3];
$d=  $ivvallist[4];

// run the solution code
$FAx= 0;
$FAy= 2*$F1 -$F3 -$h*$F2/6;
$FBx= -1*$F2;
$FBy= -1*$F1 +2*$F3 +$h*$F2/6;
$F2L= 6*(2*$F1 -$F3)/$h;

$thetar= atan2($h,6);
$costh=  cos($thetar);
$sinth=  sin($thetar);
$FAC=    -1*$FAy;
$FAD=    0;
$FBD=    $FBx/$costh;
$FBE=    -1*$FBy -$FBD*$sinth;
$FDC=    $FBD;
$FDE=    0;

// pack the results	
$avvallist[0]= $FAx;	// av11
$avvallist[1]= $FAy;	// av12
$avvallist[2]= $FBx;	// av21
$avvallist[3]= $FBy;	// av22

$avvallist[4]= $FAC;	// av31
$avvallist[5]= $FAD;	// av41
$avvallist[6]= $FBD;	// av51
$avvallist[7]= $FBE;	// av61
$avvallist[8]= $FDC;	// av71
$avvallist[9]= $FDE;	// av81
$avvallist[10]=$F2L;	// av91

// return to caller
return $avvallist;
}
?>