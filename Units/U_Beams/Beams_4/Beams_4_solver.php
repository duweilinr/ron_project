<?php
// File: Beams_4_solver.php	rev. 08/08/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$w=  $ivvallist[0];
$L=  $ivvallist[1];
$M=  $ivvallist[2];

// run the solution code
$RAmag= $w*$L/2;
$RAdeg= 90;
$MA=    5*$w*$L*$L/24 -$M;

// pack the results	in original answer order; some may be missing (fofx types)
$avvallist[0]= $RAmag;	// av11
$avvallist[1]= $RAdeg;	// av12
$avvallist[2]= $MA;		// av21
 
// return to caller
return $avvallist;
}
?>