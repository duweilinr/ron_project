// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 350;
	var y0= 400;
	var xydata= {x0:x0,xmin:50,xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	// geometry setup
	var hp= 220;
	var bp= 60;
	var cp= 100
	var dp= 200;
	
	var xAp= x0;
	var yAp= y0;
	var xEp= x0;
	var yEp= y0-hp;	
	var xBp= x0;
	var yBp= yEp-bp;
	var xCp= x0-cp;
	var yCp= yEp;
	var xDp= xEp+dp;
	var yDp= yEp;
	var xFp= (xEp+xDp)/2;
	var yFp= yDp;

	// structure
	cDrawDot(cid,xAp,yAp+2,16,"gray");
	cDrawLine(cid,xBp,yBp,xAp,yAp,"gray",20,"square");		// AB
	cDrawLine(cid,xBp,yBp,xAp,yAp+3,"lightgray",16,"square");
	cDrawLine(cid,xAp-40,yAp+6,xAp+40,yAp+6,"gray",12,"butt");	// ground	
	cDrawLine(cid,xAp-70,yAp+16,xAp+70,yAp+16,"black",8,"butt");	
	cDrawLine(cid,xDp,yDp,xCp,yCp,"gray",12,"square");		// CD
	cDrawLine(cid,xDp,yDp,xCp,yCp,"lightgray",10,"square");	
	cDrawLine(cid,xBp,yBp,xFp,yFp,"brown",6,"butt");		// BF	
		
	// key points
	cDrawDot(cid,xAp,yAp,2,"black");
	cDrawDot(cid,xBp,yBp,2,"black");		
	cDrawDot(cid,xCp,yCp,2,"black");
	cDrawDot(cid,xDp,yDp,2,"black");
	cDrawDot(cid,xEp,yEp,2,"black");
	cDrawDot(cid,xFp,yFp,2,"black");	

	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp+15,yAp-10);
	ctx.fillText("B",xBp+15,yBp-10);
	ctx.fillText("C",xCp-20,yCp+20);
	ctx.fillText("D",xDp+10,yDp+20);
	ctx.fillText("E",xEp+15,yEp-10);
	ctx.fillText("F",xFp+5,yFp-10);	

	// dimensions
	cDrawDoubleArrow(cid,xCp,yEp+30,xEp,yEp+30,"gray",1,true);		// c
	cDrawLine(cid,xCp,yCp+8,xCp,yCp+45,"black",1,"butt");		
	cDrawDoubleArrow(cid,xEp,yEp+30,xFp,yEp+30,"gray",1,true);		// f
	cDrawLine(cid,xEp,yCp+8,xEp,yCp+45,"black",1,"butt");			
	cDrawDoubleArrow(cid,xFp,yEp+30,xDp,yEp+30,"gray",1,true);		// d
	cDrawLine(cid,xFp,yCp+8,xFp,yCp+45,"black",1,"butt");		
	cDrawLine(cid,xDp,yCp+8,xDp,yCp+45,"black",1,"butt");				
	cDrawTextBG(cid,"30'",(xCp+xEp)/2-10,yEp+22);		
	cDrawTextBG(cid," f ",(xEp+xFp)/2-10,yEp+22);			
	cDrawTextBG(cid," d ",(xFp+xDp)/2-10,yEp+22);
	
	var dx= 30;
	cDrawDoubleArrow(cid,xCp-dx,yAp,xCp-dx,yCp,"gray",1,true);		// h
	cDrawDoubleArrow(cid,xCp-dx,yCp,xCp-dx,yBp,"gray",1,true);		// b	
	cDrawLine(cid,xAp-20,yAp,xCp-dx-15,yAp,"black",1,"butt");	
	cDrawLine(cid,xCp-10,yCp,xCp-dx-15,yCp,"black",1,"butt");	
	cDrawLine(cid,xBp-10,yBp,xCp-dx-15,yBp,"black",1,"butt");
	cDrawTextBG(cid,"80'",xCp-dx-10,(yAp+yCp)/2-5);			
	cDrawTextBG(cid,"b",xCp-dx-5,(yCp+yBp)/2-5);
	
	// loads
	//cDrawArrow(canvasid,x1,y1,x2,y2,lincol,linwid,ahdbool)
	cDrawArrow(cid,xDp,yDp+5,xDp,yDp+60,"red",3,true);
	cDrawArrow(cid,xCp,yCp+5,xCp,yDp+50,"red",3,true);
	ctx.fillStyle="red";
	ctx.fillText("W",xDp+10,yDp+50);	
	ctx.fillText("CW",xCp+10,yCp+60);

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