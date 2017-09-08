// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 360;
	var xydata= {x0:x0,xmin:x0-300,xmax:x0+300,
				 y0:y0,ybot:y0+100,ytop:y0-300 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	cDrawArrow(cid,x0,y0,x0-80,y0-120,"black",2,true);	// vector A
	cDrawArrow(cid,x0,y0,x0+200,y0-150,"black",2,true);	// vector B
	cDrawDot(cid,x0-80,y0-120,4,"black");
	cDrawDot(cid,x0+200,y0-150,4,"black");
	ctx.font="bold 16px Arial";
	ctx.fillStyle="black";
	ctx.fillText("O",x0-15,y0+20);
	ctx.fillText("A",x0-90,y0-130);
	ctx.fillText("B (20 ft,15 ft)",x0+180,y0-160);
	ctx.fillText("a1",x0-40,y0-90);
	ctx.fillText("d",x0-60,y0-50);
	
	cDrawArc3(cid,x0,y0,90,237,270,"cw","black",1,"none",true,true);			
	
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
}