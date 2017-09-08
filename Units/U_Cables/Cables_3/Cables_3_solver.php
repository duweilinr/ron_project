<?php
// File: Cables_3_solver.php	rev. 07/13/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$M=  $ivvallist[0];

// run the solution code
$g=  9.81;
$W=  $M*$g;
$T=  $W/(2/sqrt(13)+4/5);
$m=  $T/$g;
$F1= $T*(3/sqrt(13)+3/5);

// pack the results	
$avvallist[0]= $F1;	// av1
$avvallist[1]= $m;	// av2

// return to caller
return $avvallist;
}
?>