<?php
// File: Rigid3d_5_solver.php	rev. 07/12/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1= $ivvallist[0];
$F2= $ivvallist[1];
$M=  $ivvallist[2];
$H=  $ivvallist[3];

// run the solution code
$FOi= 0;
$FOj= 0;
$FOk= 0;
$d=   sqrt(2+.25*$H*$H);
$MOi= 1*$F1 -$F2*$H +$M/$d;
$MOj= 2*$F1 -$M/$d;
$MOk= -2*$F2 +0.5*$H*$M/$d;

// pack the results	
$avvallist[0]= $FOi;	// av11
$avvallist[1]= $FOj;	// av12
$avvallist[2]= $FOk;	// av13

$avvallist[3]= $MOi;	// av21
$avvallist[4]= $MOj;	// av22
$avvallist[5]= $MOk;	// av23

// return to caller
return $avvallist;
}
?>