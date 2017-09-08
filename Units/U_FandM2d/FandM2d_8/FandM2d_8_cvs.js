// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 100;
	var y0= 300;
	var xydata= {x0:x0,xmin:50,xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
		
	//	Draw structure
	var Lp=  500;
	var LBp= 160;
	var LCp= 300;

	cDrawRectxy(cid,x0-5,y0-10,x0+Lp+5,y0+10,"black",1,"lightgray")
	cDrawDot(cid,x0,y0,3,"black");		// A
	cDrawDot(cid,x0+LBp,y0,3,"black");	// B
	cDrawDot(cid,x0+LCp,y0,3,"black");	// C
	cDrawDot(cid,x0+Lp,y0,3,"black");	// D
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "A",x0-20,y0-5);	
	ctx.fillText( "B",x0+LBp-20,y0+5);	
	ctx.fillText( "C",x0+LCp-20,y0+5);	
	ctx.fillText( "D",x0+Lp+15,y0-5);	
	
	cDrawDoubleArrow(cid,x0,y0+30,x0+LBp,y0+30,"gray",1,true);
	cDrawTextBG(cid," LB ",x0+LBp/2-10,y0+22);
	cDrawLine(cid,x0+LBp,y0+12,x0+LBp,y0+40,"gray",1,"round");
	cDrawDoubleArrow(cid,x0,y0+55,x0+LCp,y0+55,"gray",1,true);
	cDrawTextBG(cid," LC ",x0+LCp/2-10,y0+47);
	cDrawLine(cid,x0+LCp,y0+12,x0+LCp,y0+65,"gray",1,"round");
	cDrawDoubleArrow(cid,x0,y0+80,x0+Lp,y0+80,"gray",1,true);
	cDrawTextBG(cid," L ",x0+Lp/2-10,y0+72);
	cDrawLine(cid,x0+Lp,y0+12,x0+Lp,y0+90,"gray",1,"round");

	// draw distributed load 1 - triangular
	var ymax1= 60;
	cDrawLine(cid,x0,y0-10,x0+LBp,y0-10-ymax1,"red",2,"round");
	var dx= 20;
	var xd= x0+dx;	
	var x2= x0+LBp;
	var dy= dx*ymax1/LBp;
	var y2= y0-10;	
	var y1= y2-dy; 
	while ( xd<x2+5 ) {
		cDrawForce2(cid,xd,y1,xd,y2,2,"red","round",6);
		xd= xd+dx;
		y1= y1-dy;
	}	
	
	// draw distributed load 2 - uniform
	cDrawLine(cid,x0+LBp,y0-10-ymax1,x0+LCp,y0-10-ymax1,"red",2,"round");
	xd= x0+LBp+dx;	
	x2= x0+LCp;
	var dy= dx*ymax1/(LCp-LBp);
	var y2= y0-10;	
	var y1= y2-ymax1; 
	while ( xd<x2+5 ) {
		cDrawForce2(cid,xd,y1,xd,y2,2,"red","round",6);
		xd= xd+dx;
	}
	
	// draw distributed load 3 - triangular
	var ymax2= 100;
	cDrawLine(cid,x0+LCp,y0-10,x0+Lp,y0-10-ymax2,"red",2,"round");	
	xd= x0+LCp+dx;	
	x2= x0+Lp;
	dy= dx*ymax2/(Lp-LCp);
	y2= y0-10;	
	y1= y2-dy; 
	while ( xd<x2+5 ) {
		cDrawForce2(cid,xd,y1,xd,y2,2,"red","round",6);
		xd= xd+dx;
		y1= y1-dy;
	}

	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText( "w1",x0+LBp,y0-ymax1-20);
	ctx.fillText( "w2",x0+Lp+5 ,y0-ymax2-5);	

	return xydata;
}

// drawCvs2
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


	// draw the force

	
}