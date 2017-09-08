// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 150;
	var y0= 300;
	xydata= {x0:x0,xmin:x0-50,xmax:x0+500,
			 y0:y0,ybot:y0+150,ytop:y0-250 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
//	Draw structure
	var Hp= 120;
	// pt A is at x0,y0
	var xBp= x0+2*Hp;
	var yBp= y0-Hp;
	var xCp= x0+3*Hp;
	var yCp= y0;
	var xDp= xBp;
	var yDp= y0;

	cDrawLine(cid,x0,y0,xCp,yCp,"brown",12,"round");
	cDrawLine(cid,x0,y0,xBp,yBp,"brown",12,"round");
	cDrawLine(cid,xBp,yBp,xCp,yCp,"brown",12,"round");
	
	cDrawDot(cid,x0,y0,3,"black");
	cDrawDot(cid,xBp,yBp,3,"black");
	cDrawDot(cid,xCp,yCp,3,"black");
	//cDrawDot(cid,xDp,yDp,3,"black");
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",x0-20,y0+20);
	ctx.fillText("B",xBp-15,yBp+30);
	ctx.fillText("C",xCp+8,y0+20);	
	//ctx.fillText("D",xDp+5,yDp+20);

	// draw distributed load w1
	cDrawLine(cid,x0,y0-40,xBp,yBp-40,"red",2,"round");
	var dx= (xBp-x0)/10;
	var xd= x0;
	var yt= y0;
	var dy= (y0-yBp)/10;
	while ( xd < xBp+5 ) {
		cDrawForce2(cid,xd,yt-40,xd,yt-6,2,"red","round",10);
		xd= xd+dx;
		yt= yt-dy;
	}
	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText("w1",x0+100,y0-110);
	
	// draw distributed load w2
	cDrawLine(cid,xBp,yBp-30,xCp,yCp-30,"red",2,"round");
	xd= xBp;
	yt= yBp+10;
	while ( xd < xCp+5 ) {
		cDrawForce2(cid,xd,yt-40,xd,yt-16,2,"red","round",10);
		xd= xd+dx;
		yt= yt+2*dy;
	}	
	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText("w2",(xBp+xCp)/2+15,yBp+40);
	
	cDrawDoubleArrow(cid,x0,y0+40,xBp,y0+40,"gray",1,true);
	cDrawTextBG(cid," 2H ",(x0+xBp)/2-8,y0+31);
	cDrawDoubleArrow(cid,xBp,y0+40,xCp,y0+40,"gray",1,true);
	cDrawTextBG(cid," H ",(xDp+xCp)/2-10,y0+31);
	cDrawLine(cid,xDp,yBp+10,xDp,yDp-10,"gray",1,"round");	
	cDrawLine(cid,xDp,yDp+10,xDp,yDp+60,"gray",1,"round");
	cDrawLine(cid,xCp,yCp+10,xCp,yCp+60,"gray",1,"round");
	
	cDrawDoubleArrow(cid,xCp+30,yDp,xCp+30,yBp,"gray",1,true);
	cDrawTextBG(cid," H ",xCp+20,(y0+yBp)/2-8);
	cDrawLine(cid,xBp+10,yBp,xCp+50,yBp,"gray",1,"round");		

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