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
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	//	do setup
	var dp= 260;
	var hp= 180;

	var xAp= x0;
	var yAp= y0;
	var xBp= xAp+dp;
	var yBp= yAp;
	var xCp= xAp;
	var yCp= yAp-hp;
	var xDp= xAp+dp/2;
	var yDp= yAp-hp/2;
	var xEp= xBp;
	var yEp= yCp;

	// frame
	cDrawLine(cid,xAp,yAp,xCp,yCp,"gray",10,"round");
	cDrawLine(cid,xCp,yCp,xEp,yEp,"gray",10,"round");
	cDrawLine(cid,xEp,yEp,xBp,yBp,"gray",10,"round");	
	cDrawLine(cid,xAp,yAp,xEp,yEp,"gray",10,"round");
	cDrawLine(cid,xBp,yBp,xCp,yCp,"gray",10,"round");
	
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
	cDrawDot(cid,xAp,yAp,6,"white");
	cDrawDot(cid,xAp,yAp,4,"black");
	cDrawDot(cid,xBp,yBp,6,"white");	
	cDrawDot(cid,xBp,yBp,4,"black");
	cDrawDot(cid,xCp+2,yCp+2,4,"black");
	cDrawDot(cid,xDp,yDp,4,"black");
	cDrawDot(cid,xEp-2,yEp+2,4,"black");
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp+15,yAp+6);
	ctx.fillText("B",xBp+16,yBp+6);
	ctx.fillText("C",xCp-20,yCp-8);	
	ctx.fillText("D",xDp-5,yDp-15);
	ctx.fillText("E",xEp+10,yEp-8);	

	// dimensions
	cDrawDoubleArrow(cid,xCp,yCp-25,xEp,yCp-25,"black",1,true);
	cDrawTextBG(cid," d ",xDp-7,yCp-33);

	cDrawDoubleArrow(cid,xAp-25,yAp,xCp-25,yCp,"blackray",1,true);
	cDrawTextBG(cid,"h",xAp-30,yAp-hp/2-4);
	cDrawLine(cid,xAp-40,yAp,xAp-10,yAp,"black",1,"round");
	cDrawLine(cid,xCp-40,yCp,xCp-8,yCp,"black",1,"round");

	// forces
	cDrawArrow(cid,xCp,yCp-60,xCp,yCp-5,"red",3,true);		// C
	cDrawArrow(cid,xEp,yEp-60,xEp,yEp-5,"red",3,true);		// Ey
	cDrawArrow(cid,xEp+60,yEp,xEp+5,yEp,"red",3,true);		// Ex	
	
	ctx.fillStyle="red";
	ctx.fillText("F",xCp-15,yCp-60);
	ctx.fillText("F",xEp-15,yEp-60);
	ctx.fillText("F",xEp+50,yEp-10);	

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