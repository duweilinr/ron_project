<?php
// File: FandM2d_4_solver.php	rev. 07/08/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$WA= $ivvallist[0];
$WB= $ivvallist[1];
$WC= $ivvallist[2];

// run the solution code
$FRmag= 1*$WA +1*$WB +1*$WC;
$FRdeg= -90;
$MR=    6*$WA +16*$WB +26*$WC;
$xFR=   $MR/$FRmag;

// pack the results	
$avvallist[0]= $FRmag;
$avvallist[1]= $FRdeg;
$avvallist[2]= $MR;
$avvallist[3]= $xFR;
 
// return to caller
return $avvallist;
}
?>