<?php
// File: Rigid2d_12_solver.php	rev. 07/12/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$w=  $ivvallist[0];
$h=  $ivvallist[1];
$Wb= $ivvallist[2];

// run the solution code
$F1=    2*$w*3*$h;
$F2=    $w*$h;
$FRmag= $F1 +$F2;	
$FRdeg= -90;

$xR=   ($F1*3*$h/2 +$F2*(3*$h+$h/2))/$FRmag;
$FCmag= $FRmag +$Wb;
$FCdeg= 90;
$MC=    (4*$h-$xR)*$FRmag +$Wb*2*$h;

// pack the results	
$avvallist[0]= $FCmag;
$avvallist[1]= $FCdeg;
$avvallist[2]= $MC;

// return to caller
return $avvallist;
}
?>