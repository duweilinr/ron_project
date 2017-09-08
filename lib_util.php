<?php
// 	File: lib_util.php	rev. 06/22/2017 rcr
	/*
	Line  9: function comp2Nbrs($ansPi,$ansSi,$ansfmt) {
	Line 61: function fmtnbr($nbr) {		
	*/
	
// comp2Nbrs ------------------------------------------------------------------>
function comp2Nbrs($ansPi,$ansSi,$ansfmt) {
	$res=   "";	
	$fmt=   $ansfmt;
	$ansP=  floatval($ansPi);
	$ansPf= sprintf($fmt,$ansP);	
	$ansS=  floatval($ansSi);
	$ansSf= sprintf($fmt,$ansS);	
		
	if ($ansS != 0) {
		if ($ansP == 0) {
			$res= "OOPS";
		}	
		else {
			$err=  $ansP/$ansS;
			if ($err<0) {
				$res= "OOPS";		// wrong sign
			}
			else {
				if ($err>1.0) {
					$err= 1/$err;	// force ratio to be <=1
				}
			}
			// sort by error ratio magnitude
			if ($err>0.999) {
				$res= "YES";
			}
			else if ($err>0.99) {
				$res= "HOT";				
			}
			else if ($err>0.95) {
				$res= "WARM";
			}
			else if ($err>0.90) {
				$res= "COOL";
			}
			else {
				$res= "FRIGID";
			}
		}
	}
	else {
		if ($ansP === $ansS) {
			$res= "YES";
		}
		else {
			$res= "OOPS";
		}
	}		
	return $res;
}

// format number with 3 sig digits as standard --------------------------------->
function fmtnbr($nbr) {		
	if ($nbr == 0) {
		$fmt= '%-.2f';		
		$nbrf= sprintf($fmt,$nbr);
		return $nbrf;
	}

	$nabs= abs($nbr); 
	
	if ($nabs < 0.1000) {
		$fmt= '%-.2e';
	}
	else if ($nabs < 1.000 ) {
		$fmt= '%-.3f';
	}
	else if ($nabs < 10.00 ) {
		$fmt= '%-.2f';
	}		
	else if ($nabs < 100.0 ) {
		$fmt= '%-.1f';
	}	
	else if ($nabs < 1000.0 ) {
		$fmt= '%-.0f';
	}		
	else  {
		$fmt= '%-.2e';
	}	
	$nbrf= sprintf($fmt,$nbr);
	return $nbrf;	
}  	

// debug file write ----------------------------------------------------------->
// Can use directly	'file_put_contents($file,$data)'
// APPEND option may require running xampp as sys_admin. Doesn't work as local.

?>