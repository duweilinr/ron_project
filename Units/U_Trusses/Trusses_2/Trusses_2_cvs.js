// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 200;
	var y0= 350;
	var xydata= {x0:x0,xmin:50,xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	//	do setup
	var dp= 100;
	// pt A is at x0,y0
	var xBp= x0+dp;
	var yBp= y0-dp;
	var xCp= x0+2*dp;
	var yCp= y0-2*dp;
	var xDp= x0+3*dp
	var yDp= y0-dp;
	var xEp= x0+4*dp
	var yEp= y0;	
	var xFp= x0+2*dp
	var yFp= y0;	

	// frame
	cDrawLine(cid,x0,y0,xEp,yEp,"lightgray",12,"round");
	cDrawLine(cid,x0,y0,xCp,yCp,"silver",12,"round");	
	cDrawLine(cid,xCp,yCp,xEp,yEp,"silver",12,"round");
	cDrawLine(cid,xBp,yBp,xDp,yDp,"lightgray",12,"round");	
	cDrawLine(cid,xBp,yBp,xFp,yFp,"silver",12,"round");
	cDrawLine(cid,xDp,yDp,xFp,yFp,"silver",12,"round");

	// truss pins
	cDrawDot(cid,x0,y0,6,"white");
	cDrawDot(cid,x0,y0,4,"black");
	cDrawDot(cid,xBp,yBp,4,"black");
	cDrawDot(cid,xCp,yCp+2,4,"black");
	cDrawDot(cid,xDp,yDp,4,"black");
	cDrawDot(cid,xEp,yEp,4,"black");
	cDrawDot(cid,xFp,yFp,4,"black");	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",x0-23,y0-15);
	ctx.fillText("B",xBp-5,yBp-15);
	ctx.fillText("C",xCp+10,yCp-15);	
	ctx.fillText("D",xDp-5,yDp-15);
	ctx.fillText("E",xEp+10,yEp-15);	
	ctx.fillText("F",xFp+10,yFp+20);

	// dimensions - horiz
	cDrawLine(cid,x0,y0+32,x0,y0+60,"gray",1,"round");	
	cDrawDoubleArrow(cid,x0,y0+40,xFp,y0+40,"gray",1,true);
	cDrawTextBG(cid," 2d ",(x0+xFp)/2-10,y0+31);
	cDrawDoubleArrow(cid,xFp,y0+40,xEp,y0+40,"gray",1,true);
	cDrawTextBG(cid," 2d ",(xFp+xEp)/2-10,y0+31);	
	cDrawLine(cid,xEp,yEp+32,xEp,yEp+60,"gray",1,"round");
	
	// dimensions - vertical
	cDrawDoubleArrow(cid,xEp+40,yEp,xEp+40,yDp,"gray",1,true);
	cDrawTextBG(cid,"h",xEp+37,(yEp+yDp)/2-4);
	cDrawDoubleArrow(cid,xEp+40,yDp,xEp+40,yCp,"gray",1,true);
	cDrawTextBG(cid,"h",xEp+37,(yDp+yCp)/2-4);
	cDrawLine(cid,xDp+10,yDp,xEp+60,yDp,"gray",1,"round");
	cDrawLine(cid,xCp+10,yCp,xEp+60,yCp,"gray",1,"round");
	cDrawLine(cid,xEp+10,yEp,xEp+60,yEp,"gray",1,"round");	

	// supports
	cDrawLine(cid,x0,y0,x0,y0+15,"gray",24,"round");
	cDrawLine(cid,x0-25,y0+26,x0+25,y0+26,"gray",10,"butt");
	
	cDrawLine(cid,xEp-10,yEp+8,xEp+10,yEp+8,"gray",6,"butt");	
	cDrawDot(cid,xEp,yEp+15,5,"gray");
	cDrawLine(cid,xEp-15,yEp+24,xEp+15,yEp+24,"gray",10,"butt");
	
	// truss pins
	cDrawDot(cid,x0,y0,6,"white");
	cDrawDot(cid,x0,y0,4,"black");
	cDrawDot(cid,xBp,yBp,4,"black");
	cDrawDot(cid,xCp,yCp,4,"black");
	cDrawDot(cid,xDp,yDp,4,"black");
	cDrawDot(cid,xEp,yEp,4,"black");
	cDrawDot(cid,xFp,yFp,4,"black");	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",x0-23,y0-15);
	ctx.fillText("B",xBp-5,yBp-15);
	ctx.fillText("C",xCp+10,yCp-15);	
	ctx.fillText("D",xDp-5,yDp-15);
	ctx.fillText("E",xEp+10,yEp-15);	
	ctx.fillText("F",xFp+10,yFp+20);

	// forces
	cDrawArrow(cid,x0,y0-60,x0,y0-5,"red",3,true);			// A
	cDrawArrow(cid,xCp,yCp-60,xCp,yCp-5,"red",3,true);		// C
	cDrawArrow(cid,xEp,yEp-60,xEp,yEp-5,"red",3,true);		// E
	cDrawArrow(cid,xFp,yFp+5,xFp,yFp+60,"red",3,true);		// F
	cDrawArrow(cid,xBp-40,yBp-40,xBp-5,yBp-5,"red",3,true);	// B
	cDrawArrow(cid,xDp+40,yDp-40,xDp+5,yDp-5,"red",3,true);	// D	
	ctx.fillStyle="red";
	ctx.fillText("F1",x0-8,y0-70);
	ctx.fillText("F1",xEp-8,yEp-70);
	ctx.fillText("F1",xCp-8,yCp-70);	
	ctx.fillText("F1",xFp-8,yFp+80);
	ctx.fillText("F2",xBp-48,yBp-50);	
	ctx.fillText("F2",xDp+37,yDp-50);

	cDrawArc3(cid,xBp,yBp,50,180,225,"cw","black",1,"none",true,true);
	cDrawLine(cid,xBp-8,yBp,xBp-60,yBp,"black",1,"round");	
	var alpha= '\u03b1';
	cDrawTextBG(cid,alpha,xBp-50,yBp-28);	
	cDrawArc3(cid,xDp,yDp,50,-45,0,"cw","black",1,"none",true,true);
	cDrawTextBG(cid,alpha,xDp+40,yDp-28);		
	
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

}