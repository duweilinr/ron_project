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
	var dp= 140;
	var hp= 200;

	var xAp= x0;
	var yAp= y0;
	var xBp= xAp+2*dp;
	var yBp= yAp;
	var xCp= xAp+dp;
	var yCp= yAp-hp;
	var xDp= (xAp+xCp)/2;
	var yDp= (yAp+yCp)/2;
	var xEp= (xCp+xBp)/2;
	var yEp= (yCp+yBp)/2;

	// frame
	cDrawLine(cid,xAp,yAp,xCp,yCp,"gray",20,"round");
	cDrawLine(cid,xAp,yAp,xCp,yCp,"lightgray",14,"round");			
	cDrawLine(cid,xBp,yBp,xCp,yCp,"gray",20,"round");
	cDrawLine(cid,xBp,yBp,xCp,yCp,"lightgray",14,"round");	
	
	// support at A
	cDrawDot(cid,xAp,yAp,14,"white");
	cDrawLine(cid,xAp,yAp,xAp,yAp+12,"gray",24,"butt");	
	cDrawDot(cid,xAp,yAp,12,"gray");	
	cDrawLine(cid,xAp-20,yAp+17,xAp+20,yAp+17,"gray",10,"butt");
	cDrawLine(cid,xAp-25,yAp+24,xAp+25,yAp+24,"black",3,"butt");
	cDrawDot(cid,xAp,yAp,6,"white");
	cDrawDot(cid,xAp,yAp,4,"black");
	
	// support at B
	cDrawDot(cid,xBp,yBp,14,"white");	
	cDrawLine(cid,xBp,yBp,xBp,yBp+12,"gray",24,"butt");
	cDrawDot(cid,xBp,yBp,12,"gray");	
	cDrawLine(cid,xBp-20,yBp+17,xBp+20,yBp+17,"gray",10,"butt");	
	cDrawLine(cid,xBp-25,yAp+24,xBp+25,yAp+24,"black",3,"butt");
	cDrawDot(cid,xBp,yBp,6,"white");
	cDrawDot(cid,xBp,yBp,4,"black");
	
	// marker points
	cDrawDot(cid,xCp,yCp,4,"black");
	cDrawDot(cid,xDp,yDp,2,"gray");
	cDrawDot(cid,xEp,yEp,2,"gray");	
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp-25,yAp);
	ctx.fillText("B",xBp+15,yBp);
	ctx.fillText("C",xCp-5,yCp-20);
	//ctx.fillText("D",xDp+15,yDp+10);
	//ctx.fillText("E",xEp-25,yEp+10);	

	// dimensions
	cDrawDoubleArrow(cid,xAp,yAp+40,xCp,yAp+40,"black",1,true);	
	cDrawDoubleArrow(cid,xBp,yAp+40,xCp,yAp+40,"black",1,true);
	cDrawLine(cid,xAp,yAp+28,xAp,yAp+55,"black",1,"butt");	
	cDrawLine(cid,xCp,yCp+20,xCp,yAp+55,"black",1,"butt");	
	cDrawLine(cid,xBp,yBp+28,xBp,yBp+55,"black",1,"butt");
	cDrawTextBG(cid," d ",xAp+dp/2-9,yAp+32);
	cDrawTextBG(cid," d ",xBp-dp/2-9,yAp+32);		

	// forces
	cDrawArrow(cid,xEp+65,yEp-55,xEp+2,yEp-2,"red",3,true);		// F
	ctx.fillStyle="red";
	ctx.fillText("F",xEp+55,yEp-60);
	
	cDrawArc3(cid,xDp,yDp,30,90,270,"cw","red",3,"none",true,false);
	ctx.fillText("M",xDp-45,yDp+8);	

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