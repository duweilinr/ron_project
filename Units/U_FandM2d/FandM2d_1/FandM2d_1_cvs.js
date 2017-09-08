// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 150;
	var y0= 150;
	var xydata= {x0:x0,xmin:x0-100,xmax:x0+600,
				 y0:y0,ybot:y0+300,ytop:y0-100 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
//	Draw structure
	cDrawArrow(cid,x0,y0,x0+100,y0,"darkgray",15,false);			// arm
	cDrawArc3(cid,x0+150,y0,50,45,180,"cw","darkgray",15,"none",false,false);	
	cDrawArrow(cid,x0-3,y0+40,x0-3,y0-40,"darkgray",6,false);	// base
	cDrawArrow(cid,x0-8,y0+55,x0-8,y0-55,"black",4,false);	// base
	
	cDrawArrow(cid,x0+150,y0+50,x0+150,y0+100,"brown",5,false);	// cable
	cDrawRectxy(cid,x0+130,y0+100,x0+170,y0+150,"black","3","lightgray"); // box
	ctx.fillStyle="red";
	ctx.font="bold 18px Arial";
	ctx.fillText("m",x0+100,y0+130);

	cDrawDot(cid,x0,y0,3,"black");		// A	
	cDrawDot(cid,x0+100,y0,2,"black");	// B
	cDrawDot(cid,x0+150,y0,2,"black");	// C
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",x0+5,y0-10);
	ctx.fillText("B",x0+90,y0-10);
	ctx.fillText("C",x0+140,y0-10);	
	ctx.fillText("D",x0+180,y0+25);
	ctx.fillStyle="red";
	ctx.fillText("a1",x0+240,y0+40);
	
	cDrawArrow(cid,x0+150,y0,x0+178,y0+28,"gray",1,false);	// guideline CD
	cDrawArrow(cid,x0+150,y0,x0+150,y0+40,"gray",1,false);	// guideline C vertical
	cDrawArc3(cid,x0+150,y0,85,0,45,"cw","black",1,"none",true,true);
	
	cDrawArrow(cid,x0+185,y0+35,x0+290,y0+140,"red",3,true);
	ctx.fillStyle="red";
	ctx.font="bold 16px Arial";
	ctx.fillText("F1",x0+300,y0+130);

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
/*
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
	
	// draw the forces
	var F1x= F1m*Math.cos(F1d*Math.PI/180);
	var F1y= F1m*Math.sin(F1d*Math.PI/180);	
	var F2x= F2m*Math.cos(F2d*Math.PI/180);
	var F2y= F2m*Math.sin(F2d*Math.PI/180);		
	
	cDrawArrow(cid,x0,y0,x0+F1x,y0-F1y,"red",3,true);	
	cDrawArrow(cid,x0,y0,x0+F2x,y0-F2y,"red",3,true);
*/	
}