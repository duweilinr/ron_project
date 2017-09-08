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
	var A= {x:x0+260,y:y0};
	var B= {x:x0+80, y:y0};
	var C= {x:x0,    y:y0};	
	
	// draw frame and wheels
	cDrawLine(cid,A.x,A.y,C.x,C.y,"green",6,"round");	
	cDrawArc3(cid,A.x,A.y,60,0,360,true,"gray",8,"none",false,false);
	cDrawArc3(cid,C.x,C.y,60,0,360,true,"gray",8,"none",false,false);
	//cDrawLine(cid,A.x-20,A.y+63,A.x+20,A.y+63,"brown",4,"round");
	//cDrawLine(cid,C.x-20,C.y+63,C.x+20,C.y+63,"brown",4,"round");
	cDrawLine(cid,C.x-60,C.y+63,A.x+60,C.y+63,"brown",3,"round");	
		
	cDrawDot(cid,A.x,A.y,5,"gray");
	cDrawDot(cid,B.x,B.y,5,"gray");
	cDrawDot(cid,C.x,C.y,5,"gray");	

	ctx.fillStyle="black";	
	ctx.fillText("A",A.x+5,A.y+20);
	ctx.fillText("B",B.x+5,B.y+20);
	ctx.fillText("C",C.x-15,C.y+20);

	// draw dimensioning
	cDrawLine(cid,A.x,A.y+8,A.x,A.y+45,"gray",1,"round");
	cDrawLine(cid,B.x,B.y+8,B.x,B.y+45,"gray",1,"round");	
	cDrawLine(cid,C.x,C.y+8,C.x,C.y+45,"gray",1,"round");
	
	cDrawDoubleArrow(cid,A.x,y0+30,B.x,y0+30,"gray",1,true);	
	cDrawDoubleArrow(cid,B.x,y0+30,C.x,y0+30,"gray",1,true);
	cDrawTextBG(cid," a ",(A.x+B.x)/2-15,y0+22);
	cDrawTextBG(cid," b ",(B.x+C.x)/2-15,y0+22);	
	
	// draw force
	cDrawArrow(cid,B.x,B.y-100,B.x,B.y-4,"red",4,true);
	ctx.fillStyle="red";	
	ctx.fillText("W",B.x+5,B.y-80);		

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