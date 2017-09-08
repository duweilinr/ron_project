<?php
// File: Coords_6_solver.php	rev. 08/23/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$r=     $ivvallist[0];
$theta= $ivvallist[1];
$z=     $ivvallist[2];

// run the solution code
$x1= $r*cos($theta*M_PI/180);
$y2= $r*sin($theta*M_PI/180);
$z3= $z;

// pack the results	
$avvallist[0]= $x1;		// av11
$avvallist[1]= $y2;		// av21
$avvallist[2]= $z3;		// av31
 
// return to caller
return $avvallist;
}
?>