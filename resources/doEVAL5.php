<?php
// File: doEVAL5.php		rev. 06/20/2017 rcr
// called by prob_run3.html with input partn and Pvstr
// returns eval results

include './nocache.php';
include './lib_util2.php';

// unpack POSTed data --------------------------------------------------------->
$postdata= file_get_contents("php://input");
$input=    json_decode($postdata);
$caller=   $input->caller;
$unitid=   $input->unitid;
$prbnum=   $input->prbnum;
$pnx=      $input->pnx;			// answer part index
$Pvstr=    $input->Pvstr;		// P ans for part pnx

// open db files
$probid=  $unitid."_".$prbnum;
$filstr1= "./Units/U_".$unitid."/".$probid."/".$probid;
	
//$fildata= file_get_contents($filstr1.'_defn.txt');
//$request= json_decode($fildata);
//$avlin=   $request->avlin;

$fildata= file_get_contents($filstr1.'_inst.txt');
$request=  json_decode($fildata);
$ivcode=   $request->ivcode;
$avvalarr= $request->avvalarr;
			
//$fildata= file_get_contents($filstr1.'_data.txt');
//$request= json_decode($fildata);
//$avdata=  $request->avdata;
	
// for each av in this part get its value and EVAL it ------------------------->
$ansfmt=  '%-.3G';
	
$Pvlist= explode(",",$Pvstr);
$Svlist= explode(",",$avvalarr[$pnx]);

// for each av in part pnx, get Sval and evaluate ----------------------------->
$evalstr= "";
for ($j=0; $j<sizeof($Svlist); $j++) {
	$Pval= $Pvlist[$j];
	$Sval= $Svlist[$j];
	
	//$dbgtxt= "Pval, Sval: ".$Pval.', '.$Sval;
	//file_put_contents('./debug_EVAL1.txt',$dbgtxt);

	// identify type of answer ('fofx' uses : separators)
	$Svallist= explode(":",$Sval);
	$lenS=     sizeof($Svallist);
	if ($lenS == 1) {
		$Styp= "code";		// default
		$Sval= $Svallist[0];
	}
	else {
		$Styp=  $Svallist[1];	// assume "fofx" for now
		$Sfx=   $Svallist[2];
		$xsxpr= $Svallist[3];
		$xexpr= $Svallist[4];
	};

	//$dbgtxt= "Styp,Sfx,xsxpr,xexpr: ".$Styp.': '.$Sfx.': '.$xsxpr.': '.$xexpr;
	//file_put_contents('./debug_EVAL2.txt',$dbgtxt);
	
	// process by answer type
	$res= "WRONG";	

	if ($Styp === "code") {
		// nbr answer
		if (is_numeric($Sval)) {
			if (is_numeric($Pval)) {
				$res= comp2Nbrs($Pval,$Sval,$ansfmt);						
			}
		}
		// text answer
		else {
			if (! is_numeric($Pval)) {
				$Ptrim= trim($Pval);
				$Ptrim= str_replace(' ','',$Ptrim);
				$Strim= str_replace(' ','',$Sval);
				if ($Ptrim == $Strim) {	$res= "RIGHT"; }						
			}		
		}	
	}		
	else if ($Styp === "fofx") {
		$xscode= $ivcode.'$xs='.$xsxpr.';return $xs;';
		$xs=     eval($xscode);
		$xecode= $ivcode.'$xe='.$xexpr.';return $xe;';
		$xe=     eval($xecode);
		$rnum=   mt_rand(0,1000)/1000;	// random uniform 3 sig_digits	
		$xtest=  $xs +($xe-$xs)*$rnum;
			//$dbgtxt= "xs,xe,xtest: ".$xs.', '.$xe.', '.$xtest;
			//file_put_contents('./debug_xtest.txt',$dbgtxt);
		$Scode=  $ivcode.'$x= '.$xtest.'; $Sval= '.$Sfx.';return $Sval;';
			//file_put_contents('./debug_Scode.txt',$Scode);
		$Snbr=   eval($Scode);
		
		$Pcode=  $ivcode.'$x= '.$xtest.';$Pvbl= '.$Pval.';return $Pvbl;';
			//file_put_contents('./debug_Pcode.txt',$Pcode);
		$Pnbr=  eval($Pcode);
			//$dbgtxt= "Snbr,Pnbr: ".$Snbr.', '.$Pnbr.' at x= '.$xtest;
			//file_put_contents('./debug_SnbrPnbr.txt',$dbgtxt);
		$res= comp2Nbrs($Pnbr,$Snbr,$ansfmt);				
	}
	$evalstr= $evalstr.",".$res;
}	
$evalstr= substr($evalstr,1);	// trim leading comma
	
// echo eval results ---------------------------------------------------------->
$response=     array ('evalstr'=>$evalstr);
$jsonresponse= json_encode($response);
echo $jsonresponse;
?>