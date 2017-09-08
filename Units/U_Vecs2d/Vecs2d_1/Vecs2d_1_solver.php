<?php
// File: Vecs2d_1_solver.php	rev. 06/15/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$Fx= $ivvallist[0];
$Fy= $ivvallist[1];

// run the solution code
$Fmag= sqrt($Fx*$Fx+$Fy*$Fy);
$Fdeg= atan2($Fy,$Fx)*180/M_PI;

// pack the results	
$avvallist[0]= $Fmag;	// av1
$avvallist[1]= $Fdeg;	// av2
 
// return to caller
return $avvallist;
}
?>