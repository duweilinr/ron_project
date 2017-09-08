<?php
// File: PEq2d_3_solver.php	rev. 06/15/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$F1m= $ivvallist[0];
$F1d= $ivvallist[1];
$F2m= $ivvallist[2];
$F2d= $ivvallist[3];
$F3m= $ivvallist[4];
$F3d= $ivvallist[5];

// run the solution code
$F1x=   $F1m*cos($F1d*M_PI/180);
$F1y=   $F1m*sin($F1d*M_PI/180);
$F2x=   $F2m*cos($F2d*M_PI/180);
$F2y=   $F2m*sin($F2d*M_PI/180);
$F3x=   $F3m*cos($F3d*M_PI/180);
$F3y=   $F3m*sin($F3d*M_PI/180);


$FRx=   $F1x+$F2x+$F3x;
$FRy=   $F1y+$F2y+$F3y;
$FRmag= sqrt($FRx*$FRx+$FRy*$FRy);
$FRdeg= atan2($FRy,$FRx)*180/M_PI;

// pack the results	
$avvallist[0]= $FRmag;	// av1
$avvallist[1]= $FRdeg;	// av2
 
// return to caller
return $avvallist;
}
?>