<?php
// File: Centroids_7_solver.php	rev. 08/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$Wt= $ivvallist[0];
$w=  $ivvallist[1];
$h=  $ivvallist[2];

// run the solution code
$d=  sqrt($w*$w +$h*$h);

$C1x= $w;
$C1y= -1-$d/2;	
$L1x= $w;
$L1y= -1-$d;

$C2x= 0;
$C2y= -1-$d/2;		
$L2x= 0;
$L2y= -1-$d;	

// pack the results	
$avvallist[0]= $C1x;	// av11
$avvallist[1]= $C1y;	// av12
$avvallist[2]= $L1x;	// av21
$avvallist[3]= $L1y;	// av22

$avvallist[4]= $C2x;	// av31
$avvallist[5]= $C2y;	// av32
$avvallist[6]= $L2x;	// av41
$avvallist[7]= $L2y;	// av42

// return to caller
return $avvallist;
}
?>