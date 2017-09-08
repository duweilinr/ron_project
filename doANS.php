<?php
// File: doANS.php		rev. 07/29/2017 rcr
// called by prob_run2.php with input ans part nbr index
// returns avstr

include './nocache.php';

// unpack posted data
$postdata= file_get_contents("php://input");
$request=  json_decode($postdata);
$pnx=      $request->pnx;
			
$cpfile=   './curr_prob.txt';
$filedata= file_get_contents($cpfile);
$request=  json_decode($filedata);
$avvalarr= $request->avvalarr;
	
$avstr= $avvalarr[$pnx];
$list=	explode(":",$avstr);
$len=   sizeof($list);
if ($len == 1) {
	$avvalstr= $avstr;
}
else {
	$avvalstr= $list[2];
}
	//file_put_contents('./debug_avvalstr.txt',$avvalstr);
	
// return the avvalstr
$response= array ('avvalstr'=>$avvalstr);
$jsonresponse= json_encode($response);
echo $jsonresponse;
?>