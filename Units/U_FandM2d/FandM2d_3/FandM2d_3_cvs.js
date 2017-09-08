// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 100;
	var y0= 300;
	var xydata= {x0:x0,xmin:x0-50,xmax:x0+650,
				 y0:y0,ybot:y0+150,ytop:y0-250 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
		
//	Draw structure
	var Ax= x0;
	var Ay= y0;
	var Bx= 200 +x0;
	var By= y0;
	var Cx= 400 +x0;
	var Cy= y0;
	var Dx= 600 +x0;
	var Dy= y0;
	
	cDrawLine(cid,Ax,Ay,Dx,Dy,"lightgray",20,"butt");
	cDrawLine(cid,Ax,Ay-13,Dx,Dy-13,"silver",6,"butt");
	cDrawLine(cid,Ax,Ay-18,Dx,Dy-18,"gray",4,"butt");
	cDrawLine(cid,Ax,Ay+13,Dx,Dy+13,"silver",6,"butt");
	cDrawLine(cid,Ax,Ay+18,Dx,Dy+18,"gray",4,"butt");
	
	cDrawLine(cid,Ax-10,Ay-80,Ax-10,Ay+80,"silver",20,"butt");
	cDrawLine(cid,Ax-25,Ay-120,Ax-25,Ay+120,"black",10,"butt");

	cDrawLine(cid,Cx,Cy-100,Cx,Cy+100,"gray",10,"round");	// crossarm	

	cDrawDot(cid,Ax,Ay,3,"black");	// A
	cDrawDot(cid,Bx,By,3,"black");	// B
	cDrawDot(cid,Cx,Cy,3,"black");	// C	
	cDrawDot(cid,Dx,Dy,3,"black");	// D
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",Ax+10,Ay+5);
	ctx.fillText("B",Bx+10,By+5);
	ctx.fillText("C",Cx+10,Cy+5);	
	ctx.fillText("D",Dx-20,Dy+5);	

	// draw dimension lines
	cDrawDoubleArrow(cid,Ax,Ay+40,Bx,By+40,"black",1,true);
	cDrawDoubleArrow(cid,Bx,By+40,Cx,Cy+40,"black",1,true);
	cDrawDoubleArrow(cid,Cx,Cy+40,Dx,Dy+40,"black",1,true);
	cDrawLine(cid,Bx,By+22,Bx,By+60,"black",1,"butt");	
	cDrawLine(cid,Cx,Cy+22,Cx,Cy+60,"black",1,"butt");
	cDrawLine(cid,Dx,Dy+22,Dx,Dy+60,"black",1,"butt");	
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	cDrawTextBG(cid," 2m ",(Ax+Bx)/2-10,Ay+32);
	cDrawTextBG(cid," 2m ",(Bx+Cx)/2-10,By+32);
	cDrawTextBG(cid," 2m ",(Cx+Dx)/2-10,Cy+32);
	
	//	draw load forces
	cDrawArrow(cid,Dx,Dy,Dx+40,Dy+80,"red",3,true);			// F1 at D
	cDrawArrow(cid,Bx,By,Bx-40,By-80,"red",3,true);			// F1 at B
	cDrawArrow(cid,Cx,Cy-100,Cx-80,Cy-140,"red",3,true);	// F2 at C top
	cDrawArrow(cid,Cx,Cy+100,Cx+80,Cy+140,"red",3,true);	// F2 at C bot
	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText("F1",Dx+5,Dy+80);
	ctx.fillText("F1",Bx-30,By-80);
	ctx.fillText("F2",Cx-60,Cy-140);	
	ctx.fillText("F2",Cx+40,Cy+152);
	
	// draw angles
	cDrawLine(cid,Bx,By,Bx-60,By,"black",1,"round");				// a1 at B
	cDrawArc3(cid,Bx,By,40,180,245,"cw","black",1,"none",true,true);
	
	cDrawArc3(cid,Dx,Dy,30,0,65,"cw","black",1,"none",true,true);	// a1 at D	

	cDrawLine(cid,Cx-80,Cy-100,Cx,Cy-100,"black",1,false);			// a2 C up
	cDrawArc3(cid,Cx,Cy-100,50,180,205,"cw","black",1,"none",true,true);	

	cDrawLine(cid,Cx+80,Cy+100,Cx,Cy+100,"black",1,false);			// a2 C dn
	cDrawArc3(cid,Cx,Cy+100,50,0,25,"cw","black",1,"none",true,true);	

	ctx.fillStyle="black";
	ctx.fillText("a1",Bx-52,By-28);
	ctx.fillText("a1",Dx+25,Dy+32);
	ctx.fillText("a2",Cx-76,Cy-112);	
	ctx.fillText("a2",Cx+60,Cy+118);		

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

	// extract values from ivcode


	// draw the force

	
}