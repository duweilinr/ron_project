// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 250;
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
	var dxAB= 160;		// AB segment
	var dyAB= 160;
	var dxCD= 100;
	var dyCD= 200;
	var hAp=  80;
	var hDp=  60;
	
	var xAp= x0;
	var yAp= y0-hAp;
	var xBp= xAp+dxAB;
	var yBp= yAp-dyAB;
	var xCp= xBp-20;
	var yCp= yBp-40;
	var xDp= xCp+dxCD;
	var yDp= yCp+dyCD;
	var xEp= xAp+40;
	var yEp= yAp-40;	
	
	// machine
	cDrawDot(cid,xAp,yAp,43,"gray");	
	cDrawDot(cid,xAp,yAp,40,"lightgray");
	cDrawLine(cid,xAp-2,y0-20,xAp-2,y0-40,"gray",4,"butt");
	cDrawLine(cid,xAp-2,yAp-40,xAp-2,yAp-60,"gray",4,"butt");	
	cDrawLine(cid,xAp-28,y0-20,xAp-28,yAp-60,"lightgray",50,"butt");
	cDrawLine(cid,xAp-100,y0+2,xDp+100,y0+2,"black",4,"butt");	// ground	
	
	// frame link AB
	cDrawDot(cid,xAp,yAp,13,"gray");
	cDrawDot(cid,xBp,yBp,13,"gray");
	cDrawLine(cid,xAp,yAp,xBp,yBp,"lightgray",20,"round");
	cDrawLine(cid,xAp-6,yAp-11,xBp-6,yBp-11,"gray",3,"round");
	cDrawLine(cid,xAp+6,yAp+11,xBp+6,yBp+11,"gray",3,"round");
	
	// frame link CD
	cDrawDot(cid,xCp,yCp,13,"gray");
	cDrawDot(cid,xDp,yDp,13,"gray");
	cDrawLine(cid,xCp,yCp,xDp,yDp,"lightgray",20,"round");
	cDrawLine(cid,xCp-7,yCp+11,xDp-7,yDp+11,"gray",3,"round");
	cDrawLine(cid,xCp+7,yCp-11,xDp+7,yDp-11,"gray",3,"round");

	// piston segment CE	
	cDrawLine(cid,xEp,yEp,xCp,yCp,"black",12,"round");
	cDrawLine(cid,xEp,yEp,xCp,yCp,"lightblue",8,"round");	
	cDrawLine(cid,xEp+20,yEp-32,xCp-20,yCp+32,"gray",16,"butt");	
	cDrawDot(cid,xCp,yCp,3,"black");
	cDrawDot(cid,xEp,yEp,3,"black");	
	
	// joints
	cDrawDot(cid,xAp,yAp,7,"white");		
	cDrawDot(cid,xAp,yAp,5,"black");			
	cDrawDot(cid,xBp,yBp,7,"white");
	cDrawDot(cid,xBp,yBp,5,"black");	
	cDrawDot(cid,xDp,yDp,4,"black");
		
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp-25,yAp-10);
	ctx.fillText("B",xBp+20,yBp);
	ctx.fillText("C",xCp+20,yCp);
	ctx.fillText("D",xDp+20,yDp-5);
	ctx.fillText("E",xEp-25,yEp-10);	

	// dimensions		
	cDrawDoubleArrow(cid,xAp+30,y0,xAp+30,yAp,"black",1,true);	// hA	
	cDrawLine(cid,xAp+10,yAp,xAp+50,yAp,"black",1,"butt");
	cDrawDoubleArrow(cid,xDp+35,y0,xDp+35,yDp,"black",1,true);	// hD		
	cDrawLine(cid,xDp+10,yDp,xDp+50,yDp,"black",1,"butt");
	
	cDrawDoubleArrow(cid,xAp,y0+25,xBp,y0+25,"black",1,true);	// b	
	cDrawLine(cid,xBp,yBp+30,xBp,y0-5,"black",1,"butt");
	cDrawLine(cid,xBp,y0+8,xBp,y0+45,"black",1,"butt");	
	cDrawDoubleArrow(cid,xBp,y0+25,xDp,y0+25,"black",1,true);	// d		
	cDrawLine(cid,xDp,yDp+10,xDp,y0-5,"black",1,"butt");	
	cDrawLine(cid,xDp,y0+8,xDp,y0+45,"black",1,"butt");	
	
	cDrawTextBG(cid," 3.5'",xAp+20,(y0+yAp)/2-7);
	cDrawTextBG(cid,"hD",xDp+25,(y0+yDp)/2-5);
	cDrawTextBG(cid," b ",(xAp+xBp)/2-10,y0+15);
	cDrawTextBG(cid," d ",(xBp+xDp)/2-10,y0+15);
	
	// forces
	cDrawArrow(cid,xDp,yDp-70,xDp,yDp-2,"red",4,true);		// W
	ctx.fillStyle="red";
	ctx.fillText("W",xDp+5,yDp-60);
	
	// geometry
	ctx.fillStyle="black";
	
	ctx.fillText("Mechanism Geometry:",xDp+50,yCp+10);
	ctx.fillText("AB= 8 ft",xDp+80,yCp+30);	
	ctx.fillText("AE= 2 ft",xDp+80,yCp+50);
	ctx.fillText("CD= 8 ft",xDp+80,yCp+70);	
	ctx.fillText("CB= 1.5 ft",xDp+80,yCp+90);	

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