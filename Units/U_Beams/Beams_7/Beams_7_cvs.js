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
	
	var A= {x:x0,       y:y0};
	var B= {x:x0+2*Lp/3,y:y0};
	var C= {x:x0+Lp,    y:y0};
	var D= {x:x0+Lp/2,  y:y0}

	// draw x and y axes
	cDrawArrow(cid,x0-50,y0,C.x+80,y0,"gray",1,true);		// x axis
	cDrawArrow(cid,x0,y0+100,x0,y0-120,"gray",1,true);		// y axis
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "X",x0+Lp+45,y0+20);
	ctx.fillText( "Y",x0-20,y0-100);

	// draw beam body	
	var xbs= A.x;
	var xbe= C.x;
	cDrawLine(cid,xbs,y0,   xbe,y0,   "lightblue",24,"butt");
	cDrawLine(cid,xbs,y0-16,xbe,y0-16,"black",2,"butt");
	cDrawLine(cid,xbs,y0-13,xbe,y0-13,"gray",2,"butt");
	cDrawLine(cid,xbs,y0+16,xbe,y0+16,"black",2,"butt");
	cDrawLine(cid,xbs,y0+13,xbe,y0+13,"gray",2,"butt");
	cDrawLine(cid,xbe,y0-13,xbe,y0+13,"gray",2,"butt");	

	// draw supports
	cDrawRectxy(cid,x0-8,y0-8,x0+8,y0+28,"black",2,"lightgray");
	cDrawLine(cid,x0-20,y0+30,x0+20,y0+30,"black",6,"butt"); // pad
	cDrawDot(cid,B.x,B.y+22,5,"gray");
	cDrawLine(cid,B.x-20,B.y+30,B.x+20,B.y+30,"black",6,"butt"); // pad	
	
	// dots and labels
	cDrawDot(cid,A.x,A.y,3,"black");
	cDrawDot(cid,B.x,B.y,3,"black");
	cDrawDot(cid,C.x,C.y,3,"black");
	cDrawDot(cid,D.x,D.y,3,"black");	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "A",A.x+13,A.y+4);
	ctx.fillText( "B",B.x+10,B.y+4);	
	ctx.fillText( "C",C.x-18,C.y+4);
	ctx.fillText( "D",D.x+10,D.y+4);	

	// draw dimensioning
	cDrawDoubleArrow(cid,A.x,y0+40,D.x,y0+40,"gray",1,true);
	cDrawTextBG(cid," d ",(x0+D.x)/2-15,y0+32);
	cDrawLine(cid,D.x,y0+20,D.x,y0+48,"gray",1,"round");
	cDrawDoubleArrow(cid,A.x,y0+65,B.x,y0+65,"gray",1,true);
	cDrawTextBG(cid," L1 ",(x0+B.x)/2-15,y0+57);
	cDrawLine(cid,B.x,y0+20,B.x,y0+73,"gray",1,"round");
	cDrawDoubleArrow(cid,A.x,y0+90,C.x,y0+90,"gray",1,true);
	cDrawTextBG(cid," 10m ",(A.x+C.x)/2-15,y0+83);
	cDrawLine(cid,C.x,y0+20,C.x,y0+100,"gray",1,"round");	

	// distributed load w
	cDrawLine(cid,D.x,D.y-50,C.x,C.y-50,"red",2,"butt");
	x=  D.x;
	dx= (C.x-D.x)/16;
	y=  D.y-50;
	for (var i= 0; i<17; i++) {
		cDrawForce2(cid,x,y,x,D.y-16,2,"red","round",8);	
		x= x+dx;
	}	
	ctx.fillStyle="red";
	ctx.font="bold 16px Arial";
	ctx.fillText("w N/m",D.x+50,D.y-65);	




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