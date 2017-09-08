<?php
// File: FandM3d_2_solver.php	rev. 07/10/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$FD=  $ivvallist[0];
$dAB= $ivvallist[1];
$dBC= $ivvallist[2];
$dCD= $ivvallist[3];

// run the solution code
$h1=  sqrt( $dAB*$dAB +$dBC*$dBC );	// distance A to C
$h2=  sqrt( $h1*$h1 +$dCD*$dCD );	// distance A to D
$Fh1= $FD*$h1/$h2;
$FAi= $Fh1*$dBC/$h1;
$FAj= -1*$Fh1*$dAB/$h1;
$FAk= -1*$Fh1*$dCD/$h1;	

$MAi=  0;
$MAj=  0;
$MAk=  0;

// pack the results	
$avvallist[0]= $FAi;
$avvallist[1]= $FAj;
$avvallist[2]= $FAk;
$avvallist[3]= $MAi;
$avvallist[4]= $MAj;
$avvallist[5]= $MAk;

// return to caller
return $avvallist;
}
?>