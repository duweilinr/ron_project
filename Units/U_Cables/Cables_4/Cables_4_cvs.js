// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 200;
	var y0= 340;
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
	var xB= xA+200;
	var yB= yA-240;
	var xC= xB+20;
	var yC= yA-80;
	var xD= xC+30;
	var yD= yB+20;
	var xE= xD+90;
	var yE= yD+120;

	ctx.font="bold 14px Arial";

	// ground
	cDrawLine(cid,xA-10,yA+60,xA-10,yB-20,"brown",20,"butt");
	cDrawLine(cid,xA-20,yB-20,xD+40,yB-20,"brown",20,"butt");	
	
	// cables
	cDrawLine(cid,xA,yA,xB-3,yB,"orange",4,"round");
	cDrawLine(cid,xB+3,yB,xB+3,yC,"orange",4,"round");
	cDrawLine(cid,xC+14,yC,xC+14,yD,"orange",4,"round");
	cDrawLine(cid,xD+14,yD-3,xE,yE,"orange",4,"round");
	
	cDrawLine(cid,xE-5,yE-25,xE-50,yE-95,"blue",1,"round");
	cDrawLine(cid,xE-5,yE-25,xE-5,yE-95,"blue",1,"round");
	cDrawLine(cid,xE-50,yE-95,xE-5,yE-95,"blue",1,"round");	
	ctx.fillStyle="blue";	
	ctx.fillText("4",xE+2,yE-60);
	ctx.fillText("3",xE-28,yE-100);
	
	// A support
	cDrawDot(cid,xA,yA,5,"black");
	ctx.fillStyle="black";	
	ctx.fillText("A",xA+10,yA+10);

	// B support
	cDrawLine(cid,xB,yB-10,xB,yB,"gray",12,"butt");
	cDrawDot(cid,xB,yB,5,"black");
	cDrawDot(cid,xB,yB,3,"white");
	cDrawDot(cid,xB,yB,1,"black");	
	cDrawLine(cid,xA-70,yB,xB-10,yB,"black",1,"butt");
	ctx.fillStyle="black";	
	ctx.fillText("B",xB-30,yB+15);	
	
	// C support
	cDrawDot(cid,xC,yC,19,"gray");
	cDrawDot(cid,xC,yC,13,"lightgray");
	cDrawDot(cid,xC,yC,5,"black");	
	ctx.fillStyle="black";	
	ctx.fillText("C",xC-40,yC+10);	
	
	// D support
	cDrawLine(cid,xD,yD-30,xD,yD,"silver",26,"butt");	
	cDrawDot(cid,xD,yD,19,"gray");
	cDrawDot(cid,xD,yD,13,"lightgray");
	cDrawDot(cid,xD,yD,5,"black");	
	ctx.fillStyle="black";	
	ctx.fillText("D",xD+30,yD);	
	
	// E region with force
	cDrawArrow(cid,xE,yE,xE+36,yE+60,"red",3,true);
	ctx.fillStyle="red";		
	ctx.fillText("F1",xE+40,yE+36);
	cDrawDot(cid,xE,yE,6,"black");
	cDrawDot(cid,xE,yE,3,"white");
	ctx.fillStyle="black";	
	ctx.fillText("E",xE+15,yE);

	// mass
	cDrawLine(cid,xC,yC,xC,yC+30,"brown",8,"butt");		
	cDrawLine(cid,xC,yC+32,xC,yC+92,"silver",60,"butt");
	cDrawLine(cid,xC-32,yC+32,xC+32,yC+32,"black",4,"round");		
	cDrawLine(cid,xC-32,yC+94,xC+32,yC+94,"black",4,"round");
	ctx.fillStyle="black";		
	ctx.fillText("M",xC+40,yC+64);	
	
	// dimension lines
	cDrawDoubleArrow(cid,xA-45,yA,xA-45,yB,"black",1,true);
	cDrawTextBG(cid,"a",xA-50,(yA+yB)/2-10);
	cDrawLine(cid,xA-70,yA,xA-10,yA,"black",1,"butt");
	
	cDrawDoubleArrow(cid,xA,yB-50,xB,yB-50,"black",1,true);
	cDrawTextBG(cid," b ",(xA+xB)/2-10,yB-58);
	cDrawLine(cid,xA,yB-35,xA,yB-70,"black",1,"butt");
	cDrawLine(cid,xB,yB-35,xB,yB-70,"black",1,"butt");

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