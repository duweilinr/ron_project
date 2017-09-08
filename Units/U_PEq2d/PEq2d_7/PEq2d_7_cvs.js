// drawCvs1 for PE2d_7   06/15/2017
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 160;
	var y0=  80;
	var xydata= {x0:x0,xmin:x0-300,xmax:x0+300,
				 y0:y0,ybot:y0+200,ytop:y0-200 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	
	var xd= 100;
	var xAp= x0+xd;
	var yAp= y0;
	var xBp= x0+xd;
	var yBp= y0+200;
	var xCp= x0+2*xd;
	var yCp= y0;
	var xDp= x0+2*xd;
	var yDp= yBp+60;	
		
	cDrawArrow(cid,x0-80,y0,xCp+160,y0,"gray",1,false);	// x axis

	cDrawDot(cid,xAp,yAp,8,"black");
	cDrawDot(cid,xAp,yAp,4,"white");
	cDrawLine(cid,xAp-20,yAp-8,xAp+20,yAp-8,"black",8,"butt");
	cDrawDot(cid,xCp,yCp,8,"black");
	cDrawDot(cid,xCp,yCp,4,"white");
	cDrawLine(cid,xCp-20,yCp-8,xCp+20,yCp-8,"black",8,"butt");
	
	var w= 10;
	var n= 26;
	cDrawSpringR(cid,xAp,yAp,xBp,yBp,w,n);	// spring 1
	cDrawDot(cid,xBp,yBp,4,"black");	
	cDrawSpringR(cid,xCp,yCp,xDp,yDp,w,n);	// spring 2
	cDrawDot(cid,xDp,yDp,4,"black");
	
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText("A",xAp-20,yAp+20);
	ctx.fillText("B",xBp-20,yBp+20);
	ctx.fillText("C",xCp-20,yCp+20);
	ctx.fillText("D",xDp-20,yDp+20);	
	
	cDrawLine(cid,xBp-100,yBp,xBp-10,yBp,"gray",1,"butt");
	cDrawDoubleArrow(cid,xBp-50,yBp,xBp-50,yAp,"black",1,true)
	cDrawLine(cid,xDp+10,yDp,xDp+100,yDp,"gray",1,"butt");
	cDrawDoubleArrow(cid,xDp+50,yDp,xDp+50,yCp,"black",1,true)
	
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";	
	cDrawTextBG(cid,"Lf",xBp-55,(yBp+yAp)/2);
	cDrawTextBG(cid,"L",xDp+45,(yDp+yCp)/2);

	cDrawForce2(cid,xDp,yDp+3,xDp,yDp+80,3,"red","round",12);	// F
	ctx.fillStyle="red";
	ctx.fillText("F",xDp-20,yDp+60);		

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
	//cDrawGrid1(cid,x0,xmin,xmax,y0,ybot,ytop);

	// extract values from ivcode


}