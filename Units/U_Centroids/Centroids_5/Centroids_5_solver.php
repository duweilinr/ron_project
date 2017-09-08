<?php
// File: Centroids_5_solver.php	rev. 08/06/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$w= $ivvallist[0];
$a= $ivvallist[1];
$b= $ivvallist[2];
$c= $ivvallist[3];
$r= $ivvallist[4];

// run the solution code
$Wp= $w*$a*$b;
$Wc= $w*M_PI*$r*$r;
$Wt= $Wp -$Wc;
$xc= ($Wp*0 -$Wc*$c)/$Wt;
$yc= 0;

// pack the results	
$avvallist[0]= $Wt;	// av11
$avvallist[1]= $xc;	// av21
$avvallist[2]= $yc;	// av22

// return to caller
return $avvallist;
}
?>