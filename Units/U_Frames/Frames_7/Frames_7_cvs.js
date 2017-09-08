// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 150;
	var y0= 150;
	var xydata= {x0:x0,xmin:50,xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	// geometry setup
	var Lp=  200;
	var dfp= 100;

	// part (a) ----------------------------------------------------------------
	var xAp= x0; 
	var yAp= y0;
	var xBp= xAp+Lp;
	var yBp= yAp;
	var xCp= xBp+dfp;
	var yCp= yBp;
	var xDp= xCp+Lp;
	var yDp= yCp;	
	
	// label
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText("(a)",xAp-120,yAp+5);

	// frame
	cDrawLine(cid,xAp,yAp,xBp,yBp,"gray",18,"round");
	cDrawLine(cid,xAp,yAp,xBp,yBp,"lightgray",14,"round");
	cDrawLine(cid,xCp,yCp,xDp,yDp,"gray",18,"round");		
	cDrawLine(cid,xCp,yCp,xDp,yDp,"lightgray",14,"round");	
	cDrawLine(cid,xBp,yBp,xCp,yCp,"gray",8,"round");	
	
	// supports
	cDrawDot(cid,xAp,yAp,12,"white");	
	cDrawDot(cid,xAp,yAp,10,"gray");
	cDrawLine(cid,xAp,yAp,xAp-20,yAp,"gray",20,"butt");		
	cDrawLine(cid,xAp-23,yAp-20,xAp-23,yAp+20,"gray",6,"butt");			
	cDrawLine(cid,xAp-30,yAp-30,xAp-30,yAp+30,"black",8,"butt");

	cDrawDot(cid,xDp,yDp,12,"white");	
	cDrawDot(cid,xDp,yDp,10,"gray");
	cDrawLine(cid,xDp,yDp,xDp+20,yDp,"gray",20,"butt");		
	cDrawLine(cid,xDp+23,yDp-20,xDp+23,yDp+20,"gray",6,"butt");			
	cDrawLine(cid,xDp+30,yDp-30,xDp+30,yDp+30,"black",8,"butt");
		
	// joints
	cDrawDot(cid,xAp,yAp,5,"white");		
	cDrawDot(cid,xAp,yAp,3,"black");			
	cDrawDot(cid,xBp,yBp,3,"black");	
	cDrawDot(cid,xCp,yCp,3,"black");
	cDrawDot(cid,xDp,yDp,5,"white");
	cDrawDot(cid,xDp,yDp,3,"black");
		
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp,yAp-15);
	ctx.fillText("B",xBp,yBp-15);
	ctx.fillText("C",xCp,yCp-15);
	ctx.fillText("D",xDp,yDp-15);

	// dimensions		
	cDrawDoubleArrow(cid,xAp,yAp+25,xBp,yAp+25,"black",1,true);
	cDrawTextBG(cid," L ",(xAp+xBp)/2-10,yAp+17);
	cDrawDoubleArrow(cid,xBp,yAp+25,xCp,yAp+25,"black",1,true);		
	cDrawTextBG(cid," df ",(xBp+xCp)/2-10,yAp+17);	
	cDrawDoubleArrow(cid,xCp,yAp+25,xDp,yAp+25,"black",1,true);	
	cDrawTextBG(cid," L ",(xCp+xDp)/2-10,yAp+17);	
	
	cDrawLine(cid,xAp,yAp+13,xAp,yAp+45,"black",1,"butt");
	cDrawLine(cid,xBp,yAp+13,xBp,yAp+45,"black",1,"butt");	
	cDrawLine(cid,xCp,yAp+13,xCp,yAp+45,"black",1,"butt");
	cDrawLine(cid,xDp,yAp+13,xDp,yAp+45,"black",1,"butt");		

	
	// part (b) ----------------------------------------------------------------
	var y0= 300;
	var hp=  40;	// sag distance	
	
	var xAp= x0; 
	var yAp= y0;
	var xBp= xAp+Lp-20;
	var yBp= yAp+hp;
	var xDp= xAp+2*Lp+dfp;
	var yDp= yAp;		
	
	var xCp= xDp-Lp+20;
	var yCp= yAp+hp;

	// label
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText("(b)",xAp-120,yAp+5);	
	
	cDrawLine(cid,xAp,yAp,xDp,yDp,"gray",1,"butt");
	cDrawLine(cid,xAp,yAp,xBp,yBp,"black",2,"butt");
	cDrawLine(cid,xBp,yBp,xCp,yCp,"black",2,"butt");	
	cDrawLine(cid,xCp,yCp,xDp,yDp,"black",2,"butt");	
	
	cDrawDot(cid,xAp,yAp,3,"black");			
	cDrawDot(cid,xBp,yBp,3,"black");	
	cDrawDot(cid,xCp,yCp,3,"black");
	cDrawDot(cid,xDp,yDp,3,"black");	
		
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp-5,yAp-10);
	ctx.fillText("B",xBp-15,yBp+20);
	ctx.fillText("C",xCp+5,yCp+20);
	ctx.fillText("D",xDp-5,yDp-10);	
	
	// forces
	cDrawArrow(cid,xBp,yBp-60,xBp,yBp-2,"red",3,true);		// FL
	cDrawArrow(cid,xCp,yBp-60,xCp,yBp-2,"red",3,true);		// FL	
	ctx.fillStyle="red";
	ctx.fillText("FL",xBp+10,yBp-60);
	ctx.fillText("FL",xCp+10,yBp-60);		

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