<?php
// File: Vecs2d_7_solver.php	rev. 07/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1mag= $ivvallist[0];
$F1deg= $ivvallist[1];
$F2mag= $ivvallist[2];

// run the solution code
$FRmag= $F2mag-$F1mag;
$FRdeg= $F1deg+180;

// pack the results	
$avvallist[0]= $FRmag;	// av1
$avvallist[1]= $FRdeg;	// av2
 
// return to caller
return $avvallist;
}
?>