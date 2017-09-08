<?php
// File: Rigid2d_10_solver.php	rev. 07/12/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$w1= $ivvallist[0];
$w2= $ivvallist[1];
$LB= $ivvallist[2];
$LC= $ivvallist[3];
$L=  $ivvallist[4];

// run the solution code
$F1= $w1*$LB/2;
$F2= $w1*($LC-$LB);
$F3= $w2*($L-$LC)/2;
$FR= $F1 +$F2 +$F3;

$d1= 2*$LB/3;
$d2= $LB +($LC-$LB)/2;
$d3= $LC +2*($L-$LC)/3;
$xR= ($F1*$d1 +$F2*$d2 +$F3*$d3)/$FR;

$FDmag= $xR*$FR/$L;
$FDdeg= 90;	
$FAmag= $FR -$FDmag;
$FAdeg= 90;

// pack the results	
$avvallist[0]= $FAmag;
$avvallist[1]= $FAdeg;
$avvallist[2]= $FDmag;
$avvallist[3]= $FDdeg;

// return to caller
return $avvallist;
}
?>