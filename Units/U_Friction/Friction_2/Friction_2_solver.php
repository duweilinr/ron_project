<?php
// File: Friction_2_solver.php	rev. 08/03/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$W=     $ivvallist[0];
$Q=     $ivvallist[1];
$theta= $ivvallist[2];
$mus=   $ivvallist[3];

// run the solution code
$thetar= $theta*M_PI/180;
	
$N= $W*cos($thetar) +$Q*sin($thetar);
$F= $Q*cos($thetar) -1*$W*sin($thetar);
if ( $F > $N*$mus ) { $F= $N*$mus ; }

// pack the results	
$avvallist[0]= $N;		// av11
$avvallist[1]= $F;		// av21
 
// return to caller
return $avvallist;
}
?>