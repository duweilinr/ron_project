// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 250;
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

	// geometry setup
	var dp= 300;		// total width
	var wp= 180;		// ladder width
	var hp= 220;		// height
	
	var xAp= x0;
	var yAp= y0;
	var xBp= x0+dp-wp;
	var yBp= y0;
	var xCp= x0+dp;
	var yCp= y0-hp;
	var xDp= x0+40;
	var yDp= y0;	
	
	// frame
	// walls
	cDrawLine(cid,x0-2,y0+8,x0-2,y0-hp,"black",4,"butt");		// wall L	
	cDrawLine(cid,x0-4,y0+10,xCp+12,y0+10,"black",4,"butt");		// floor
	cDrawLine(cid,xCp+10,y0+8,xCp+10,y0-hp-40,"black",4,"butt");	// wall R		
	
	// frame and spacer bar
	cDrawLine(cid,xBp,yBp,xCp,yCp,"gray",16,"round");		// ladder
	cDrawLine(cid,xBp,yBp,xCp,yCp,"lightgray",10,"round");	// ladder
	cDrawLine(cid,xDp,yDp,xBp,yBp,"gray",16,"round");		// spacer bar		
	cDrawLine(cid,xDp,yDp,xBp,yBp,"lightgray",10,"round");	// spacer bar	

	// spring
	cDrawLine(cid,xAp,yAp,xDp,yDp,"white",16,"butt");		// spacer bar		
	cDrawLine(cid,xAp+2, yAp-8,xAp+2,yAp+8,"black",4,"butt");	
	cDrawLine(cid,xAp+4, yAp-6,xAp+10,yAp+6,"black",2,"butt");
	cDrawLine(cid,xAp+10,yAp-6,xAp+16,yAp+6,"black",2,"butt");
	cDrawLine(cid,xAp+16,yAp-6,xAp+22,yAp+6,"black",2,"butt");
	cDrawLine(cid,xAp+22,yAp-6,xAp+28,yAp+6,"black",2,"butt");
	cDrawLine(cid,xAp+28,yAp-6,xAp+34,yAp+6,"black",2,"butt");
	cDrawLine(cid,xAp+34,yAp-6,xAp+40,yAp+6,"black",2,"butt");
	cDrawLine(cid,xAp+40-2,yAp-8,xAp+40-2,yAp+8,"black",4,"butt");		
		
	// key points
	cDrawDot(cid,xBp,yBp,2,"black");		
	cDrawDot(cid,xCp,yCp,2,"black");
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp-25,yAp-5);
	ctx.fillText("B",xBp-15,yBp-10);
	ctx.fillText("C",xCp+15,yCp-5);
	ctx.fillText("D",xDp-5,yDp-10);	

	// dimensions
	cDrawDoubleArrow(cid,xBp,yBp+25,xCp+10,yBp+25,"gray",1,true);
	cDrawLine(cid,xBp,yBp+5,xBp,yBp+35,"black",1,"butt");		
	cDrawDoubleArrow(cid,xAp,yAp+50,xCp+10,yAp+50,"gray",1,true);
	cDrawLine(cid,xCp+10,yAp+5,xCp+10,yAp+65,"gray",1,"butt");	
	cDrawDoubleArrow(cid,xCp+35,yBp,xCp+35,yCp,"gray",1,true);
	cDrawLine(cid,xCp+8,yCp,xCp+50,yCp,"gray",1,"butt");		
	
	cDrawTextBG(cid," w ",(xBp+xCp)/2-10,yAp+15);		
	cDrawTextBG(cid," 30 ft ",(xAp+xCp)/2-15,yAp+40);			
	cDrawTextBG(cid,"h",xCp+30,(yAp+yCp)/2-9);

	// forces
	cDrawArrow(cid,(xBp+xCp)/2,yCp+20,(xBp+xCp)/2,(yBp+yCp)/2-5,"red",4,true);
	ctx.fillStyle="red";
	ctx.fillText("F",(xBp+xCp)/2-15,yCp+20);
	
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
}