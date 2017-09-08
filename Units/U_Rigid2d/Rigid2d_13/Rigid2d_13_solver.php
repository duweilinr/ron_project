<?php
// File: Rigid2d_13_solver.php	rev. 07/12/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W= $ivvallist[0];
$w= $ivvallist[1];
$H= $ivvallist[2];

// run the solution code
$T=   50*($W +5*$w)/(21 +4*$H);
$FAx= -1*$T*(4/5);
$FAy= $W +10*$w -(3/5)*$T;
	
$FAmag= sqrt($FAx*$FAx +$FAy*$FAy);
$FAdeg= atan2($FAy,$FAx)*180/M_PI;

// pack the results	
$avvallist[0]= $T;
$avvallist[1]= $FAmag;
$avvallist[2]= $FAdeg;

// return to caller
return $avvallist;
}
?>