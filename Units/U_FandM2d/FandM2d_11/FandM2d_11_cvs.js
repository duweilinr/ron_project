// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 450;
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
	cDrawRectxy(cid,x0-300,y0,x0+100,y0+30,"gray",1,"gray")
	cDrawRectxy(cid,x0-300,y0,x0,y0-160,"lightblue",1,"lightblue")	
	cDrawRectxy(cid,x0,y0-200,x0+40,y0,"black",1,"lightgray")

	cDrawDot(cid,x0,y0,3,"black");		// A
	
	cDrawDoubleArrow(cid,x0-340,y0,x0-340,y0-160,"gray",1,true);
	cDrawTextBG(cid,"h",x0-344,y0-80);
	cDrawLine(cid,x0-302,y0-160,x0-360,y0-160,"gray",1,"round");
		
	// label fixed points
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "A",x0+5,y0-5);

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
		cDrawForce2(cid,x1,yd,x0,yd,2,"red","round",8);
		yd= yd+dy;
		x1= x1-dx;
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