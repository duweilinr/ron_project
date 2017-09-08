<?php
// File: Rigid2d_8_solver.php	rev. 07/11/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W=   $ivvallist[0];
$L=   $ivvallist[1];
$LBE= $ivvallist[2];
$LDE= $ivvallist[3];

// run the solution code
$sina2= $LDE/($L-$LBE);
$a2r=   asin($sina2);
$a2=    $a2r*180/M_PI;
$a1=    90-$a2;

$dB= $L*sin($a2r);
$dC= $dB/2;
$dE= ($L-$LBE)*cos($a2r);
	
$FAmag= $W*($dB-$dC)/$dE;
$FAdeg= 0;
$FBmag= $W;
$FBdeg= 90;
$FEmag= $FAmag;
$FEdeg= 180;

// pack the results	
$avvallist[0]= $a1;
$avvallist[1]= $FAmag;
$avvallist[2]= $FAdeg;
$avvallist[3]= $FBmag;
$avvallist[4]= $FBdeg;
$avvallist[5]= $FEmag;
$avvallist[6]= $FEdeg;

// return to caller
return $avvallist;
}
?>