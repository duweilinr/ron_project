// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 400;
	var xydata= {x0:x0,xmin:50,xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	// geometry setup
	var wp= 160;		// frame width
	var cp= 280;		// frame height
	
	var xAp= x0;
	var yAp= y0;
	var xBp= x0;
	var yBp= y0-cp*0.8;
	var xCp= x0;
	var yCp= y0-cp;
	var xDp= x0-wp*0.7;
	var yDp= yBp;
	var xEp= xAp-wp;
	var yEp= yBp;
	
	// frame
	cDrawLine(cid,xAp,yAp,xAp,yCp-6,"brown",16,"butt");
	cDrawLine(cid,xBp,yBp,xEp,yEp,"brown",10,"round");
	cDrawLine(cid,xCp,yCp,xEp,yEp,"brown",10,"round");
	
	// support at A
	cDrawLine(cid,xAp-30,yAp+5,xAp+30,yAp+5,"gray",10,"butt");
		
	// key points
	cDrawDot(cid,xAp,yAp,3,"black");
	cDrawDot(cid,xBp,yBp,2,"black");		
	cDrawDot(cid,xCp,yCp,3,"black");
	cDrawDot(cid,xDp,yDp,3,"black");	
	cDrawDot(cid,xEp,yEp,2,"black");
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp-25,yAp-5);
	ctx.fillText("B",xBp+15,yBp-5);
	ctx.fillText("C",xCp+15,yCp-5);
	ctx.fillText("D",xDp-17,yDp+22);
	ctx.fillText("E",xEp-17,yEp+22);

	// dimensions
	cDrawDoubleArrow(cid,xAp+60,yAp,xAp+60,yCp,"gray",1,true);
	cDrawLine(cid,xCp+10,yCp,xCp+75,yCp,"black",1,"butt");		
	cDrawDoubleArrow(cid,xAp+30,yAp,xAp+30,yBp,"gray",1,true);
	cDrawLine(cid,xBp+10,yBp,xBp+45,yBp,"black",1,"butt");	
	cDrawDoubleArrow(cid,xBp,yBp+25,xDp,yDp+25,"gray",1,true);	
	
	cDrawTextBG(cid,"b",xAp+26,(yAp+yBp)/2-10);		
	cDrawTextBG(cid,"c",xAp+56,(yAp+yCp)/2-10);			
	cDrawTextBG(cid," d ",(xAp+xDp)/2-9,yDp+17);

	// forces
	cDrawArrow(cid,xDp,yDp+5,xDp,yDp+65,"red",4,true);		// W
	ctx.fillStyle="red";
	ctx.fillText("W",xDp+10,yDp+80);	

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