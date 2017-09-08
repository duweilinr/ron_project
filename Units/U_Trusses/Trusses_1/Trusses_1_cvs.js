// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 200;
	var y0= 300;
	var xydata= {x0:x0,xmin:x0-150,xmax:x0+650,
				 y0:y0,ybot:y0+150,ytop:y0-250 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	//	do setup
	var dp= 200;
	var hp= dp*0.82;
	var xAp= x0;
	var yAp= y0;
	var xBp= xAp+dp/2;
	var yBp= yAp-hp;
	var xCp= xAp+dp;
	var yCp= yAp;
	var xDp= xCp+dp/2;
	var yDp= yBp;
	var xEp= xCp+dp;
	var yEp= yCp;

	// frame
	cDrawLine(cid,xAp,yAp,xEp,yEp,"gray",10,"round");
	cDrawLine(cid,xAp,yAp,xBp,yBp,"gray",10,"round");
	cDrawLine(cid,xBp,yBp,xCp,yCp,"gray",10,"round");
	cDrawLine(cid,xBp,yBp,xDp,yDp,"gray",10,"round");
	cDrawLine(cid,xCp,yCp,xDp,yDp,"gray",10,"round");	
	cDrawLine(cid,xDp,yDp,xEp,yEp,"gray",10,"round");
	
	// support at A
	cDrawDot(cid,xAp,yAp,14,"white");
	cDrawLine(cid,xAp,yAp,xAp,yAp+18,"gray",24,"butt");	
	cDrawDot(cid,xAp,yAp,12,"gray");	
	cDrawLine(cid,xAp-25,yAp+24,xAp+25,yAp+24,"gray",12,"butt");
	
	// support at E
	cDrawDot(cid,xEp,yEp,14,"white");	
	cDrawLine(cid,xEp,yEp,xEp,yEp+18,"gray",24,"butt");
	cDrawDot(cid,xEp,yEp,12,"gray");	
	cDrawLine(cid,xEp-25,yEp+20,xEp+25,yEp+20,"gray",4,"butt");
	cDrawDot(cid,xEp-12,yEp+28,6,"gray");
	cDrawDot(cid,xEp+12,yEp+28,6,"gray");
	
	// ground line
	cDrawLine(cid,xAp-60,yAp+32,xEp+60,yEp+32,"black",3,"butt");
	
	// truss pins
	cDrawDot(cid,xAp,yAp,6,"white");
	cDrawDot(cid,xAp,yAp,4,"black");
	cDrawDot(cid,xBp,yBp,4,"black");
	cDrawDot(cid,xCp,yCp,4,"black");
	cDrawDot(cid,xDp,yDp,4,"black");
	cDrawDot(cid,xEp,yEp,6,"white");
	cDrawDot(cid,xEp,yEp,4,"black");
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp-25,yAp+6);
	ctx.fillText("B",xBp-25,yBp+6);
	ctx.fillText("C",xCp-4,yCp+20);	
	ctx.fillText("D",xDp+13,yDp-10);
	ctx.fillText("E",xEp+15,yEp+6);	

	// dimensions
	cDrawDoubleArrow(cid,xBp,yBp-25,xDp,yDp-25,"black",1,true);
	cDrawTextBG(cid," d ",xBp+dp/2-7,yBp-33);

	// forces
	cDrawArrow(cid,xBp,yBp-60,xBp,yBp-5,"red",3,true);		// FB
	cDrawArrow(cid,xDp,yDp-60,xDp,yDp-5,"red",3,true);		// FDy
	cDrawArrow(cid,xDp+5,yDp,xDp+65,yDp,"red",3,true);		// FDx		
	ctx.fillStyle="red";
	ctx.fillText("FB",xBp-25,yBp-60);
	ctx.fillText("FDy",xDp+10,yDp-60);
	ctx.fillText("FDx",xDp+50,yDp-10);	
	
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