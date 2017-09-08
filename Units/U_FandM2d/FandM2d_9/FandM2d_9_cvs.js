// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 150;
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
	var LDp= 500;
	var LBp= 160;
	var LCp= 380;

	// draw fixed body
	cDrawRectxy(cid,x0-5,y0-10,x0+LDp+5,y0+10,"black",1,"lightgray")
	
	cDrawDot(cid,x0,y0,3,"black");		// A
	cDrawDot(cid,x0+LBp,y0,3,"black");	// B
	cDrawDot(cid,x0+LCp,y0,3,"black");	// C
	cDrawDot(cid,x0+LDp,y0,3,"black");	// D
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "A",x0-20,y0-5);	
	ctx.fillText( "B",x0+LBp-20,y0+5);	
	ctx.fillText( "C",x0+LCp-20,y0+5);	
	ctx.fillText( "D",x0+LDp+15,y0-5);		
		
	cDrawDoubleArrow(cid,x0,y0+35,x0+LBp,y0+35,"gray",1,true);
	cDrawTextBG(cid," L1 ",x0+LBp/2-15,y0+27);
	cDrawLine(cid,x0+LBp,y0+12,x0+LBp,y0+50,"gray",1,"round");

	cDrawDoubleArrow(cid,x0+LBp,y0+35,x0+LCp,y0+35,"gray",1,true);
	cDrawTextBG(cid," L2 ",x0+(LBp+LCp)/2-15,y0+27);
	cDrawLine(cid,x0+LCp,y0+12,x0+LCp,y0+50,"gray",1,"round");

	cDrawDoubleArrow(cid,x0,y0+65,x0+LDp,y0+65,"gray",1,true);
	cDrawTextBG(cid," 15 ft ",x0+LDp/2-15,y0+57);
	cDrawLine(cid,x0+LDp,y0+12,x0+LDp,y0+75,"gray",1,"round");	

	// draw distributed load 1 - triangular
	var hp= 20;
	var cp= 0.0015;		// y= hp +cp*x*x locally in segment
	var dx= 20;
	var x=  -(LCp-LBp);	// local segment start
	var y=  hp +cp*x*x;
	var y2= y0-10;	
	var y1s= y0-10-y;
	var x2= 0;			// local segment end
	var xd= x0+LBp;		// pixel position from B
	cDrawForce2(cid,xd,y1s,xd,y2,2,"red","round",6);
	while ( x<x2-dx+5) {
		x=  x+dx;
		xd= xd+dx;
		y=  hp+cp*x*x;
		cDrawForce2(cid,xd,y0-10-y,xd,y2,2,"red","round",6);
		cDrawLine(cid,xd-dx,y1s,xd,y0-10-y,"red",2,"round");
		y1s= y0-10-y;
	}
	
	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText( "w= a*exp( b*(x-L1) )",x0+60,y0-120);	
		
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