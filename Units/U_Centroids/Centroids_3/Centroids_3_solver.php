<?php
// File: Centroids_3_solver.php	rev. 08/06/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$w= $ivvallist[0];
$h= $ivvallist[1];
$d= $ivvallist[2];
$t= $ivvallist[3];

// run the solution code
$A1= $w*$t;
$A2= ($h-$t)*$d;
$Cx= ($A1*$w/2 +$A2*$d/2)/($A1+$A2);
$Cy= ($A1*$t/2 +$A2*($h+$t)/2)/($A1+$A2);

// pack the results	
$avvallist[0]= $Cx;	// av11
$avvallist[1]= $Cy;	// av12

// return to caller
return $avvallist;
}
?>