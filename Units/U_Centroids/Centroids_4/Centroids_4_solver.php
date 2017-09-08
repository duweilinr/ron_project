<?php
// File: Centroids_4_solver.php	rev. 08/06/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$d= $ivvallist[0];
$h= $ivvallist[1];

// run the solution code
$fac1= 3*$d/2 +$h;
$den=  $fac1 +$h*$h/4 +($d+$h/2)*$d/2;
$xnum= $fac1*$d*$d/2 +$h*$h*($h/6 +$d)/4 +$d*($d+$h/2)*(3*$d/2+$h/4)/2;
$ynum= $fac1*$fac1*$d/2 +$h*$h*($d/2+$h/3)/4 +$d*$d*($d+$h/2)/8;
	
$Cx=   $xnum/$den;
$Cy=   $ynum/$den;

// pack the results	
$avvallist[0]= $Cx;	// av11
$avvallist[1]= $Cy;	// av12

// return to caller
return $avvallist;
}
?>