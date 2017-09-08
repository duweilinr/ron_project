<?php
// File: Vecs2d_9_solver.php	rev. 07/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1m= $ivvallist[0];
$F1d= $ivvallist[1];
$F2m= $ivvallist[2];
$F2d= $ivvallist[3];
$F3m= $ivvallist[4];
$F3d= $ivvallist[5];

// run the solution code
$F1r=   M_PI*$F1d/180;
$F2r=   M_PI*$F2d/180;
$F3r=   M_PI*$F3d/180;
$FRx=   $F1m*cos($F1r)+$F2m*cos($F2r)+$F3m*cos($F3r);
$FRy=   $F1m*sin($F1r)+$F2m*sin($F2r)+$F3m*sin($F3r);
$FRmag= sqrt($FRx*$FRx+$FRy*$FRy);
$FRrad= atan2($FRy,$FRx);
$FRdeg= 180*$FRrad/M_PI;

// pack the results	
$avvallist[0]= $FRmag;	// av1
$avvallist[1]= $FRdeg;	// av2
 
// return to caller
return $avvallist;
}
?>