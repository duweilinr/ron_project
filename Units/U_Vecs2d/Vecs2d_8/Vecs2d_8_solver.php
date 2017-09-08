<?php
// File: Vecs2d_8_solver.php	rev. 07/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1mag= $ivvallist[0];
$F1deg= $ivvallist[1];
$F2mag= $ivvallist[2];
$F2deg= $ivvallist[3];
$F3mag= $ivvallist[4];
$F3deg= $ivvallist[5];

// run the solution code
$F1rad= M_PI*$F1deg/180;
$F2rad= M_PI*$F2deg/180;
$F3rad= M_PI*$F3deg/180;
$FRx=   $F1mag*cos($F1rad)+$F2mag*cos($F2rad)+$F3mag*cos($F3rad);
$FRy=   $F1mag*sin($F1rad)+$F2mag*sin($F2rad)+$F3mag*sin($F3rad);
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