<?php
// File: AreaMoments_5_solver.php	rev. 08/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$b= $ivvallist[0];
$h= $ivvallist[1];
$r= $ivvallist[2];

// run the solution code
$ac=  M_PI*$r*$r;
$Ixx= $b*$h*$h*$h/12 -4*$ac*($r*$r/4 +$h*$h/16);
$Iyy= $b*$b*$b*$h/12 -4*$ac*($r*$r/4 +$b*$b/16);
$JC=  $Ixx +$Iyy;

// pack the results	
$avvallist[0]= $Ixx;	// av11
$avvallist[1]= $Iyy;	// av21
$avvallist[2]= $JC;		// av31

// return to caller
return $avvallist;
}
?>