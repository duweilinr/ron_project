<?php
// File: FandM3d_1_solver.php	rev. 06/16/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1= $ivvallist[0];
$x=  $ivvallist[1];
$y=  $ivvallist[2];
$z=  $ivvallist[3];

// run the solution code
$w= sqrt($y*$y +$z*$z)/2;
$h= sqrt($x*$x +$y*$y);
$d= sqrt($h*$h -$w*$w);

$MBC= $F1*$d;		// treated as magnitude here
$Mx=  0;
$My=  -1*$MBC*$y/(2*$w);
$Mz=  $MBC*$z/(2*$w);

// pack the results	
$avvallist[0]= $MBC;
$avvallist[1]= $Mx;
$avvallist[2]= $My;
$avvallist[3]= $Mz;
 
// return to caller
return $avvallist;
}
?>