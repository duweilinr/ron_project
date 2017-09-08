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

	// draw x and y axes
	cDrawArrow(cid,x0-50,y0,x0+Lp+50,y0,"gray",1,true);		// x axis
	cDrawArrow(cid,x0,y0+70,x0,y0-120,"gray",1,true);		// y axis
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "X",x0+Lp+45,y0+20);
	ctx.fillText( "Y",x0-20,y0-100);

	// draw beam body	
	var xbs= x0;
	var xbe= x0+Lp;
	var yb0= y0;

	// draw beam body	
	cDrawLine(cid,xbs-12,yb0,   xbe+12,yb0,   "lightblue",24,"butt");
	cDrawLine(cid,xbs-12,yb0-16,xbe+12,yb0-16,"black",3,"butt");
	cDrawLine(cid,xbs-12,yb0-13,xbe+12,yb0-13,"gray",2,"butt");
	cDrawLine(cid,xbs-12,yb0+16,xbe+12,yb0+16,"black",3,"butt");
	cDrawLine(cid,xbs-12,yb0+13,xbe+12,yb0+13,"gray",2,"butt");	

	// draw supports, ground lines and markers
	cDrawRectxy(cid,xbs-8,yb0-8,xbs+8,yb0+28,"black",2,"lightgray");
	cDrawDot(cid,xbs,yb0,4,"black");  	// pin and A marker
	cDrawLine(cid,xbs-20,yb0+30,xbs+20,yb0+30,"black",6,"butt"); // pad
	cDrawDot(cid,xbe,yb0+22,6,"gray");	// roller support
	cDrawDot(cid,xbe,yb0,4,"black");  	// B marker
	cDrawLine(cid,xbe-20,yb0+30,xbe+20,yb0+30,"black",6,"butt"); // pad
	cDrawLine(cid,xbs-40,yb0+36,xbe+40,yb0+36,"gray",6,"round"); // ground

	// labels on x axis
	ctx.fillStyle="black";
	ctx.font="bold 18px Arial";
	ctx.fillText("A",xbs+10,yb0+6);
	ctx.fillText("B",xbe-20,yb0+6);
	cDrawLine(cid,xbe,yb0+40,xbe,yb0+70,"gray",1,"round");
	cDrawDoubleArrow(cid,xbs,yb0+55,xbe,yb0+55,"gray",1,true);	
	var xmid= (xbs+xbe)/2 -10;
	cDrawTextBG(cid," L ",xmid,yb0+47);

	// draw beam loading (FC not scaled yet)
	// for now use 3-term approx to exponential function (parabola)
	var dqx= (xbe-xbs)/40;
	var c0= 20;
	var c1= 0.03;
	var c2= 0.0001;
	
	for (var i= 0; i<10; i++) {
		var qx= i*dqx;
		var qy= c0 +c1*qx +c2*qx*qx;
		cDrawLine(cid,qx+xbs,yb0-qy,qx+xbs,yb0-16,"red",1,"butt");
		qx= qx+dqx;
	}	
	for (var i= 10; i<41; i++) {
		var qx= i*dqx;
		var qy= c0 +c1*qx +c2*qx*qx;
		cDrawArrow(cid,qx+xbs,yb0-qy,qx+xbs,yb0-16,"red",1,true);
		qx= qx+dqx;
	}		
	var qx1= 0;
	var qy1= c0;
	for (var i= 1; i<41; i++) {
		var qx2= qx1 +dqx;
		var qy2= c0 +c1*qx2 +c2*qx2*qx2;
		cDrawLine(cid,qx1+xbs,yb0-qy1,qx2+xbs,yb0-qy2,"red",2,"butt");
		qx1= qx2;
		qy1= qy2;
	}	
	ctx.fillStyle="red";
	ctx.font="bold 16px Arial";
	ctx.fillText("q(x)= a*exp(b*x)",xbs+50,yb0-50);







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