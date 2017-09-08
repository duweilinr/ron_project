<?php
// File: Trusses_2_solver.php	rev. 08/04/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1= $ivvallist[0];
$F2= $ivvallist[1];
$h=  $ivvallist[2];
$d=  $ivvallist[3];

// run the solution code
$F2c=    $F2*sin(45*M_PI/180);
$thetar= atan2($h,$d);
$sinth=  sin($thetar);
$costh=  cos($thetar);
	
$FAx= 0;
$FAy= $F2c +2*$F1;
$FEx= 0;
$FEy= $F2c +2*$F1;
	
$FAB= (1/$sinth)*($F1 -$FAy);
$FAF= -1*$FAB*$costh;
$FBC= -1*$F1/(2*$sinth);
$FBF= -1*$F2c/$sinth +$FBC -$FAB;
$FBD= $costh*($FAB -$FBF -$FBC) -$F2c;

// pack the results	
$avvallist[0]= $FAx;	// av11
$avvallist[1]= $FAy;	// av12
$avvallist[2]= $FEx;	// av21
$avvallist[3]= $FEy;	// av22

$avvallist[4]= $FAB;	// av31
$avvallist[5]= $FAF;	// av41
$avvallist[6]= $FBC;	// av51
$avvallist[7]= $FBD;	// av61
$avvallist[8]= $FBF;	// av71

// return to caller
return $avvallist;
}
?>