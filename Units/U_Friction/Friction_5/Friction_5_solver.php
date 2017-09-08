<?php
// File: Friction_5_solver.php	rev. 08/03/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

//$dbgtxt= "ivvallist: ".$ivvallist[0].", ".$ivvallist[1];
//file_put_contents('./debug_ivvallist.txt',$dbgtxt);	

// solve the code part of the equations --------------------------------------->

// unpack the ivs
$m=   $ivvallist[0];
$d=   $ivvallist[1];
$w=   $ivvallist[2];
$hA=  $ivvallist[3];
$hB=  $ivvallist[4];
$mus= $ivvallist[5];

// run the solution code
$W=     9.81*$m;
$NAmag= $W*($d+$w/2)/($hA+$hB);
$NAdeg= 180;
$FAmax= $mus*$NAmag;
$FAdeg= 90;
	
$NBmag= $NAmag;
$NBdeg= 0;
$FBmax= $mus*$NBmag;
$FBdeg= 90;

// slip condition
if ( $FAmax > $W/2 ) {
	$FAmag= $W/2;
	$FBmag= $W/2;
	$slip= "no";
}
else {
	$FAmag= $FAmax;
	$FBmag= $FAmax;
	$slip= "yes";	
}

// pack the results	
$avvallist[0]= $NAmag;		// av11
$avvallist[1]= $NAdeg;		// av12
$avvallist[2]= $FAmag;		// av21
$avvallist[3]= $FAdeg;		// av22
$avvallist[4]= $NBmag;		// av31
$avvallist[5]= $NBdeg;		// av32
$avvallist[6]= $FBmag;		// av41
$avvallist[7]= $FBdeg;		// av42
$avvallist[8]= $slip;		// av51
 
// return to caller
return $avvallist;
}
?>