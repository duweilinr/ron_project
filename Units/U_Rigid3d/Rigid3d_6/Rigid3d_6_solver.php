<?php
// File: Rigid3d_6_solver.php	rev. 07/12/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W= $ivvallist[0];
$a= $ivvallist[1];
$b= $ivvallist[2];
$c= $ivvallist[3];

// run the solution code
$FBi= ($a/(2*$c))*$W;
$FBj= 0;
$FBk= 0;

$FCi= (-$a/$c)*$W;
$FCj= 0;
$FCk= $W;
		
$FDi= ($a/(2*$c))*$W;
$FDj= 0;	
$FDk= 0;

// pack the results	
$avvallist[0]= $FBi;	// av11
$avvallist[1]= $FBj;	// av12
$avvallist[2]= $FBk;	// av13

$avvallist[3]= $FCi;	// av21
$avvallist[4]= $FCj;	// av22
$avvallist[5]= $FCk;	// av23

$avvallist[6]= $FDi;	// av31
$avvallist[7]= $FDj;	// av32
$avvallist[8]= $FDk;	// av33

// return to caller
return $avvallist;
}
?>