// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 350;
	var y0= 300;
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
	var rp= 140;
	var ap= 100;
	var hp= Math.sqrt(rp*rp-ap*ap);
	var thetar= 55*Math.PI/180;	// rad

	var xAp= x0-ap;
	var yAp= y0-hp;
	var xBp= x0+rp;
	var yBp= y0;
	var xCp= x0;
	var yCp= y0-rp;
	var xDp= x0+rp*Math.cos(thetar);
	var yDp= y0-rp*Math.sin(thetar);
	var xEp= x0+rp*Math.cos(thetar/2);
	var yEp= y0-rp*Math.sin(thetar/2);	
	
	// frame
	cDrawArc3(cid,x0,y0,rp+5,-135,0,"cws","black",2,"lightgray",false,false);
	cDrawArc3(cid,x0,y0,rp-5,-135,0,"cws","black",2,"white",false,false);	

	// support at A
	cDrawDot(cid,xAp,yAp,12,"white");
	cDrawDot(cid,xAp,yAp,10,"gray");	
	cDrawLine(cid,xAp-12,yAp+6,xAp+12,yAp+6,"gray",6,"butt");
	cDrawDot(cid,xAp,yAp,4,"white");		
	cDrawDot(cid,xAp,yAp,2,"black");
	
	// groundlines
	cDrawLine(cid,xAp-40,yAp+10,xAp+30,yAp+10,"black",2,"round");
	cDrawLine(cid,xAp+30,yAp+10,xAp+30,y0+10,"black",2,"round");
	cDrawLine(cid,xAp+30,y0+10,xBp+30,y0+10,"black",2,"round");	
	
	// support at B
	cDrawDot(cid,xBp,yBp,3,"black");	
	cDrawLine(cid,xBp-10,yBp+2,xBp+10,yBp+2,"black",3,"butt");
	cDrawDot(cid,xBp-6,yBp+6,3,"black");
	cDrawDot(cid,xBp+6,yBp+6,3,"black");	
	
	// marker points
	cDrawDot(cid,xCp,yCp,2,"blue");
	cDrawDot(cid,xDp,yDp,2,"black");
	cDrawDot(cid,xEp,yEp,2,"blue");	
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("O",x0-15,y0-5);	
	ctx.fillText("A",xAp,yAp-20);
	ctx.fillText("B",xBp+15,yBp-5);
	ctx.fillText("C",xCp+5,yCp-15);
	ctx.fillText("D",xDp-4,yDp-20);
	ctx.fillText("E",xEp+13,yEp);	

	// dimensions
	cDrawArrow(cid,x0,y0,xDp,yDp,"black",1,true);	
	cDrawDoubleArrow(cid,x0,y0+30,xAp,y0+30,"black",1,true);	
	cDrawLine(cid,xAp,yAp+20,xAp,y0+50,"black",1,"butt");	
	cDrawTextBG(cid,"r",xDp-40,yDp+25);
	cDrawTextBG(cid," a ",x0-ap/2-9,y0+20);

	cDrawArc3(cid,x0,y0,rp/2-5,-55,0,"cws","black",1,"none",true,true);	
	ctx.fillStyle= "black";
	ctx.font=      "bold 16px Arial";	
	var xtheta=    "03B8";	
	var hex=       cDrawHexText(xtheta);
	ctx.fillText(hex,x0+63,y0-25);	

	// forces
	cDrawArrow(cid,xDp+55,yDp-75,xDp+3,yDp-3,"red",3,true);		// F1
	ctx.fillStyle="red";
	ctx.fillText("F1",xDp+50,yDp-45);	

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