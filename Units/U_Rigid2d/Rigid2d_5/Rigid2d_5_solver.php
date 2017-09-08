<?php
// File: Rigid2d_5_solver.php	rev. 07/11/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W=   $ivvallist[0];
$LAB= $ivvallist[1];
$LBC= $ivvallist[2];
$a1=  $ivvallist[3];
$a2=  $ivvallist[4];

// run the solution code
$h=   sqrt($LAB*$LAB +$LBC*$LBC);

$a1r= $a1*M_PI/180;
$a2r= $a2*M_PI/180;
$a3r= atan2($LBC,$LAB);
$a4r= M_PI -$a1r -$a3r;			// signed value
		
$Bx=    $LAB*sin($a4r);
$Cy=    $h*sin($a1r);
$FCx=   $W*$Bx/$Cy;				// signed value	
$FCmag= abs($FCx);
$FCdeg= 180;
if ($FCx < 0) {$FCdeg=0;} 
	
$FAx=   -1*$FCx;
$FAy=   $W;	
$FAmag= sqrt($FAx*$FAx +$FAy*$FAy);
$FAdeg= atan2($FAy,$FAx)*180/M_PI;

// pack the results	
$avvallist[0]= $FCmag;
$avvallist[1]= $FCdeg;
$avvallist[2]= $FAmag;
$avvallist[3]= $FAdeg;

// return to caller
return $avvallist;
}
?>