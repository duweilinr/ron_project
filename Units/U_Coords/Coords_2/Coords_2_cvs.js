// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 250;
	var xydata= {x0:x0,xmin:50, xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

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
	var r=     Number(val[0]);
	var theta= Number(val[1]);
	
	// draw the instance data
	var thetar= theta*Math.PI/180;
	var x=      r*Math.cos(thetar);
	var y= 	    r*Math.sin(thetar);
	
	cDrawDot(cid,x0+x,y0-y,4,"blue");		// Polar point

	ctx.fillStyle= "black";
	ctx.font=      "bold 16px Arial";		// to make thumb
	//ctx.font=      "bold 32px Arial";		// use to make thumb
	var label=     "(r,".concat('\u03b8',")");
	ctx.fillText( label,x0+x-15,y0-y-20);	
	
}