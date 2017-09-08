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
	cDrawRectxy(cid,x0-50,y0-50,x0+50,y0+50,"brown",6,"burlywood");
					
	// draw and label fixed points
	cDrawDot(cid,x0,y0,3,"black")	
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText( "C",x0-10,y0-10);
	
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
	var F1m= Number(val[0])*0.07;
	var F1d= Number(val[1]);
	var Wt=  Number(val[2])*0.07;
	
	// draw the forces
	var F1x= F1m*Math.cos(F1d*Math.PI/180);
	var F1y= F1m*Math.sin(F1d*Math.PI/180);	
	
	cDrawArrow(cid,x0,y0,x0+F1x,y0-F1y,"red",3,true);	
	cDrawArrow(cid,x0,y0,x0,y0+Wt,"red",3,true);
	ctx.fillStyle= "red";
	ctx.font="normal 16px Arial";
	ctx.fillText( "F1",x0+F1x-20,y0-F1y+20);	// y value true pos top
	ctx.fillText( "Wt",x0-30,y0+Wt+20);

}