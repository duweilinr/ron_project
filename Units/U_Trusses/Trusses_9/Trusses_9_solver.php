<?php
// File: Trusses_9_solver.php	rev. 08/05/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$FB= $ivvallist[0];
$FC= $ivvallist[1];
$FD= $ivvallist[2];
$a=  $ivvallist[3];

// run the solution code
$d=    8;
$h=    6;
$b=    45;

$FBx= $FB*cos($b*M_PI/180);
$FBy= $FBx;
$FEy= ($h/$d)*$FBx +$FC/2 +$FD;
$FAy= $FBy +$FC/2 -($h/$d)*$FBx;
$thetar= (90-$a)*M_PI/180;
$tantheta= tan($thetar);
$FAx= $FAy/$tantheta;
$FEx= -1*$FBx -1*$FAx;
	
// members (+=compr, -=tension)
$FAC= (5/4)*$FAx;
$FAB= $FAy -(3/4)*$FAx;
$FBC= (5/3)*($FBy-$FAB);
$FBD= $FBx -(4/5)*$FBC;

// pack the results	
$avvallist[0]= $FAx;	// av11
$avvallist[1]= $FAy;	// av12
$avvallist[2]= $FEx;	// av21
$avvallist[3]= $FEy;	// av22

$avvallist[4]= $FAB;	// av31
$avvallist[5]= $FAC;	// av41
$avvallist[6]= $FBC;	// av51
$avvallist[7]= $FBD;	// av61

// return to caller
return $avvallist;
}
?>