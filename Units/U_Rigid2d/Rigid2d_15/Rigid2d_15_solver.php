<?php
// File: Rigid2d_15_solver.php	rev. 07/12/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W= $ivvallist[0];
$F= $ivvallist[1];
$d= $ivvallist[2];
$h= $ivvallist[3];

// run the solution code
$FAx= 0;
$FBx= -$F;	
$FAy= $W/2 -$F*$h/(2*$d);
$FBy= $W -$FAy;
	
$FAmag= sqrt($FAy*$FAy);
$FAdeg= 90;
	
$FBmag= sqrt($FBx*$FBx+$FBy*$FBy);
$FBdeg= atan2($FBy,$FBx)*180/M_PI;

// pack the results	
$avvallist[0]= $FAmag;
$avvallist[1]= $FAdeg;
$avvallist[2]= $FBmag;
$avvallist[3]= $FBdeg;

// return to caller
return $avvallist;
}
?>