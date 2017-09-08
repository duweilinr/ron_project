<?php
// File: Rigid2d_9_solver.php	rev. 07/12/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$w1= $ivvallist[0];
$w2= $ivvallist[1];
$H=  $ivvallist[2];

// run the solution code
$LAB= $H*sqrt(4 +1);
$LBC= $H*sqrt(1 +1);	
$W1= $w1*$LAB;
$W2= $w2*$LBC;
	
$FCmag= (1/(3*$H))*( $W1*$LAB/2 +$W2*($LAB +$LBC/2));
$FAmag= $W1 +$W2 -$FCmag;
$FCdeg= 90;
$FAdeg= 90;

// pack the results	
$avvallist[0]= $FAmag;
$avvallist[1]= $FAdeg;
$avvallist[2]= $FCmag;
$avvallist[3]= $FCdeg;

// return to caller
return $avvallist;
}
?>