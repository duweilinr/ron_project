<?php
// File: Frames_1_solver.php	rev. 06/16/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1= $ivvallist[0];
$F2= $ivvallist[1];
$d=  $ivvallist[2];
$e=  $ivvallist[3];
$h=  $ivvallist[4];

// run the solution code
$RAx= 0;
$RBx= -1*$F1;
$RBy= $d*$F2/($d+$e);
$RAy= $F2 -$RBy;
$FDx= -1*$F1;
$FDy= -1*$RAy;
$MD=  -$h*$F1/2 +$d*$RAy;

// pack the results	
$avvallist[0]= $RAx;	// av11
$avvallist[1]= $RAy;		// av12
$avvallist[2]= $RBx;	// av21
$avvallist[3]= $RBy;	// av22
$avvallist[4]= $FDx;	// av31
$avvallist[5]= $FDy;	// av32
$avvallist[6]= $MD;		// av41

// return to caller
return $avvallist;
}
?>