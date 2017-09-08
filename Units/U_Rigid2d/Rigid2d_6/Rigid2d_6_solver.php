<?php
// File: Rigid2d_6_solver.php	rev. 07/11/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$Wb= $ivvallist[0];
$d=  $ivvallist[1];
$hA= $ivvallist[2];
$k=  $ivvallist[3];
$Wd= $ivvallist[4];

// run the solution code
$FS1= 6*$Wb/$d;
$Lf=  $hA +$FS1/$k;
	
// part (2)
$FS2=  (6*$Wb +11*$Wd)/$d;
$delC= $FS2/$k;				// compression at point C
$delB= 12*$delC/$d;			// assumes small angle
$hB=   $hA -$delB;

// pack the results	
$avvallist[0]= $Lf;
$avvallist[1]= $hB;

// return to caller
return $avvallist;
}
?>