<?php
// File: AreaMoments_7_solver.php	rev. 08/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$a= $ivvallist[0];

// run the solution code
$Ixx= 3*$a/10;
$Iyy= $a*$a*$a/6;
$Ixy= 3*$a*$a/16;

// pack the results	
$avvallist[0]= $Ixx;	// av11
$avvallist[1]= $Iyy;	// av21
$avvallist[2]= $Ixy;	// av31

// return to caller
return $avvallist;
}
?>