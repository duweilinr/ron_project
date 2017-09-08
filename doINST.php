<?php
// File: doINST.php	rev. 08/19/2017 rcr
// generate new instance data
// This version allows for fofx av types.
include './nocache.php';
include './lib_util.php'; 

// unpack POSTed data -------------------------------------------->
$postdata= file_get_contents("php://input");	// these data can be ignored
$request=  json_decode($postdata);
$caller=   $request->caller;

// get curr_prob data --------------------------------------------------------->
$cpfile=   	'./curr_prob.txt';
$filedata= 	file_get_contents($cpfile);
$request=  	json_decode($filedata);

$unitid=   	   $request->unitid;
$nprobs=	   $request->unitnp;
$prbnum=	   $request->prbnum;
$showPROGRESS= $request->showPROGRESS;
$showANSWER=   $request->showANSWER;
$ninst=		   $request->ninst;
$ivcode=	   $request->ivcode;
$avvalarr=	   $request->avvalarr;
$ptryarr=	   $request->ptryarr;
$ansYES=	   $request->ansYES;

// check ninst against limit here (no limit currently)
$ninst= $ninst +1;

// include the solver code
$probid=   $unitid."_".$prbnum;
$filestr1= "./Units/U_".$unitid."/".$probid."/".$probid;
$codefil=  $filestr1."_solver.php";
include $codefil;	// function code_solver($ivvallist) in PEq2d_solver.php

// set up for new instance and solution --------------------------------------->
$fildata= file_get_contents($filestr1."_defn.txt");
$data=    json_decode($fildata);
$ivlin=   $data->ivlin;		// these data used to find ivs
$avlin=   $data->avlin;		// these data used to save answer results

// ivstr, ivcode generation from ivlin input ---------------------------------->
$ivlen=  sizeof($ivlin);
$ivstr=  "";		// for display
$ivcode= "";		// for use with solution
for ($i=0; $i<$ivlen; $i++) {
	$list= explode(",",$ivlin[$i]);
	$name= $list[0];
	$unit= $list[1];
	$llim= $list[2];
	$ulim= $list[3];

	$rnum=   mt_rand(0,1000)/1000;	// random uniform	
	$val=    $llim +($ulim-$llim)*$rnum;
	$valf=   fmtnbr($val);
	$ivvallist[$i]= $valf;
	$ivstr=  $ivstr." ".$name."= ".$valf." ".$unit.",";	// for display
	$ivcode= $ivcode."$".$name."=".$valf.";";			// cvs2, fofx EVAL
}
$ivstr= substr($ivstr,0,-1);		// trim final comma

// solver section ------------------------------------------------------------->
$avcoderes= code_solver($ivvallist);  // avs solved by code; ret in avlin order

$np=        sizeof($avlin);			// nmbr ans parts
$avvalarr=  array_fill(0,$np,"");	// holds avvals in avstr fmt in avlin order
$icr= 	   0;						// index for code results list
for ($pnx=0; $pnx<$np; $pnx++) {
	// for each answer part ...
	$avstr=     "";
	$avlinlist= explode(",",$avlin[$pnx]);
	for ($j=0; $j<sizeof($avlinlist); $j++) {
		// for each subpart of the answer line ...
		$pnxsub=    explode(":",$avlinlist[$j]);
		$pnxsublen= sizeof($pnxsub);
		if ($pnxsublen == 1) {
			// type is 'code' by default
			$val= $avcoderes[$icr];
			$icr= $icr+1;
			if (is_numeric($val)) {
				$avsub= fmtnbr($val);
			}
			else {
				$avsub= $val;		// pass text through directly
			}
		}
		else {
			$typ= $pnxsub[1];	// allows for more types than fofx
			// process the av value by type
			if ($typ === "fofx") {
				$avsub= $avlin[$pnx];
			}
		}
		$avstr= $avstr.$avsub.",";
	}
	$avstr=          substr($avstr,0,-1);		// trim final comma 
	$avvalarr[$pnx]= $avstr;
}

// save results and return to caller ------------------------------------------>
$ptryarr= array_fill(0,$np,0);		// nbr EVAL tries for each part
$ansYES=  array_fill(0,$np,"");		// text results for EVALs
				
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
$data=   json_encode($wrtobj);
file_put_contents($cpfile,$data);

$response=     array('ninst'=>$ninst,'ivcode'=>$ivcode,'ivstr'=>$ivstr);
$jsonresponse= json_encode($response);
echo $jsonresponse;		
?>