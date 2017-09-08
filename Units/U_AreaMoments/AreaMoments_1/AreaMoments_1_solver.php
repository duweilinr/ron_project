<?php
// File: Centroids_1_solver.php	rev. 06/19/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$t= $ivvallist[0];
$h= $ivvallist[1];

// run the solution code
$Cx= 0.0;
$Cy= (3*$t+$h)/4;
	
$I1x= (1/12)*$h*$t*$t*$t;
$I1y= (1/12)*$t*$h*$h*$h;
$I2x= (1/12)*$t*$h*$h*$h;
$I2y= (1/12)*$h*$t*$t*$t;
$ds=  ($h+$t)*($h+$t)/16;
	
$IxxC= $I1x +$t*$h*$ds +$I2x +$t*$h*$ds;
$IyyC= $I1y +$I2y;	
$IxyC= 0.0;
$JC=   $IxxC +$IyyC;

// pack the results	
$avvallist[0]= $Cx;		// av11
$avvallist[1]= $Cy;		// av12
$avvallist[2]= $IxxC;	// av31
$avvallist[3]= $IyyC;	// av41
$avvallist[4]= $IxyC;	// av51
$avvallist[5]= $JC;		// av61

// return to caller
return $avvallist;
}
?>