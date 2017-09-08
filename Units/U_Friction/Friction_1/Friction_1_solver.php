<?php
// File: Friction_1_solver.php	rev. 08/03/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$W=     $ivvallist[0];
$theta= $ivvallist[1];
$mus=   $ivvallist[2];

// run the solution code
$N=     $W*cos($theta*M_PI/180);
$Wf=    $W*sin($theta*M_PI/180);
$Ffmax= $mus*$N;
if ( $Ffmax > $Wf ) {
	$Ff=   $Wf;
	$slip= "no";
}
else {
	$Ff=   $Ffmax;
	$slip= "yes";	
}

// pack the results	
$avvallist[0]= $N;		// av11
$avvallist[1]= $Ff;		// av21
$avvallist[2]= $slip;	// av31
 
// return to caller
return $avvallist;
}
?>