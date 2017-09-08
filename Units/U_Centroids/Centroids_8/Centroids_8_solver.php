<?php
// File: Centroids_8_solver.php	rev. 08/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$Ws= $ivvallist[0];
$a=  $ivvallist[1];
$b=  $ivvallist[2];
$c=  $ivvallist[3];
$k=  $ivvallist[4];

// run the solution code
$Lf= 0.5;

$w=  $Ws/(8*$a);		// wt/ft^2
$Wc= 6*$c*$w;			// wt cutout
$Wp= $Ws -1*$Wc;		// wt plate
$Mx= -($b+$c/2)*$Wc/$Wp;
$My= -1*$Lf-4;

$FS= $Wp;
	
$d=   sqrt($Mx*$Mx +4*4);
$Mex= 0;
$Lc=  $FS/$k +$Lf;
$Mey= -1*$Lc -$d;
	
$sinth= -1*$Mx/$d; 
$costh= 4/$d;
$Gx=    4*$sinth;
$Gy=    -1*$Lc -4*$costh;	

// pack the results	
$avvallist[0]= $Mx;		// av11
$avvallist[1]= $My;		// av12
$avvallist[2]= $FS;		// av21
$avvallist[3]= $Mex;	// av31
$avvallist[4]= $Mey;	// av32
$avvallist[5]= $Gx;		// av41
$avvallist[6]= $Gy;		// av42

// return to caller
return $avvallist;
}
?>