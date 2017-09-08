<?php
// File: Rigid2d_6_solver.php	rev. 07/11/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$FV= $ivvallist[0];
$d=  $ivvallist[1];
$FH= $ivvallist[2];
$M=  $ivvallist[3];

// run the solution code
$FRi= 0;
$FRj= -1*$FH;
$FRk= -6*$FV;

$MRi= $M -$d*21*$FV;
$MRj= 0;
$MRk= 0;

// pack the results	
$avvallist[0]= $FRi;
$avvallist[1]= $FRj;
$avvallist[2]= $FRk;

$avvallist[3]= $MRi;
$avvallist[4]= $MRj;
$avvallist[5]= $MRk;

// return to caller
return $avvallist;
}
?>