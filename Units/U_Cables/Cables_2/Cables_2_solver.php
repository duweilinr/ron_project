<?php
// File: Cables_2_solver.php	rev. 07/13/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$M=  $ivvallist[0];
$xf= $ivvallist[1];

// run the solution code
$W=   $M*9.81;
$K=   500;
$s45= 1/sqrt(2);
$c45= $s45;
$TA=  0.8*$W/(0.8*$s45+0.6*$c45);
$TB=  (5/4)*$c45*$TA;
$dC=  6+$xf+$W/$K;

// pack the results	
$avvallist[0]= $TA;	// av1
$avvallist[1]= $TB;	// av2
$avvallist[2]= $dC;	// av3

// return to caller
return $avvallist;
}
?>