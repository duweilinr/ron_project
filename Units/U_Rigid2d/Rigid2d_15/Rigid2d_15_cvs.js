// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 350;
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
	var Ax= x0-120;
	var Ay= y0;
	var Bx= x0+120;
	var By= y0;
	var Cx= x0;
	var Cy= y0-120;	
	
	cDrawDot(cid,Ax,Ay-10,8,"black");
	cDrawDot(cid,Bx,By-10,8,"black");
	cDrawLine(cid,Ax-120,y0+10,Bx+120,y0+10,"brown",20,"butt");	// dock
	cDrawLine(cid,Ax-15,y0-5,Bx+15,y0-5,"silver",10,"round");	// base
	cDrawLine(cid,x0,y0-5,x0,Cy-60,"silver",30,"butt");			// post	
	cDrawDot(cid,Cx,Cy,8,"white");	
	
	cDrawDot(cid,Ax,Ay,2,"black");			// point A
	cDrawDot(cid,Bx,By,2,"black");			// point B
	cDrawDot(cid,Cx,Cy,2,"black");			// point C
	cDrawDot(cid,x0,y0,2,"black");			// point O
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",Ax-20,Ay-20);
	ctx.fillText("B",Bx+10,By-20);
	ctx.fillText("C",Cx-33,Cy-10);	

	cDrawTriangle(cid,x0-40,y0-10,x0-15,y0-10,x0-15,y0-40,"gray",4,"gray");
	cDrawTriangle(cid,x0+40,y0-10,x0+15,y0-10,x0+15,y0-40,"gray",4,"gray");	
	
	// draw forces
	cDrawArrow(cid,Cx,Cy-140,Cx,Cy-60,"red",4,true);	// W	
	cDrawArrow(cid,Cx+15,Cy,Cx+105,Cy,"red",4,true);	// F
	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText("W",Cx-25,Cy-100);
	ctx.fillText("F",Cx+70,Cy-10);		
	
	// dimensioning
	cDrawDoubleArrow(cid,Ax,y0+50,x0,y0+50,"black",1,true);
	cDrawLine(cid,Ax,Ay+15,Ax,Ay+75,"black",1,"butt");	
	cDrawDoubleArrow(cid,Bx,y0+50,x0,y0+50,"black",1,true);
	cDrawLine(cid,Bx,By+15,Bx,By+75,"black",1,"butt");	
	
	cDrawDoubleArrow(cid,Cx-50,y0,Cx-50,Cy,"black",1,true);
	cDrawLine(cid,Cx-18,Cy,Cx-70,Cy,"black",1,"butt");		

	ctx.fillStyle="black";
	ctx.font="12px Arial";
	cDrawTextBG(cid," d ", (x0+Ax)/2-10,y0+41);
	cDrawTextBG(cid," d ", (x0+Bx)/2-10,y0+41);
	cDrawTextBG(cid,"h",Cx-54,(y0+Cy)/2-6);	

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