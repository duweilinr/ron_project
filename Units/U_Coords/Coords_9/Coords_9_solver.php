<?php
// File: Coords_9_solver.php	rev. 08/24/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$x= $ivvallist[0];
$y= $ivvallist[1];
$z= $ivvallist[2];

// run the solution code
$Pi= $x;
$Pj= $y;
$Pk= $z;

// pack the results	
$avvallist[0]= $Pi;		// av11
$avvallist[1]= $Pj;		// av12
$avvallist[2]= $Pk;		// av13
 
// return to caller
return $avvallist;
}
?>