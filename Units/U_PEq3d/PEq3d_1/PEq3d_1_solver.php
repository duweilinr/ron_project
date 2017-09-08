<?php
// File: FandM3d_1_solver.php	rev. 06/16/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W=   $ivvallist[0];
$F1x= $ivvallist[1];
$F1y= $ivvallist[2];
$F1z= $ivvallist[3];

// run the solution code
$F2x= -1*$F1x;
$F2y= -1*$F1y;
$F2z= $W;

// pack the results	
$avvallist[0]= $F2x;
$avvallist[1]= $F2y;
$avvallist[2]= $F2z;
 
// return to caller
return $avvallist;
}
?>