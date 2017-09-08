<?php
// File: Vecs3d_5_solver.php	rev. 07/08/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W= $ivvallist[0];
$x= $ivvallist[1];
$y= $ivvallist[2];

// run the solution code
$d=  sqrt($x*$x+$y*$y);
$h=  sqrt($d*$d+10*10);
$Lz= $W/4;
$L=  $Lz*$h/10;
$Ld= $L*$d/$h;
$Lx= $Ld*$x/$d;
$Ly= $Ld*$y/$d;
$FAi= -1*$Lx;
$FAj= -1*$Ly;
$FAk= $Lz;
$FBi= $Lx;
$FBj= -1*$Ly;
$FBk= $Lz;
$FCi= $Lx;
$FCj= $Ly;
$FCk= $Lz;
$FDi= -1*$Lx;
$FDj= $Ly;
$FDk= $Lz;
$FEi= 0;
$FEj= 0;
$FEk= $W;

// pack the results	
$avvallist[0]= $FAi;
$avvallist[1]= $FAj;
$avvallist[2]= $FAk;
$avvallist[3]= $FBi;
$avvallist[4]= $FBj;
$avvallist[5]= $FBk;
$avvallist[6]= $FCi;
$avvallist[7]= $FCj;
$avvallist[8]= $FCk;
$avvallist[9]=  $FDi;
$avvallist[10]= $FDj;
$avvallist[11]= $FDk;
$avvallist[12]= $FEi;
$avvallist[13]= $FEj;
$avvallist[14]= $FEk;
 
// return to caller
return $avvallist;
}
?>