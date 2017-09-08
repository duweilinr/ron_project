<?php
// File: Beams_6_solver.php	rev. 08/08/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$b=  $ivvallist[0];
$L1= $ivvallist[1];

// run the solution code
$L=     20;
$W=     ($b/2)*($L*$L -$L1*$L1);
$dW=    ($b/3)*($L*$L*$L -$L1*$L1*$L1);
$RBmag= $dW/$L1;
$RBdeg= 90;
$RAmag= -1*($W -$RBmag);
$RAdeg= -90;

// pack the results	in original answer order; some may be missing (fofx types)
$avvallist[0]= $RAmag;	// av11
$avvallist[1]= $RAdeg;	// av12
$avvallist[2]= $RBmag;	// av21
$avvallist[3]= $RBdeg;	// av22
 
// return to caller
return $avvallist;
}
?>