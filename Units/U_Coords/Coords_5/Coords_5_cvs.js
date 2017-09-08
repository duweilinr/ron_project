// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 350;
	var y0= 250;
	var xydata= {x0:x0,xmin:50, xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	// spherical axes ------------------------------------------------------
	var x0s= x0;
	var y0s= y0;	
	cDrawArrow(cid,x0s+180,y0s-180,x0s-180,y0s+180,"black",1,true);	// x axis	
	cDrawArrow(cid,x0s-250,y0s,x0s+250,y0s,"black",1,true);			// y axis
	cDrawArrow(cid,x0s,y0s+200,x0s,y0s-200,"black",1,true);			// z axis

	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText("O",x0s-20,y0s-30);	
	ctx.fillText("X",x0s-175,y0s+155);
	ctx.fillText("Y",x0s+235,y0s+20);
	ctx.fillText("Z",x0s-20,y0s-180);	
	// vectors and guidelines
	cDrawArrow(cid,x0s,y0s,x0s+150,y0s+80,"gray",1,true);
	cDrawArrow(cid,x0s+150,y0s+80,x0s+150,y0s-120,"gray",1,true);
	ctx.fillText("r",x0s+85,y0s+35);
	ctx.fillText("z",x0s+160,y0s-50);	
	
	cDrawDot(cid,x0s+150,y0s-120,5,"blue");
	ctx.fillStyle= "black";
	ctx.font=      "bold 16px Arial";
	//ctx.font=      "bold 32px Arial";			// for thumb generation	
	ctx.fillText("(x,y,z)",x0+160,y0s-125);
	//ctx.font=      "bold 16px Arial";	
		
	// theta arc
	cDrawArc3(cid,x0s,y0s-150,240,62,109,"cw","black",1,"none",true,false);
	var xalpha=    "03B8";		// unicode hexadecimal for small 'theta'
	var hex=       cDrawHexText(xalpha);
	ctx.fillText(hex,x0s+20,y0s+105);	
	
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

	// extract values from ivcode

	
}