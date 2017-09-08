<?php
// File: PEq2d_9_solver.php	rev. 06/15/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$Wc= $ivvallist[0];
$Wp= $ivvallist[1];
$d=  $ivvallist[2];
$Lc= $ivvallist[3];

// run the solution code	
$FL=   $Wc +$Wp;
$h=    sqrt($Lc*$Lc -$d*$d);
$sina= $h/$Lc;
$Tc=   $FL/(2*$sina);

// pack the results	
$avvallist[0]= $FL;	// av1
$avvallist[1]= $Tc;	// av2
 
// return to caller
return $avvallist;
}
?>