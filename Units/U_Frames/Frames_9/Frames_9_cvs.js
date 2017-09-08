// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 200;
	var y0= 250;
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
	var ap= 100;
	var bp= 240;
	var dp= 140;
	
	var xAp= x0;
	var yAp= y0;
	var xBp= x0+ap;
	var yBp= y0;
	var xCp= x0+ap+bp;
	var yCp= y0;
	var xDp= xBp;
	var yDp= y0-dp;
		
	// pulley
	var rp= 10;
	cDrawLine(cid,xDp+2,yDp+2,xCp,yCp-8,"brown",4,"butt");			// DC	
	cDrawLine(cid,xCp+rp-5,yCp+2,xCp+rp-5,yCp+60,"brown",4,"butt");	
	cDrawLine(cid,xCp+rp-5,yCp+60,xCp+rp-5,yCp+140,"black",40,"butt");
	cDrawLine(cid,xCp+rp-5,yCp+63,xCp+rp-5,yCp+137,"lightblue",34,"butt");	
	cDrawDot(cid,xCp,yCp,rp,"gray");
	cDrawDot(cid,xCp,yCp,rp-5,"lightgray");
	
	// support girders
	cDrawDot(cid,xBp,yBp-9,12,"gray");
	cDrawLine(cid,xBp,yBp-11,xDp,yDp,"gray",14,"butt");		// BD
	cDrawLine(cid,xBp,yBp-11,xDp,yDp+3,"lightgray",10,"butt");
	
	cDrawLine(cid,xAp,yAp,xCp+6,yAp,"gray",22,"butt");	// AC
	cDrawLine(cid,xAp,yAp,xCp+3,yAp,"lightgray",17,"butt");
	
	cDrawLine(cid,xAp-15,yAp+50,xAp-15,yAp-50,"gray",30,"butt");	// wall
	cDrawLine(cid,xAp-15,yAp+50,xAp-15,yAp-50,"lightgray",24,"butt");
		
	// key points
	cDrawDot(cid,xAp,yAp,2,"black");
	cDrawDot(cid,xBp,yBp,2,"black");		
	cDrawDot(cid,xCp,yCp,2,"black");
	cDrawDot(cid,xDp,yDp,4,"black");	
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp+10,yAp+5);
	ctx.fillText("B",xBp+10,yBp+5);
	ctx.fillText("C",xCp-15,yCp+5);
	ctx.fillText("D",xDp-17,yDp-5);

	// dimensions
	cDrawDoubleArrow(cid,x0,y0+30,xBp,y0+30,"gray",1,true);		// a
	cDrawLine(cid,xBp,y0+8,xBp,y0+45,"black",1,"butt");		
	cDrawDoubleArrow(cid,xBp,y0+30,xCp,y0+30,"gray",1,true);	// b
	cDrawLine(cid,xCp,y0+8,xCp,y0+45,"black",1,"butt");	
	cDrawDoubleArrow(cid,xBp-30,yBp-10,xDp-30,yDp,"gray",1,true);	// d
	cDrawLine(cid,xDp-50,yDp,xDp-10,yDp,"black",1,"butt");		
	
	cDrawTextBG(cid," a ",(x0+xBp)/2-10,y0+20);		
	cDrawTextBG(cid," b ",(xBp+xCp)/2-10,y0+20);			
	cDrawTextBG(cid,"d",xBp-35,(yBp+yDp)/2-5);
	
	// labels
	ctx.fillStyle="red";
	ctx.fillText("W",xCp+rp+20,yCp+100);

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