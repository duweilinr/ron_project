// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 150;
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
	var LBp= x0 +160;
	var LCp= x0 +380;

	// draw fixed body
	cDrawRectxy(cid,x0-5,y0-10,LCp+5,y0+10,"black",1,"lightgray")
	cDrawLine(cid,LCp,y0+80,LCp,y0-80,"black",1,"butt");
	cDrawLine(cid,LCp+11,y0+80,LCp+11,y0-80,"lightgray",20,"butt");
	cDrawLine(cid,LCp+21,y0+80,LCp+21,y0-80,"black",1,"butt");	
	
	cDrawDot(cid,x0,y0,3,"black");		// A
	cDrawDot(cid,LBp,y0,3,"black");	// B
	cDrawDot(cid,LCp,y0,3,"black");	// C
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "A",x0-20,y0-5);	
	ctx.fillText( "B",LBp-20,y0+5);	
	ctx.fillText( "C",LCp-20,y0+5);	
		
	cDrawDoubleArrow(cid,x0,y0+30,LBp,y0+30,"gray",1,true);
	cDrawTextBG(cid," L1 ",(x0+LBp)/2-15,y0+22);
	cDrawLine(cid,LBp,y0+12,LBp,y0+40,"gray",1,"round");

	cDrawDoubleArrow(cid,x0,y0+50,LCp,y0+50,"gray",1,true);
	cDrawTextBG(cid," 12 ft ",(x0+LCp)/2-15,y0+42);
	cDrawLine(cid,LCp,y0+12,LCp,y0+70,"gray",1,"round");

	// draw distributed load q1
	var dxp= 20;
	var xp=  x0;
	var y2p= y0-10;		// arrow end
	var y1p= y2p -20;	// arrow start
	var cp=  0.0005;
	var y1s= y1p;
	cDrawForce2(cid,xp,y1p,xp,y2p,2,"red","round",6);
	while ( xp < LBp-dxp+5) {
		xp= xp+dxp;	
		y1p= y1p-cp*(xp-x0)*(xp-x0);
		cDrawForce2(cid,xp,y1p,xp,y2p,2,"red","round",6);
		cDrawLine(cid,xp-dxp,y1s,xp,y1p,"red",2,"round");
		y1s= y1p;
	}
	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText("q1= a1*exp( b1*x)",x0+20,y0-80);
	
	var xp=  LBp;
	var y1p= y2p -30;	// arrow start
	var cp=  0.0004;
	var y1s= y1p;
	cDrawForce2(cid,xp,y1p,xp,y2p,2,"red","round",6);
	while ( xp < LCp-dxp+5) {
		xp= xp+dxp;	
		y1p= y1p-cp*(xp-LBp)*(xp-LBp);
		cDrawForce2(cid,xp,y1p,xp,y2p,2,"red","round",6);
		cDrawLine(cid,xp-dxp,y1s,xp,y1p,"red",2,"round");
		y1s= y1p;
	}	
	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText("q2= a2*exp( b2*(x-L1))",LBp+20,y0-100);
		
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