<?php
// File: Coords_8_solver.php	rev. 08/24/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$r=     $ivvallist[0];
$theta= $ivvallist[1];

// run the solution code
$thetar= $theta*M_PI/180;
$Pi=      $r*cos($thetar);
$Pj=      $r*sin($thetar);

// pack the results	
$avvallist[0]= $Pi;		// av11
$avvallist[1]= $Pj;		// av12
 
// return to caller
return $avvallist;
}
?>