<?php
// File: Trusses_8_solver.php	rev. 08/05/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$FC= $ivvallist[0];
$FD= $ivvallist[1];
$FE= $ivvallist[2];
$d=  $ivvallist[3];
$h=  $ivvallist[4];

// run the solution code
$FAx= ($d/$h)*($FC+$FD) -$FE/2;
$FAy= 0;
$FBx= (-$d/$h)*($FC+$FD) -$FE/2;
$FBy= $FC +$FD;
	
// members (+=compr, -=tension)
$thetar= atan2($h,$d);
$costh=  cos($thetar);
$sinth=  sin($thetar);

$FAD= $FAx;
$FAE= 0;
$FBE= -1*$FBy/$sinth;
$FBC= $FBx +$FBy*$costh/$sinth;
$FCE= -1*$FBC/$costh;
$FCD= $FC -$FCE*$sinth;
$FDE= -1*$FAD/$costh;

// pack the results	
$avvallist[0]= $FAx;	// av11
$avvallist[1]= $FAy;	// av12
$avvallist[2]= $FBx;	// av21
$avvallist[3]= $FBy;	// av22

$avvallist[4]= $FAD;	// av31
$avvallist[5]= $FAE;	// av41
$avvallist[6]= $FBC;	// av51
$avvallist[7]= $FBE;	// av61
$avvallist[8]= $FCD;	// av71
$avvallist[9]= $FCE;	// av81
$avvallist[10]= $FDE;	// av91

// return to caller
return $avvallist;
}
?>