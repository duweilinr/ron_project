<?php
// File: cvs_GetURLthumb.php	rev. 04/04/2017 rcr
// gets dataURL form of canvas image sized as thumb
// caller: cvs_wkbs_img

include './nocache.php';
include './lib_util.php';
 
// unpack all relevant POSTed data -------------------------------------------->
$postdata= file_get_contents("php://input");
$request= json_decode($postdata);
$caller=  $request->caller;
$unitid=  $request->unitid;
$prbnum=  $request->prbnum;


$probid=  $unitid."_".$prbnum;
$fileid= "./Units/U_".$unitid."/dbs/db_".$probid."_url.txt";
//$filestr= file_get_contents($fileid);
//$data=    json_decode($filestr);

$obj= array( 'fileid'=>$fileid );
$data= $obj;
// return to POSTing caller --------------------------------------------------->
$jsonresponse= json_encode($data);
echo $jsonresponse;		
?>