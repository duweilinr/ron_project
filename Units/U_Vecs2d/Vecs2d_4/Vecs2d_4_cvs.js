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

	// label fixed points
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText( "O",x0-20,y0+20);

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
	var Fy=    Number(val[0]);
	var alpha= Number(val[1]);
	var dx= 260*Math.cos(alpha*Math.PI/180);
	var dy= 260*Math.sin(alpha*Math.PI/180);
	
	// draw the force and the line
	cDrawArrow(cid,x0,y0,x0,y0-Fy,"red",3,true);	
	cDrawArrow(cid,x0-dx,y0-dy,x0+dx,y0+dy,"gray",1.5,false);

	var rs= 100;
	var sAd= 0;
	var eAd= alpha;
	var ccws= false;
	var bcol= "gray";
	var bwid= 1.5;
	var fcol= "none";
	var end1= true;
	var end2= true;	
	cDrawArc3(cid,x0,y0,rs,sAd,eAd,ccws,bcol,bwid,fcol,end1,end2)
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	var label= '\u03b1';		// alpha
	ctx.fillText( label,x0+rs+5,y0+dy/4);	
}