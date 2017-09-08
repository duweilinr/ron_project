// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 500;
	var y0= 100;
	var xydata= {x0:x0,xmin:x0-400,xmax:x0+100,
				 y0:y0,ybot:y0+350, ytop:y0-50 };	
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
//	Draw structure;
	Ax=    x0;
	Ay=    y0;
	Bx=    x0-100;
	By=    y0+200;
	Cx=    x0-180;
	Cy=    y0+160;
	
	cDrawArrow(cid,Ax-240,Ay,Ax+100,Ay,"gray",1,true);	// x axis
	cDrawArrow(cid,Ax,Ay+270,Ax,Ay-100,"gray",1,true);	// y axis
	ctx.fillStyle="gray";
	ctx.font="bold 14px Arial";
	ctx.fillText("X",Ax+80,Ay+20);
	ctx.fillText("Y",Ax-20,Ay-80);	
	
//	Draw structure
	cDrawDot(cid,Ax,Ay,10,"lightgray");
	cDrawLine(cid,Ax-60,Ay-10,Ax+13,Ay-10,"gray",6,"butt");	// base
	cDrawLine(cid,Ax+10,Ay-13,Ax+10,Ay+60,"gray",6,"butt");
	
	cDrawLine(cid,Ax,Ay,Bx,By,"gray",12,"round"); 	// link AB
	cDrawLine(cid,Bx,By,Cx,Cy,"gray",12,"round"); 	// link BC
	cDrawSpringR(cid,Ax,Ay,Cx,Cy,10,20);			// spring
	
	cDrawDot(cid,Ax,Ay,4,"white");
	cDrawDot(cid,Ax,Ay,2,"black");
	cDrawDot(cid,Bx,By,4,"white");
	cDrawDot(cid,Bx,By,2,"black");
	cDrawDot(cid,Cx,Cy,4,"white");		
	cDrawDot(cid,Cx,Cy,2,"black");	
	
	// labeling joints
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",Ax+16,Ay-16);
	ctx.fillText("B",Bx+10,By+10);
	ctx.fillText("C",Cx-10,Cy+20);
	
	// draw forces W and C
	cDrawArrow(cid,Bx,By,Bx,By+80,"red",3,true)
	cDrawArrow(cid,Cx,Cy,Cx-80,Cy,"red",3,true)
	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText("W",Bx+10,By+60);
	ctx.fillText("FC",Cx-70,Cy-10);
	
	// draw angle dimensioning
	cDrawLine(cid,Ax-60,Ay+53,Ax-100,Ay+92,"black",2,"round");
	cDrawArc3(cid,Ax,Ay,100,137,180,"cw","black",1,"none",true,true)
	cDrawArc3(cid,Bx,By,45,-148,-70,"cw","black",1,"none",true,true)
	cDrawTextBG(cid,"a1",Ax-100,Ay+30)
	cDrawTextBG(cid,"a2",Bx-20,By-52)	

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