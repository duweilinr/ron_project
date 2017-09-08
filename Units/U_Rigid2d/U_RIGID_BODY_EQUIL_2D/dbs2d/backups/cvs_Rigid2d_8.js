// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 350;
	var y0= 400;
	xydata= {x0:x0,xmin:x0-250,xmax:x0+300,
			 y0:y0,ybot:y0+50, ytop:y0-350 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
//	Draw structure
	Ax=  x0+5;
	Ay=  y0-240;
	Bx=  x0+160;
	By=  y0-5;
	Cx=  (x0+Bx)/2;
	Cy=  (y0+Ay)/2;
	Dx=  x0;
	Dy=  y0 -(y0-Ay)/3;
	Ex=  x0 +0.69*(Bx-x0);
	Ey=  Dy;

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