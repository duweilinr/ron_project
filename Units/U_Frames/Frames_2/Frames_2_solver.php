<?php
// File: Frames_1_solver.php	rev. 08/02/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1= $ivvallist[0];
$theta= $ivvallist[1];
$a=  $ivvallist[2];
$r=  $ivvallist[3];

// run the solution code
$sinth= sin($theta*M_PI/180);
$costh= cos($theta*M_PI/180);
$RAx=   $F1*$costh;
$RBx=   0;
$h=     $r -sqrt($r*$r -$a*$a);
$RBy=   ($h -$r*$costh)*$F1*$sinth/($a+$r);
$RAy=   $F1*$sinth -$RBy;
	
// internal forces and moments
$FCx= -1*$RAx;
$FCy= -1*$RAy;
$VC=  -1*$FCy;
$MC=  -1*$h*$RAx +$a*$RAy;
	
$theta2r= 0.5*$theta*M_PI/180;
$costh2=  cos($theta2r);	
$FEx= 0;
$FEy= -1*$RBy;
$VE=  -1*$RBy*cos(M_PI/2-$theta2r);
$ME=  $r*(1-$costh2)*$RBy;

// pack the results	
$avvallist[0]= $RAx;	// av11
$avvallist[1]= $RAy;	// av12
$avvallist[2]= $RBx;	// av21
$avvallist[3]= $RBy;	// av22
$avvallist[4]= $FCx;	// av31
$avvallist[5]= $FCy;	// av32
$avvallist[6]= $VC;		// av41
$avvallist[7]= $MC;		// av51
$avvallist[8]= $VE;		// av61
$avvallist[9]= $ME;		// av71

// return to caller
return $avvallist;
}
?>