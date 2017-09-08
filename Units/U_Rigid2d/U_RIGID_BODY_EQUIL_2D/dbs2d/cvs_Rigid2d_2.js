// File: cvs_Rigid2d_2
// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 100;
	var y0= 350;
	var xydata= {x0:x0,xmin:x0,xmax:x0+550,
				 y0:y0,ybot:y0+100, ytop:y0-300 };
		 
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	// draw structure
	var A= {x:x0+100,y:y0-65};
	var B= {x:x0+250,y:y0-100};
	var C= {x:x0+400,y:y0-100};
	var D= {x:x0+80,y:y0-30};
	var E= {x:x0+350,y:y0-30};
	// truck and loads
	cDrawRectxy(cid,x0,y0-30,x0+300,y0-60,"black","2","lightgray");
	cDrawRectxy(cid,x0+300,y0-30,x0+450,y0-120,"black","2","lightgray");
	
	cDrawRectxy(cid,A.x-50,y0-62,A.x+50,y0-160,"brown","4","burlywood");
	cDrawRectxy(cid,B.x-40,y0-64,B.x+40,y0-180,"brown","8","darkkhaki");
	cDrawLine(cid,x0,y0+4,x0+450,y0+4,"black",8,"butt");
	// wheels
	cDrawDot(cid,D.x,D.y,30,"black");
	cDrawDot(cid,D.x,D.y,20,"silver");
	cDrawDot(cid,D.x,D.y,6,"black");	
	cDrawDot(cid,E.x,E.y,30,"black");
	cDrawDot(cid,E.x,E.y,20,"silver");
	cDrawDot(cid,E.x,E.y,6,"black");		
		
	cDrawDot(cid,A.x,y0-111,4,"black");
	cDrawDot(cid,B.x,y0-122,4,"black");
	cDrawDot(cid,C.x,y0-60,4,"black");	
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText("A",A.x+10,y0-110);
	ctx.fillText("B",B.x+10,y0-120);
	ctx.fillText("C",C.x+10,y0-60);
	ctx.fillText("D",D.x+7,y0-24);
	ctx.fillText("E",E.x+7,y0-24);	
	
	// dimensions
	cDrawLine(cid,A.x,y0-120,A.x,y0-220,"gray",1,"round");
	cDrawLine(cid,B.x,y0-125,B.x,y0-220,"gray",1,"round");
	cDrawDoubleArrow(cid,x0,y0-200,A.x,y0-200,"gray",1,true);		
	cDrawDoubleArrow(cid,A.x,y0-200,B.x,y0-200,"gray",1,true);
	cDrawTextBG(cid," 6ft ",(x0+A.x)/2-10,y0-208);
	cDrawTextBG(cid," 10ft ",(A.x+B.x)/2-15,y0-208);
	
	cDrawLine(cid,C.x,y0-50,C.x,y0+60,"gray",1,"round");
	cDrawLine(cid,D.x,y0+10,D.x,y0+60,"gray",1,"round");
	cDrawLine(cid,E.x,y0+10,E.x,y0+60,"gray",1,"round");	
	cDrawDoubleArrow(cid,x0,y0+40,D.x,y0+40,"gray",1,true);
	cDrawDoubleArrow(cid,D.x,y0+40,E.x,y0+40,"gray",1,true);
	cDrawDoubleArrow(cid,E.x,y0+40,C.x,y0+40,"gray",1,true);
	cDrawTextBG(cid,"5ft",(x0+D.x)/2-10,y0+32);
	cDrawTextBG(cid," 14ft ",(D.x+E.x)/2-10,y0+32);
	cDrawTextBG(cid,"4ft",(E.x+C.x)/2-10,y0+32);	

	return xydata;
}

// drawCvs2
function drawCvs2(xydata,ivvald)
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