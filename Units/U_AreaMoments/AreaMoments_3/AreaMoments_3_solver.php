<?php
// File: AreaMoments_3_solver.php	rev. 08/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$b= $ivvallist[0];
$h= $ivvallist[1];
$t= $ivvallist[2];

// run the solution code
$Ixx=  $b*$t*$t*$t/3 +$t*$h*$h*$h/12 +$t*$h*($t+$h/2)*($t+$h/2);
$Iyy=  $h*$t*$t*$t/3 +$t*$b*$b*$b/3;
$Ixy= ($h*$t*$t/2)*($t+$h/2) +$b*$b*$t*$t/4; 
$JO=  $Ixx +$Iyy;

$R=    sqrt( ($Ixx-$Iyy)*($Ixx-$Iyy)/4 +$Ixy*$Ixy );
$Imax= ($Ixx+$Iyy)/2 +$R;
$Imin= ($Ixx+$Iyy)/2 -$R;

// pack the results	
$avvallist[0]= $Ixx;	// av11
$avvallist[1]= $Iyy;	// av12
$avvallist[2]= $Ixy;	// av21
$avvallist[3]= $JO;		// av31
$avvallist[4]= $Imax;	// av41
$avvallist[5]= $Imin;	// av51

// return to caller
return $avvallist;
}
?>