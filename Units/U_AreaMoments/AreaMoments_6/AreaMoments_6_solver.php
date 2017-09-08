<?php
// File: AreaMoments_6_solver.php	rev. 08/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$r1= $ivvallist[0];
$r2= $ivvallist[1];
$h=  $ivvallist[2];
$b=  $ivvallist[3];

// run the solution code
$I1= (M_PI/4)*$r1*$r1*$r1*$r1;
$I2= (M_PI/4)*$r2*$r2*$r2*$r2;
$I3= $b*$h*$h*$h/12;
$d12s= ($h+$r1+$r2)*($h+$r1+$r2);
$d1s=  ($h/2+$r1)*($h/2+$r1);
$d2s=  ($h/2+$r2)*($h/2+$r2);
$IAA= $I1 +$I2 +M_PI*$r2*$r2*$d12s +$I3 +$b*$h*$d1s;
$IBB= $I1 +M_PI*$r1*$r1*$d1s +$I2 +$I3 +M_PI*$r2*$r2*$d2s;
$ICC= $I1 +$I2 +M_PI*$r1*$r1*$d12s +$I3 +$b*$h*$d2s;

// pack the results	
$avvallist[0]= $IAA;	// av11
$avvallist[1]= $IBB;	// av21
$avvallist[2]= $ICC;	// av31

// return to caller
return $avvallist;
}
?>