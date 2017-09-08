// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 100;
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

	//	do setup
	var ap= 400;		// width
	var bp= 200;		// height
	var cp= 240;
	var dp= 160;
	var ep= 140;
	var fp= 100;
	var x1= x0;			// left
	var y1= y0-bp;		// top
	var x4= x0+ap;		// right
	var y4= y0;			// bottom		
	var x2= x4-cp;
	var y2= y0-dp;
	var x3= x4-ep;
	var y3= y0-fp;	

	// draw plates
	cDrawRectxy(cid,x1,y1,x4,y4,"black",2,"lightgray");
	cDrawRectxy(cid,x2,y2,x4,y4,"black",2,"silver");	
	cDrawRectxy(cid,x3,y3,x4,y4,"black",2,"gray");
		
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";	
	ctx.fillText( "1",x0+10,y1+20);	
	ctx.fillText( "2",x2+10,y2+20);	
	ctx.fillText( "3",x3+10,y3+20);	
			
	// dimensioning - horizontal
	cDrawLine(cid,x0,y0+4,x0,y0+80,"gray",1,"round");
	cDrawLine(cid,x2,y0+4,x2,y0+55,"gray",1,"round");
	cDrawLine(cid,x3,y0+4,x3,y0+30,"gray",1,"round");
	cDrawLine(cid,x4,y0+4,x4,y0+80,"gray",1,"round");		
		
	cDrawDoubleArrow(cid,x3,y0+20,x4,y0+20,"gray",1,true);	// a	
	cDrawDoubleArrow(cid,x2,y0+45,x4,y0+45,"gray",1,true);	// c
	cDrawDoubleArrow(cid,x0,y0+70,x4,y0+70,"gray",1,true);	// e
		
	cDrawTextBG(cid," 8 ft",(x0+x4)/2-15,y0+60);
	cDrawTextBG(cid," c ",(x2+x4)/2-10,y0+35)
	cDrawTextBG(cid," e ",(x3+x4)/2-10,y0+10);
	
	// dimensioning - vertical
	cDrawLine(cid,x4+4,y3,x4+30,y3,"gray",1,"round");
	cDrawLine(cid,x4+4,y2,x4+55,y2,"gray",1,"round");
	cDrawLine(cid,x4+4,y1,x4+80,y1,"gray",1,"round");
		
	cDrawDoubleArrow(cid,x4+20,y0,x4+20,y3,"gray",1,true);		// f	
	cDrawDoubleArrow(cid,x4+45,y0,x4+45,y2,"gray",1,true);		// d
	cDrawDoubleArrow(cid,x4+70,y0,x4+70,y1,"gray",1,true);		// b
		
	cDrawTextBG(cid,"4 ft",x4+60,(y0+y1)/2);
	cDrawTextBG(cid,"d",x4+40,(y0+y2)/2);
	cDrawTextBG(cid,"f",x4+17,(y0+y3)/2);	
	
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