<?php
// File: Trusses_5_solver.php	rev. 08/05/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$P= $ivvallist[0];
$d= $ivvallist[1];
$h= $ivvallist[2];
$a= $ivvallist[3];

// run the solution code
$ar=    $a*M_PI/180;
$sina=  sin($ar);
$cosa=  cos($ar);	
	
$FAy=   $P;
$FAmag= $P/$cosa;
$FAdeg= 90 -$a;
$FAx=   $FAmag*$sina;
	
$FFy=   $FAy;
$FFx=   -1*$FAx;
$FFmag= $FAmag;
$FFdeg= 90 +$a;

$Nzero= 	 3;
$Zero_links= "BI,EI,GH";

// pack the results	
$avvallist[0]= $FAmag;		// av11
$avvallist[1]= $FAdeg;		// av12
$avvallist[2]= $FFmag;		// av21
$avvallist[3]= $FFdeg;		// av22
$avvallist[4]= $Nzero;		// av31
$avvallist[5]= $Zero_links;	// av41

// return to caller
return $avvallist;
}
?>