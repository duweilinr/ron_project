// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 200;
	var y0= 200;
	var xydata= {x0:x0,xmin:x0-150,xmax:x0+550,
				 y0:y0,ybot:y0+250,ytop:y0-150 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	// set up
	var A= { x:x0+100,y:y0+44 };
	var B= { x:x0+180,y:y0+84 };
	var C= { x:x0+163,y:y0+24 };
	var D= { x:x0+140,y:y0+64 };
	
	cDrawLine(cid,x0,y0,x0+300,y0+150,"black",3,"round");	// ground line
	cDrawLine(cid,x0,y0,x0-100,y0,"black",3,"round");

	cDrawArc3(cid,x0,y0,80,0,26,"cw","black",1,"none",true,true);
	ctx.fillText("\u03b8",x0+65,y0+22);		// theta

	cDrawRect(cid,(A.x+B.x)/2,(A.y+B.y)/2,-63.5,100,94,"brown",8,"burlywood");

	//cDrawDot(cid,A.x,A.y,3,"black");
	//cDrawDot(cid,B.x,B.y,3,"black");
	cDrawDot(cid,C.x,C.y,3,"black");
	cDrawDot(cid,D.x,D.y,3,"black");
	ctx.fillStyle= "black";
	//ctx.fillText("A",A.x-20,A.y+16);
	//ctx.fillText("B",B.x+12,B.y+4);
	ctx.fillText("C",C.x-10,C.y-10);
	ctx.fillText("D",D.x-10,D.y-10);	
	
	cDrawForce2(cid,C.x,C.y,C.x,C.y+100,3,"red","round",12);	// W
	ctx.fillStyle= "red";
	ctx.fillText("W",C.x+10,C.y+90);
	
	cDrawForce2(cid,B.x-20,B.y+2,B.x-80,B.y-28,3,"green","round",12);	// F
	cDrawForce2(cid,D.x-35,D.y+70,D.x-3,D.y+6,3,"green","round",12);	// N
	ctx.fillStyle= "green";
	ctx.fillText("Ff",D.x-40,D.y+16);
	ctx.fillText("N",D.x-42,D.y+55);

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
	cDrawArrow(cid,x0,y0,x0+F2x,y0-F2y,"red",3,true); */
	
}