// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 200;
	var y0= 400;
	var xydata= {x0:x0,xmin:50,xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	//	do setup
	var dp= 360;
	var hp= 280;
	// pt A is at x0,y0
	var xBp= x0;
	var yBp= y0-hp/2;
	var xCp= x0;
	var yCp= y0-hp;
	var xDp= x0+dp
	var yDp= y0-hp;
	var xEp= x0+dp
	var yEp= y0-hp/2;	
	var xFp= x0+dp
	var yFp= y0;
	var xGp= x0+110;		// will not scale properly	
	var yGp= y0-120;		// will not scale properly	
	var xHp= xFp-110;		// will not scale properly	
	var yHp= y0-120;		// will not scale properly	
	var xIp= x0+dp/2;
	var yIp= y0-hp*0.7;	
	
	// frame
	cDrawLine(cid,x0,y0,xCp,yCp,"silver",10,"round");
	cDrawLine(cid,x0,y0,xIp,yIp,"silver",10,"round");
	cDrawLine(cid,xCp,yCp,xDp,yDp,"silver",10,"round");	
	cDrawLine(cid,xDp,yDp,xFp,yFp,"silver",10,"round");
	cDrawLine(cid,xFp,yFp,xIp,yIp,"silver",10,"round");
	cDrawLine(cid,xBp,yBp,xIp,yIp,"silver",10,"round");	
	cDrawLine(cid,xEp,yEp,xIp,yIp,"silver",10,"round");
	cDrawLine(cid,xGp,yGp,xHp,yHp,"silver",10,"round");	
	cDrawLine(cid,xCp,yCp,xIp,yIp,"silver",10,"round");
	cDrawLine(cid,xDp,yDp,xIp,yIp,"silver",10,"round");
	
	// supports
	cDrawLine(cid,x0,y0,x0-8,y0+16,"gray",24,"butt");
	cDrawDot(cid,x0,y0,12,"gray");
	cDrawLine(cid,x0-30,y0+5,x0+13,y0+27,"black",4,"butt");
	cDrawDot(cid,x0-21,y0+17,5,"gray");
	cDrawDot(cid,x0,y0+28,5,"gray");
	cDrawLine(cid,x0-45,y0+12,x0+15,y0+43,"black",4,"butt");	
	
	cDrawLine(cid,xFp,yFp,xFp,yFp+18,"gray",24,"butt");
	cDrawDot(cid,xFp,yFp,12,"gray");	
	cDrawLine(cid,xFp-30,y0+20,xFp+30,y0+20,"black",4,"butt");
	
	// truss pins
	cDrawDot(cid,x0,y0,6,"white");
	cDrawDot(cid,x0,y0,4,"black");
	cDrawDot(cid,xBp,yBp,4,"black");
	cDrawDot(cid,xCp,yCp,4,"black");
	cDrawDot(cid,xDp,yDp,4,"black");
	cDrawDot(cid,xEp,yEp,4,"black");
	cDrawDot(cid,xFp,yFp,4,"black");
	cDrawDot(cid,xGp,yGp,4,"black");
	cDrawDot(cid,xHp,yHp,4,"black");
	cDrawDot(cid,xIp,yIp,4,"black");
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",x0-20,y0-15);
	ctx.fillText("B",xBp-20,yBp);
	ctx.fillText("C",xCp-20,yCp);	
	ctx.fillText("D",xDp+10,yDp);
	ctx.fillText("E",xEp+10,yEp);	
	ctx.fillText("F",xFp+8,yFp-12);
	ctx.fillText("G",xGp-3,yGp+25);
	ctx.fillText("H",xHp-6,yHp+25);	
	ctx.fillText("I",xIp,yIp-20);

	// dimensions - horiz
	cDrawDoubleArrow(cid,xCp,yCp-40,xDp,yDp-40,"gray",1,true);
	cDrawTextBG(cid," d ",xIp-7,yCp-48);
	// dimensions - vertical
	cDrawDoubleArrow(cid,xFp+40,yFp,xFp+40,yDp,"gray",1,true);
	cDrawTextBG(cid,"h",xFp+37,(yFp+yDp)/2-4);
	cDrawLine(cid,xDp+10,yDp,xDp+60,yDp,"gray",1,"round");
	cDrawLine(cid,xFp+18,yFp,xFp+60,yFp,"gray",1,"round");
	// dimensions - angle
	cDrawLine(cid,x0+20,y0+45,x0+100,y0+85,"gray",2,"round");
	cDrawLine(cid,x0,y0+85,x0+100,y0+85,"gray",2,"round");
	cDrawArc3(cid,x0+100,y0+85,80,-180,-153,"cw","black",1,"none",true,true);
	cDrawTextBG(cid,"a",x0+10,y0+54);

	// forces
	cDrawArrow(cid,xCp,yCp-60,xCp,yCp-5,"red",3,true);		// C
	cDrawArrow(cid,xDp,yDp-60,xDp,yDp-5,"red",3,true);		// D
	ctx.fillStyle="red";
	ctx.fillText("P",xCp-18,yCp-70);
	ctx.fillText("P",xDp-18,yDp-70);	

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