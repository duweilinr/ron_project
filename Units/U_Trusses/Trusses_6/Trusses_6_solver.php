<?php
// File: Trusses_6_solver.php	rev. 08/05/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F= $ivvallist[0];
$L= $ivvallist[1];

// run the solution code
$FAx= $F;
$FAy= 2*$F;
$FBx= -2*$F;
$FBy= 2*$F;
	
$FAmag= sqrt($FAx*$FAx +$FAy*$FAy);
$FAdeg= atan2($FAy,$FAx)*180/M_PI;
	
$FBmag= sqrt($FBx*$FBx +$FBy*$FBy);
$FBdeg= atan2($FBy,$FBx)*180/M_PI;

$Nzero= 2;

$FADy= $FAy;
$FADx= $FADy;
$FAD=  sqrt($FADx*$FADx +$FADy*$FADy);
$FAC=  $FAx -$FADx;
$FCD=  -1*$F;



// pack the results	
$avvallist[0]= $FAmag;	// av11
$avvallist[1]= $FAdeg;	// av12
$avvallist[2]= $FBmag;	// av21
$avvallist[3]= $FBdeg;	// av22

$avvallist[4]= $Nzero;	// av31
$avvallist[5]= $FAC;	// av41
$avvallist[6]= $FAD;	// av51
$avvallist[7]= $FCD;	// av61

// return to caller
return $avvallist;
}
?>