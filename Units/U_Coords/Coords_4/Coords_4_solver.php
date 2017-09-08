<?php
// File: Coords_4_solver.php	rev. 08/23/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$r=     $ivvallist[0];
$theta= $ivvallist[1];
$phi=   $ivvallist[2];

// run the solution code
$d=  $r*sin($phi*M_PI/180);
$x1= $d*cos($theta*M_PI/180);
$y2= $d*sin($theta*M_PI/180);
$z3= $r*cos($phi*M_PI/180);

// pack the results	
$avvallist[0]= $x1;		// av11
$avvallist[1]= $y2;		// av21
$avvallist[2]= $z3;		// av31
 
// return to caller
return $avvallist;
}
?>