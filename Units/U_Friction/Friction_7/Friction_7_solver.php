<?php
// File: Friction_7_solver.php	rev. 08/03/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$Pf=  $ivvallist[0];
$Pr=  $ivvallist[1];
$muf= $ivvallist[2];
$mur= $ivvallist[3];

// run the solution code
$P=     460;
$Ff=    0.3*$P;
$Fr=    0.35*$P;
$Af=    $Ff/$Pf;
$Ar=    $Fr/$Pr;
$Ffmax= $Ff*$muf;
$Frmax= $Fr*$mur;

// pack the results	
$avvallist[0]= $Ff;		// av11
$avvallist[1]= $Fr;		// av21
$avvallist[2]= $Af; 	// av31
$avvallist[3]= $Ar;		// av41
$avvallist[4]= $Ffmax;	// av51
$avvallist[5]= $Frmax; 	// av61
 
// return to caller
return $avvallist;
}
?>