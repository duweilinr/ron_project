<?php
// File: FandM2d_3_solver.php	rev. 07/08/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1= $ivvallist[0];
$a1= $ivvallist[1];
$F2= $ivvallist[2];
$a2= $ivvallist[3];

// run the solution code
$FAx= 0;
$FAy= 0;

$a1r= $a1*M_PI/180;
$a2r= $a2*M_PI/180;	
$MA=  -4*$F1*sin($a1r) +2*$F2*cos($a2r);		

// pack the results	
$avvallist[0]= $FAx;
$avvallist[1]= $FAy;
$avvallist[2]= $MA;
 
// return to caller
return $avvallist;
}
?>