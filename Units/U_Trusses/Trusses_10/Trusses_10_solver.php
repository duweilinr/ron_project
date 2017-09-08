<?php
// File: Trusses_10_solver.php	rev. 08/05/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$W= $ivvallist[0];
$d= $ivvallist[1];
$h= $ivvallist[2];

// run the solution code
$FCk= $W;				// joint A, z component
$FCi= -1*$d*$W/$h;		// joint A, x component
$FCj= 0;				// joint A, y component
$FBi= -1*$FCi/2;
$FBj= 0;
$FBk= 0;
$FDi= $FBi;
$FDj= 0;
$FDk= 0;
	
// link forces (+ in tension)
$m=   sqrt($d*$d+$h*$h);
$FAC= $W*($m/$h);
$n=   sqrt(1.5*1.5+$d*$d);
$FAB= -1*$FBi*($n/$d);
$FBC= 0;
$FBD= -1*$FAB*(1.5/$d);

// pack the results	
$avvallist[0]= $FCi;	// av11
$avvallist[1]= $FCj;	// av12
$avvallist[2]= $FCk;	// av13
$avvallist[3]= $FBi;	// av21
$avvallist[4]= $FBj;	// av22
$avvallist[5]= $FBk;	// av23
$avvallist[6]= $FDi;	// av31
$avvallist[7]= $FDj;	// av32
$avvallist[8]= $FDk;	// av33

$avvallist[9]=  $FAC;	// av41
$avvallist[10]= $FAB;	// av51
$avvallist[11]= $FBC;	// av61
$avvallist[12]= $FBD;	// av71

// return to caller
return $avvallist;
}
?>