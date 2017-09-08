<?php
// File: Rigid2d_16_solver.php	rev. 07/12/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$WA= $ivvallist[0];
$WB= $ivvallist[1];
$WC= $ivvallist[2];
$r=  $ivvallist[3];
$R=  $ivvallist[4];

// run the solution code
$h=    $r+$R;
$d=    6/2-$r;
$s=    sqrt($h*$h-$d*$d);
$sint= $s/$h;
$cost= $d/$h;
		
$FAC=  $WC/(2*$sint);	// acting on C from A
$FACx= $FAC*$cost;
$FACy= $FAC*$sint;	
$FBCx= -1*$FACx;		// acting on C from B
$FBCy= $FACy;
	
$FAx=  $FACx;
$FAy=  $FACy +$WA;
$FBx=  $FBCx;
$FBy=  $FBCy +$WB;

// pack the results	
$avvallist[0]= $FAx;
$avvallist[1]= $FAy;
$avvallist[2]= $FBx;
$avvallist[3]= $FBy;
$avvallist[4]= $FACx;
$avvallist[5]= $FACy;
$avvallist[6]= $FBCx;
$avvallist[7]= $FBCy;

// return to caller
return $avvallist;
}
?>