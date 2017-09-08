// drawCvs1 for PE2d_105   06/15/2017
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 200;
	var xydata= {x0:x0,xmin:x0-300,xmax:x0+300,
				 y0:y0,ybot:y0+250,ytop:y0-150 };
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
	var F1m= Number(val[0])*0.05;
	var a1=  Number(val[1]);
	var F2m= Number(val[2])*0.05;
	var W=   Number(val[3])*0.05;
	
	// draw the forces
	var F1x= F1m*Math.cos(a1*Math.PI/180);
	var F1y= F1m*Math.sin(a1*Math.PI/180);		
	var a2r= Math.PI*(180-a1)/180;
	var F2x= F2m*Math.cos(a2r);	
	var F2y= F2m*Math.sin(a2r);	
	
	cDrawArrow(cid,x0,y0,x0+F1x,y0-F1y,"red",3,true);
	cDrawArrow(cid,x0,y0,x0+F2x,y0-F2y,"red",3,true);	
	cDrawArrow(cid,x0,y0,x0,y0+W,"red",3,true);
	
	ctx.fillStyle= "red";
	ctx.font=      "normal 16px Arial";
	ctx.fillText( "F1",x0+F1x+20,y0-F1y+20);	// y value true pos top
	ctx.fillText( "F2",x0+F2x-30,y0-F2y+20);
	ctx.fillText( "W",x0-30,y0+W+20);

	cDrawArc3(cid,x0,y0,60,-a1,0,"cw","black",1,"none",true,true);
	var ea2= 180 -a1;
	cDrawArc3(cid,x0,y0,65,-180,-ea2,"cw","black",1,"none",true,true);		
	ctx.font="bold 16px Arial";
	ctx.fillStyle="black";
	ctx.fillText("a1",x0+80,y0-20);
	ctx.fillText("a1",x0-100,y0-20);		
	
	
	
}