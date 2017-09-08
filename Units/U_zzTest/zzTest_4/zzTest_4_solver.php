<?php
// File: PEq2d_1_solver.php	rev. 06/11/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$F1mag= $ivvallist[0];
$F1deg= $ivvallist[1];
$F2mag= $ivvallist[2];
$F2deg= $ivvallist[3];

// run the solution code
$F1x=   $F1mag*cos($F1deg*M_PI/180);
$F1y=   $F1mag*sin($F1deg*M_PI/180);
$F2x=   $F2mag*cos($F2deg*M_PI/180);
$F2y=   $F2mag*sin($F2deg*M_PI/180);
$FRx=   $F1x+$F2x;
$FRy=   $F1y+$F2y;
$FRmag= sqrt($FRx*$FRx+$FRy*$FRy);
$FRdeg= atan2($FRy,$FRx)*180/M_PI;

// pack the results	in original answer order; some may be missing (fofx types)
$avvallist[0]= $FRmag;	// av11
$avvallist[1]= $FRdeg;	// av21
 
// return to caller
return $avvallist;
}
?>