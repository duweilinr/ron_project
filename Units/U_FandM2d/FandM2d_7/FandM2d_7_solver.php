<?php
// File: FandM2d_7_solver.php	rev. 07/09/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$w=  $ivvallist[0];
$L1= $ivvallist[1];
$L2= $ivvallist[2];
$L3= $ivvallist[3];

// run the solution code
$Wmag= $L2*$w/2;
$Wdeg= -90;
$xW=   $L1 +$L2/3;

// pack the results	
$avvallist[0]= $Wmag;
$avvallist[1]= $Wdeg;
$avvallist[2]= $xW;
 
// return to caller
return $avvallist;
}
?>