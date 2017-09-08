<?php
// File: doEVAL.php		rev. 08/05/2017 rcr
// called by prob_run3.html with input partn and Pvstr
// returns eval results

include './nocache.php';
include './lib_util.php';

// unpack POSTed data --------------------------------------------------------->
$postdata= file_get_contents("php://input");
$input=    json_decode($postdata);
//$unitid=   $input->unitid;
//$prbnum=   $input->prbnum;
$pnx=      $input->pnx;			// answer part index
$Pvstr=    $input->Pvstr;		// P ans for part pnx

// open db files
$cpfile=       './curr_prob.txt';
$filedata=     file_get_contents($cpfile);
$request=      json_decode($filedata);

$unitid=   	   $request->unitid;
$nprobs=	   $request->unitnp;
$prbnum=	   $request->prbnum;
$showPROGRESS= $request->showPROGRESS;
$showANSWER=   $request->showANSWER;
$ninst=        $request->ninst;
$ivcode=       $request->ivcode;
$avvalarr=     $request->avvalarr;
$ptryarr=      $request->ptryarr;
$ansYES=       $request->ansYES;

if ($ansYES[$pnx] == "YES") {
	$evalstr=      "Already answered correctly.";
	$response=     array (	'evalstr'=>$evalstr,
							'ptryarr'=>$ptryarr,
							'ansYES'=> $ansYES  );
	$jsonresponse= json_encode($response);
	echo $jsonresponse;	
	return ;
}
	
// for each av in this part get its value and EVAL it ------------------------->
$ansfmt=  '%-.3G';	
$Pvlist= explode(",",$Pvstr);
$Svlist= explode(",",$avvalarr[$pnx]);
$lenP=   sizeof($Pvlist);
$lenS=   sizeof($Svlist);
if ($lenP != $lenS) {
	$evalstr=      "Wrong number of entries.";
	$response=     array (	'evalstr'=>$evalstr,
							'ptryarr'=>$ptryarr,
							'ansYES'=> $ansYES  );
	$jsonresponse= json_encode($response);
	echo $jsonresponse;	
	return ;	
}

// for each av in part pnx, get Sval and evaluate ----------------------------->
$evalstr= "";
$isYES= true;
for ($j=0; $j<sizeof($Svlist); $j++) {
	$Pval= $Pvlist[$j];
	$Sval= $Svlist[$j];

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
				if ($Ptrim == $Strim) {	$res= "YES"; }						
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
		$Scode=  $ivcode.'$x= '.$xtest.'; $Sval= '.$Sfx.';return $Sval;';
		$Snbr=   eval($Scode);
		
		$Pcode=  $ivcode.'$x= '.$xtest.';$Pvbl= '.$Pval.';return $Pvbl;';
		$Pnbr=  eval($Pcode);
		$res= comp2Nbrs($Pnbr,$Snbr,$ansfmt);				
	}
	$evalstr=      $evalstr.",".$res;
	if ($res !== "YES") { $isYES= false; }
}	
$evalstr= substr($evalstr,1);	// trim leading comma

// update curr_prob file
$ptryarr[$pnx]=   $ptryarr[$pnx] +1;
if ($isYES) { 
	$ansYES[$pnx]= "YES";
}
else {
	$ansYES[$pnx]= "NO";	
}

$wrtobj= array(	'unitid'=>       $unitid,
				'unitnp'=>       $nprobs,
				'prbnum'=>       $prbnum,
				'showPROGRESS'=> $showPROGRESS,
				'showANSWER'=>	 $showANSWER,
				'ninst'=>		 $ninst,
				'ivcode'=>		 $ivcode,
				'avvalarr'=>	 $avvalarr,
				'ptryarr'=>		 $ptryarr,
				'ansYES'=>		 $ansYES
			  );				
$data= json_encode($wrtobj);					
file_put_contents($cpfile,$data);

// echo eval results ---------------------------------------------------------->
$response=     array (	'evalstr'=>$evalstr,
						'ptryarr'=>$ptryarr,
						'ansYES'=> $ansYES  );
$jsonresponse= json_encode($response);
echo $jsonresponse;
?>