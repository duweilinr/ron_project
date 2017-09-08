<?php
// File: Frames_8_solver.php	rev. 08/03/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F= $ivvallist[0];
$M= $ivvallist[1];
$L= $ivvallist[2];
$d= $ivvallist[3];

// run the solution code
$ans1= "n";	// overconstrained?
	
$h=     sqrt($L*$L-$d*$d);
$sinth= $h/$L;
$costh= $d/$L;
$Fx=    $F*$sinth;
$Fy=    $F*$costh;
	
$FCy= (-1/2*$d)*($M +$h*$Fx/2 +$d*$Fy/2);
$FCx= (-1/$h)*($M +$d*$FCy);	
$FAx= $FCx;
$FAy= -1*$FCy;	
$FBx= $Fx -$FCx;
$FBy= $Fy +$FCy;

// pack the results	
$avvallist[0]= $ans1;	// av11
$avvallist[1]= $FAx;	// av21
$avvallist[2]= $FAy;	// av22
$avvallist[3]= $FBx;	// av31
$avvallist[4]= $FBy;	// av32
$avvallist[5]= $FCx;	// av41
$avvallist[6]= $FCy;	// av42

// return to caller
return $avvallist;
}
?>