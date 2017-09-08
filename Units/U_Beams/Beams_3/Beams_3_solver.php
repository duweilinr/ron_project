<?php
// File: Beams_3_solver.php	rev. 08/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$w=  $ivvallist[0];
$P=  $ivvallist[1];
$M=  $ivvallist[2];
$L1= $ivvallist[3];
$L2= $ivvallist[4];

// run the solution code
$RBmag= $w*$L1/2 +$P*(1+$L2/$L1) -$M/$L1;
$RAmag= $w*$L1/2 -$P*$L2/$L1 +$M/$L1;
$RAdeg= 90;
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