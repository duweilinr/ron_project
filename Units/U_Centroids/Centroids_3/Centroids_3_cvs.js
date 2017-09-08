// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 300;
	var y0= 400;
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
	var Dscal= 40;
	var w=     6*Dscal;
	var h=     6*Dscal;
	var d=     1.5*Dscal;
	var t=     1.5*Dscal;
	
	var ytop= y0 -h;
	var xrt=  x0 +w;	
	
	// draw fixed body
	cDrawRectxy(cid,x0,ytop,xrt,y0,"black",2,"lightgray")
	cDrawRectxy(cid,x0+d,ytop-1,xrt+1,y0-t,"white",2,"white")
	cDrawLine(cid,x0+d,y0-t,xrt,y0-t,"black",2,"round");
	cDrawLine(cid,x0+d,y0-t,x0+d,ytop,"black",2,"round");	
	
	cDrawDot(cid,x0,y0,3,"black");		// O
	ctx.fillText("O",x0-20,y0+20);
	
	cDrawDoubleArrow(cid,x0,y0+30,xrt,y0+30,"gray",1,true);
	cDrawTextBG(cid," w ",x0+w/2-8,y0+21);
	cDrawLine(cid,xrt,y0+3,xrt,y0+50);

	cDrawDoubleArrow(cid,xrt+30,y0,xrt+30,y0-t,"gray",1,true);
	cDrawTextBG(cid,"t",xrt+28,y0-t/2-6);
	cDrawLine(cid,xrt+3,y0-t,xrt+50,y0-t);

	cDrawDoubleArrow(cid,x0-30,y0,x0-30,ytop,"gray",1,true);
	cDrawTextBG(cid,"h",x0-33,y0-h/2-5);
	cDrawLine(cid,x0-3,ytop,x0-50,ytop);

	cDrawDoubleArrow(cid,x0,ytop-30,x0+d,ytop-30,"gray",1,true);
	cDrawTextBG(cid," d ",x0+d/2-6,ytop-38);
	cDrawLine(cid,x0+d,ytop-3,x0+d,ytop-50);	
	
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