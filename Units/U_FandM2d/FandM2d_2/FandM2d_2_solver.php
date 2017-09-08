<?php
// File: FandM2d_2_solver.php	rev. 07/08/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$m1=  $ivvallist[0];
$m2=  $ivvallist[1];
$aBD= $ivvallist[2];

// run the solution code
$W1=    $m1*9.81;
$W2=    $m2*9.81;
$FAmag= $W1 +$W2;
$FAdeg= -90;
	
$aBDr=  $aBD*M_PI/180;
$dBC=   0.75;
$dBD=   1.5;

$MA= $dBC*cos($aBDr)*$W1 +$dBD*cos($aBDr)*$W2;
$MA= -1*$MA;		// show "cw"

// pack the results	
$avvallist[0]= $FAmag;
$avvallist[1]= $FAdeg;
$avvallist[2]= $MA;
 
// return to caller
return $avvallist;
}
?>