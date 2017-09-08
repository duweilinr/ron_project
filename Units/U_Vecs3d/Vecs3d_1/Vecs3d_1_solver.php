<?php
// File: Vecs3d_1_solver.php	rev. 06/15/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$xA= $ivvallist[0];
$yA= $ivvallist[1];
$zA= $ivvallist[2];
$xB= $ivvallist[3];
$yB= $ivvallist[4];
$zB= $ivvallist[5];

// run the solution code
$Amag= sqrt($xA*$xA +$yA*$yA +$zA*$zA);
$Bmag= sqrt($xB*$xB +$yB*$yB +$zB*$zB);
		
$r2d=    180/M_PI;
$alphaA= acos($xA/$Amag)*$r2d;
$betaA=  acos($yA/$Amag)*$r2d;
$gammaA= acos($zA/$Amag)*$r2d;
$alphaB= acos($xB/$Bmag)*$r2d;
$betaB=  acos($yB/$Bmag)*$r2d;
$gammaB= acos($zB/$Bmag)*$r2d;

$Ax= cos($alphaA/$r2d);
$Ay= cos($betaA/$r2d);
$Az= cos($gammaA/$r2d);
$Bx= cos($alphaB/$r2d);
$By= cos($betaB/$r2d);
$Bz= cos($gammaB/$r2d);

$thetar= acos($Ax*$Bx +$Ay*$By +$Az*$Bz);
$theta=  $thetar*180/M_PI;

// pack the results	
$avvallist[0]= $alphaA;
$avvallist[1]= $betaA;
$avvallist[2]= $gammaA;
$avvallist[3]= $alphaB;
$avvallist[4]= $betaB;
$avvallist[5]= $gammaB;
$avvallist[6]= $theta;
 
// return to caller
return $avvallist;
}
?>