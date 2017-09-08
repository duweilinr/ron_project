<?php
// File: PEq2d_6_solver.php	rev. 06/15/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$Wm= $ivvallist[0];
$a1= $ivvallist[1];
$a2= $ivvallist[2];

// run the solution code	
$sina1= sin($a1*M_PI/180);
$cosa1= cos($a1*M_PI/180);
$sina2= sin($a2*M_PI/180);
$cosa2= cos($a2*M_PI/180);	
$D=     $sina2*$cosa1+$sina1*$cosa2;
	
$F2m=   $Wm*$cosa1/$D;
$F1m=   $Wm*$cosa2/$D;

// pack the results	
$avvallist[0]= $F1m;	// av1
$avvallist[1]= $F2m;	// av2
 
// return to caller
return $avvallist;
}
?>