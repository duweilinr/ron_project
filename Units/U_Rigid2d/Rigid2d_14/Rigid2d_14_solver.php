<?php
// File: Rigid2d_14_solver.php	rev. 07/12/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F= $ivvallist[0];
$w= $ivvallist[1];
$H= $ivvallist[2];
$L= $ivvallist[3];

// run the solution code
$Weq= $w*$L/2;
$RDx= 0;
$RDy= 7*$Weq/9 +$F*$H/(3*$L);
$RAx= -1*$F;
$RAy= 2*$Weq -1*$RDy;
	
$FAmag= sqrt($RAx*$RAx +$RAy*$RAy);
$FAdeg= atan2($RAy,$RAx)*180/M_PI;
$FDmag= sqrt($RDx*$RDx +$RDy*$RDy);
$FDdeg= 90;	

// pack the results	
$avvallist[0]= $FAmag;
$avvallist[1]= $FAdeg;
$avvallist[2]= $FDmag;
$avvallist[3]= $FDdeg;

// return to caller
return $avvallist;
}
?>