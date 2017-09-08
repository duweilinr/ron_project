<?php
// File: Rigid2d_2_solver.php	rev. 07/11/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$WA= $ivvallist[0];
$WB= $ivvallist[1];
$WC= $ivvallist[2];

// run the solution code
$Wt=  $WA +$WB +$WC;
$MDt= 1*$WA +11*$WB +21*$WC;
	
$FEmag= $MDt/19;
$FDmag= $Wt -$FEmag;
$FDdeg= 90;
$FEdeg= 90;

// pack the results	
$avvallist[0]= $FDmag;
$avvallist[1]= $FDdeg;
$avvallist[2]= $FEmag;
$avvallist[3]= $FEdeg;

// return to caller
return $avvallist;
}
?>