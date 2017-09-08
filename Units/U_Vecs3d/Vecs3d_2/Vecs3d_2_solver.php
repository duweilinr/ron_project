<?php
// File: Vecs3d_2_solver.php	rev. 07/08/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1m= $ivvallist[0];
$F2m= $ivvallist[1];
$a21= $ivvallist[2];
$a22= $ivvallist[3];

// run the solution code
$F1x=  $F1m;
$F1y=  0;
$F1z=  0;
$F2xy= $F2m*cos($a22*M_PI/180);
$F2x=  $F2xy*sin($a21*M_PI/180);
$F2y=  $F2xy*cos($a21*M_PI/180);
$F2z=  $F2m*sin($a22*M_PI/180);
$FRx=  $F1x+$F2x;
$FRy=  $F1y+$F2y;
$FRz=  $F1z+$F2z;
$FRmag= sqrt($FRx*$FRx+$FRy*$FRy+$FRz*$FRz);
$alpha= acos($FRx/$FRmag)*180/M_PI;
$beta=  acos($FRy/$FRmag)*180/M_PI;
$gamma= acos($FRz/$FRmag)*180/M_PI;

// pack the results	
$avvallist[0]= $alpha;
$avvallist[1]= $beta;
$avvallist[2]= $gamma;
$avvallist[3]= $FRmag;
 
// return to caller
return $avvallist;
}
?>