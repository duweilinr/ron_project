<?php
// File: Coords_5_solver.php	rev. 08/23/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$x= $ivvallist[0];
$y= $ivvallist[1];
$z= $ivvallist[2];

// run the solution code
$r1=     sqrt($x*$x+$y*$y);
$theta2= atan2($y,$x)*180/M_PI;
$z3=     $z;

// pack the results	
$avvallist[0]= $r1;		// av11
$avvallist[1]= $theta2;	// av21
$avvallist[2]= $z3;		// av31
 
// return to caller
return $avvallist;
}
?>