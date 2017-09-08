<?php
// File: Vecs3d_6_solver.php	rev. 07/08/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1m= $ivvallist[0];
$a11= $ivvallist[1];
$a12= $ivvallist[2];
$F2m= $ivvallist[3];
$a21= $ivvallist[4];
$a22= $ivvallist[5];

// run the solution code
$a11r= $a11*M_PI/180;
$a12r= $a12*M_PI/180;
$a21r= $a21*M_PI/180;
$a22r= $a22*M_PI/180;
$thetar= acos(-1*cos($a12r)*sin($a11r)*cos($a22r)*sin($a21r)) +(cos($a12r)*cos($a11r)*cos($a22r)*cos($a21r))-(sin($a12r)*sin($a22r));
$theta= $thetar*180/M_PI;

// pack the results	
$avvallist[0]= $theta;
 
// return to caller
return $avvallist;
}
?>