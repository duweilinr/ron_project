<?php
// File: AreaMoments_8_solver.php	rev. 08/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$w= $ivvallist[0];
$h= $ivvallist[1];

// run the solution code
$Ixx= $h*$h*$h*$w/20;
$Iyy= $h*$w*$w*$w/12;

// pack the results	
$avvallist[0]= $Ixx;	// av11
$avvallist[1]= $Iyy;	// av21

// return to caller
return $avvallist;
}
?>