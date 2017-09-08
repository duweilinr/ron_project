// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 200;
	var y0= 300;
	var xydata= {x0:x0,xmin:x0-100,xmax:x0+600,
				 y0:y0,ybot:y0+150,ytop:y0-250 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	// geometry setup
	var wp= 320;		// frame width
	var hp= 160;		// frame height
	
	var xAp= x0;
	var yAp= y0;
	var xBp= xAp+wp;
	var yBp= yAp;
	var xCp= xAp+wp/3;
	var yCp= yAp-hp;
	var xDp= xAp+2*wp/3;
	var yDp= yCp;
	var xEp= xAp+wp/11;
	var yEp= yCp;
	var xFp= xAp+wp/2;
	var yFp= yCp;		
	
	// frame
	cDrawLine(cid,xAp,yAp,xAp,yAp-hp,"gray",16,"butt");
	cDrawLine(cid,xBp,yBp,xBp,yBp-hp,"gray",16,"butt");
	cDrawLine(cid,xAp-8,yCp,xBp+8,yCp,"gray",16,"butt");
	
	// support at A
	cDrawLine(cid,xAp-20,yAp+2,xAp+20,yAp+2,"gray",4,"butt");
	cDrawDot(cid,xAp-8,yAp+7,4,"gray");		
	cDrawDot(cid,xAp+8,yAp+7,4,"gray");
	cDrawLine(cid,xAp-20,yAp+12,xAp+20,yAp+12,"black",4,"butt");
	cDrawDot(cid,xAp,yAp,3,"black");
	
	// support at B
	cDrawDot(cid,xBp,yBp,12,"white");	
	cDrawLine(cid,xBp,yBp,xBp,yBp+10,"gray",20,"butt");
	cDrawDot(cid,xBp,yBp,10,"gray");		
	cDrawLine(cid,xBp-20,yAp+12,xBp+20,yAp+12,"black",4,"butt");
	cDrawDot(cid,xBp,yBp,6,"white");
	cDrawDot(cid,xBp,yBp,4,"black");
		
	// key points
	cDrawDot(cid,xCp,yCp,3,"black");
	cDrawDot(cid,xDp,yDp,3,"black");	
	cDrawDot(cid,xEp,yEp,2,"blue");
	cDrawDot(cid,xFp,yFp,2,"blue");	
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp-25,yAp-5);
	ctx.fillText("B",xBp+15,yBp-5);
	ctx.fillText("C",xCp-15,yCp+25);
	ctx.fillText("D",xDp-15,yDp+25);
	ctx.fillText("E",xEp-15,yEp+25);
	ctx.fillText("F",xFp-15,yFp+25);	

	// dimensions
	cDrawDoubleArrow(cid,xAp,yCp-25,xCp,yCp-25,"gray",1,true);
	cDrawLine(cid,xCp,yCp-7,xCp,yCp-35,"black",1,"butt");		
	cDrawDoubleArrow(cid,xAp,yCp-45,xDp,yCp-45,"gray",1,true);
	cDrawLine(cid,xDp,yCp-7,xDp,yCp-55,"black",1,"butt");
	cDrawDoubleArrow(cid,xAp,yCp-65,xBp,yCp-65,"gray",1,true);	
	cDrawLine(cid,xBp,yCp-7,xBp,yCp-75,"black",1,"butt");
	
	cDrawTextBG(cid," c ",(xAp+xCp)/2-9,yCp-35);		
	cDrawTextBG(cid," d ",(xAp+xDp)/2-9,yCp-55);			
	cDrawTextBG(cid," 24 ft ",(xAp+xBp)/2-9,yCp-75);

	// forces
	cDrawArrow(cid,xCp,yCp+5,xCp,yCp+45,"red",3,true);		// W1
	cDrawArrow(cid,xDp,yDp+5,xDp,yDp+65,"red",3,true);		// W2
	ctx.fillStyle="red";
	ctx.fillText("W1",xCp+10,yCp+60);
	ctx.fillText("W2",xDp+10,yDp+80);	

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