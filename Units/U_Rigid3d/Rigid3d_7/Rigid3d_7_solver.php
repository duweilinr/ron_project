<?php
// File: Rigid3d_7_solver.php	rev. 07/12/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$mp= $ivvallist[0];
$md= $ivvallist[1];
$a=  $ivvallist[2];
$b=  $ivvallist[3];
$c=  $ivvallist[4];

// run the solution code
$g=  32.2;
$Wp= $g*$mp;
$Wd= $g*$md;
	
$FA= $Wp +($b/$a)*$Wd;
$FC= $Wd*(1 - $b/$a)/2;
$FD= $FC;

// pack the results	
$avvallist[0]= $FA;
$avvallist[1]= $FC;
$avvallist[2]= $FD;

// return to caller
return $avvallist;
}
?>