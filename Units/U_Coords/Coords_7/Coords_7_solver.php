<?php
// File: Coords_1_solver.php	rev. 08/24/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$x= $ivvallist[0];
$y= $ivvallist[1];

// run the solution code
$Pi= $x;
$Pj= $y;

// pack the results	
$avvallist[0]= $Pi;		// av11
$avvallist[1]= $Pj;		// av12
 
// return to caller
return $avvallist;
}
?>