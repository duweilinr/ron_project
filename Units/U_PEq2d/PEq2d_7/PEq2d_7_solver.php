<?php
// File: PEq2d_7_solver.php	rev. 06/15/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$F=  $ivvallist[0];
$L=  $ivvallist[1];
$Lf= $ivvallist[2];

// run the solution code	
$k= $F/($L-$Lf);

// pack the results	
$avvallist[0]= $k;	// av1
 
// return to caller
return $avvallist;
}
?>