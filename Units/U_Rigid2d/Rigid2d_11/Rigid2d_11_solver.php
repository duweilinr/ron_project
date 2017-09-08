<?php
// File: Rigid2d_11_solver.php	rev. 07/12/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$a=  $ivvallist[0];
$b=  $ivvallist[1];
$L1= $ivvallist[2];
$L2= $ivvallist[3];
$L=  $ivvallist[4];

// run the solution code
$ebd=    exp($b*$L2);
$FR=    ($a/$b)*($ebd-1);
$xR=    $L1 +(1/$FR)*($a/($b*$b))*( $ebd*($b*$L2-1) +1);
$W=     100;
$FAmag= $FR +$W;
$FAdeg= 90;
$MA=    $xR*$FR +$W*$L/2;	// positive

// pack the results	
$avvallist[0]= $FAmag;
$avvallist[1]= $FAdeg;
$avvallist[2]= $MA;

// return to caller
return $avvallist;
}
?>