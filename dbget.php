<?php
// File: dbget.php	rev. 06/21/2017 rcr
// gets problem data for callers: prob_run4 and prob_form4
include './nocache.php';
 
// unpack POSTed data --------------------------------------------------------->
$postdata= file_get_contents("php://input");
$request=  json_decode($postdata);
$unitid=   $request->unitid;
$prbnum=   $request->prbnum;

$probid=   $unitid."_".$prbnum;
$filestr1= "./Units/U_".$unitid."/".$probid."/".$probid;

// get data from definition db
$filestr=  file_get_contents($filestr1.'_defn.txt');
$request=  json_decode($filestr);
$unitid=   $request->unitid;
$prbnum=   $request->prbnum;
$prblin=   $request->prblin;
$ivlin=    $request->ivlin;
$avlin=    $request->avlin;

// NOTE. Data written by dbput contains escape characters like '/' in solntext.
//		 Be sure to undo here by full read and write.

// prepare data for return and send ------------------------------------------->
$response= array (	'unitid'=>   $unitid,
					'prbnum'=>   $prbnum,
					'prblin'=>   $prblin,
					'ivlin' =>   $ivlin,
					'avlin' =>   $avlin  );
$jsonresponse= json_encode($response);
echo $jsonresponse;		
?>