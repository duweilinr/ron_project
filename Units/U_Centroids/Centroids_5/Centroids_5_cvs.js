// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 250;
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
	var ap= 320;		// a/2 width
	var bp= 200;		// b/2 height
	var cp= 80;
	var rp= 20;
	var x1= x0-ap/2;	// left
	var x2= x0+ap/2;	// right
	var y1= y0-bp/2;	// top
	var y2= y0+bp/2;	// bottom
	var x3= x0+cp;		// cutout center
	
	// draw plate and cutout
	cDrawRectxy(cid,x1,y1,x2,y2,"black",2,"lightgray");
	cDrawDot(cid,x0+cp,y0,40,"black");
	cDrawDot(cid,x0+cp,y0,38,"white");	
	cDrawDot(cid,x0+cp,y0,3,"black");
	
	// draw x and y axes
	cDrawArrow(cid,xmin,y0,xmax,y0,"gray",1,true);	// x axis
	cDrawArrow(cid,x0,ybot,x0,ytop,"gray",1,true);	// y axis
	cDrawDot(cid,x0,y0,2,"black");
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText( "X",xmax-25,y0+25);
	ctx.fillText( "Y",x0-20,ytop+25);
		
	// dimensioning
	cDrawLine(cid,x1,y2+4,x1,y2+40,"gray",1,"round");
	cDrawLine(cid,x2,y2+4,x2,y2+40,"gray",1,"round");
	cDrawDoubleArrow(cid,x1,y2+25,x2,y2+25,"gray",1,true);	// a	
	cDrawLine(cid,x1-40,y2,x1-4,y2,"gray",1,"round");
	cDrawLine(cid,x1-40,y1,x1-4,y1,"gray",1,"round");	
	cDrawDoubleArrow(cid,x1-20,y1,x1-20,y2,"gray",1,true);	// b
	cDrawLine(cid,x3,y0+5,x3,y0+70,"gray",1,"round");	
	cDrawDoubleArrow(cid,x0,y0+55,x3,y0+55,"black",1,true);		// c
	cDrawArrow(cid,x3,y0,x3+38,y0,"black",1,true);	// radius
		
	cDrawTextBG(cid," a ",x0-8,y2+15);
	cDrawTextBG(cid," b ",x1-30,y0-8)
	cDrawTextBG(cid," c ",(x0+cp/2)-8,y0+46);
	cDrawTextBG(cid,"r",x3+15,y0-20);
	ctx.fillText( "O",x0-18,y0+18);	
	
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