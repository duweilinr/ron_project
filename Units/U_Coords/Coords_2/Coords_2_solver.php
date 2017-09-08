<?php
// File: Coords_2_solver.php	rev. 08/22/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$r=     $ivvallist[0];
$theta= $ivvallist[1];

// run the solution code
$thetar= $theta*M_PI/180;
$x=      $r*cos($thetar);
$y=      $r*sin($thetar);

// pack the results	
$avvallist[0]= $x;		// av11
$avvallist[1]= $y;		// av21
 
// return to caller
return $avvallist;
}
?>