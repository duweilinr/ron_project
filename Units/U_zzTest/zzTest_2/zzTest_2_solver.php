<?php
// File: Cables_1_solver.php	rev. 06/17/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W=  $ivvallist[0];
$Lc= $ivvallist[1];

// run the solution code
$costheta= 3/$Lc;
$theta=    acos($costheta);
$sintheta= sin($theta);
$dBC=      0.5*($Lc+3/$sintheta);
$dBA=      $Lc-$dBC;
$xB=       $dBA*$costheta;
$yB=       -1*$dBA*$sintheta;
$Tc=       0.5*$W/$sintheta;

// pack the results	
$avvallist[0]= $xB;	// av11
$avvallist[1]= $yB;	// av12
$avvallist[2]= $Tc;	// av21

// return to caller
return $avvallist;
}
?>