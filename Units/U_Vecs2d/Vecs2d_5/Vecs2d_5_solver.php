<?php
// File: Vecs2d_5_solver.php	rev. 07/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$d=  $ivvallist[0];
$a1= $ivvallist[1];

// run the solution code
$a1r= $a1*M_PI/180;
$xAB= 20 +$d*sin($a1r);
$yAB= 15 -$d*cos($a1r);
$dAB= sqrt($xAB*$xAB+$yAB*$yAB);

// pack the results	
$avvallist[0]= $xAB;	// av1
$avvallist[1]= $yAB;	// av2
$avvallist[2]= $dAB;	// av3
 
// return to caller
return $avvallist;
}
?>