// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 250;
	var y0= 300;
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
	var dp= 320;
	var hp= 160;

	var xAp= x0;
	var yAp= y0;
	var xBp= xAp;
	var yBp= yAp-hp;
	var xCp= xBp +dp;
	var yCp= yBp;
	var xDp= xCp;
	var yDp= yAp;		
	var xEp= xAp+dp/2;
	var yEp= yAp-hp/2;

	// frame
	cDrawLine(cid,xAp,yAp,xCp,yCp,"gray",10,"round");
	cDrawLine(cid,xAp,yAp,xDp,yDp,"gray",10,"round");	
	cDrawLine(cid,xBp,yBp,xCp,yCp,"gray",10,"round");
	cDrawLine(cid,xBp,yBp,xDp,yDp,"gray",10,"round");	
	cDrawLine(cid,xCp,yCp,xDp,yDp,"gray",10,"round");
	
	// support at A
	cDrawDot(cid,xAp,yAp,14,"white");		// outline
	cDrawDot(cid,xAp,yAp,12,"gray");		
	cDrawLine(cid,xAp,yAp,xAp-18,yAp,"gray",24,"butt");	
	cDrawLine(cid,xAp-20,yAp+20,xAp-20,yAp-20,"black",4,"butt");	
	cDrawDot(cid,xAp-26,yAp+10,4,"gray");
	cDrawDot(cid,xAp-26,yAp-10,4,"gray");
	
	cDrawLine(cid,xAp-30,yAp+40,xAp-30,yBp-40,"black",5,"butt");	// ground
	
	// support at B
	cDrawDot(cid,xBp,yBp,14,"white");		// outline	
	cDrawDot(cid,xBp,yBp,12,"gray");	
	cDrawLine(cid,xBp,yBp,xBp-18,yBp,"gray",24,"butt");
	cDrawLine(cid,xBp-23,yBp+20,xBp-23,yBp-20,"gray",10,"butt");	
	
	// truss pins
	cDrawDot(cid,xAp,yAp,6,"white");
	cDrawDot(cid,xAp,yAp,4,"black");
	cDrawDot(cid,xBp,yBp,6,"white");	
	cDrawDot(cid,xBp,yBp,4,"black");
	cDrawDot(cid,xCp-2,yCp+2,4,"black");
	cDrawDot(cid,xDp-2,yDp-2,4,"black");
	cDrawDot(cid,xEp,yEp,4,"black");	
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp-5,yAp-15);
	ctx.fillText("B",xBp-5,yBp-15);
	ctx.fillText("C",xCp+10,yCp+5);	
	ctx.fillText("D",xDp+10,yDp+5);
	ctx.fillText("E",xEp-5,yEp-10);	

	// dimensions
	cDrawDoubleArrow(cid,xAp,yAp+25,xDp,yDp+25,"black",1,true);
	cDrawTextBG(cid," d ",xAp+dp/2-10,yAp+15);	
	cDrawLine(cid,xAp,yAp+10,xAp,yAp+40,"black",1,"round");
	cDrawLine(cid,xDp,yDp+10,xDp,yDp+40,"black",1,"round");		

	cDrawDoubleArrow(cid,xAp-55,yAp,xAp-55,yBp,"blackray",1,true);
	cDrawTextBG(cid,"h",xAp-60,yAp-hp/2-4);
	cDrawLine(cid,xAp-75,yAp,xAp-35,yAp,"black",1,"round");
	cDrawLine(cid,xBp-75,yBp,xBp-35,yBp,"black",1,"round");

	// forces
	cDrawArrow(cid,xCp,yCp-60,xCp,yCp-5,"red",3,true);		// FC
	cDrawArrow(cid,xEp+5,yEp,xEp+60,yEp,"red",3,true);		// FD
	cDrawArrow(cid,xDp,yDp+5,xDp,yDp+60,"red",3,true);		// FG	
	
	ctx.fillStyle="red";
	ctx.fillText("FC",xCp+5,yCp-50);
	ctx.fillText("FE",xEp+60,yEp-5);
	ctx.fillText("FD",xDp+5,yDp+40);
	
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