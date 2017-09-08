<?php
// File: Vecs2d_4_solver.php	rev. 07/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$Fy=    $ivvallist[0];
$alpha= $ivvallist[1];

// run the solution code
$alphar= $alpha*M_PI/180;
$Fmag=   $Fy/sin($alphar);
$Fx=     -1*$Fmag*cos($alphar);

// pack the results	
$avvallist[0]= $Fmag;	// av1
$avvallist[1]= $Fx;		// av2
 
// return to caller
return $avvallist;
}
?>