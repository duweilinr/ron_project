// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 100;
	var y0= 300;
	var xydata= {x0:x0,xmin:x0-50,xmax:x0+650,
				 y0:y0,ybot:y0+150,ytop:y0-250 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
		
//	Draw structure
	cDrawArrow(cid,x0-60,y0,x0+660,y0,"gray",1.5,true);		// x axis
	cDrawArrow(cid,x0,y0+100,x0,y0-240,"gray",1.5,true);	// y axis
	ctx.fillStyle="gray";
	ctx.font="bold 16px Arial";
	ctx.fillText("X",x0+630,y0+20);
	ctx.fillText("Y",x0-20,y0-225);
	ctx.fillText("O",x0-20,y0+20);

	var Axp= 120 +x0;
	var Ayp= -120 +y0;
	var Bxp= 320 +x0;
	var Byp= -140 +y0;
	var Cxp= 520 +x0;
	var Cyp= -120 +y0;

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
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText("A",Axp+5,Ayp-6);
	ctx.fillText("B",Bxp+5,Byp-6);
	ctx.fillText("C",Cxp+5,Cyp-6);
	
	cDrawLine(cid,Axp,Ayp+10,Axp,y0+60,"gray",1,"round");
	cDrawLine(cid,Bxp,Byp+10,Bxp,y0+60,"gray",1,"round");
	cDrawLine(cid,Cxp,Cyp+10,Cxp,y0+60,"gray",1,"round");	
	cDrawDoubleArrow(cid,x0,y0+30,x0+120,y0+30,"gray",1,true);
	cDrawDoubleArrow(cid,x0+120,y0+30,x0+320,y0+30,"gray",1,true);
	cDrawDoubleArrow(cid,x0+320,y0+30,x0+520,y0+30,"gray",1,true);
	cDrawTextBG(cid," 6ft ",x0+50,y0+22);
	cDrawTextBG(cid," 10ft ",x0+210,y0+22);
	cDrawTextBG(cid," 10ft ",x0+410,y0+22);	

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


	// draw the force

	
}