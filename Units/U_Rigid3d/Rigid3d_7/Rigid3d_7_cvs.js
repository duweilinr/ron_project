// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 250;
	var y0= 250;
	var xydata= {x0:x0,xmin:x0-350,xmax:x0+350,
				 y0:y0,ybot:y0+100,ytop:y0-300 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	//	Draw structure
	var A= {x:x0+280,y:y0};
	var B= {x:x0+80, y:y0};
	var C= {x:x0-60, y:y0+60};
	var D= {x:x0+60, y:y0-60};
	var E= {x:A.x,   y:A.y-80};
	var F= {x:B.x,   y:B.y-100};	
	
	cDrawDot(cid,A.x,A.y,8,"black");
	cDrawDot(cid,B.x,B.y,8,"black");
	cDrawDot(cid,C.x,C.y,8,"black");	
	cDrawDot(cid,D.x,D.y,8,"black");
	ctx.font = "16px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText("A",A.x-23,A.y-12);
    ctx.fillText("B",B.x-23,B.y-12);
    ctx.fillText("C",C.x-23,C.y-5);		
	ctx.fillText("D",D.x-23,D.y-5);

	// draw left rear wheel behind everything
	cDrawEllipse(cid,D.x,D.y,60,70,0,0,360,false,"gray",8,"none");
	cDrawLine(cid,D.x-25,D.y+74,D.x+25,D.y+74,"brown",4,"round");
	
	// draw axes
	cDrawArrow(cid,x0+160,y0-160,x0-160,y0+160,"gray",2,true);	// X axis	
	cDrawArrow(cid,x0-100,y0,A.x+140,y0,"gray",2,true);			// Y axis
	cDrawArrow(cid,x0,y0+180,x0,y0-220,"gray",2,true);			// Z axis	
	ctx.font = "16px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText("X",x0-160,y0+140);
    ctx.fillText("Y",A.x+115,y0+20);
    ctx.fillText("Z",x0-20,y0-200);	
	
	// draw bike frame and posts for load and driver
	cDrawLine(cid,x0-60,y0+60,x0+60,y0-60,"black",8,"round");	
	cDrawLine(cid,x0,y0,A.x,y0,"black",8,"round");	
	cDrawDot(cid,x0,y0,8,"black");
	
	cDrawLine(cid,A.x,A.y,E.x,E.y,"black",8,"round");
	cDrawLine(cid,A.x-30,E.y,A.x+30,E.y,"brown",8,"round");
	cDrawRectxy(cid,A.x-30,E.y-5,A.x+30,E.y-65,"gray",3,"lightgray");		
	cDrawLine(cid,B.x,B.y,F.x,F.y,"black",8,"round");	
	cDrawLine(cid,B.x-30,F.y,B.x+30,F.y,"brown",8,"round");
	cDrawRectxy(cid,B.x-30,F.y-5,B.x+30,F.y-85,"gray",3,"silver");	
	ctx.font = "16px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText("mp",A.x-10,E.y-75);
    ctx.fillText("md",B.x-10,F.y-95);
	
	// draw wheels A and C in foreground
	//cDrawEllipse(cid,xe,ye,rX,rY,rot,sAng,eAng,dir,bcol,bwid,fcol);
	cDrawEllipse(cid,A.x,A.y,60,70,0,0,360,false,"gray",8,"none");
	cDrawLine(cid,A.x-25,A.y+74,A.x+25,A.y+74,"brown",4,"round");
	cDrawEllipse(cid,C.x,C.y,60,70,0,0,360,false,"gray",8,"none");	
	cDrawLine(cid,C.x-25,C.y+74,C.x+25,C.y+74,"brown",4,"round");

	// dimensioning
	cDrawLine(cid,B.x,B.y+10,B.x,B.y+47,"black",1,"round");
	cDrawLine(cid,A.x,A.y+20,A.x,A.y+70,"black",1,"round");
	cDrawDoubleArrow(cid,x0,B.y+35,B.x,B.y+35,"black",1,true);
	cDrawTextBG(cid," b ",(x0+B.x)/2-5,B.y+26);	
	cDrawDoubleArrow(cid,x0,A.y+55,A.x,A.y+55,"black",1,true);
	cDrawTextBG(cid," a ",(x0+A.x)/2-5,A.y+46);
	
	cDrawLine(cid,x0-80,D.y,D.x-10,D.y,"black",1,"round");	
	cDrawLine(cid,x0-200,C.y,C.x-10,C.y,"black",1,"round");
	cDrawArrow(cid,x0-120,y0,x0-60,D.y,"black",1,true);
	cDrawArrow(cid,x0-120,y0,x0-180,C.y,"black",1,true);	
	cDrawTextBG(cid," w",x0-127,y0-8);	
	
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
	//cDrawGrid1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
}