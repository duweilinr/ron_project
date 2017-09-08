<?php
// File: Trusses_4_solver.php	rev. 08/05/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$P= $ivvallist[0];

// run the solution code
$FAy= 4*$P;
$FAx= 0;
$FGy= $FAy;
	
$FLK=   4*$P;
$FBK=   (5/(2*sqrt(2)))*$P;
$FBC=   (-7/4)*sqrt(10)*$P;

// pack the results	
$avvallist[0]= $FAx;	// av11
$avvallist[1]= $FAy;	// av12
$avvallist[2]= $FGy;	// av21

$avvallist[3]= $FLK;	// av31
$avvallist[4]= $FBC;	// av41
$avvallist[5]= $FBK;	// av51

// return to caller
return $avvallist;
}
?>