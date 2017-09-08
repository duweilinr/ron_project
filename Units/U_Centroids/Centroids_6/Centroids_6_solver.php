<?php
// File: Centroids_6_solver.php	rev. 08/06/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$c= $ivvallist[0];
$d= $ivvallist[1];
$e= $ivvallist[2];
$f= $ivvallist[3];

// run the solution code
$w=  600/(4*6);
$W1= $w*8*4; 
$W2= $w*$c*$d;
$W3= $w*$e*$f;
$Wp= $W1 +$W2 +$W3;
	
$xcW= 4*$W1 +(8-$c/2)*$W2 +(8-$e/2)*$W3;
$xc=  $xcW/$Wp;
$ycW= 2*$W1 +($d/2)*$W2 +($f/2)*$W3;
$yc=  $ycW/$Wp;

// pack the results	
$avvallist[0]= $Wp;	// av11
$avvallist[1]= $xc;	// av21
$avvallist[2]= $yc;	// av22

// return to caller
return $avvallist;
}
?>