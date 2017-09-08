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
	var Lp=  460;
	var LBp= 140;
	var LCp= 380;

	// draw fixed body
	cDrawRectxy(cid,x0-5,y0-10,x0+Lp,y0+10,"black",2,"lightgray")
	cDrawDot(cid,x0,y0,3,"black");		// A
	cDrawDot(cid,x0+LBp,y0,3,"black");	// B
	cDrawDot(cid,x0+LCp,y0,3,"black");	// C	
	
	cDrawDoubleArrow(cid,x0,y0+30,x0+LBp,y0+30,"gray",1,true);
	cDrawTextBG(cid,"LB",x0+LBp/2-8,y0+21);
	cDrawDoubleArrow(cid,x0,y0+55,x0+LCp,y0+55,"gray",1,true);
	cDrawTextBG(cid,"LC",x0+LCp/2-8,y0+55-8);	
	cDrawDoubleArrow(cid,x0,y0+85,x0+Lp,y0+85,"gray",1,true);
	cDrawTextBG(cid,"L",x0+Lp/2-8,y0+85-8);
	cDrawLine(cid,x0+LBp,y0+12,x0+LBp,y0+35,"gray",1,"round");
	cDrawLine(cid,x0+LCp,y0+12,x0+LCp,y0+70,"gray",1,"round");
	cDrawLine(cid,x0+Lp,y0+12,x0+Lp,y0+100,"gray",1,"round");	

	// label fixed points
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText( "A",x0-15,y0-20);
	ctx.fillText( "B",x0+LBp-18,y0-20);
	ctx.fillText( "C",x0+LCp+6,y0-20);
	
	
	// draw distributed load - uniform
	cDrawLine(cid,x0+LBp,y0-60,x0+LCp,y0-60,"red",1,"round");
	var xB= x0+LBp;		// starting x
	var y1= y0-60;
	var xC= x0+LCp;		// ending x
	var y2= y0-11;
	var dx= 20;
	var xd= xB;
	while ( xd < xC+5 ) {
		cDrawForce2(cid,xd,y1,xd,y2,2,"red","round",10);
		xd= xd+dx;
	}

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