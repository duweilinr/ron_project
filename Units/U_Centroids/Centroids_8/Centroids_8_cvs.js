// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 350;
	var y0= 50;
	var xydata= {x0:x0,xmin:50,xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	//	do setup
	var wp= 260;
	var hp= 280;
	var dp= 40;
	
	var xAp= x0; 
	var yAp= y0;
	var xBp= x0;
	var yBp= y0+dp;
	var xCp= x0-wp/2;
	var yCp= yBp;
	var xDp= x0+wp/2;
	var yDp= yBp+hp;
	var xEp= x0+wp/6;
	var yEp= y0+dp+hp/6;
	var xFp= x0+2*wp/6;
	var yFp= yDp-hp/6;
	var xGp= x0;
	var yGp= y0+dp+hp/2;
	
	// frame
	cDrawLine(cid,x0-50,y0-2,x0+50,y0-3,"black",6,"butt");
	cDrawLine(cid,x0,y0,xBp,yBp,"gray",5,"round");	
	cDrawRectxy(cid,xBp-wp/2,yBp,xBp+wp/2,yDp,"gray",3,"lightgray");
	cDrawRectxy(cid,xEp,yEp,xFp,yFp,"black",2,"white");

	// axes
	cDrawArrow(cid,xmin,y0,xmax,y0,"gray",1,true);			// x axis
	cDrawArrow(cid,x0,ybot,x0,ytop-30,"gray",1,true);		// y axis
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("X",xmax-25,y0+20);
	ctx.fillText("Y",x0-20,y0-20);	
	
	// supports
	cDrawDot(cid,xAp,yAp,4,"black");	
	cDrawDot(cid,x0,yBp,4,"black");
	cDrawDot(cid,xGp,yGp,3,"black");
	cDrawTextBG(cid,"Cable: k; Lf",x0+15,y0+12);	
		
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp-17,yAp+15);
	ctx.fillText("B",xBp-17,yBp+15);
	//ctx.fillText("C",xCp-15,yCp-5);
	//ctx.fillText("D",xDp+6,yDp+15);
	ctx.fillText("G",xGp-17,yGp+15);

	// horizontal dimensions
	cDrawDoubleArrow(cid,xGp,yDp+20,xEp,yDp+20,"black",1,true);
	cDrawTextBG(cid,"b",xGp+18,yDp+11);	
	cDrawDoubleArrow(cid,xEp,yDp+20,xFp,yDp+20,"black",1,true);
	cDrawTextBG(cid,"c",xEp+18,yDp+11);	
	cDrawDoubleArrow(cid,xCp,yDp+45,xDp,yDp+45,"black",1,true);
	cDrawTextBG(cid," a ",xGp-8,yDp+35);
	cDrawLine(cid,xCp,yDp+5,xCp,yDp+60,"gray",1,"round");	// xC	
	cDrawLine(cid,xDp,yDp+5,xDp,yDp+60,"gray",1,"round");	// xD
	cDrawLine(cid,xEp,yFp+5,xEp,yDp+35,"gray",1,"round");	// xE
	cDrawLine(cid,xFp,yFp+5,xFp,yDp+35,"gray",1,"round");	// xF	
	
	// vertical dimensions
	cDrawDoubleArrow(cid,xDp+60,yDp,xDp+60,yCp,"black",1,true);		
	cDrawTextBG(cid,"8 ft",xDp+52,yGp-10);	
	cDrawDoubleArrow(cid,xDp+30,yCp,xDp+30,yEp,"black",1,true);		
	cDrawTextBG(cid,"1 ft",xDp+18,yCp+15);		
	cDrawDoubleArrow(cid,xDp+30,yEp,xDp+30,yFp,"black",1,true);		
	cDrawTextBG(cid,"6 ft",xDp+18,yGp-12);	
	
	cDrawLine(cid,xDp+5,yDp,xDp+75,yDp,"gray",1,"round");	// yD
	cDrawLine(cid,xDp+5,yCp,xDp+75,yCp,"gray",1,"round");	// yC
	cDrawLine(cid,xFp+5,yEp,xFp+80,yEp,"gray",1,"round");	// yE
	cDrawLine(cid,xFp+5,yFp,xFp+80,yFp,"gray",1,"round");	// yF		
	
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