<?php
// File: FandM2d_5_solver.php	rev. 07/09/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$w= $ivvallist[0];
$LB= $ivvallist[1];
$LC= $ivvallist[2];
$L=  $ivvallist[3];

// run the solution code
$Wmag=  $w*($LC-$LB);
$Wdeg= -90;
$xW=   ($LB +$LC)/2;

// pack the results	
$avvallist[0]= $Wmag;
$avvallist[1]= $Wdeg;
$avvallist[2]= $xW;
 
// return to caller
return $avvallist;
}
?>