<?php
// File: Centroids_2_solver.php	rev. 08/06/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$a= $ivvallist[0];
$h= $ivvallist[1];

// run the solution code
$cdx= 0;
$cdy= (0.75*$a*$a -0.25*$h*$h)/(2*$a +$h);
$cmx= 0;
$cmy= (0.75*$a*$a*0.025 -0.25*$h*$h*0.02)/(2*$a*0.025 +$h*0.02);

// pack the results	
$avvallist[0]= $cdx;	// av11
$avvallist[1]= $cdy;	// av12
$avvallist[2]= $cmx;	// av21
$avvallist[3]= $cmy;	// av22

// return to caller
return $avvallist;
}
?>