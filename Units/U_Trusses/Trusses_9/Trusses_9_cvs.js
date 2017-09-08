// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 250;
	var y0= 350;
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
	var dp= 260;
	var hp= 180;

	var xAp= x0;
	var yAp= y0;
	var xBp= xAp;
	var yBp= yAp-hp;
	var xCp= xAp+dp/2;
	var yCp= yAp-hp/2;
	var xDp= xAp+dp;
	var yDp= yAp-hp;
	var xEp= xAp+dp;
	var yEp= yAp;	

	// frame
	cDrawLine(cid,xAp,yAp,xBp,yBp,"gray",10,"round");	
	cDrawLine(cid,xAp,yAp,xDp,yDp,"gray",10,"round");
	cDrawLine(cid,xBp,yBp,xEp,yEp,"gray",10,"round");
	cDrawLine(cid,xBp,yBp,xDp,yDp,"gray",10,"round");	
	cDrawLine(cid,xDp,yDp,xEp,yEp,"gray",10,"round");
	
	// support at A
	cDrawDot(cid,xAp,yAp,14,"white");
	cDrawLine(cid,xAp,yAp,xAp-15,yAp+15,"gray",24,"butt");	
	cDrawDot(cid,xAp,yAp,12,"gray");	
	cDrawLine(cid,xAp-30,yAp,xAp,yAp+30,"black",4,"butt");	
	cDrawDot(cid,xAp-29,yAp+12,6,"gray");
	cDrawDot(cid,xAp-13,yAp+27,6,"gray");
	cDrawLine(cid,xAp-53,yAp,xAp,yAp+53,"black",5,"butt");	// ground
	
	// support at E
	cDrawDot(cid,xEp,yEp,14,"white");	
	cDrawLine(cid,xEp,yEp,xEp,yEp+18,"gray",24,"butt");
	cDrawDot(cid,xEp,yEp,12,"gray");	
	cDrawLine(cid,xEp-30,yEp+20,xEp+30,yEp+20,"black",4,"butt");
	cDrawLine(cid,xEp-30,yEp+28,xEp+30,yEp+28,"gray",12,"butt");	
	
	// truss pins
	cDrawDot(cid,xAp,yAp,6,"white");
	cDrawDot(cid,xAp,yAp,4,"black");	
	cDrawDot(cid,xBp,yBp,4,"black");
	cDrawDot(cid,xCp,yCp,4,"black");
	cDrawDot(cid,xDp,yDp,4,"black");
	cDrawDot(cid,xEp,yEp,6,"white");	
	cDrawDot(cid,xEp,yEp,4,"black");
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp+15,yAp+6);
	ctx.fillText("B",xBp-20,yBp+15);
	ctx.fillText("C",xCp-5,yCp-13);	
	ctx.fillText("D",xDp+10,yDp-10);
	ctx.fillText("E",xEp-28,yEp+6);	

	// dimensions
	cDrawDoubleArrow(cid,xBp,yBp-25,xDp,yDp-25,"black",1,true);
	cDrawTextBG(cid," 8' ",xBp+dp/2-7,yBp-33);
	cDrawLine(cid,xBp,yBp-5,xBp,yBp-40,"black",1,"round");	

	cDrawDoubleArrow(cid,xEp+30,yEp,xEp+30,yDp,"black",1,true);
	cDrawTextBG(cid,"  ",xEp+25,yEp-hp/2-10);
	cDrawTextBG(cid,"  ",xEp+25,yEp-hp/2+2);	
	cDrawTextBG(cid,"6'",xEp+25,yEp-hp/2-4);	
	cDrawLine(cid,xEp+15,yEp,xEp+45,yEp,"black",1,"round");
	cDrawLine(cid,xDp+8,yDp,xDp+45,yDp,"black",1,"round");

	cDrawArc3(cid,xAp,yAp+55,65,180,225,"cw","black",1,"none",true,true);
	cDrawLine(cid,xAp-90,yAp+55,xAp,yAp+55,"black",1,"round");	
	cDrawTextBG(cid,"a",xAp-65,yAp+22);	

	cDrawArc3(cid,xBp,yBp,65,180,225,"cw","black",1,"none",true,true);
	cDrawLine(cid,xBp-90,yBp,xBp-10,yBp,"black",1,"round");	
	cDrawTextBG(cid,"b",xBp-65,yBp-33);	
	
	// forces
	cDrawArrow(cid,xBp-60,yBp-60,xBp-5,yBp-5,"red",3,true);	// B	
	cDrawArrow(cid,xCp,yCp+5,xCp,yCp+45,"red",3,true);		// C
	cDrawArrow(cid,xDp,yDp-60,xDp,yDp-5,"red",3,true);		// D
	
	ctx.fillStyle="red";
	ctx.fillText("FB",xBp-30,yBp-44);
	ctx.fillText("FC",xCp-20,yCp+65);
	ctx.fillText("FD",xDp+8,yDp-35);
	
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