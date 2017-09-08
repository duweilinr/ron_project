<?php
// File: Rigid3d_2_solver.php	rev. 07/12/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1m= $ivvallist[0];
$F2m= $ivvallist[1];
$F3m= $ivvallist[2];

// run the solution code
$FRi= -1*$F1m -0.5*$F2m;
$FRj= -0.25*$F2m;
$FRk= 0.86*$F2m;

$MOi= 5*0.86*$F2m;
$MOj= 6*$F3m +6*0.25*$F2m;
$MOk= 5*0.5*$F2m -6*0.25*$F2m;
	
$FPi= $FRi;
$FPj= $FRj;
$FPk= $FRk;
	
$MPi= 2.5*0.86*$F2m;
$MPj= 6*$F3m -3*0.86*$F2m;
$MPk= -2.5*-0.5*$F2m +3*-0.25*$F2m;	

// pack the results	
$avvallist[0]= $FRi;	// av11
$avvallist[1]= $FRj;	// av12
$avvallist[2]= $FRk;	// av13

$avvallist[3]= $MOi;	// av21
$avvallist[4]= $MOj;	// av22
$avvallist[5]= $MOk;	// av23

$avvallist[6]= $FPi;	// av31
$avvallist[7]= $FPj;	// av32
$avvallist[8]= $FPk;	// av33

$avvallist[9]=  $MPi;	// av41
$avvallist[10]= $MPj;	// av42
$avvallist[11]= $MPk;	// av43


// return to caller
return $avvallist;
}
?>