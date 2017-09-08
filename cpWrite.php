<?php
// File: cpWrite.php	rev. 07/29/2017 rcr
// write to curr_prob file
// called by: main and unit_main pages
include './nocache.php';

// unpack POSTed data --------------------------------------------------------->
$postdata= file_get_contents("php://input");
$request=  json_decode($postdata);
$caller=   $request->caller;

$cpfile=   "./curr_prob.txt";

if ($caller === "main") {
	// posted data
	$unitid= 	   $request->unitid;
	$nprobs= 	   $request->unitnp;
	// add default data
	$wrtobj= array(	'unitid'=>       $unitid,
					'unitnp'=>       $nprobs,
					'prbnum'=>       0,
					'showPROGRESS'=> "ON",
					'showANSWER'=>	 "ON"
				  );
	$data= json_encode($wrtobj);					
	file_put_contents($cpfile,$data);
}
else if ($caller === "unit_main") {
	// posted data
	$unitid= 	   $request->unitid;
	$nprobs= 	   $request->unitnp;
	$prbnum= 	   $request->prbnum;
	$showPROGRESS= $request->showPROGRESS;
	$showANSWER=   $request->showANSWER;
	// add default data
	$wrtobj= array(	'unitid'=>       $unitid,
					'unitnp'=>       $nprobs,
					'prbnum'=>       $prbnum,
					'showPROGRESS'=> $showPROGRESS,
					'showANSWER'=>	 $showANSWER,
					'ninst'=>		 0,
					'ivcode'=>		 "",
					'avvalarr'=>	 [],
					'ptryarr'=>		 [],
					'ansYES'=>		 []
				  );				
	$data= json_encode($wrtobj);					
	file_put_contents($cpfile,$data);	
}
else if ($caller === "doINST") {
	// posted data
	$unitid=       	$request->unitid;
	$nprobs=	   	$request->unitnp;
	$prbnum=       	$request->prbnum;
	$showPROGRESS= 	$request->showPROGRESS;
	$showANSWER=   	$request->showANSWER;
	$ninst=			$request->ninst;
	$ivcode=		$request->ivcode;
	$avvalarr=		$request->avvalarr;
	$ptryarr=		$request->ptryarr;
	$ansYES=		$request->ansYES;

	// write curr_prob file
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
}

// return to caller
$output=       "curr_prob file set up.";	
$response=     array ('output'=>$output);
$jsonresponse= json_encode($response);
echo $jsonresponse;		
?>