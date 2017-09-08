<?php
// File: Cables_4_solver.php	rev. 07/13/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$M=  $ivvallist[0];
$a=  $ivvallist[1];
$b=  $ivvallist[2];

// run the solution code
$g=     9.81;
$W=     $M*$g;
$F1mag= $W/2;
$FAmag= $F1mag;
$FAdeg= atan2($b,$a)*180/M_PI;

// pack the results	
$avvallist[0]= $F1mag;	// av1
$avvallist[1]= $FAmag;	// av21
$avvallist[2]= $FAdeg;	// av22

// return to caller
return $avvallist;
}
?>