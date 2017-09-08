// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 280;
	var y0= 100;
	var xydata= {x0:x0,xmin:50,xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	var xA= x0;
	var yA= y0;
	var xB= x0;
	var yB= y0+120;
	var xC= x0-10;
	var yC= y0+200;
	var xD= x0+180;
	var yD= y0+240;

	cDrawDot(cid,xA,yA,3,"black");
	cDrawDot(cid,xB,yB,3,"black");
	cDrawDot(cid,xC,yC,3,"black");
	cDrawDot(cid,xD,yD,3,"black");

	ctx.fillStyle="black";	
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xA-15,yA-15);
	ctx.fillText("B",xB-20,yB-15);
	ctx.fillText("C",xC-20,yC-10);
	ctx.fillText("D",xD+10,yD-10);

	var grd= ctx.createLinearGradient(xA-100,yA-20,xA-60,yA-20);	// ground
	grd.addColorStop(0,"white");
	grd.addColorStop(1,"brown");
	ctx.fillStyle= grd;
	ctx.fillRect(xA-100,yA-20,40,200);	
	
	cDrawLine(cid,xA,yA,xD,yD,"gray",6,"round");		// cable AD	
	cDrawLine(cid,xB+10,yB-5,xD,yD,"gray",6,"round");	// cable BD
	cDrawLine(cid,xC,yB,xC,yC,"gray",6,"round");		// cable BC
	cDrawLine(cid,xD,yD,xD,yD+20,"gray",6,"round");		// D to M	

	cDrawLine(cid,xA-60,yA,xA,yA,"gray",8,"butt");		// A support
	cDrawDot(cid,xA,yA,8,"black");
	cDrawDot(cid,xA,yA,4,"white");

	cDrawLine(cid,xB-60,yB,xB,yB,"gray",8,"butt");		// B support
	cDrawDot(cid,xB,yB,16,"black");
	cDrawDot(cid,xB,yB,14,"silver");
	cDrawDot(cid,xB,yB,6,"black");
	
	cDrawRectxy(cid,xC-15,yC,xC+15,yC+60,"black",2,"lightgray");	// m	
	cDrawRectxy(cid,xD-25,yD+20,xD+25,yD+80,"black",2,"lightgray");	// M

	cDrawDot(cid,xD,yD,7,"black");
	cDrawDot(cid,xD,yD,3,"white");
	
	cDrawArrow(cid,xD+6,yD,xD+80,yD,"red",3,true);
	ctx.fillStyle="red";		
	ctx.fillText("F1",xD+60,yD-10);

	ctx.fillStyle="black";	
	ctx.fillText("m",xC-40,yC+30);
	ctx.fillText("M",xD-45,yD+50);

	cDrawDoubleArrow(cid,xA-40,yA,xA-40,yB,"black",2,true);	// vert 2m
	cDrawTextBG(cid,"2 m",xA-50,(yA+yB)/2-10);

	cDrawDoubleArrow(cid,xD,yD-6,xD,yA,"black",2,true);	// vert 4m
	cDrawTextBG(cid,"4 m",xD-10,(yA+yD)/2-30);
	cDrawLine(cid,xD-20,yA,xD+20,yA,"gray",1,"butt");

	cDrawDoubleArrow(cid,xA,yA-20,xD,yA-20,"black",2,true);	// horz 3m
	cDrawTextBG(cid," 3 m ",(xA+xD)/2-20,yA-30);
	cDrawLine(cid,xA,yA-10,xA,yA-40,"gray",1,"butt");
	cDrawLine(cid,xD,yA-4,xD,yA-40,"gray",1,"butt");	

	return xydata;
}

// drawCvs2
function drawCvs2(xydata,ivvald)
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