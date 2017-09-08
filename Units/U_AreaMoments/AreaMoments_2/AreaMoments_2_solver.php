<?php
// File: AreaMoments_2_solver.php	rev. 08/07/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$t= $ivvallist[0];
$h= $ivvallist[1];
$b= $ivvallist[2];

// run the solution code
$Cx= (1/2)*($h*$t+$b*$b)/($h+$b);
$Cy= ($b*$t/2 +$h*($t+$h/2))/($h+$b);
	
$IxxC= (1/12)*$b*$t*$t*$t +$b*$t*($Cy-$t/2)*($Cy-$t/2) +(1/12)*$t*$h*$h*$h +$h*$t*($Cy-$h/2-$t)*($Cy-$h/2-$t);
	
$IyyC= (1/12)*$t*$b*$b*$b +$b*$t*($Cx-$b/2)*($Cx-$b/2) +(1/12)*$h*$t*$t*$t +$h*$t*($Cx-$t/2)*($Cx-$t/2);
	
$IxyC= $h*$t*($t/2-$Cx)*($h/2+$t-$Cy) +$b*$t*($b/2-$Cx)*($t/2-$Cy);	
$JC=   $IxxC +$IyyC;

// pack the results	
$avvallist[0]= $Cx;		// av11
$avvallist[1]= $Cy;		// av12
$avvallist[2]= $IxxC;	// av21
$avvallist[3]= $IyyC;	// av31
$avvallist[4]= $IxyC;	// av41
$avvallist[5]= $JC;		// av51

// return to caller
return $avvallist;
}
?>