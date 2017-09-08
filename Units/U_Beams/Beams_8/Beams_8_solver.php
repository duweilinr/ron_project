<?php
// File: Beams_8_solver.php	rev. 08/08/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$F1=  $ivvallist[0];
$a=  $ivvallist[1];
$d=  $ivvallist[2];

// run the solution code
$RAx=   0;
$RAy=   -1*$d*$F1/10;
$RBx=   0;
$RBy=   -1*$RAy;
$F1max= 0;

// pack the results	in original answer order; some may be missing (fofx types)
$avvallist[0]= $RAx;	// av11
$avvallist[1]= $RAy;	// av12
$avvallist[2]= $RBx;	// av21
$avvallist[3]= $RBy;	// av22
$avvallist[4]= $F1max;	// av31
 
// return to caller
return $avvallist;
}
?>