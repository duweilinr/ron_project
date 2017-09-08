<?php
// File: Friction_4_solver.php	rev. 08/03/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$Wp=  $ivvallist[0];
$mup= $ivvallist[1];
$h=   $ivvallist[2];

// run the solution code
$theta= 20;
$Wr=    300;
$mur=   0.2;
$w=     3.2;

$thetar= $theta*M_PI/180;	
$sint=   sin($thetar);
$cost=   cos($thetar);

$Ppmax= $mup*$Wp/($cost -$mup*$sint);
$Fpmax= $Ppmax*$cost;			// person friction force
	
$Prmax= $mur*$Wr/($cost +$mur*$sint);
$Frmax= $Prmax*$cost;			// frig friction force	
	
$Prtip= 0.5*$w*$Wr/($cost*($h+0.25) +$sint*$w);

$Pmax=  min($Ppmax, $Prmax, $Prtip);

// pack the results	
$avvallist[0]= $Fpmax;		// av11
$avvallist[1]= $Frmax;		// av21
$avvallist[2]= $Pmax;		// av31
 
// return to caller
return $avvallist;
}
?>