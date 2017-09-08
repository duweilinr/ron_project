<?php
// File: Rigid3d_3_solver.php	rev. 07/12/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W1= $ivvallist[0];
$W2= $ivvallist[1];
$W3= $ivvallist[2];
$W4= $ivvallist[3];

// run the solution code
$FRi= 0;
$FRj= 0;
$FRk= -1*($W1 +$W2 +$W3 +$W4);
$FRmag= abs($FRk);
$MOi= -1*$W1 -1*$W2 -3*$W3 -3*$W4;
$MOj= 1*$W1 +3*$W2 +3*$W3 +1*$W4;
$MOk= 0;
$Ri=  $MOj/$FRmag;
$Rj= -1*$MOi/$FRmag;
$Rk= 0;

// pack the results	
$avvallist[0]= $FRi;	// av11
$avvallist[1]= $FRj;	// av12
$avvallist[2]= $FRk;	// av13

$avvallist[3]= $MOi;	// av21
$avvallist[4]= $MOj;	// av22
$avvallist[5]= $MOk;	// av23

$avvallist[6]= $Ri;		// av31
$avvallist[7]= $Rj;		// av32
$avvallist[8]= $Rk;		// av33

// return to caller
return $avvallist;
}
?>