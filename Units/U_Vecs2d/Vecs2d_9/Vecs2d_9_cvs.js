// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 320;
	var xydata= {x0:x0,xmin:x0-300,xmax:x0+300,
				 y0:y0,ybot:y0+120,ytop:y0-280 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	cDrawDot(cid,x0-35,y0+42,4,"black");
	cDrawDot(cid,x0+35,y0+42,4,"black");
	cDrawLine(cid,x0,y0,x0,y0+46,"gray",10,"butt");
	cDrawLine(cid,x0-45,y0+50,x0+45,y0+50,"gray",12,"round");
	cDrawLine(cid,x0-90,y0+59,x0+90,y0+59,"black",6,"round");	

	cDrawDot(cid,x0,y0,12,"gray");
	cDrawDot(cid,x0,y0,6,"white");	
	cDrawDot(cid,x0,y0,3,"black");

	// label fixed points
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText( "A",x0-15,y0-30);	

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

	var F1m= Number(val[0])*0.4;
	var F1d= Number(val[1]);
	var F2m= Number(val[2])*0.4;
	var F2d= Number(val[3]);
	var F3m= Number(val[4])*0.4;
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

	ctx.fillStyle="red";
	ctx.font="bold 16px Arial";
	ctx.fillText( "F1",x0+F1x-15,y0-F1y-30);
	ctx.fillText( "F2",x0+F2x-15,y0-F2y-30);	
	ctx.fillText( "F3",x0+F3x-15,y0-F3y-30);	
}