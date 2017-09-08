<?php
// File: PEq2d_2_solver.php	rev. 06/15/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$F1mag= $ivvallist[0];
$F1deg= $ivvallist[1];
$F2mag= $ivvallist[2];

// run the solution code
$FRmag= $F2mag-$F1mag;
$FRdeg= 180+$F1deg;

// pack the results	
$avvallist[0]= $FRmag;	// av1
$avvallist[1]= $FRdeg;	// av2
 
// return to caller
return $avvallist;
}
?>