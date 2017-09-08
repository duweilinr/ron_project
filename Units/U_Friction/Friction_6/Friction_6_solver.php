<?php
// File: Friction_6_solver.php	rev. 08/03/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$W= $ivvallist[0];
$a= $ivvallist[1];
$b= $ivvallist[2];

// run the solution code
$Nf=    $W*$b/($b+$a);
$Nr=    $W*$a/($b+$a);
$mumin= $b/10;

// pack the results	
$avvallist[0]= $Nf;		// av11
$avvallist[1]= $Nr;		// av21
$avvallist[2]= $mumin;	// av31
 
// return to caller
return $avvallist;
}
?>