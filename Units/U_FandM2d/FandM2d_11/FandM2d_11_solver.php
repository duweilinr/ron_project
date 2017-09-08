<?php
// File: FandM2d_10_solver.php	rev. 07/10/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$h= $ivvallist[0];

// run the solution code
$rho= 1000;			// kg/m^3
$g=   9.81;			// m/s^2

// find solution and save it
$FPmag= 0.001*$rho*$g*$h*$h/2;	// kN
$FPdeg= 0;
$yP=    $h/3;	

// pack the results	
$avvallist[0]= $FPmag;
$avvallist[1]= $FPdeg;
$avvallist[2]= $yP;

// return to caller
return $avvallist;
}
?>