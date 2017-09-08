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
	var Lp= 550;

	// draw x and y axes
	cDrawArrow(cid,x0-50,y0,x0+Lp+50,y0,"gray",1,true);		// x axis
	cDrawArrow(cid,x0,y0+60,x0,y0-120,"gray",1,true);		// y axis
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "X",x0+Lp+45,y0+20);
	ctx.fillText( "Y",x0-20,y0-100);

	// draw beam body	
	var xbs= x0;
	var xbe= x0+Lp;
	cDrawLine(cid,xbs,y0,   xbe,y0,   "lightblue",24,"butt");
	cDrawLine(cid,xbs,y0-16,xbe,y0-16,"black",3,"butt");
	cDrawLine(cid,xbs,y0-12,xbe,y0-13,"lightgray",4,"butt");
	cDrawLine(cid,xbs,y0+12,xbe,y0+13,"lightgray",4,"butt");		
	cDrawLine(cid,xbs,y0+16,xbe,y0+16,"black",3,"butt");
		cDrawLine(cid,xbe,y0-16,xbe,y0+16,"black",1,"butt");

	// draw beam support
	var yb0= y0;
	cDrawLine(cid,xbs-18,yb0-70,xbs-18,yb0+70,"lightblue",30,"butt");	
	cDrawLine(cid,xbs-2, yb0-70,xbs-2, yb0+70,"black",3,"butt");
	cDrawLine(cid,xbs-6, yb0-70,xbs-6, yb0+70,"lightgray", 4,"butt");
	cDrawLine(cid,xbs-31,yb0-70,xbs-31,yb0+70,"lightgray", 4,"butt");	
	cDrawLine(cid,xbs-35,yb0-70,xbs-35,yb0+70,"black",3,"butt");
	
	cDrawDot(cid,x0,y0,3,"black");		// A
	cDrawDot(cid,x0+Lp/2,y0,3,"black");	// B
	cDrawDot(cid,x0+Lp,y0,3,"black");	// C	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "A",x0+10,y0+5);
	ctx.fillText( "B",x0+Lp/2-20,y0+5);
	ctx.fillText( "C",x0+Lp-20,y0+5);	
	
	cDrawDoubleArrow(cid,x0,y0+40,x0+Lp/2,y0+40,"gray",1,true);
	cDrawLine(cid,x0+Lp/2,y0+18,x0+Lp/2,y0+55,"gray",1,"round");	
	cDrawTextBG(cid," L/2 ",x0+Lp/4-8,y0+31);
	cDrawDoubleArrow(cid,x0+Lp/2,y0+40,x0+Lp,y0+40,"gray",1,true);	
	cDrawLine(cid,x0+Lp,y0+20,x0+Lp,y0+55,"gray",1,"round");
	cDrawTextBG(cid," L/2 ",x0+3*Lp/4-8,y0+31);	

	// distributed load w for section 1
	var xB= x0+Lp/2;
	cDrawLine(cid,xbs,yb0-80,xB,yb0-16,"red",2,"butt");
	var x= xbs;
	var dx= (xB-xbs)/16;
	var y= yb0 -80;				// tail of largest arrow
	var dy= (80-16)/16;
	for (var i= 0; i<15; i++) {		
		cDrawForce2(cid,x,y,x,yb0-18,2,"red","round",8);
		x= x+dx;
		y= y+dy;
	}	
	ctx.fillStyle="red";
	ctx.font="bold 16px Arial";
	ctx.fillText("w",xbs+20,yb0-85);

	// distributed load w for section 2
	cDrawLine(cid,xB,yb0-80,xbe,yb0-16,"red",2,"butt");
	x= xB;
	dx= (xbe-xB)/16;
	y= yb0 -80;
	for (var i= 0; i<15; i++) {
		cDrawForce2(cid,x,y,x,yb0-16,2,"red","round",8);	
		x= x+dx;
		y= y+dy;
	}	
	ctx.fillStyle="red";
	ctx.font="bold 16px Arial";
	ctx.fillText("w",xB+20,yb0-85);	
	
	cDrawMoment(cid,xbe,y0+25,xbe,y0-25,"red",3,"ccw");
	ctx.fillStyle="red";
	ctx.font="bold 16px Arial";
	ctx.fillText("M",xbe,y0-40);		

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