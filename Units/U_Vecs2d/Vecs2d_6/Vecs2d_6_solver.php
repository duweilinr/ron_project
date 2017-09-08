<?php
// File: Vecs2d_6_solver.php	rev. 07/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1m= $ivvallist[0];
$F1d= $ivvallist[1];
$F2m= $ivvallist[2];
$F2d= $ivvallist[3];

// run the solution code
$F1r=   M_PI*$F1d/180;
$F2r=   M_PI*$F2d/180;
$FS1x=  $F1m*cos($F1r)+$F2m*cos($F2r);
$FS1y=  $F1m*sin($F1r)+$F2m*sin($F2r);
$FRmag= sqrt($FS1x*$FS1x+$FS1y*$FS1y);
$FRrad= atan2($FS1y,$FS1x);
$FRdeg= 180*$FRrad/M_PI;

// pack the results	
$avvallist[0]= $FRmag;	// av1
$avvallist[1]= $FRdeg;	// av2
 
// return to caller
return $avvallist;
}
?>