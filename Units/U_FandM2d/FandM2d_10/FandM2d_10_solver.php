<?php
// File: FandM2d_10_solver.php	rev. 07/10/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$a1= $ivvallist[0];
$b1= $ivvallist[1];
$a2= $ivvallist[2];
$b2= $ivvallist[3];
$L1= $ivvallist[4];

// run the solution code
$L2=    12.0;
$Ld=    $L2 -$L1;
$F1mag= ($a1/$b1)*(exp($b1*$L1) -1);
$F2mag= ($a2/$b2)*(exp($b2*$Ld) -1);
$FRmag= $F1mag +$F2mag;
$F1deg= -90;
$F2deg= -90;
$FRdeg= -90;
	
$M1= ($a1/($b1*$b1))*(($L1*$b1-1)*exp($b1*$L1) +1);
$x1= $M1/$F1mag;
$M2= ($a2/($b2*$b2))*(($Ld*$b2-1)*exp($b2*$Ld) +1);
$x2= $M2/$F2mag +$L1;
$xR= ($x1*$F1mag +$x2*$F2mag)/$FRmag;

$MRC= $FRmag*($L2 -$xR);

// pack the results	
$avvallist[0]= $F1mag;
$avvallist[1]= $F1deg;
$avvallist[2]= $x1;
$avvallist[3]= $F2mag;
$avvallist[4]= $F2deg;
$avvallist[5]= $x2;
$avvallist[6]= $FRmag;
$avvallist[7]= $FRdeg;
$avvallist[8]= $xR;
$avvallist[9]= $MRC;

// return to caller
return $avvallist;
}
?>