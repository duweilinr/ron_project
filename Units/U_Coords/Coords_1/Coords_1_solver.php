<?php
// File: Coords_1_solver.php	rev. 08/22/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$x= $ivvallist[0];
$y= $ivvallist[1];

// run the solution code
$r1=     sqrt($x*$x+$y*$y);
$theta2= atan2($y,$x)*180/M_PI;

// pack the results	
$avvallist[0]= $r1;		// av11
$avvallist[1]= $theta2;	// av21
 
// return to caller
return $avvallist;
}
?>