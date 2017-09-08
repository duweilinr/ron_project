<?php
// File: dbput.php	rev. 6/21/2017 rcr
// put problem data in dbs/<probid> db
include './nocache.php';

// unpack POSTed data --------------------------------------------------------->
$postdata= file_get_contents("php://input");
$request=  json_decode($postdata);
$caller=   $request->caller;
$unitid=   $request->unitid;
$prbnum=   $request->prbnum;
$prblin=   $request->prblin;
$ivlin=    $request->ivlin;
$avlin=    $request->avlin;

$probid=  $unitid."_".$prbnum;
$filstr1= "./Units/U_".$unitid."/".$probid."/".$probid;

// save the prob definition data ---------------------------------------------->
$saveit= array(
		'unitid'=>   $unitid,
		'prbnum'=>   $prbnum,
		'prblin'=>   $prblin,
		'ivlin'=>    $ivlin,
		'avlin'=>    $avlin  );
$data= json_encode($saveit);
file_put_contents($filstr1.'_defn.txt',$data);

// NOTE. json_encode generates escape characters in data file due to code symbols like '/' for divide. json_decode 'undoes' these.

// return to caller
$output=       $probid." Setup successful.";	
$response=     array ('output'=>$output);
$jsonresponse= json_encode($response);
echo $jsonresponse;		
?>