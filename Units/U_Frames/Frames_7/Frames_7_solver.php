<?php
// File: Frames_7_solver.php	rev. 08/03/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$FL= $ivvallist[0];
$L=  $ivvallist[1];
$df= $ivvallist[2];

// run the solution code
$Ltot= 2*$L +$df;
$W=    10;
	
$s1= 0.1;
$a1= sqrt($L*$L -$s1*$s1);
$d1= $Ltot -2*$a1;
$T1= (1/$s1)*($W*$a1/2 +$FL*$a1);
$k1= $T1/($d1-$df);
	
$s2= 0.2;
$a2= sqrt($L*$L -$s2*$s2);
$d2= $Ltot -2*$a2;
$T2= (1/$s2)*($W*$a2/2 +$FL*$a2);
$k2= $T2/($d2-$df);

$T3= $k1*($d2-$df);
$FLmax= (1/$a2)*($T3*$s2 -$W*$a2/2);

// pack the results	
$avvallist[0]= $k1;		// av11
$avvallist[1]= $k2;		// av21
$avvallist[2]= $FLmax;	// av31

// return to caller
return $avvallist;
}
?>