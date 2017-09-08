<?php
// File: Trusses_7_solver.php	rev. 08/05/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F= $ivvallist[0];
$d= $ivvallist[1];
$h= $ivvallist[2];

// get new solution
$FAx= 0;
$FAy= $F*(1+$h/$d);
$FBx= $F;
$FBy= $F*(1-$h/$d);
	
// members (+=compr, -=tension)
$thetar= atan2($h,$d);
$costh=  cos($thetar);
$sinth=  sin($thetar);

$FAC= $FAy;
$FAD= 0;
$FBD= -1*$FBx/$costh;
$FBE= $FBy -$FBD*$sinth;
$FCD= ($F -$FAC)/$sinth;
$FCE= -1*$FCD*$costh;
$FDE= 0;

// pack the results	
$avvallist[0]= $FAx;	// av11
$avvallist[1]= $FAy;	// av12
$avvallist[2]= $FBx;	// av21
$avvallist[3]= $FBy;	// av22

$avvallist[4]= $FAC;	// av31
$avvallist[5]= $FAD;	// av41
$avvallist[6]= $FBD;	// av51
$avvallist[7]= $FBE;	// av61
$avvallist[8]= $FCD;	// av71
$avvallist[9]= $FCE;	// av81
$avvallist[10]= $FDE;	// av91

// return to caller
return $avvallist;
}
?>