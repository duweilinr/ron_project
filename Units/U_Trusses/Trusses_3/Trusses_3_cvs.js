// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 350;
	var y0= 350;
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
	var dp= 80;
	var hp= 180;
	var mp= 100;

	var xAp= x0;
	var yAp= y0;
	var xBp= xAp+mp;
	var yBp= yAp;
	var xCp= xAp;
	var yCp= yAp-hp;
	var xDp= xAp+mp/2;
	var yDp= yAp-hp/2;
	var xEp= xBp;
	var yEp= yCp;
	
	var xFp= x0-mp;
	var yFp= yCp;
	var xGp= x0-mp/2;
	var yGp= yCp-dp;
	
	var xHp= xGp+mp;
	var yHp= yCp-dp;
	var xIp= xHp+mp;
	var yIp= yCp-dp;	
	var xJp= xIp+mp/2;
	var yJp= yCp;	

	// frame
	cDrawLine(cid,xAp,yAp,xCp,yCp,"gray",10,"round");
	cDrawLine(cid,xAp,yAp,xEp,yEp,"gray",10,"round");
	cDrawLine(cid,xEp,yEp,xBp,yBp,"gray",10,"round");	
	cDrawLine(cid,xBp,yBp,xCp,yCp,"gray",10,"round");
	
	cDrawLine(cid,xFp,yFp,xJp,yJp,"gray",10,"round");
	cDrawLine(cid,xGp,yGp,xIp,yIp,"gray",10,"round");

	cDrawLine(cid,xFp,yFp,xGp,yGp,"gray",10,"round");
	cDrawLine(cid,xCp,yCp,xHp,yHp,"gray",10,"round");
	cDrawLine(cid,xEp,yEp,xIp,yIp,"gray",10,"round");	
	cDrawLine(cid,xCp,yCp,xGp,yGp,"gray",10,"round");
	cDrawLine(cid,xEp,yEp,xHp,yHp,"gray",10,"round");
	cDrawLine(cid,xJp,yJp,xIp,yIp,"gray",10,"round");		
	
	// support at A
	cDrawDot(cid,xAp,yAp,12,"black");
	cDrawLine(cid,xAp,yAp,xAp,yAp+18,"gray",24,"butt");	
	cDrawDot(cid,xAp,yAp,10,"gray");	
	cDrawLine(cid,xAp-30,yAp+20,xAp+30,yAp+20,"black",4,"butt");
	
	cDrawDot(cid,xAp-16,yAp+28,6,"gray");
	cDrawDot(cid,xAp+16,yAp+28,6,"gray");
	cDrawLine(cid,xAp-60,yAp+36,xBp+60,yAp+36,"black",3,"butt");	// ground
	
	// support at B
	cDrawDot(cid,xBp,yBp,12,"black");	
	cDrawLine(cid,xBp,yBp,xBp,yBp+18,"gray",24,"butt");
	cDrawDot(cid,xBp,yBp,10,"gray");	
	cDrawLine(cid,xBp-30,yBp+20,xBp+30,yBp+20,"black",4,"butt");
	cDrawLine(cid,xBp-30,yBp+28,xBp+30,yBp+28,"gray",12,"butt");	
	
	// truss pins
	cDrawDot(cid,xAp,yAp,5,"white");
	cDrawDot(cid,xAp,yAp,3,"black");
	cDrawDot(cid,xBp,yBp,5,"white");	
	cDrawDot(cid,xBp,yBp,3,"black");
	cDrawDot(cid,xCp+2,yCp+2,3,"black");
	cDrawDot(cid,xDp,yDp,3,"black");
	cDrawDot(cid,xEp-2,yEp+2,3,"black");	
	cDrawDot(cid,xFp,yFp,3,"black");
	cDrawDot(cid,xGp,yGp,3,"black");	
	cDrawDot(cid,xHp,yHp,3,"black");
	cDrawDot(cid,xIp,yIp,3,"black");
	cDrawDot(cid,xJp,yJp,3,"black");	
		
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp+15,yAp+6);
	ctx.fillText("B",xBp+16,yBp+6);
	ctx.fillText("C",xCp-20,yCp+20);	
	ctx.fillText("D",xDp-25,yDp+5);
	ctx.fillText("E",xEp+10,yEp+20);
	ctx.fillText("F",xFp+15,yFp+20);
	ctx.fillText("G",xGp,yGp-8);
	ctx.fillText("H",xHp,yHp-8);	
	ctx.fillText("I",xIp,yIp-8);
	ctx.fillText("J",xJp-15,yJp+20);
	

	// dimensions
	cDrawDoubleArrow(cid,xFp-35,yFp,xFp-35,yGp,"black",1,true);
	cDrawTextBG(cid," d ",xFp-44,yFp-7-dp/2);
	cDrawLine(cid,xFp-55,yFp,xFp-15,yFp,"black",1,"round");
	cDrawLine(cid,xFp-55,yGp,xGp-15,yGp,"black",1,"round");	

	cDrawDoubleArrow(cid,xAp-35,yAp,xCp-35,yCp,"blackray",1,true);
	cDrawTextBG(cid,"h",xAp-40,yAp-hp/2-4);
	cDrawLine(cid,xAp-50,yAp,xAp-15,yAp,"black",1,"round");

	// forces
	cDrawArrow(cid,xFp,yFp+5,xFp,yFp+75,"red",3,true);		// F1
	cDrawArrow(cid,xJp,yJp+5,xJp,yJp+65,"red",3,true);		// FJy
	cDrawArrow(cid,xJp+5,yJp,xJp+65,yJp,"red",3,true);		// FJx	
	
	ctx.fillStyle="red";
	ctx.fillText("F1",xFp-30,yFp+60);
	ctx.fillText("F2",xJp+30,yJp-10);
	ctx.fillText("F3",xJp-25,yJp+50);
	
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