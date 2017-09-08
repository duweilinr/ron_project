// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 200;
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

//	Draw structure
	var Ax=  x0+5;
	var Ay=  y0-240;
	var Bx=  x0+160;
	var By=  y0-5;
	var Cx=  (x0+Bx)/2;
	var Cy=  (y0+Ay)/2;
	var Dx=  x0;
	var Dy=  y0 -(y0-Ay)/3;
	var Ex=  x0 +0.69*(Bx-x0);
	var Ey=  Dy;

	cDrawLine(cid,Ax,Ay,Bx,By,"brown",12,"round"); 	// ladder AB
	cDrawLine(cid,Dx,Dy,Ex,Ey,"black",4,"round"); 	// cable DE
	
	cDrawLine(cid,x0-5,y0+4,x0-5,Ay-80,"gray",10,"butt"); 	// wall
	cDrawLine(cid,x0-10,y0+5,Bx+80,y0+5,"gray",10,"butt"); 	// floor
	
	cDrawDot(cid,Ax,Ay,2,"black");
	cDrawDot(cid,Bx,By,2,"black");	
	cDrawDot(cid,Cx,Cy,3,"black");
	cDrawDot(cid,Dx,Dy,4,"black");	
	cDrawDot(cid,Ex,Ey,4,"black");
		
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",Ax,Ay-13);
	ctx.fillText("B",Bx+15,By+2);
	ctx.fillText("C",Cx+15,Cy);
	ctx.fillText("D",Dx+5,Dy+15);
	ctx.fillText("E",Ex-15,Ey+15);	
		
	// draw force W
	cDrawArrow(cid,Cx,Cy+3,Cx,Cy+80,"red",4,true)
	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText("W",Cx-23,Cy+80);
	
	// draw dimensioning
	cDrawArc3(cid,Bx,By+5,50,-180,-125,"cw","black",1,"none",true,true);
	cDrawTextBG(cid,"a1",Bx-50,By-25)

	cDrawLine(cid,Ax+6,Ay-6,Ax+63,Ay-47,"black",1,"butt"); 	// guideline at A
	cDrawLine(cid,Bx+6,By-4,Bx+63,By-45,"black",1,"butt"); 	// guideline at B
	cDrawDoubleArrow(cid,Ax+45,Ay-35,Bx+49,By-34,"black",1,true);	// L	
	cDrawTextBG(cid," L ",Cx+42,Cy-45);
	
	cDrawLine(cid,Ex+8,Ey-4,Ex+38,Ey-27,"black",1,"butt"); 	// guideline at E
	cDrawDoubleArrow(cid,Ex+23,Ey-16,Bx+24,By-17,"black",1,true);	// d	
	cDrawTextBG(cid," d ",Ex+38,Ey+12);
	
	cDrawTextBG(cid," h ",Dx+40,Dy-20);	

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