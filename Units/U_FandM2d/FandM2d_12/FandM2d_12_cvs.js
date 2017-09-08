// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 350;
	var y0= 350;
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
	cDrawRectxy(cid,x0-240,y0,x0+100,y0+30,"gray",1,"gray")
	cDrawRectxy(cid,x0-240,y0,x0,y0-160,"lightblue",1,"lightblue")	
	cDrawRectxy(cid,x0,y0-190,x0+10,y0,"lightgray",1,"lightgray")
	cDrawRectxy(cid,x0,y0-200,x0+105,y0-190,"lightgray",1,"lightgray")

	cDrawDot(cid,x0,y0,4,"black");		// A
	
	cDrawDoubleArrow(cid,x0-160,y0,x0-160,y0-160,"gray",1,true);
	cDrawTextBG(cid," h1 ",x0-170,y0-80);
	cDrawDoubleArrow(cid,x0+140,y0,x0+140,y0-200,"gray",1,true);
	cDrawTextBG(cid,"20m",x0+130,y0-100);
	cDrawLine(cid,x0+107,y0-200,x0+165,y0-200,"gray",1,"round");
	
	cDrawDoubleArrow(cid,x0,y0-265,x0+100,y0-265,"gray",1,true);
	cDrawTextBG(cid," h2 ",x0+40,y0-272);
	cDrawLine(cid,x0+100,y0-242,x0+100,y0-285,"gray",1,"round");
	
	// label fixed points
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "A",x0+10,y0-5);

	// draw distributed load - triangular
	var hp= 160;		// h in pixels
	var wp= 100;		// w in pixels (base)	
	cDrawLine(cid,x0-wp,y0,x0,y0-hp,"red",1,"round");
	var y2= y0;
	var dy= 20;
	var dx= dy*wp/hp;
	var yd= y0-hp+20;
	var x1= x0-dx;
	while ( yd < y0+5 ) {
		cDrawForce2(cid,x1,yd,x0-2,yd,2,"red","round",8);
		yd= yd+dy;
		x1= x1-dx;
	}
	
	cDrawLine(cid,x0,y0-240,x0+100,y0-240,"red",2,"round");
	dx= 20;
	xd= x0;
	while ( xd < x0+105 ) {
		cDrawForce2(cid,xd,y0-240,xd,y0-200,2,"red","round",8);
		xd= xd+dx;
	}
	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText( "p",x0-15,y0-240);
		
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