// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 150;
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
	var dp= 140;
	var ep= 200;
	var hp= 140;

	var xAp= x0;
	var yAp= y0;
	var xBp= xAp+dp+ep;
	var yBp= yAp;
	var xCp= xAp+dp/2;
	var yCp= yAp-hp/2;
	var xDp= xAp+dp;
	var yDp= yAp-hp;
	var xEp= xDp+ep/2;
	var yEp= yAp-hp/2;

	// frame
	cDrawLine(cid,xAp,yAp,xDp,yDp,"gray",20,"round");
	//cDrawLine(cid,xAp,yAp,xDp,yDp,"lightgray",18,"round");			
	cDrawLine(cid,xBp,yBp,xDp,yDp,"gray",20,"round");
	//cDrawLine(cid,xBp,yBp,xDp,yDp,"lightgray",18,"round");	
	
	// support at A
	cDrawDot(cid,xAp,yAp,14,"white");
	cDrawLine(cid,xAp,yAp,xAp,yAp+12,"gray",24,"butt");	
	cDrawDot(cid,xAp,yAp,12,"gray");	
	cDrawLine(cid,xAp-20,yAp+14,xAp+20,yAp+14,"gray",4,"butt");
	cDrawDot(cid,xAp-10,yAp+18,4,"gray");		
	cDrawDot(cid,xAp+10,yAp+18,4,"gray");
	cDrawLine(cid,xAp-25,yAp+24,xAp+25,yAp+24,"black",3,"butt");
	cDrawDot(cid,xAp,yAp,6,"white");
	cDrawDot(cid,xAp,yAp,4,"black");
	
	// support at B
	cDrawDot(cid,xBp,yBp,14,"white");	
	cDrawLine(cid,xBp,yBp,xBp,yBp+12,"gray",24,"butt");
	cDrawDot(cid,xBp,yBp,12,"gray");	
	cDrawLine(cid,xBp-20,yBp+17,xBp+20,yBp+17,"gray",10,"butt");
	
	cDrawLine(cid,xBp-25,yAp+24,xBp+25,yAp+24,"black",3,"butt");
	cDrawDot(cid,xBp,yBp,6,"white");
	cDrawDot(cid,xBp,yBp,4,"black");
	
	// marker points
	cDrawDot(cid,xCp,yCp,2,"black");
	cDrawDot(cid,xDp,yDp,2,"black");
	cDrawDot(cid,xEp,yEp,2,"black");	
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp+25,yAp+10);
	ctx.fillText("B",xBp+25,yBp+10);
	ctx.fillText("C",xCp+5,yCp+25);
	ctx.fillText("D",xDp-4,yDp-20);
	ctx.fillText("E",xEp-15,yEp+25);	

	// dimensions
	cDrawDoubleArrow(cid,xAp,yAp+40,xDp,yAp+40,"black",1,true);	
	cDrawDoubleArrow(cid,xBp,yAp+40,xDp,yAp+40,"black",1,true);
	cDrawLine(cid,xAp,yAp+20,xAp,yAp+55,"black",1,"butt");	
	cDrawLine(cid,xDp,yDp+20,xDp,yAp+55,"black",1,"butt");	
	cDrawLine(cid,xBp,yBp+20,xBp,yBp+55,"black",1,"butt");
	cDrawTextBG(cid," d ",xAp+dp/2-9,yAp+30);
	cDrawTextBG(cid," e ",xDp+ep/2-9,yAp+30);		
		
	cDrawDoubleArrow(cid,xAp-30,yAp,xAp-30,yDp,"black",1,true);	
	cDrawLine(cid,xAp-20,yAp,xAp-50,yAp,"black",1,"butt");	
	cDrawLine(cid,xDp-20,yDp,xAp-50,yDp,"black",1,"butt");
	cDrawTextBG(cid,"h",xAp-35,yCp-5);			

	// forces
	cDrawArrow(cid,xCp-65,yCp,xCp-5,yCp,"red",3,true);		// F1
	cDrawArrow(cid,xEp,yEp-65,xEp,yEp-5,"red",3,true);		// F2
	ctx.fillStyle="red";
	ctx.fillText("F1",xCp-65,yCp-5);
	ctx.fillText("F2",xEp+10,yEp-60);	

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