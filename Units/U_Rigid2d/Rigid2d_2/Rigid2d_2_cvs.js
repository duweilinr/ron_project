// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 100;
	var y0= 300;
	var xydata= {x0:x0,xmin:50,xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

//	Draw structure
	var Axp= x0 +120;
	var Ayp= y0 -120;
	var Bxp= x0 +320;
	var Byp= y0 -140;
	var Cxp= x0 +520;
	var Cyp= y0 -120;
	var Dxp= x0 +100;
	var Dyp= y0 -40;
	var Exp= x0 +480;
	var Eyp= y0 -40;

	cDrawRectxy(cid,x0,y0-120,x0+400,y0-60,"black","2","lightgray");
	cDrawRectxy(cid,x0+400,y0-200,x0+580,y0-60,"black","2","lightgray");
	cDrawRectxy(cid,x0+60,y0-180,x0+180,y0-120,"brown","4","burlywood");
	cDrawRectxy(cid,x0+240,y0-220,x0+380,y0-120,"brown","8","darkkhaki");
	cDrawLine(cid,x0,y0-120,x0+396,y0-120,"gray",8,"round");

	cDrawDot(cid,x0+100,y0-40,40,"black");		// rear wheel
	cDrawDot(cid,x0+100,y0-40,20,"silver");
	cDrawDot(cid,x0+480,y0-40,40,"black");		// front wheel
	cDrawDot(cid,x0+480,y0-40,20,"silver");
	
	cDrawDot(cid,Axp,Ayp,4,"black");
	cDrawDot(cid,Bxp,Byp,4,"black");
	cDrawDot(cid,Cxp,Cyp,4,"black");
	cDrawDot(cid,Dxp,Dyp,4,"black");
	cDrawDot(cid,Exp,Eyp,4,"black");
	
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText("A",Axp+5,Ayp-6);
	ctx.fillText("B",Bxp+5,Byp-6);
	ctx.fillText("C",Cxp+5,Cyp-6);
	ctx.fillText("D",Dxp+3,Dyp-4);
	ctx.fillText("E",Exp+3,Eyp-4);
		
	// dimensioning for wheels		
	cDrawLine(cid,Dxp,y0+5,Dxp,y0+40,"gray",1,"round");
	cDrawLine(cid,Exp,y0+5,Exp,y0+40,"gray",1,"round");
	cDrawDoubleArrow(cid,x0, y0+25,Dxp,y0+25,"gray",1,true);
	cDrawDoubleArrow(cid,Dxp,y0+25,Exp,y0+25,"gray",1,true);
	cDrawTextBG(cid," 5ft ", (x0+Dxp)/2-10,y0+17);
	cDrawTextBG(cid," 19ft ",(Dxp+Exp)/2-20,y0+17);	
	
	// dimensioning for weights
	cDrawLine(cid,Axp,Ayp+8,Axp,Ayp+35,"gray",1,"round");
	cDrawLine(cid,Bxp,Byp+8,Bxp,Ayp+35,"gray",1,"round");
	cDrawLine(cid,Cxp,Cyp+8,Cxp,Ayp+35,"gray",1,"round");	
	cDrawDoubleArrow(cid,x0, Ayp+20,Axp,Ayp+20,"gray",1,true);
	cDrawDoubleArrow(cid,Axp,Ayp+20,Bxp,Ayp+20,"gray",1,true);
	cDrawDoubleArrow(cid,Bxp,Ayp+20,Cxp,Ayp+20,"gray",1,true);	
	cDrawTextBG(cid," 6ft ", (x0+Axp)/2-10,Ayp+11);
	cDrawTextBG(cid," 10ft ",(Axp+Bxp)/2-10,Ayp+11);
	cDrawTextBG(cid," 10ft ", (Bxp+Cxp)/2-10,Ayp+11);		

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
	cDrawArrow(cid,x0,y0,x0+F2x,y0-F2y,"red",3,true);  */		
}