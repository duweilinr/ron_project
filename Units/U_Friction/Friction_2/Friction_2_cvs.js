// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 300;
	var y0= 350;
	var xydata= {x0:x0,xmin:50,xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	// set up	
	cDrawLine(cid,x0,y0,x0+300,y0-175,"black",3,"round");	// ground line
	cDrawLine(cid,x0,y0,x0-100,y0,"black",3,"round");

	cDrawArc3(cid,x0,y0,80,-30,0,"cw","black",1,"none",true,true);
	ctx.fillText("\u03b8",x0+85,y0-17);		// theta

	cDrawRect(cid,x0+75,y0-109,-30,100,100,"burlywood",8,"orange");	// crate
	
	var A= { x:x0+49, y:y0-152 };
	var B= { x:x0+188,y:y0-115 };
	var C= { x:x0+119,y:y0-132 };

	cDrawDot(cid,A.x,A.y,3,"black");	// A marker
	//cDrawDot(cid,B.x,B.y,3,"black");	// B marker
	cDrawDot(cid,C.x,C.y,3,"black");	// C marker
	ctx.fillStyle= "black";
	ctx.fillText("A",A.x,A.y-12);
	//ctx.fillText("B",B.x,B.y-15);
	ctx.fillText("C",C.x-10,C.y-10);
	
	cDrawForce2(cid,C.x,C.y,C.x,C.y+100,3,"red","round",12);	// W
	cDrawForce2(cid,A.x-45,A.y,A.x,A.y,3,"red","round",12);		// Q
	ctx.fillStyle= "red";
	ctx.fillText("W",C.x+10,C.y+80);
	ctx.fillText("Q",A.x-30,A.y-5);
	
	cDrawForce2(cid,B.x+3,B.y+8,B.x-50,B.y+39,3,"green","round",12);	// F
	cDrawForce2(cid,B.x+10,B.y+80,B.x-20,B.y+24,3,"green","round",12);	// N
	ctx.fillStyle= "green";
	ctx.fillText("F",B.x+10,B.y+20);
	ctx.fillText("N",B.x+20,B.y+70);	

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