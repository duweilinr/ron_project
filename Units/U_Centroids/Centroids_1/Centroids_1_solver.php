<?php
// File: Centroids_1_solver.php	rev. 06/19/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$a= $ivvallist[0];

// run the solution code
$ABx=  2*$a;
$ABy=  4.5*$a;
$BCx=  3.5*$a;
$BCy=  4.5*$a;
$CDx=  3*$a;
$CDy=  1*$a;	
$barx= 2.911*$a;		// see hw prob N P1 for details
$bary= 2.699*$a;

// pack the results	
$avvallist[0]= $ABx;	// av11
$avvallist[1]= $ABy;	// av12
$avvallist[2]= $BCx;	// av21
$avvallist[3]= $BCy;	// av22
$avvallist[4]= $CDx;	// av31
$avvallist[5]= $CDy;	// av32
$avvallist[6]= $barx;	// av41
$avvallist[7]= $bary;	// av42

// return to caller
return $avvallist;
}
?>