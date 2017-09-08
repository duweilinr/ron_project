<?php
// File: Frames_3_solver.php	rev. 08/02/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W1= $ivvallist[0];
$W2= $ivvallist[1];
$c=  $ivvallist[2];
$d=  $ivvallist[3];

// run the solution code
$L=   24;
$h=   12;
$RAx= 0;
$RBx= 0;
$RBy= ($c*$W1 +$d*$W2)/$L;
$RAy= $W1 +$W2 -1*$RBy;
	
$FEx= 0;
$FEy= -1*$RAy;
$ME=  1*$RAy;
	
$FFx= 0;
$FFy= $W1 -1*$RAy;
$MF=  -12*$FFy +$c*$W1;

// pack the results	
$avvallist[0]= $RAx;	// av11
$avvallist[1]= $RAy;	// av12
$avvallist[2]= $RBx;	// av21
$avvallist[3]= $RBy;	// av22
$avvallist[4]= $FEx;	// av31
$avvallist[5]= $FEy;	// av32
$avvallist[6]= $ME;		// av41
$avvallist[7]= $FFx;	// av51
$avvallist[8]= $FFy;	// av52
$avvallist[9]= $MF;		// av61

// return to caller
return $avvallist;
}
?>