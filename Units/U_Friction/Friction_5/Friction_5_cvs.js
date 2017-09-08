// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 300;
	var y0= 250;
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
	var A= {x:x0+30,y:y0-80};
	var B= {x:x0-30,y:y0+100};
	var D= {x:x0+280,y:y0};	
	
	// draw structure
	cDrawLine(cid,B.x-3,A.y-20,B.x-3,B.y+20,"black",3,"round");
	cDrawLine(cid,A.x+3,A.y-20,A.x+3,B.y+20,"black",3,"round");
	
	cDrawRectxy(cid,A.x,A.y,B.x,B.y,"gray",2,"lightgray");
	cDrawRectxy(cid,B.x,y0-12,D.x+40,y0+12,"gray",2,"lightgray");
	cDrawDot(cid,x0-13,y0,5,"gray");
	cDrawDot(cid,x0+13,y0,5,"gray");	

	cDrawRectxy(cid,D.x-30,D.y-13,D.x+30,D.y-80,"brown",2,"burlywood");
	ctx.fillStyle="black";	
	ctx.fillText("m",D.x-7,D.y-40);	

	cDrawDot(cid,A.x,A.y,2,"black");
	cDrawDot(cid,B.x,B.y,2,"black");
	cDrawDot(cid,D.x,D.y,2,"black");
	ctx.fillStyle= "black";
	ctx.fillText("A",A.x+15,A.y+5);
	ctx.fillText("B",B.x-20,B.y+15);
	ctx.fillText("D",D.x-20,D.y+5);

	cDrawLine(cid,x0,y0+15,x0,y0+45,"gray",1,"round");
	cDrawLine(cid,D.x,y0+15,D.x,y0+45,"gray",1,"round");
	cDrawDoubleArrow(cid,x0,y0+30,D.x,y0+30,"gray",1,true);
	cDrawTextBG(cid," d ",(x0+D.x)/2-15,y0+22);
	
	cDrawLine(cid,B.x,B.y+23,B.x,B.y+53,"black",1,"round");
	cDrawLine(cid,A.x,B.y+23,A.x,B.y+53,"black",1,"round");
	cDrawDoubleArrow(cid,B.x,B.y+38,A.x,B.y+38,"gray",1,true);
	cDrawTextBG(cid," w ",x0-9,B.y+29);	
	
	cDrawLine(cid,B.x-50,A.y,B.x-8,A.y,"gray",1,"round");
	cDrawDoubleArrow(cid,B.x-30,y0,B.x-30,A.y,"gray",1,true);
	cDrawTextBG(cid,"hA",B.x-38,(y0+A.y)/2-10);	

	cDrawLine(cid,B.x-50,B.y,B.x-8,B.y,"gray",1,"round");
	cDrawDoubleArrow(cid,B.x-30,y0,B.x-30,B.y,"gray",1,true);
	cDrawTextBG(cid,"hB",B.x-38,(y0+B.y)/2-10);	

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