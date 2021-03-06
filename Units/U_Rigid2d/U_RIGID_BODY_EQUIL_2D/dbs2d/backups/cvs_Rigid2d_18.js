// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 400;
	xydata= {x0:x0,xmin:x0-250,xmax:x0+250,
					y0:y0,ybot:y0+50, ytop:y0-350 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
//	Draw structure
	cDrawLine(cid,x0-120,y0+9,x0+120,y0+9,"gray",6,"butt");		// base
	cDrawLine(cid,x0-50,y0+3,x0+50,y0+3,"silver",7,"butt");		// base
	cDrawLine(cid,x0-50,y0+1,x0+50,y0+1,"black",1,"butt");		// base	
	
	cDrawLine(cid,x0,y0,x0,y0-240,"silver",12,"butt"); 	 		// tower
	cDrawLine(cid,x0-6,y0,x0-6,y0-240,"black",1,"butt"); 		// tower
	cDrawLine(cid,x0-4,y0,x0-4,y0-240,"gray",2,"butt"); 		// tower	
	cDrawLine(cid,x0,y0,x0,y0-240,"white",1,"butt"); 	 		// tower	
	cDrawLine(cid,x0+4,y0,x0+4,y0-240,"gray",2,"butt"); 		// tower
	cDrawLine(cid,x0+6,y0,x0+6,y0-240,"black",1,"butt"); 		// tower

	cDrawLine(cid,x0-150,y0-240,x0+150,y0-240,"gray",8,"round"); 	// beam
	cDrawLine(cid,x0-145,y0-229,x0-145,y0-200,"gray",14,"round"); 	// signal1
	cDrawLine(cid,x0-97,y0-229,x0-97,y0-200,"gray",14,"round"); 	// signal2
	cDrawLine(cid,x0+97,y0-229,x0+97,y0-200,"gray",14,"round"); 	// signal3
	cDrawLine(cid,x0+145,y0-229,x0+145,y0-200,"gray",14,"round"); 	// signal4
	
	cDrawDot(cid,x0,y0,3,"black");			// point 0
	
	cDrawDoubleArrow(cid,x0-145,y0-260,x0-97,y0-260,"black",1,true);
	cDrawDoubleArrow(cid,x0-97,y0-260,x0,y0-260,"black",1,true);
	cDrawDoubleArrow(cid,x0,y0-260,x0+97,y0-260,"black",1,true);
	cDrawDoubleArrow(cid,x0+97,y0-260,x0+145,y0-260,"black",1,true);
	ctx.fillStyle="black";
	ctx.font="12px Arial";
	ctx.fillText("2m",x0-128,y0-264);
	ctx.fillText("4m",x0-60,y0-264);
	ctx.fillText("4m",x0+45,y0-264);
	ctx.fillText("2m",x0+112,y0-264);
	cDrawLine(cid,x0-145,y0-245,x0-145,y0-280,"gray",1,"butt");
	cDrawLine(cid,x0-97,y0-245,x0-97,y0-280,"gray",1,"butt");	
	cDrawLine(cid,x0+97,y0-245,x0+97,y0-280,"gray",1,"butt");	
	cDrawLine(cid,x0+145,y0-245,x0+145,y0-280,"gray",1,"butt");	

	ctx.fillStyle="black";
	ctx.font="14px Arial";
	ctx.fillText("m1",x0-180,y0-210);
	ctx.fillText("m2",x0-85,y0-210);
	ctx.fillText("m3",x0+65,y0-210);
	ctx.fillText("m4",x0+155,y0-210);
	ctx.font="bold 16px Arial";	
	ctx.fillText("O",x0-23,y0-5);

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