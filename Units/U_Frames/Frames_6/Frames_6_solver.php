<?php
// File: Frames_6_solver.php	rev. 08/02/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W= $ivvallist[0];
$b= $ivvallist[1];
$d=  $ivvallist[2];

// run the solution code
$AB= 8;
$AE= 2;
$CD= 8;
$CB= 1.5;	
	
$xA= 0;
$yA= 3.5;
	
$xB= $b;
$a=  sqrt($AB*$AB -$b*$b);
$yB= $yA +$a;
		
$bpr= $b*$AE/$AB;
$apr= $a*$AE/$AB;
$xE=  $xA +$bpr;
$yE=  $yA +$apr;

$xD= $b+$d;
$BD= $CD -$CB;
$c=  sqrt($BD*$BD -$d*$d);
$yD= $yB -$c;
	
$dpr= $d*$CB/$BD;
$cpr= $c*$CB/$BD;
$xC=  $xB -$dpr;
$yC=  $yB +$cpr;

$hD= $yD;
$CE= sqrt(($xC-$xE)*($xC-$xE) +($yC-$yE)*($yC-$yE));
	
$FAx= 0;
$FAy= $W;
$MA=  $W*($b+$d);
	
$e=   $xC-$xE;
$f=   $yC-$yE;	
$k=   ($cpr*$e+$dpr*$f)/$CE;
$T=   $d*$W/$k;		// piston tension

$Tx=  $T*$e/$CE;
$Ty=  $T*$f/$CE;	
$FBx= $Tx;
$FBy= $Ty +$W;

// pack the results	
$avvallist[0]= $hD;		// av11
$avvallist[1]= $CE;		// av21
$avvallist[2]= $FAx;	// av31
$avvallist[3]= $FAy;	// av32
$avvallist[4]= $MA;		// av41
$avvallist[5]= $FBx;	// av51
$avvallist[6]= $FBy;	// av52

// return to caller
return $avvallist;
}
?>