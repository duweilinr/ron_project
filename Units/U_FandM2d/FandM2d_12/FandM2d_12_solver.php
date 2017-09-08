<?php
// File: FandM2d_12_solver.php	rev. 07/10/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$p=  $ivvallist[0];
$h1= $ivvallist[1];
$h2= $ivvallist[2];

// run the solution code
$rho= 1000;			// kg/m^3
$g=   9.81;			// m/s^2

$FRx= $h1*$rho*$g/2000;		// kN
$FRy= $h2*$p;
$MRA= $FRx*$h1/3 +$FRy*$h2/2;

// pack the results	
$avvallist[0]= $FRx;
$avvallist[1]= $FRy;
$avvallist[2]= $MRA;

// return to caller
return $avvallist;
}
?>