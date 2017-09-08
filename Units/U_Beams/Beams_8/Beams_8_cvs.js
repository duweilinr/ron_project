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
	var xCp= x0 +360;
	var dp=  70;		// crossbar half-length

	// draw x and y axes
	cDrawArrow(cid,x0-50,y0,x0+Lp+50,y0,"gray",1,true);		// x axis
	cDrawArrow(cid,x0,y0+105,x0,y0-120,"gray",1,true);		// y axis
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "X",x0+Lp+45,y0+20);
	ctx.fillText( "Y",x0-20,y0-100);

	var xbs= x0-12;
	var xbe= x0+Lp+12;

	// draw cross-beam
	cDrawLine(cid,xCp,y0-dp,xCp,y0+dp,"black",6,"round");	
	
	// draw beam body	
	cDrawLine(cid,xbs,y0,   xbe,y0,   "lightblue",24,"butt");
	cDrawLine(cid,xbs,y0-14,xbe,y0-14,"black",3,"butt");
	cDrawLine(cid,xbs,y0-11,xbe,y0-11,"gray",2,"butt");
	cDrawLine(cid,xbs,y0+14,xbe,y0+14,"black",3,"butt");
	cDrawLine(cid,xbs,y0+11,xbe,y0+11,"gray",2,"butt");	

	// draw supports
	cDrawRectxy(cid,x0-8,y0-8,x0+8,y0+28,"black",2,"lightgray");
	cDrawLine(cid,x0-20,y0+30,x0+20,y0+30,"black",6,"butt"); // pad
	cDrawDot(cid,x0+Lp,y0+21,6,"gray");
	cDrawLine(cid,x0+Lp-20,y0+30,x0+Lp+20,y0+30,"black",6,"butt"); // pad	
	
	var xCp= x0 +360;
	cDrawDot(cid,x0,y0,3,"black");		// A
	cDrawDot(cid,x0+Lp,y0,3,"black");	// B
	cDrawDot(cid,xCp,y0,3,"black");	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "A",x0-30,y0-10);
	ctx.fillText( "B",x0+Lp+20,y0-10);
	ctx.fillText( "C",xCp-20,y0+5);		
	
	cDrawDoubleArrow(cid,x0,y0+50,xCp,y0+50,"gray",1,true);
	cDrawTextBG(cid," a ",(x0+xCp)/2-15,y0+41);
	cDrawLine(cid,xCp,y0+18,xCp,y0+65,"gray",1,"round");		
	
	cDrawDoubleArrow(cid,x0,y0+90,x0+Lp,y0+90,"gray",1,true);
	cDrawTextBG(cid," 20 ft ",x0+Lp/2-8,y0+81);
	cDrawLine(cid,x0+Lp,y0+18,x0+Lp,y0+105,"gray",1,"round");

	cDrawDoubleArrow(cid,xCp+25,y0,xCp+25,y0-dp,"gray",1,true);
	cDrawDoubleArrow(cid,xCp+25,y0,xCp+25,y0+dp,"gray",1,true);	
	cDrawTextBG(cid,"d",xCp+20,y0-dp/2-10);
	cDrawTextBG(cid,"d",xCp+20,y0+dp/2-5);
	cDrawLine(cid,xCp+5,y0,xCp+45,y0,"gray",1,"round");
	cDrawLine(cid,xCp+5,y0-dp,xCp+45,y0-dp,"gray",1,"round");	
	

	cDrawForce2(cid,xCp-80,y0-dp,xCp-3,y0-dp,3,"red","round",12);
	cDrawForce2(cid,xCp+80,y0+dp,xCp+3,y0+dp,3,"red","round",12);
	ctx.fillStyle="red";
	ctx.font="bold 16px Arial";		
	ctx.fillText( "F1",xCp-75,y0-dp-10);
	ctx.fillText( "F1",xCp+55,y0+dp-10);	

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