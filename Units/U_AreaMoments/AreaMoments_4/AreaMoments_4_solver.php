<?php
// File: AreaMoments_4_solver.php	rev. 08/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$t= $ivvallist[0];
$h= $ivvallist[1];
$b= $ivvallist[2];

// run the solution code
$I1x= (1/6)*$b*$t*$t*$t;
$I1y= (2/3)*$t*$b*$b*$b;
$I2x= (1/6)*$t*$h*$h*$h;
$I2y= (2/3)*$h*$t*$t*$t;
$d1s= ($h+$t)*($h+$t)/4;
$Ixx= 2*($I1x +2*$b*$t*$d1s) +$I2x;
$Iyy= $I2y +2*$I1y;	

// pack the results	
$avvallist[0]= $Ixx;	// av11
$avvallist[1]= $Iyy;	// av21

// return to caller
return $avvallist;
}
?>