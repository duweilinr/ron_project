<?php
// File: FandM3d_3_solver.php	rev. 07/10/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$F1= $ivvallist[0];
$F2= $ivvallist[1];
$F3= $ivvallist[2];
$H=  $ivvallist[3];

// run the solution code
$V1i= 0.612; $V1j= 0.612; $V1k= 0.5;
$V2i= 0;     $V2j= 2;     $V2k= -1;
$V3i= -1;    $V3j= 1;     $V3k= -2;
$len1=  sqrt($V1i*$V1i +$V1j*$V1j +$V1k*$V1k);
$len2=  sqrt($V2i*$V2i +$V2j*$V2j +$V2k*$V2k);
$len3=  sqrt($V3i*$V3i +$V3j*$V3j +$V3k*$V3k);
	
$F1i= $F1*$V1i/$len1;
$F1j= $F1*$V1j/$len1;
$F1k= $F1*$V1k/$len1;
$F2i= $F2*$V2i/$len2;
$F2j= $F2*$V2j/$len2;
$F2k= $F2*$V2k/$len2;
$F3i= $F3*$V3i/$len3;
$F3j= $F3*$V3j/$len3;
$F3k= $F3*$V3k/$len3;
	
$FAi= -1*($F1i +$F2i +$F3i);
$FAj= -1*($F1j +$F2j +$F3j);
$FAk= -1*($F1k +$F2k +$F3k);
	
$MAi= -1*$FAj*$H;
$MAj= $FAi*$H;
$MAk= 0;

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