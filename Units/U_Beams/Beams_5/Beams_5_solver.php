<?php
// File: Beams_5_solver.php	rev. 08/08/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$a=  $ivvallist[0];
$b=  $ivvallist[1];
$L=  $ivvallist[2];

// run the solution code
$k=     $b*$L;
$c=     $a/($b*$b*$L);
$RAmag= $c*(exp($k) -1 -$k);
$RAdeg= 90;
$RBmag= $c*(1 +exp($k)*($k-1));
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