// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 150;
	var y0= 400;
	var xydata= {x0:x0,xmin:x0-100,xmax:x0+600,
				 y0:y0,ybot:y0+50,ytop:y0-350 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	// geometry setup
	var ap=  60;
	var Axp= x0 +1*ap;
	var Ayp= y0 -5*ap;
	var Bxp= x0 +3*ap;
	var Byp= y0 -4*ap;
	var Cxp= x0 +4*ap;
	var Cyp= y0 -1*ap;
	var Dxp= x0 +2*ap;
	var Dyp= y0 -1*ap;

	// draw the structure
	cDrawLine(cid,Axp,Ayp,Bxp,Byp,"gray",12,"round");
	cDrawLine(cid,Bxp,Byp,Cxp,Cyp,"gray",12,"round");
	cDrawLine(cid,Cxp,Cyp,Dxp,Dyp,"gray",12,"round");

	cDrawDot(cid,Axp,Ayp,3,"black");	// A	
	cDrawDot(cid,Bxp,Byp,3,"black");	// B
	cDrawDot(cid,Cxp,Cyp,3,"black");	// C	
	cDrawDot(cid,Dxp,Dyp,3,"black");	// D	

	// label fixed points
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";		
	ctx.fillText( "A(a,5a)",Axp-20,Ayp-20);	
	ctx.fillText( "B(3a,4a)",Bxp+15,Byp+5);
	ctx.fillText( "C(4a,a)",Cxp-20,Cyp+25);	
	ctx.fillText( "D(2a,a)",Dxp-30,Dyp+25);

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
}