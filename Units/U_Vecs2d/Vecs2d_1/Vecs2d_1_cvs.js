// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 200;
	var y0= 240;
	var xydata= {x0:x0,xmin:x0,xmax:x0+400,
				 y0:y0,ybot:y0+200,ytop:y0-200 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
	cDrawDot(cid,x0,y0,20,"gray");
	cDrawLine(cid,x0,y0,x0-40,y0,"gray",40,"butt");
	cDrawDot(cid,x0,y0,6,"black");
	cDrawLine(cid,x0-46,y0-60,x0-46,y0+60,"gray",12,"butt");
	cDrawLine(cid,x0-54,y0-120,x0-54,y0+120,"black",4,"butt");

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
	var Fx= Number(val[0]);
	var Fy= Number(val[1]);
	
	// draw the forces
	cDrawArrow(cid,x0,y0,x0+Fx,y0,"red",3,true);	
	cDrawArrow(cid,x0,y0,x0,y0-Fy,"red",3,true);		
}