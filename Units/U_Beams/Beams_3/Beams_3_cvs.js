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
	var Lp=  550;
	
	var A= {x:x0,       y:y0};
	var B= {x:x0+Lp/2,  y:y0};
	var C= {x:x0+2*Lp/3,y:y0};
	var D= {x:x0+Lp,    y:y0};

	// draw x and y axes
	cDrawArrow(cid,x0-50,y0,D.x+80,y0,"gray",1,true);		// x axis
	cDrawArrow(cid,x0,y0+100,x0,y0-120,"gray",1,true);		// y axis
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "X",x0+Lp+45,y0+20);
	ctx.fillText( "Y",x0-20,y0-100);

	// draw beam body	
	var xbs= A.x-12;
	var xbe= D.x+12;
	cDrawLine(cid,xbs,y0,   xbe,y0,   "lightblue",24,"butt");
	cDrawLine(cid,xbs,y0-16,xbe,y0-16,"black",2,"butt");
	cDrawLine(cid,xbs,y0-13,xbe,y0-13,"gray",2,"butt");
	cDrawLine(cid,xbs,y0+16,xbe,y0+16,"black",2,"butt");
	cDrawLine(cid,xbs,y0+13,xbe,y0+13,"gray",2,"butt");	

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
	ctx.fillText( "C",C.x+10,C.y+4);
	ctx.fillText( "D",D.x-20,D.y+4);	

	// draw dimensioning
	cDrawDoubleArrow(cid,A.x,y0+55,B.x,y0+55,"gray",1,true);
	cDrawTextBG(cid," L1 ",(x0+B.x)/2-15,y0+47);
	cDrawLine(cid,B.x,y0+20,B.x,y0+70,"gray",1,"round");
	cDrawDoubleArrow(cid,B.x,y0+55,C.x,y0+55,"gray",1,true);
	cDrawTextBG(cid," L2 ",(B.x+C.x)/2-15,y0+47);
	cDrawLine(cid,C.x,y0+20,C.x,y0+70,"gray",1,"round");
	cDrawDoubleArrow(cid,A.x,y0+85,D.x,y0+85,"gray",1,true);
	cDrawTextBG(cid," 30' ",(A.x+D.x)/2-15,y0+78);
	cDrawLine(cid,D.x,y0+20,D.x,y0+100,"gray",1,"round");	

	// draw loads
	cDrawLine(cid,x0,y0-40,B.x,y0-40,"red",2,"butt");
	var x= x0;
	var dx= (B.x-x0)/20;
	for (var i= 0; i<21; i++) {
		cDrawArrow(cid,x,y0-40,x,y0-16,"red",1,true);
		x= x+dx;
	}	
	ctx.fillStyle="red";
	ctx.font="bold 16px Arial";
	ctx.fillText("w",x0+125,y0-60);
	
	cDrawForce2(cid,C.x,y0-100,C.x,y0-18,3,"red","round",12);
	ctx.fillStyle="red";
	ctx.font="bold 16px Arial";		
	ctx.fillText( "P",C.x-18,y0-60);			
	
	cDrawMoment(cid,xbe,y0+25,xbe,y0-25,"red",3,"ccw");
	ctx.fillStyle="red";
	ctx.font="bold 16px Arial";
	ctx.fillText("M",xbe,y0-40);	

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