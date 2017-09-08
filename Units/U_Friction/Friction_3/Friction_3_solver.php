<?php
// File: Friction_3_solver.php	rev. 08/20/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$W= $ivvallist[0];
$P= $ivvallist[1];

// run the solution code
$N=    $W;
$F1=   0.3*$N;
if ($F1>$P) { $F1= $P; }
	
$F2=   0.4*$N;
if ($F2>$P) { $F2= $P; }
	
$S= 4*$P/$W;

// pack the results	
$avvallist[0]= $N;		// av11
$avvallist[1]= $F1;		// av21
$avvallist[2]= $F2;		// av31
$avvallist[3]= $S;		// av41
 
// return to caller
return $avvallist;
}
?>