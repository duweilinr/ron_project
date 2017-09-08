<?php
// File: PEq2d_10_solver.php	rev. 06/15/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1m= $ivvallist[0];
$a1=  $ivvallist[1];
$F2m= $ivvallist[2];
$W=   $ivvallist[3];

// run the solution code
$a1r= M_PI*$a1/180;
		
$FRx= $F1m*cos($a1r) -$F2m*cos($a1r);
$FRy= $F1m*sin($a1r) +$F2m*sin($a1r) -$W;
		
$FRmag= sqrt($FRx*$FRx +$FRy*$FRy);
$FRdeg= atan2($FRy,$FRx)*180/M_PI;

// pack the results	
$avvallist[0]= $FRmag;	// av1
$avvallist[1]= $FRdeg;	// av2
 
// return to caller
return $avvallist;
}
?>