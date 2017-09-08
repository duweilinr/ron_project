<?php
// File: Frames_9_solver.php	rev. 08/03/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W= $ivvallist[0];
$a= $ivvallist[1];
$b= $ivvallist[2];
$d= $ivvallist[3];

// run the solution code
$FAx= 0;
$FAy= $W;
$MA=  ($a+$b)*$W;
	
$thetar= atan2($b,$d);
$FBx=    -1*$W*sin($thetar);
$FBy=    $W*cos($thetar);
$MB=     $d*$W*sin($thetar);
	
$alphar= M_PI-$thetar;
$FCx=    $W*cos($alphar);
$FCy=    -1*$W +$W*sin($alphar);

// pack the results	
$avvallist[0]= $FAx;	// av11
$avvallist[1]= $FAy;	// av12
$avvallist[2]= $MA;		// av21
$avvallist[3]= $FBx;	// av31
$avvallist[4]= $FBy;	// av32
$avvallist[5]= $MB; 	// av41
$avvallist[6]= $FCx;	// av51
$avvallist[7]= $FCy;	// av52

// return to caller
return $avvallist;
}
?>