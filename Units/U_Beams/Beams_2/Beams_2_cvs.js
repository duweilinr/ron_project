// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 100;
	var y0= 250;
	var xydata= {x0:x0,xmin:50,xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
//	Draw structure
	var Lp=  590;

	// draw x and y axes
	cDrawArrow(cid,x0-50,y0,x0+Lp+50,y0,"gray",1,true);		// x axis
	cDrawArrow(cid,x0,y0+60,x0,y0-120,"gray",1,true);		// y axis
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "X",x0+Lp+45,y0+20);
	ctx.fillText( "Y",x0-20,y0-100);

	// draw beam body	
	var xbs= x0-12;
	var xbe= x0+Lp+12;
	cDrawLine(cid,xbs,y0,   xbe,y0,   "lightblue",24,"butt");
	cDrawLine(cid,xbs,y0-16,xbe,y0-16,"black",3,"butt");
	cDrawLine(cid,xbs,y0-13,xbe,y0-13,"gray",2,"butt");
	cDrawLine(cid,xbs,y0+16,xbe,y0+16,"black",3,"butt");
	cDrawLine(cid,xbs,y0+13,xbe,y0+13,"gray",2,"butt");	

	// draw supports
	cDrawRectxy(cid,x0-8,y0-8,x0+8,y0+28,"black",2,"lightgray");
	cDrawLine(cid,x0-20,y0+30,x0+20,y0+30,"black",6,"butt"); // pad
	cDrawDot(cid,xbe-12,y0+22,5,"gray");
	cDrawLine(cid,xbe-32,y0+30,xbe+8,y0+30,"black",6,"butt"); // pad	
	
	cDrawDot(cid,x0,y0,3,"black");		// A
	cDrawDot(cid,x0+Lp,y0,3,"black");	// B
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "A",x0-30,y0-10);
	ctx.fillText( "B",x0+Lp+20,y0-10);
	
	cDrawDoubleArrow(cid,x0,y0+40,x0+Lp,y0+40,"gray",1,true);
	cDrawTextBG(cid," L ",x0+Lp/2-8,y0+31);
	cDrawLine(cid,x0+Lp,y0+18,x0+Lp,y0+55,"gray",1,"round");

	// draw uniform distributed load
	cDrawLine(cid,x0,y0-60,x0+Lp,y0-60,"red",1,"round");
	var xd= x0;		// starting x
	var y1= y0-60;
	var xB= x0+Lp;	// ending x
	var y2= y0-17;
	var dx= Lp/30;
	while ( xd < xB+5 ) {
		cDrawForce2(cid,xd,y1,xd,y2,2,"red","round",10);
		xd= xd+dx;
	}
	ctx.fillStyle="red";
	ctx.fillText("w",x0+20,y0-80);

	return xydata;
}

// drawCvs2
function drawCvs2(xydata,ivvald)
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
}