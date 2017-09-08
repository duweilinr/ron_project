<?php
// File: PEq2d_5_solver.php	rev. 06/15/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$F1m= $ivvallist[0];
$F1d= $ivvallist[1];
$Wt=  $ivvallist[2];

// run the solution code	
$F1x= $F1m*cos($F1d*M_PI/180);
$F1y= $F1m*sin($F1d*M_PI/180);	
$F2x= -1*$F1x;
$F2y= $Wt-1*$F1y;	
$F2m= sqrt($F2x*$F2x+$F2y*$F2y);
$F2d= atan($F2y/$F2x)*180/M_PI;

// pack the results	
$avvallist[0]= $F2m;	// av1
$avvallist[1]= $F2d;	// av2
 
// return to caller
return $avvallist;
}
?>