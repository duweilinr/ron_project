<?php
// File: FandM2d_6_solver.php	rev. 07/09/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$w= $ivvallist[0];
$h= $ivvallist[1];

// run the solution code
$F1=    2*$w*3*$h;
$F2=    $w*$h;
$FRmag= $F1+$F2;
$FRdeg= -90;
$xR=    ($F1*3*$h/2 +$F2*(3*$h+$h/2))/$FRmag;

// pack the results	
$avvallist[0]= $FRmag;
$avvallist[1]= $FRdeg;
$avvallist[2]= $xR;
 
// return to caller
return $avvallist;
}
?>