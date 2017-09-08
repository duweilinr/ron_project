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
	var Bx=  x0;
	var By=  y0;
	var Ax=  Bx-160;
	var Ay=  By;
	var Cx=  Bx;
	var Cy=  By -260;
	var Dx=  Bx +160;
	var Dy=  By -260*0.75;

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
	ctx.fillText("C",Cx+10,Cy-10);	
	ctx.fillText("D",Dx+5,Dy-10);	
	
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