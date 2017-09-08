// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 250;
	var y0= 200;
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
	var L=  360;			// Length of board in px
	var hw= 45;				// ht board above water in px  	
	var Ax= x0;
	var Ay= y0;
	var Bx= Ax +L;
	var By= y0;
	var Cx= Ax +L*0.5;
	var Cy= Ay;
	var Dx= Cx;
	var Dy= Cy +hw;

	cDrawLine(cid,Ax,Ay,Ax-50,Ay+50,"gray",16,"round");		// steps
	cDrawLine(cid,Ax,Ay,Ax,Ay+50,"gray",12,"round");		// short post	
	cDrawLine(cid,Ax-100,Dy+8,Dx+20,Dy+8,"gray",16,"butt");	// horiz base
	cDrawLine(cid,Dx+20,Dy,Dx+20,Dy+50,"gray",16,"butt");	// vert base
	
	cDrawDot(cid,Ax,Ay,14,"black");							// board	
	cDrawDot(cid,Ax,Ay,12,"silver");	
	cDrawLine(cid,Ax+12,Ay-5,Bx,By-5,"black",2,"butt");
	cDrawLine(cid,Ax+12,Ay,Bx,By,"silver",8,"butt");
	cDrawLine(cid,Ax+12,Ay+5,Bx,By+5,"black",2,"butt");	
	cDrawSpringR(cid,Cx,Cy,Dx,Dy,6,10);			// spring
	cDrawLine(cid,Dx+30,Dy+3,Bx+80,Dy+3,"lightblue",3,"round");	// water
	cDrawLine(cid,Dx+30,Dy+7,Bx+70,Dy+7,"lightblue",3,"round");
	cDrawLine(cid,Dx+30,Dy+11,Bx+50,Dy+11,"lightblue",3,"round");
		
	// markers and labels
	cDrawDot(cid,Ax,Ay,4,"white");
	cDrawDot(cid,Ax,Ay,2,"black");
	cDrawDot(cid,Bx,By,2,"black");
	cDrawDot(cid,Cx,Cy,2,"black");
	cDrawDot(cid,Dx,Dy,2,"black");
	cDrawDot(cid,Bx-L/12,By,2,"black");
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",Ax-18,Ay-10);
	ctx.fillText("B",Bx+5,By-10);
	ctx.fillText("C",Cx-5,Cy-10);
	ctx.fillText("D",Dx-20,Dy-5);
	ctx.fillText("E",Bx-L/12,By-10);	
	
	// dimensioning
	cDrawDoubleArrow(cid,Ax-70,Ay,Ax-70,Dy,"black",1,true);
	cDrawTextBG(cid,"hA",Ax-93,Ay+12);

	cDrawDoubleArrow(cid,Ax,Dy+40,Dx,Dy+40,"black",1,true);
	cDrawLine(cid,Dx,Dy+15,Dx,Dy+60,"black",1,"butt");
	cDrawTextBG(cid," d ",(Ax+Dx)/2-12,Dy+31);
	
	cDrawDoubleArrow(cid,Ax,Dy+75,Bx,Dy+75,"black",1,true);
	cDrawLine(cid,Bx,By+10,Bx,Dy+95,"black",1,"butt");
	cDrawTextBG(cid," 12ft ",(Ax+Bx)/2-15,Dy+65);

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