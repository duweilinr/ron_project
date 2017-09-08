// drawCvs1
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
	

	cDrawDot(cid,x0,y0,20,"silver");
	cDrawLine(cid,x0,y0,x0+30,y0,"silver",20,"butt");
	cDrawDot(cid,x0,y0,6,"black");
	cDrawLine(cid,x0+36,y0-30,x0+36,y0+30,"silver",12,"butt");
	cDrawLine(cid,x0+44,y0-50,x0+44,y0+50,"gray",4,"butt");

	// label fixed points
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
	var F1m= Number(val[0])*0.5;
	var F1d= Number(val[1]);
	var F2m= Number(val[2])*0.5;
	var F2d= Number(val[3]);
	var F3m= Number(val[4])*0.5;
	var F3d= Number(val[5]);
	
	// draw the forces
	var F1x= F1m*Math.cos(F1d*Math.PI/180);
	var F1y= F1m*Math.sin(F1d*Math.PI/180);	
	var F2x= F2m*Math.cos(F2d*Math.PI/180);
	var F2y= F2m*Math.sin(F2d*Math.PI/180);
	var F3x= F3m*Math.cos(F3d*Math.PI/180);
	var F3y= F3m*Math.sin(F3d*Math.PI/180);
	
	cDrawArrow(cid,x0,y0,x0+F1x,y0-F1y,"red",3,true);	
	cDrawArrow(cid,x0,y0,x0+F2x,y0-F2y,"red",3,true);
	cDrawArrow(cid,x0,y0,x0+F3x,y0-F3y,"red",3,true);
	ctx.fillStyle= "red";
	ctx.font="normal 16px Arial";
	ctx.fillText( "F1",x0+F1x-20,y0-F1y+20);	// y value true pos top
	ctx.fillText( "F2",x0+F2x-20,y0-F2y+20);
	ctx.fillText( "F3",x0+F3x-20,y0-F3y+20);
}