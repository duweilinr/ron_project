<?php
// File: Frames_4_solver.php	rev. 08/02/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W= $ivvallist[0];
$b= $ivvallist[1];
$c= $ivvallist[2];
$d= $ivvallist[3];

// run the solution code
$w=      4;		// fixed length of BE
$thetar= atan2(($c-$b),$w);
$sinth=  sin($thetar);
$costh=  cos($thetar);
$RAx=    0;
$RAy=    $W;
$MA=     -1*$d*$W;
	
$FCE=    $d*$W/(3.5*$sinth);
$FBx=    -1*$FCE*$costh;
$FBy=    $W -$FCE*$sinth;

// pack the results	
$avvallist[0]= $RAx;	// av11
$avvallist[1]= $RAy;	// av12
$avvallist[2]= $MA;		// av21
$avvallist[3]= $FCE;	// av31
$avvallist[4]= $FBx;	// av41
$avvallist[5]= $FBy;	// av42

// return to caller
return $avvallist;
}
?>