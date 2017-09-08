<?php
// File: FandM2d_1_solver.php	rev. 06/15/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1= $ivvallist[0];
$a1= $ivvallist[1];
$m=  $ivvallist[2];

// run the solution code
$W=     $m*9.81;
$F1x=   $F1*cos($a1*M_PI/180);
$FAx=   $F1x;
$F1y=   $F1*sin($a1*M_PI/180);
$FAy=   $F1y -$W;
$FAmag= sqrt($FAx*$FAx+$FAy*$FAy);	
$FAdeg= atan2($FAy,$FAx)*180/M_PI;
	
$Dx= 1;
$Dy= 2;	
$MA=   -0.75*$W +$Dx*$F1y -$Dy*$F1x;		// ???

// pack the results	
$avvallist[0]= $FAmag;
$avvallist[1]= $FAdeg;
$avvallist[2]= $MA;
 
// return to caller
return $avvallist;
}
?>