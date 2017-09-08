<?php
// File: Frames_5_solver.php	rev. 08/02/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F= $ivvallist[0];
$w= $ivvallist[1];
$h=  $ivvallist[2];

// run the solution code
$RAx= $F*$w/(2*$h);
$RAy= 0;
	
$RCx= -1*$RAx;
$RCy= 0;

$xf= 4;	// free length
$b=  30 -1*$w;
$k=  $RAx/($b-$xf);

// pack the results	
$avvallist[0]= $RAx;	// av11
$avvallist[1]= $RAy;	// av12
$avvallist[2]= $RCx;	// av21
$avvallist[3]= $RCy;	// av22
$avvallist[4]= $k;		// av31

// return to caller
return $avvallist;
}
?>