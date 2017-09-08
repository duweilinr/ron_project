// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 240;
	var xydata= {x0:x0,xmin:x0-300,xmax:x0+300,
				 y0:y0,ybot:y0+200,ytop:y0-200 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	// pixels defined in 2d standard grid
	var Axp= x0;
	var Ayp= y0-160;
	var Bxp= x0-80;
	var Byp= y0+30;
	var Cxp= x0+40;
	var Cyp= y0+60;
	var Dxp= x0+50;
	var Dyp= y0-20;

	cDrawArrow(cid,x0,y0+140,x0,y0-220,"grey",1,true); 		//z-axis
	cDrawArrow(cid,x0-225,y0,x0+225,y0,"grey",1,true); 		//y-axis
	cDrawArrow(cid,x0+140,y0-140,x0-140,y0+140,"grey",1,true); //x-axis
	ctx.font="normal 14px Arial";
	ctx.fillStyle="grey";
	ctx.fillText("Z", x0-30,y0-180);
	ctx.fillText("Y", x0+200,y0+20);
	ctx.fillText("X", x0-150,y0+130);

	cDrawLine(cid,Axp,Ayp-20,x0,y0,"silver",8,"butt");
	
	cDrawLine(cid,Axp,Ayp,Bxp,Byp,"gray",3,"round");
	cDrawLine(cid,Axp,Ayp,Cxp,Cyp,"gray",3,"round");
	cDrawLine(cid,Axp,Ayp,Dxp,Dyp,"gray",3,"round");
	cDrawArrow(cid,Axp,Ayp,(Axp+Bxp)/2,(Ayp+Byp)/2,"red",3,true);
	cDrawArrow(cid,Axp,Ayp,(Axp+Cxp)/2,(Ayp+Cyp)/2,"red",3,true);
	cDrawArrow(cid,Axp,Ayp,(Axp+Dxp)/2,(Ayp+Dyp)/2,"red",3,true);
	
	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText("FB",Axp-75,Ayp+100);
	ctx.fillText("FC",Axp, Ayp+125);
	ctx.fillText("FD",Axp+35,Ayp+60);	
	
	cDrawDot(cid,Axp,Ayp,4,"black");
	cDrawDot(cid,Bxp,Byp,4,"black");
	cDrawDot(cid,Cxp,Cyp,4,"black");
	cDrawDot(cid,Dxp,Dyp,4,"black");
	
	ctx.fillStyle="black";
	ctx.font="16px Arial";
	ctx.fillText("A (0,0,30)",Axp+10,Ayp);
	ctx.fillText("B (15,-10,0)",Bxp-95,Byp+10);
	ctx.fillText("C (25,20,0)",Cxp+10,Cyp+10);
	ctx.fillText("D (-5,20,0)",Dxp+10,Dyp+10);

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