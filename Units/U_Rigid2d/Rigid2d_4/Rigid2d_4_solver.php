<?php
// File: Rigid2d_4_solver.php	rev. 07/11/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W=  $ivvallist[0];
$d1= $ivvallist[1];
$d2= $ivvallist[2];

// run the solution code
$FSmag= $W;
$FSdeg= 90;	
$MS=    $d1*$W;

// pack the results	
$avvallist[0]= $FSmag;
$avvallist[1]= $FSdeg;
$avvallist[2]= $MS;

// return to caller
return $avvallist;
}
?>