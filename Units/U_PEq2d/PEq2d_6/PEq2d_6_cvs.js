// drawCvs1 for PE2d_5   06/15/2017
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 240;
	var xydata= {x0:x0,xmin:x0-300,xmax:x0+300,
				 y0:y0,ybot:y0+200,ytop:y0-200 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
	// draw fixed body
	cDrawLine(cid,x0,y0,x0,y0+20,"brown",12,"butt");
	cDrawDot(cid,x0,y0,8,"black");
	cDrawDot(cid,x0,y0,4,"white");
	cDrawRectxy(cid,x0-30,y0+20,x0+30,y0+140,"brown",2,"burlywood");
					
	// draw and label fixed points
	cDrawDot(cid,x0,y0+80,4,"black")	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "C",x0-20,y0+15);		 
	
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

	// extract values from ivcode
	var stmt= ivcode.split(";");
	var val=  [];
	for (var i=0; i<stmt.length-1; i++) {
		var list= stmt[i].split("=");
		val[i]=   list[1];
	}
	var Wm= Number(val[0])*0.8;
	var a1= Number(val[1]);
	var a2= Number(val[2]);
	
	// draw force Wm
	cDrawArrow(cid,x0,y0+78,x0,y0+Wm,"red",3,true);	
	ctx.fillStyle= "red";
	ctx.font="normal 16px Arial";
	ctx.fillText( "Wm",x0-20,y0+Wm+20);	// y value true pos top
	
	// draw lines for forces F1 and F2
	var a1r= a1*Math.PI/180;
	var a2r= a2*Math.PI/180;
	var dx1= 160*Math.cos(a1r);
	var dy1= 160*Math.sin(a1r);
	var dx2= 160*Math.cos(a2r);
	var dy2= 160*Math.sin(a2r);
	
	var cid= "layer2";
	var c1=   document.getElementById(cid);
	var ctx = c1.getContext('2d');
	cDrawLine(cid,x0,y0,x0+dx1,y0-dy1,"black",1,"butt");
	cDrawLine(cid,x0,y0,x0-dx2,y0-dy2,"black",1,"butt");

	cDrawArc3(cid,x0,y0,80,-a1,0,"cw","black",1,"none",true,true);
	var ea2= 180 +1*a2;
	cDrawArc3(cid,x0,y0,80,180,ea2,"cw","black",1,"none",true,true);		
	ctx.font="bold 16px Arial";
	ctx.fillStyle="black";
	ctx.fillText("a1",x0+80,y0-20);
	ctx.fillText("a2",x0-100,y0-20);	

}