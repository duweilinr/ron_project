// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 200;
	var y0= 150;
	var xydata= {x0:x0,xmin:50,xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
	// start this figure details
	var xBp= x0+300;
	var yBp= y0;
	var xCp= x0+120;
	var yCp= y0+200;
	var xDp= x0+120;
	var yDp= y0+120;
/*		
	cDrawArrow(cid,x0-80,y0,xBp+160,y0,"gray",1,true);	// x axis
	cDrawArrow(cid,x0,y0+340,x0,y0-60,"gray",1,true);	// y axis
	ctx.fillStyle="gray";
	ctx.font="14px Arial";
	ctx.fillText("X",xBp+140,y0+20);
	ctx.fillText("Y",x0-25,y0-40);
*/
	cDrawDot(cid,x0,y0,8,"black");
	cDrawDot(cid,x0,y0,4,"white");
	cDrawLine(cid,x0-20,y0-8,x0+20,y0-8,"black",8,"butt");
	cDrawDot(cid,xBp,yBp,8,"black");
	cDrawDot(cid,xBp,yBp,4,"white");
	cDrawLine(cid,xBp-20,yBp-8,xBp+20,yBp-8,"black",8,"butt");
	
	cDrawLine(cid,x0,y0,xDp,yDp,"darkgray",6,"round");		// cable AD
	cDrawLine(cid,xDp,yDp,xBp,yBp,"darkgray",6,"round");	// cable BD
	
	cDrawDot(cid,xDp,yDp,6,"blue");							// ring
	
	var w= 5;
	var n= 16;
	cDrawSpringR(cid,xDp,yDp,xCp,yCp,w,n);				// spring
	cDrawDot(cid,xCp,yCp,4,"blue");
	
	cDrawDot(cid,xCp,yCp+20,20,"gray");					// mass
	cDrawDot(cid,xCp,yCp+20,18,"silver");
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("M",xCp-40,yCp+30);
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",x0-30,y0+20);
	ctx.fillText("B",xBp-5,yBp+25);
	ctx.fillText("C",xCp-20,yCp-5);
	ctx.fillText("D",xDp-20,yDp+20);	
	
	cDrawLine(cid,xDp+8,yDp,xBp+40,yDp,"gray",1,"butt");
	cDrawDoubleArrow(cid,xBp+20,y0,xBp+20,yDp,"gray",1,true);	// vert dimn
	cDrawTextBG(cid,"6 m",xBp+5,(y0+yDp)/2-10);	
	cDrawLine(cid,xCp+8,yCp,xBp+80,yCp,"gray",1,"butt");
	cDrawDoubleArrow(cid,xBp+60,y0,xBp+60,yCp,"gray",1,true);	// vertical
	cDrawTextBG(cid,"dC m",xBp+45,(y0+yCp)/2-10);

	cDrawLine(cid,xDp,y0-5,xDp,y0-60,"gray",1,"butt");
	cDrawDoubleArrow(cid,x0,y0-30,xDp,y0-30,"gray",1,true);		// horiz dimn
	cDrawTextBG(cid," 6 m ",(x0+xDp)/2-25,y0-40);
	cDrawLine(cid,xBp,y0-5,xBp,y0-60,"gray",1,"butt");
	cDrawDoubleArrow(cid,xBp,y0-30,xDp,y0-30,"gray",1,true);	// horiz
	cDrawTextBG(cid," 8 m ",(xBp+xDp)/2-25,y0-40);	
	
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