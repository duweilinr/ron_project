<?php
// File: Trusses_1_solver.php	rev. 06/17/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$FB= $ivvallist[0];
$FDx= $ivvallist[1];
$FDy= $ivvallist[2];
$d= $ivvallist[3];

// run the solution code
$REx= 0;
$REy= $FB/4 +3*$FDy/4;
$RAx= -1*$FDy;
$RAy= 3*$FB/4 +$FDy/4;	

$sin60= sin(60*M_PI/180);	// members (+=compr, -=tension)
$cos60= cos(60*M_PI/180);
$FAB= $RAy/$sin60;
$FAC= -1*$RAx -1*$FAB*$cos60;
$FBC= (1/$sin60)*(-1*$FB -1*$FAB*$sin60);
$FBD= $FAB*$cos60 -1*$FBC*$cos60;
$FDE= $REy/$sin60;
$FCE= $REx -1*$FDE*$cos60;
$FCD= (1/$sin60)*(-1*$FDy -1*$FDE*$sin60);

// pack the results	
$avvallist[0]= $RAx;	// av11
$avvallist[1]= $RAy;	// av12
$avvallist[2]= $REx;	// av21
$avvallist[3]= $REy;	// av22

$avvallist[4]= $FAB;	// av31
$avvallist[5]= $FAC;	// av41
$avvallist[6]= $FBC;	// av51
$avvallist[7]= $FBD;	// av61
$avvallist[8]= $FCD;	// av71
$avvallist[9]= $FCE;	// av81
$avvallist[10]= $FDE;	// av91

// return to caller
return $avvallist;
}
?>