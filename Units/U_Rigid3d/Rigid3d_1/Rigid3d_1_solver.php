<?php
// File: Rigid3d_1_solver.php	rev. 06/16/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W= $ivvallist[0];
$F= $ivvallist[1];
$d= $ivvallist[2];
$h= $ivvallist[3];

// run the solution code

$m=   sqrt($d*$d+$h*$h);
$T=   $W*$m/$h;			// cable tension	

$FOx= $T*$d/$m;
$FOy= -1*$F;
$FOz= 0;
	
$MOx= 0;
$MOy= 0;
$MOz= $d*$F;
	
$FBx= -1*$T*$d/$m;
$FBy= 0;	
$FBz= $T*$h/$m;

// pack the results	
$avvallist[0]= $FOx;	// av11
$avvallist[1]= $FOy;	// av12
$avvallist[2]= $FOz;	// av13

$avvallist[3]= $MOx;	// av21
$avvallist[4]= $MOy;	// av22
$avvallist[5]= $MOz;	// av23

$avvallist[6]= $FBx;	// av31
$avvallist[7]= $FBy;	// av32
$avvallist[8]= $FBz;	// av33

// return to caller
return $avvallist;
}
?>