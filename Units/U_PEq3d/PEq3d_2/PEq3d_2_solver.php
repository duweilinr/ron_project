<?php
// File: FandM3d_2_solver.php	rev. 07/11/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1x=   $ivvallist[0];
$F2mag= $ivvallist[1];
$a21=   $ivvallist[2];
$a22=   $ivvallist[3];
$F3x=   $ivvallist[4];
$F3y=   $ivvallist[5];
$F3z=   $ivvallist[6];

// run the solution code
$F2xy= $F2mag*cos($a22*M_PI/180);
$FEx= -1*$F1x +$F2xy*sin($a21*M_PI/180) -1*$F3x;
$FEy= -1*$F2xy*cos($a21*M_PI/180) -1*$F3y;
$FEz= -1*$F2mag*sin($a21*M_PI/180) -1*$F3z;

// pack the results	
$avvallist[0]= $FEx;
$avvallist[1]= $FEy;
$avvallist[2]= $FEz;
 
// return to caller
return $avvallist;
}
?>