// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 150;
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
	
//	Draw structure
	var ap= 240;
	var bp= 80;
	var cp= 240;

	var xAp= x0;
	var yAp= y0-bp;
	var xBp= x0+ap;
	var yBp= yAp;
	var xCp= xBp;
	var yCp= y0;
	var xDp= xBp+cp;
	var yDp= yCp;	
	
	cDrawLine(cid,xAp-4,yAp,xBp,yAp,"gray",12,"butt");		// AB
	cDrawLine(cid,xAp-4,yAp,xBp-3,yAp,"lightgray",8,"butt");
	cDrawLine(cid,xCp,y0,xDp,y0,"gray",12,"butt");			// CD			
	cDrawLine(cid,xCp+3,y0,xDp-3,y0,"lightgray",8,"butt");	
	cDrawLine(cid,xBp,yAp-5,xCp,y0+5,"gray",10,"round");	// BC
	cDrawLine(cid,xBp,yAp-3,xCp,y0+3,"lightgray",6,"round");

	// supports
	cDrawLine(cid,xAp-5,yAp+25,xAp-5,yAp-25,"gray",10,"butt");	// A	
	cDrawDot(cid,xDp,yDp,12,"white");	
	cDrawDot(cid,xDp,yDp,10,"gray");
	cDrawDot(cid,xDp,yDp,8,"lightgray");	
	cDrawLine(cid,xDp+5,yDp+25,xDp+5,yDp-25,"gray",10,"butt");	// D
	
	// labels
	//cDrawDot(cid,xAp,yAp,2,"black");		
	cDrawDot(cid,xBp,yBp,2,"black");		
	cDrawDot(cid,xCp,yCp,2,"black");		
	cDrawDot(cid,xDp,yDp,2,"black");		
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp+10,yAp-10);
	ctx.fillText("B",xBp-20,yBp-10);
	ctx.fillText("C",xCp-20,yCp-10);
	ctx.fillText("D",xDp-20,yDp-10);	

	// dimensions
	cDrawDoubleArrow(cid,x0,y0+30,xCp,y0+30,"black",1,true);	// a
	cDrawDoubleArrow(cid,xCp,y0+30,xDp,y0+30,"black",1,true);	// c
	cDrawLine(cid,xCp,y0+5,xCp,y0+45,"black",1,"butt");	
	cDrawLine(cid,xDp,y0+25,xDp,y0+45,"black",1,"butt");
	
	cDrawDoubleArrow(cid,xCp+25,y0,xCp+25,yAp,"black",1,true);	// b
	cDrawLine(cid,xBp+8,yBp,xCp+45,yBp,"black",1,"butt");		
	
	cDrawTextBG(cid," a ",(x0+xCp)/2-10,y0+20);
	cDrawTextBG(cid," c ",(xCp+xDp)/2-10,y0+20);
	cDrawTextBG(cid,"b",xCp+20,(y0+yBp)/2-8);
	
	// loads
	
	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText("60 lb/ft",(xAp+xBp)/2-20,yAp-10);
	ctx.fillText("45 lb/ft",(xCp+xDp)/2-20,yDp-10);
	cDrawArrow(cid,xCp,y0,xCp,y0+60,"red",3,true);
	ctx.fillText("WBC",xCp+10,y0+70);

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