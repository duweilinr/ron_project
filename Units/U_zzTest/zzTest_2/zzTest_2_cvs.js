// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 200;
	var y0= 240;
	var xydata= {x0:x0,xmin:50,xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
	//	Draw structure
	var xBp= x0+100;
	var yBp= y0+80;
	var xCp= x0+300;
	var yCp= y0-100;

	cDrawArrow(cid,x0-80,y0,xCp+100,y0,"gray",2,true);	// x axis
	cDrawArrow(cid,x0,y0+200,x0,yCp-80,"gray",2,true);	// y axis
	ctx.fillStyle="gray";
	ctx.font="14px Arial";
	ctx.fillText("X",xCp+70,y0+25);
	ctx.fillText("Y",x0-25,yCp-60);

	cDrawDot(cid,x0,y0,8,"black");
	cDrawDot(cid,x0,y0,4,"white");
	cDrawLine(cid,x0-8,y0+30,x0-8,y0-30,"black",8,"butt");
	cDrawDot(cid,xCp,yCp,8,"black");
	cDrawDot(cid,xCp,yCp,4,"white");
	cDrawLine(cid,xCp+8,yCp-30,xCp+8,yCp+30,"black",8,"butt");
	
	cDrawLine(cid,x0,y0,xBp,yBp,"darkgray",6,"round");		// cable AB
	cDrawLine(cid,xCp,yCp,xBp,yBp,"darkgray",6,"round");	// cable BC
	
	cDrawLine(cid,xBp,yBp-10,xBp,yBp+0,"blue",12,"round");	// ring
	cDrawArrow(cid,xBp,yBp+6,xBp,yBp+70,"red",3,true);		// weight W
	ctx.fillStyle="red";
	ctx.font="bold 16px Arial";
	ctx.fillText("W",xBp+15,yBp+70);
	
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText("A",x0-30,y0+20);
	ctx.fillText("B",xBp-25,yBp+20);
	ctx.fillText("C",xCp+20,yCp-10);

	cDrawLine(cid,xCp+8,yCp,xCp+60,yCp,"gray",1,"butt");
	cDrawDoubleArrow(cid,xCp+30,y0,xCp+30,yCp,"gray",1,true);
	cDrawTextBG(cid,"1 m",xCp+20,(y0+yCp)/2-10);
	
	cDrawLine(cid,xCp,yCp-10,xCp,yCp-60,"gray",1,"butt");
	cDrawDoubleArrow(cid,x0,yCp-40,xCp,yCp-40,"gray",1,true);
	cDrawTextBG(cid," 3 m ",(x0+xCp)/2-25,yCp-48);			

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