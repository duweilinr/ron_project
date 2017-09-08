// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 300;
	var y0= 450;
	var xydata= {x0:x0,xmin:50,xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	//	do setup
	// working dimensions
	var dp= 80;
	var hp= 200;
	var bp= 2*dp +hp/2;
	// key locations
	var x1= x0+dp;
	var x2= x1+hp/2;
	var x3= x2+dp;
	var y1= y0-dp/2;
	var y2= y1-hp;
	var y3= y2-dp;
	
	// draw fugure
	cDrawRectxy(cid,x0,y0-dp/2,x0+bp,y0,"none",0,"silver");	
	cDrawRectxy(cid,x0,y0-3*dp/2-hp,x0+dp,y0-dp/2,"none",0,"silver");
	cDrawTriangle(cid,x1,y1,x2,y1,x1,y2,"none",0,"silver");
		
	cDrawDot(cid,x0,y0,3,"black");		// origin
	cDrawLine(cid,x0-4,y0,x0-40,y0,"gray",1,"round");
	cDrawLine(cid,x0-4,y1,x0-40,y1,"gray",1,"round");
	cDrawLine(cid,x0-4,y2,x0-40,y2,"gray",1,"round");
	cDrawLine(cid,x0-4,y3,x0-40,y3,"gray",1,"round");
	
	cDrawDoubleArrow(cid,x0-20,y0,x0-20,y1,"gray",1,true);
	cDrawDoubleArrow(cid,x0-20,y1,x0-20,y2,"gray",1,true);
	cDrawDoubleArrow(cid,x0-20,y2,x0-20,y3,"gray",1,true);
	cDrawTextBG(cid,"d/2",x0-30,(y0+y1-16)/2);
	cDrawTextBG(cid,"h",x0-25,(y1+y2-16)/2);
	cDrawTextBG(cid,"d",x0-25,(y2+y3-16)/2);
	
	cDrawLine(cid,x1,y3-4,x1,y3-30,"gray",1,"round");	
	cDrawDoubleArrow(cid,x0,y3-20,x1,y3-20,"gray",1,true);	
	cDrawTextBG(cid," d ",(x0+x1-12)/2,y3-30);
	
	cDrawLine(cid,x2,y1-4,x2,y1-30,"gray",1,"round");
	cDrawLine(cid,x3,y1-4,x3,y1-30,"gray",1,"round");	
	cDrawDoubleArrow(cid,x2,y1-20,x3,y1-20,"gray",1,true);	
	cDrawTextBG(cid," d ",(x2+x3-12)/2,y1-30);

	var x11= x1+0.6*(x2-x1);
	var y11= y1-0.4*(y1-y2);
	cDrawTriangle(cid,x11,y11,x11,y11-60,x11-30,y11-60,"black",1,"none");
	ctx.fillStyle="black";	
	ctx.font="bold 14px Arial";	
	ctx.fillText( "0.5",x11-25,y11-70);	
	ctx.fillText( "1",x11+5,y11-25);	

	ctx.font="bold 14px Arial";		
	ctx.fillText( "O",x0-15,y0+20);		

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