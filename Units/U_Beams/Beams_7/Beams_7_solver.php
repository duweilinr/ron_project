<?php
// File: Beams_7_solver.php	rev. 08/08/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$w=  $ivvallist[0];
$L1= $ivvallist[1];

// run the solution code
$d=     2*$L1-10;
$RBmag= $w*(10-$d);
$RBdeg= 90;

// pack the results	in original answer order; some may be missing (fofx types)
$avvallist[0]= $d;		// av11
$avvallist[1]= $RBmag;	// av21
$avvallist[2]= $RBdeg;	// av22
 
// return to caller
return $avvallist;
}
?>