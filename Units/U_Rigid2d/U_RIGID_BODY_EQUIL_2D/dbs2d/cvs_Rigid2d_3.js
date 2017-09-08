// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 400;
	var xydata= {x0:x0,xmin:x0-330,xmax:x0+300,
				y0:y0,ybot:y0+100,ytop:y0-350 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
//	Draw structure; key points in true px locations
	Bx=  x0;
	By=  y0;
	Ax=  Bx-160;
	Ay=  By;
	Cx=  Bx;
	Cy=  By -260;
	Dx=  Bx +160;
	Dy=  By -260*0.75;

	cDrawLine(cid,Bx,By,Cx,Cy,"brown",16,"round"); 	// post
	cDrawLine(cid,Bx,Dy,Dx,Dy,"brown",8,"round"); 	// arm
	cDrawLine(cid,Bx,Cy,Dx-60,Dy,"brown",6,"round"); // angle arm
	cDrawLine(cid,Ax,Ay,Cx,Cy,"black",2,"round"); 	// cable		
	cDrawDot(cid,Ax,Ay,8,"gray");					// cable support
	cDrawLine(cid,Ax,Ay,Ax,Ay+16,"gray",16,"butt");
	cDrawDot(cid,Ax,Ay,4,"white");	
	cDrawDot(cid,Bx,By,10,"gray");					// post support
	cDrawLine(cid,Bx,By,Bx,By+16,"gray",20,"butt");
	cDrawDot(cid,Bx,By,6,"white");			
	cDrawLine(cid,Ax-60,Ay+18,Bx+80,By+18,"gray",4,"butt"); // ground
	
	cDrawDot(cid,Ax,Ay,3,"black");
	cDrawDot(cid,Bx,By,3,"black");	
	cDrawDot(cid,Cx,Cy,3,"black");
	cDrawDot(cid,Dx,Dy,3,"black")
		
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",Ax-20,Ay-10);
	ctx.fillText("B",Bx+10,By-10);
	ctx.fillText("C",Cx-20,Cy-10);	
	ctx.fillText("D",Dx-20,Dy+20);	
	
	// load and force W
	cDrawArrow(cid,Dx,Dy,Dx,Dy+60,"red",3,true)
	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText("W",Dx-20,Dy+60);
	
	// draw dimensioning
	cDrawLine(cid,Ax,Ay+10,Ax,Ay+60,"black",1,"butt"); 	// guideline at A
	cDrawDoubleArrow(cid,Ax,Ay+40,Bx,By+40,"black",1,true);
	cDrawTextBG(cid," 3 m ",(Ax+Bx)/2-14,Ay+32);
	
	cDrawLine(cid,Dx,Dy-5,Dx,Cy-20,"black",1,"butt"); 	// guideline at D	
	cDrawDoubleArrow(cid,Cx+5,Cy,Dx,Cy,"black",1,true);
	cDrawTextBG(cid," d ",(Cx+Dx)/2-10,Cy-8);
	
	cDrawLine(cid,Ax-50,Cy,Cx-15,Cy,"black",1,"butt"); 	// guideline at C	
	cDrawDoubleArrow(cid,Ax-30,Ay,Ax-30,Cy,"black",1,true);
	cDrawTextBG(cid,"h",Ax-33,(Ay+Cy)/2-8);

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