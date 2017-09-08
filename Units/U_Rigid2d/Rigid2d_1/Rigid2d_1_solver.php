<?php
// File: Rigid2d_1_solver.php	rev. 06/16/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$m1= $ivvallist[0];
$m2= $ivvallist[1];
$m3= $ivvallist[2];
$m4= $ivvallist[3];

// run the solution code
$FRmag= 9.81*($m1+$m2+$m3+$m4);
$FRdeg= 90;
$MR=    9.81*(6*$m1 +4*$m2 -4*$m3 -6*$m4);

// pack the results	
$avvallist[0]= $FRmag;	// av11
$avvallist[1]= $FRdeg;	// av12
$avvallist[2]= $MR;		// av21

// return to caller
return $avvallist;
}
?>