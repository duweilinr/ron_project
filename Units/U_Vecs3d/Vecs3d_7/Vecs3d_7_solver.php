<?php
// File: Vecs3d_7_solver.php	rev. 07/08/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$FA= $ivvallist[0];
$FB= $ivvallist[1];
$FC= $ivvallist[2];

// run the solution code
$FRi=  $FA;
$FRj=  $FB;
$FRk=  $FC;
$FR2i= $FA;
$FR2j= $FB;
$FR2k= $FC;

// pack the results	
$avvallist[0]= $FRi;
$avvallist[1]= $FRj;
$avvallist[2]= $FRk;
$avvallist[3]= $FR2i;
$avvallist[4]= $FR2j;
$avvallist[5]= $FR2k;
 
// return to caller
return $avvallist;
}
?>