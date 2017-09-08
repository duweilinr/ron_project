// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 300;
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

	//	do setup
	var b= 200;
	var h= 180;
	var t= 40;	

	// draw fixed body
	cDrawRectxy(cid,x0,y0-t,x0+b,y0,"black",2,"lightgray")
	cDrawRectxy(cid,x0,y0-h-t,x0+t,y0-t,"black",2,"lightgray")	
	cDrawDot(cid,x0,y0,3,"black");		// O
	ctx.fillText("O",x0-20,y0+20);
	
	cDrawDoubleArrow(cid,x0,y0+30,x0+b,y0+30,"gray",1,true);
	cDrawTextBG(cid," b ",x0+b/2-8,y0+21);
	cDrawLine(cid,x0+b,y0+3,x0+b,y0+50);

	cDrawDoubleArrow(cid,x0-30,y0,x0-30,y0-t,"gray",1,true);
	cDrawTextBG(cid,"t",x0-33,y0-t/2-5);
	cDrawLine(cid,x0-3,y0-t,x0-50,y0-t);

	cDrawDoubleArrow(cid,x0-30,y0-t,x0-30,y0-t-h,"gray",1,true);
	cDrawTextBG(cid,"h",x0-33,y0-t-h/2-5);
	cDrawLine(cid,x0-3,y0-t-h,x0-50,y0-t-h);

	cDrawDoubleArrow(cid,x0,y0-t-h-30,x0+t,y0-t-h-30,"gray",1,true);
	cDrawTextBG(cid," t ",x0+t/2-6,y0-t-h-38);
	cDrawLine(cid,x0+t,y0-t-h-3,x0+t,y0-t-h-50);

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