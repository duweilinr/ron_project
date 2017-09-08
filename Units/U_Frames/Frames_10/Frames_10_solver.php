<?php
// File: Frames_10_solver.php	rev. 08/03/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W=  $ivvallist[0];
$CW= $ivvallist[1];
$b=  $ivvallist[2];
$f=  $ivvallist[3];
$d=  $ivvallist[4];

// run the solution code
$c=   30;
	
$FAx= 0;
$FAy= $CW +$W;
$MA=  ($f+$d)*$W -$c*$CW;
	
$w=   sqrt($b*$b+$f*$f);
$sinth= $b/$w;
$costh= $f/$w;
$FBF= (($f+$d)*$W-$c*$CW)/($f*$sinth);
$FEx= $FBF*$costh;
$FEy= $CW +$W -$FBF*$sinth;

$FA0x= 0;
$FA0y= $W;
$MA0=  ($f+$d)*$W;
	
$FBF0= ($f+$d)*$W/($f*$sinth);
$FE0x= $FBF*$costh;
$FE0y= $W -$FBF*$sinth;

// pack the results	
$avvallist[0]= $FAx;	// av11
$avvallist[1]= $FAy;	// av12
$avvallist[2]= $MA; 	// av21
$avvallist[3]= $FEx;	// av31
$avvallist[4]= $FEy;	// av32
$avvallist[5]= $FBF;	// av41
$avvallist[6]= $FA0x;	// av51
$avvallist[7]= $FA0y;	// av52
$avvallist[8]= $MA0;	// av61
$avvallist[9]= $FE0x;	// av71
$avvallist[10]= $FE0y;	// av72
$avvallist[11]= $FBF0;	// av81

// return to caller
return $avvallist;
}
?>