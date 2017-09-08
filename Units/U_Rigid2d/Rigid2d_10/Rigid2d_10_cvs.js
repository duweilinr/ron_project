// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 150;
	var y0= 300;
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
	var w1p= 100;
	var w2p= 120;
	var Lp=  500;
	var LBp= 160;
	var LCp= 300;

	cDrawRectxy(cid,x0-5,y0-10,x0+Lp+5,y0+10,"black",1,"lightgray");
	
	cDrawDot(cid,x0,y0,10,"gray");
	cDrawLine(cid,x0,y0,x0,y0+20,"gray",20,"butt");
	cDrawLine(cid,x0-20,y0+22,x0+20,y0+22,"gray",4,"butt");
	cDrawDot(cid,x0,y0,6,"white");
	
	cDrawDot(cid,x0+Lp,y0+16,5,"gray");
	cDrawLine(cid,x0+Lp-20,y0+22,x0+Lp+20,y0+22,"gray",4,"butt");	

	cDrawDot(cid,x0,y0,3,"black");		// A
	cDrawDot(cid,x0+LBp,y0,3,"black");	// B
	cDrawDot(cid,x0+LCp,y0,3,"black");	// C
	cDrawDot(cid,x0+Lp,y0,3,"black");	// D
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "A",x0-20,y0-5);	
	ctx.fillText( "B",x0+LBp-20,y0+5);	
	ctx.fillText( "C",x0+LCp-20,y0+5);	
	ctx.fillText( "D",x0+Lp+15,y0-5);	
	
	cDrawDoubleArrow(cid,x0,y0+40,x0+LBp,y0+40,"gray",1,true);
	cDrawTextBG(cid," LB ",x0+LBp/2-10,y0+32);
	cDrawLine(cid,x0+LBp,y0+12,x0+LBp,y0+50,"gray",1,"round");
	cDrawDoubleArrow(cid,x0,y0+65,x0+LCp,y0+65,"gray",1,true);
	cDrawTextBG(cid," LC ",x0+LCp/2-10,y0+57);
	cDrawLine(cid,x0+LCp,y0+12,x0+LCp,y0+75,"gray",1,"round");
	cDrawDoubleArrow(cid,x0,y0+90,x0+Lp,y0+90,"gray",1,true);
	cDrawTextBG(cid," L ",x0+Lp/2-10,y0+82);
	cDrawLine(cid,x0+Lp,y0+12,x0+Lp,y0+100,"gray",1,"round");

	// draw distributed load 1 - triangular
	var ymax1= 60;
	cDrawLine(cid,x0,y0-10,x0+LBp,y0-10-ymax1,"red",2,"round");
	var dx= 20;
	var xd= x0+dx;	
	var x2= x0+LBp;
	var dy= dx*ymax1/LBp;
	var y2= y0-10;	
	var y1= y2-dy; 
	while ( xd<x2+5 ) {
		cDrawForce2(cid,xd,y1,xd,y2,2,"red","round",6);
		xd= xd+dx;
		y1= y1-dy;
	}	
	
	// draw distributed load 2 - uniform
	cDrawLine(cid,x0+LBp,y0-10-ymax1,x0+LCp,y0-10-ymax1,"red",2,"round");
	xd= x0+LBp+dx;	
	x2= x0+LCp;
	var dy= dx*ymax1/(LCp-LBp);
	var y2= y0-10;	
	var y1= y2-ymax1; 
	while ( xd<x2+5 ) {
		cDrawForce2(cid,xd,y1,xd,y2,2,"red","round",6);
		xd= xd+dx;
	}
	
	// draw distributed load 3 - triangular
	var ymax2= 100;
	cDrawLine(cid,x0+LCp,y0-10,x0+Lp,y0-10-ymax2,"red",2,"round");	
	xd= x0+LCp+dx;	
	x2= x0+Lp;
	dy= dx*ymax2/(Lp-LCp);
	y2= y0-10;	
	y1= y2-dy; 
	while ( xd<x2+5 ) {
		cDrawForce2(cid,xd,y1,xd,y2,2,"red","round",6);
		xd= xd+dx;
		y1= y1-dy;
	}

	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText( "w1",x0+LBp,y0-ymax1-20);
	ctx.fillText( "w2",x0+Lp+5 ,y0-ymax2-5);	

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
/*
	// extract values from ivcode
	var stmt= ivcode.split(";");
	var val=  [];
	for (var i=0; i<stmt.length-1; i++) {
		var list= stmt[i].split("=");
		val[i]=   list[1];
	}
	var F1m= Number(val[0])*0.5;
	var F1d= Number(val[1]);
	var F2m= Number(val[2])*0.5;
	var F2d= Number(val[3]);
	
	// draw the forces
	var F1x= F1m*Math.cos(F1d*Math.PI/180);
	var F1y= F1m*Math.sin(F1d*Math.PI/180);	
	var F2x= F2m*Math.cos(F2d*Math.PI/180);
	var F2y= F2m*Math.sin(F2d*Math.PI/180);		
	
	cDrawArrow(cid,x0,y0,x0+F1x,y0-F1y,"red",3,true);	
	cDrawArrow(cid,x0,y0,x0+F2x,y0-F2y,"red",3,true);  */		
}