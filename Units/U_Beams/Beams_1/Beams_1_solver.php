<?php
// File: Beams_1_solver.php	rev. 06/13/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$F=  $ivvallist[0];
$LC= $ivvallist[1];
$L=  $ivvallist[2];

// run the solution code
$RAmag= $F*(1-$LC/$L);
$RAdeg= 90;
$RBmag= $F*$LC/$L;
$RBdeg= 90;

// pack the results	in original answer order; some may be missing (fofx types)
$avvallist[0]= $RAmag;	// av11
$avvallist[1]= $RAdeg;	// av12
$avvallist[2]= $RBmag;	// av21
$avvallist[3]= $RBdeg;	// av22
 
// return to caller
return $avvallist;
}
?>