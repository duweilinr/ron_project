<?php
// File: Vecs3d_3_solver.php	rev. 07/08/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1m= $ivvallist[0];
$F2m= $ivvallist[1];
$a21= $ivvallist[2];
$a22= $ivvallist[3];

// run the solution code
$F2xy= $F2m*cos($a22*M_PI/180);
$F2x=  $F2xy*sin($a21*M_PI/180);
$F2y=  $F2xy*cos($a21*M_PI/180);
$F2z=  -1*$F2m*sin($a22*M_PI/180);
$F1y=  -1*$F2y;
$F1z=  -1*$F2z;
$F1x=  sqrt($F1m*$F1m-$F1y*$F1y-$F1z*$F1z);
$alpha= acos($F1x/$F1m)*180/M_PI;
$beta=  acos($F1y/$F1m)*180/M_PI;
$gamma= acos($F1z/$F1m)*180/M_PI;
$FRmag= $F1x+$F2x;

// pack the results	
$avvallist[0]= $alpha;
$avvallist[1]= $beta;
$avvallist[2]= $gamma;
$avvallist[3]= $FRmag;
 
// return to caller
return $avvallist;
}
?>