<?php
// File: doINST5.php	rev. 06/21/2017 rcr
// generate new instance data
// This differs from doINST because it allows for fofx av types.
include './nocache.php';
include './lib_util2.php'; 

// unpack all relevant POSTed data -------------------------------------------->
$postdata= file_get_contents("php://input");
$request=  json_decode($postdata);
$unitid=   $request->unitid;
$prbnum=   $request->prbnum;
$state=    $request->state;		// new or old

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
	$ivstr=  $ivstr." ".$name."=".$valf." ".$unit.",";	// for display
	$ivcode= $ivcode."$".$name."=".$valf.";";			// cvs2, fofx EVAL
}
$ivstr= substr($ivstr,0,-1);		// trim final comma

// solver section ------------------------------------------------------------->
$avcoderes= code_solver($ivvallist);  // avs solved by code; ret in avlin order

$avvalarr= array();	// holds avvals in avstr format in avlin order
$icr= 	   0;		// index for code results list
$pnxlen=   sizeof($avlin);
for ($pnx=0; $pnx<$pnxlen; $pnx++) {
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

// update _inst file  (ninst,ivcode,avstrval) --------------------------------->
if ($state == "new") {
	$ninst=   1;
}
else if ($state == "old") {
	$fildata= file_get_contents($filestr1."_inst.txt");
	$data=    json_decode($fildata);
	$ninst=   $data->ninst;
	$ninst=   $ninst +1;	
}

// save results and return to caller ------------------------------------------>
$saveit= array(	'ninst'=>$ninst,'ivcode'=>$ivcode,'avvalarr'=>$avvalarr );
$data=   json_encode($saveit);
file_put_contents($filestr1."_inst.txt",$data);

$response= array('ninst'=>$ninst,'ivcode'=>$ivcode,'ivstr'=>$ivstr);
$jsonresponse= json_encode($response);
echo $jsonresponse;		
?>