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
	
	// draw fixed body
	cDrawDot(cid,x0,y0,30,"brown");
	cDrawDot(cid,x0,y0,27,"burlywood");	
					
	// draw and label fixed points
	cDrawDot(cid,x0,y0,3,"black")	
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText( "A",x0-15,y0-10);		// y true pos top

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
	var F1mag= Number(val[0]);
	var F1deg= Number(val[1]);
	var F2mag= Number(val[2]);
	//var Fyd= val[3];
	
	// draw the forces
	var F1x= F1mag*Math.cos(F1deg*Math.PI/180);
	var F1y= F1mag*Math.sin(F1deg*Math.PI/180);	
	var F2deg= F1deg+180;
	var F2x= F2mag*Math.cos(F2deg*Math.PI/180);
	var F2y= F2mag*Math.sin(F2deg*Math.PI/180);	
	cDrawArrow(cid,x0,y0,x0+F1x,y0-F1y,"red",3,true);	
	cDrawArrow(cid,x0,y0,x0+F2x,y0-F2y,"red",3,true);
	
	var rs= 80;
	var sAd= -F1deg;
	var eAd= 0;
	var ccws= false;
	var bcol= "gray";
	var bwid= 1.5;
	var fcol= "none";
	var end1= true;
	var end2= true;	
	cDrawArc3(cid,x0,y0,rs,sAd,eAd,ccws,bcol,bwid,fcol,end1,end2);
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText( "alpha",x0+rs,y0-F1y/3);	

	ctx.fillStyle="red";
	ctx.font="bold 16px Arial";
	ctx.fillText( "F1",x0+F1x+10,y0-F1y-10);		// y true pos top
	ctx.fillText( "F2",x0+F2x-25,y0-F2y+15);		// y true pos top
	
}