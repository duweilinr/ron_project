<?php
// File: Rigid2d_3_solver.php	rev. 07/11/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W= $ivvallist[0];
$h= $ivvallist[1];
$d= $ivvallist[2];

// run the solution code
$LAE=  sqrt($h*$h +3*3);
$sina= 3/$LAE;
$cosa= $h/$LAE;
$TAC=  $W*$d/$sina;
$FBx=  $TAC*$sina;
$FBy=  $W +$TAC*$cosa;

$FBmag= sqrt($FBx*$FBx +$FBy*$FBy);
$FBrad= atan2($FBy,$FBx);
$FBdeg= $FBrad*180/M_PI;

// pack the results	
$avvallist[0]= $TAC;
$avvallist[1]= $FBx;
$avvallist[2]= $FBy;
$avvallist[3]= $FBmag;
$avvallist[4]= $FBdeg;

// return to caller
return $avvallist;
}
?>