<?php
// File: Vecs3d_4_solver.php	rev. 07/08/2017 rcr
// generate solution from code for this instance (no 'fofx' answers)
function code_solver($ivvallist) {

// unpack the ivs
$FB= $ivvallist[0];
$FC= $ivvallist[1];
$FD= $ivvallist[2];

// run the solution code
$FRmag= sqrt(((((-10*$FB)/(sqrt(10*10+15*15+30*30)))+((20*$FC)/(sqrt(20*20+25*25+30*30)))+((10*$FD)/(sqrt(10*10+5*5+30*30))))*(((-10*$FB)/(sqrt(10*10+15*15+30*30)))+((20*$FC)/(sqrt(20*20+25*25+30*30)))+((10*$FD)/(sqrt(10*10+5*5+30*30)))))+((((15*$FB)/(sqrt(10*10+15*15+30*30)))+((25*$FC)/(sqrt(20*20+25*25+30*30)))-((5*$FD)/(sqrt(10*10+5*5+30*30))))*(((15*$FB)/(sqrt(10*10+15*15+30*30)))+((25*$FC)/(sqrt(20*20+25*25+30*30)))-((5*$FD)/(sqrt(10*10+5*5+30*30)))))+((((-30*$FB)/(sqrt(10*10+15*15+30*30)))-((30*$FC)/(sqrt(20*20+25*25+30*30)))-((30*$FD)/(sqrt(10*10+5*5+30*30))))*(((-30*$FB)/(sqrt(10*10+15*15+30*30)))-((30*$FC)/(sqrt(20*20+25*25+30*30)))-((30*$FD)/(sqrt(10*10+5*5+30*30))))));
$alphar= acos((((15*$FB)/(sqrt(10*10+15*15+30*30)))+((25*$FC)/(sqrt(20*20+25*25+30*30)))-((5*$FD)/(sqrt(10*10+5*5+30*30))))/$FRmag);
$betar= acos((((-10*$FB)/(sqrt(10*10+15*15+30*30)))+((20*$FC)/(sqrt(20*20+25*25+30*30)))+((10*$FD)/(sqrt(10*10+5*5+30*30))))/$FRmag);
$gammar= acos((((-30*$FB)/(sqrt(10*10+15*15+30*30)))-((30*$FC)/(sqrt(20*20+25*25+30*30)))-((30*$FD)/(sqrt(10*10+5*5+30*30))))/$FRmag);
$alpha= $alphar*180/M_PI;
$beta=  $betar*180/M_PI;
$gamma= $gammar*180/M_PI;

// pack the results	
$avvallist[0]= $alpha;
$avvallist[1]= $beta;
$avvallist[2]= $gamma;
$avvallist[3]= $FRmag;
 
// return to caller
return $avvallist;
}
?>