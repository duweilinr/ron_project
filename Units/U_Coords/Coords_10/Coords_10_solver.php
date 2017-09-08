<?php
// File: Coords_10_solver.php	rev. 08/24/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$r=     $ivvallist[0];
$theta= $ivvallist[1];
$phi=   $ivvallist[2];

// run the solution code
$d=  $r*sin($phi*M_PI/180);
$Pi= $d*cos($theta*M_PI/180);
$Pj= $d*sin($theta*M_PI/180);
$Pk= $r*cos($phi*M_PI/180);

// pack the results	
$avvallist[0]= $Pi;		// av11
$avvallist[1]= $Pj;		// av12
$avvallist[2]= $Pk;		// av13
 
// return to caller
return $avvallist;
}
?>