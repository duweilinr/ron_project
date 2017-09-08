// File: zzTest_5_cvs.js	07/01/2017
// Contents:
//	Line  8: function doPrblin()
//	Line 24: function drawCvs1()
//	Line 57: function drawCvs2(xydata,ivcode)

// define prblin in js code --------------------------------------------------->
function doPrblin()
{
var strdeg= "\u00B0";

var prblin= [];
prblin[0]=
"(PEq2d_1) Forces F1 and F2 act on a hinge pin, conveniently located at the "
"origin, as shown below.";
prblin[1]=
"(1) What is FRmag, the magnitude of resultant force FR?";
prblin[2]=
"(2) What is FRdeg, the angle of the resultant force FR, in ".concat(strdeg,"  (degrees)?");	

return prblin;
}


// define the base figure on canvas "layer1" ---------------------------------->
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 240;
	var xydata= {x0:x0,xmin:x0-300,xmax:x0+300,
				 y0:y0,ybot:y0+200,ytop:y0-200 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
	cDrawDot(cid,x0,y0,20,"silver");
	cDrawLine(cid,x0,y0,x0,y0+20,"silver",40,"butt");
	cDrawDot(cid,x0,y0,6,"black");
	cDrawLine(cid,x0-30,y0+26,x0+30,y0+26,"silver",12,"butt");
	cDrawLine(cid,x0-40,y0+34,x0+40,y0+34,"gray",4,"butt");

	// label fixed points
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText( "A",x0-15,y0-30);

	return xydata;
}

// define the instance-varying figure on canvas "layer2" ---------------------->
function drawCvs2(xydata,ivcode)
{
	var cid= "layer2";
	var c=   document.getElementById(cid);
	var ctx= c.getContext('2d');

	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;	
	cDrawGrid1(cid,x0,xmin,xmax,y0,ybot,ytop);

	// extract values from ivcode
	var stmt= ivcode.split(";");
	var val=  [];
	for (var i=0; i<stmt.length-1; i++) {
		var list= stmt[i].split("=");
		val[i]=   list[1];
	}
	var F1m= Number(val[0])*0.5;
	var F1d= Number(val[1]);
	var F2m= Number(val[2])*0.5;
	var F2d= Number(val[3]);
	
	// draw the forces
	var F1x= F1m*Math.cos(F1d*Math.PI/180);
	var F1y= F1m*Math.sin(F1d*Math.PI/180);	
	var F2x= F2m*Math.cos(F2d*Math.PI/180);
	var F2y= F2m*Math.sin(F2d*Math.PI/180);		
	
	cDrawArrow(cid,x0,y0,x0+F1x,y0-F1y,"red",3,true);	
	cDrawArrow(cid,x0,y0,x0+F2x,y0-F2y,"red",3,true);		
}
// EOF ------------------------------------------------------------------------>