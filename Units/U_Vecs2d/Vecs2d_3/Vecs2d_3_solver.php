<?php
// File: Vecs2d_1_solver.php	rev. 07/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$Fmag= $ivvallist[0];
$a=    $ivvallist[1];

// run the solution code
$rad= $a*M_PI/180;
$Fx=  $Fmag*cos($rad);
$Fy=  $Fmag*sin($rad);

// pack the results	
$avvallist[0]= $Fx;	// av1
$avvallist[1]= $Fy;	// av2
 
// return to caller
return $avvallist;
}
?>