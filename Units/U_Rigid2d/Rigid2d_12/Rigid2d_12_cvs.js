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
	var hp=  100;
	var xBp= x0+3*hp;
	var xCp= x0+4*hp;
	
	cDrawLine(cid,xCp,y0+80,xCp,y0-80,"black",2,"butt");
	cDrawLine(cid,xCp+11,y0+80,xCp+11,y0-80,"lightgray",20,"butt");
	cDrawLine(cid,xCp+22,y0+80,xCp+22,y0-80,"black",2,"butt");	

	cDrawLine(cid,x0-5,y0+10,xCp,y0+10,"black",2,"butt");
	cDrawLine(cid,x0-5,y0,xCp,y0,"lightgray",18,"butt");
	cDrawLine(cid,x0-5,y0-10,xCp,y0-10,"black",2,"butt");	
	
	cDrawDot(cid,x0,y0,3,"black");	// A
	cDrawDot(cid,xBp,y0,3,"black");	// B
	cDrawDot(cid,xCp,y0,3,"black");	// C	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "A",x0+8,y0+5);
	ctx.fillText( "B",xBp-18,y0+5);
	ctx.fillText( "C",xCp-18,y0+5);
	
	cDrawDoubleArrow(cid,x0,y0+40,xBp,y0+40,"gray",1,true);
	cDrawTextBG(cid," 3h ",(x0+xBp)/2-8,y0+30);
	cDrawDoubleArrow(cid,xBp,y0+40,xCp,y0+40,"gray",1,true);
	cDrawTextBG(cid," h ",(xBp+xCp)/2-8,y0+30);	
	cDrawLine(cid,xBp,y0+15,xBp,y0+55,"gray",1,"round");
	cDrawLine(cid,xCp,y0+15,xCp,y0+55,"gray",1,"round");	
	
	// draw distributed load 1 - uniform
	cDrawLine(cid,x0,y0-80,xBp,y0-80,"red",2,"round");
	var dx= 20;
	var xd= x0;
	while ( xd < xBp+5 ) {
		cDrawForce2(cid,xd,y0-80,xd,y0-10,2,"red","round",10);
		xd= xd+dx;
	}	

	// draw distributed load 2 - uniform
	cDrawLine(cid,xBp,y0-40,xCp,y0-40,"red",1,"round");
	xd= xBp;
	while ( xd < xCp+5 ) {
		cDrawForce2(cid,xd,y0-40,xd,y0-10,2,"red","round",10);
		xd= xd+dx;
	}
	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText( "2w",x0+60,y0-90);
	ctx.fillText( "w",xBp+20,y0-50);	

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