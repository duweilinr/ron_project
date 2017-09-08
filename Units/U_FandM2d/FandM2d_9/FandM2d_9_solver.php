<?php
// File: FandM2d_9_solver.php	rev. 07/10/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$a=  $ivvallist[0];
$b=  $ivvallist[1];
$L1= $ivvallist[2];
$L2= $ivvallist[3];

// run the solution code
$ebd=   exp($b*$L2);
$FRmag= ($a/$b)*($ebd-1);
$FRdeg= -90;
$xR=    $L1 +(1/$FRmag)*($a/($b*$b))*( $ebd*($b*$L2-1) +1);

// pack the results	
$avvallist[0]= $FRmag;
$avvallist[1]= $FRdeg;
$avvallist[2]= $xR;
 
// return to caller
return $avvallist;
}
?>