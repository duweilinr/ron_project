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

	// set up
	var rwp2= 80;			// refrig width/2
	var rhp2= 160;			// refrig height/2
	var rtop= y0-2*rhp2;	// refrig top	
	
	// draw refrigerator
	cDrawLine(cid,x0-320,y0+1,x0+240,y0+1,"black",2,"butt");	// groundline
	cDrawRectxy(cid,x0-rwp2,rtop,x0+rwp2,y0,"gray",3,"lightgray");
	cDrawLine(cid,x0-rwp2,y0-60,x0+rwp2,y0-60,"black",1,"butt");
	cDrawLine(cid,x0,y0-60,x0,rtop,"black",1,"butt");	
	cDrawDot(cid,x0,y0-rhp2,3,"black")	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "C",x0-20,y0-rhp2);

	cDrawDoubleArrow(cid,x0-rwp2,rtop-20,x0+rwp2,rtop-20,"gray",2,true);
	ctx.font= "14px Arial";
	cDrawTextBG(cid," 3.2 ft ",x0-20,rtop-30);
	cDrawLine(cid,x0-rwp2,rtop-3,x0-rwp2,rtop-40,"black",1,"butt");
	cDrawLine(cid,x0+rwp2,rtop-3,x0+rwp2,rtop-40,"black",1,"butt");

	cDrawArrow(cid,x0,y0-rhp2,x0,y0-80,"red",3,true);
	ctx.fillStyle= "red";
	ctx.font= "bold 14px Arial";
	ctx.fillText("Wr",x0+10,y0-120);
	
	cDrawArrow(cid,x0+rwp2,y0+7,x0+10,y0+7,"green",3,true);
	ctx.fillStyle= "green";
	ctx.font= "bold 14px Arial";
	ctx.fillText("Fr",x0+rwp2+10,y0+20);
	
	cDrawArrow(cid,x0+rwp2-30,y0+80,x0+rwp2-30,y0+3,"green",3,true);
	ctx.fillStyle= "green";
	ctx.font= "bold 14px Arial";
	ctx.fillText("Nr",x0+rwp2-20,y0+40);

	// draw person
	cDrawLine(cid,x0-240,y0-8,x0-160,y0-220,"blue",10,"round");		// body line
	cDrawDot(cid,x0-150,y0-240,20,"orange");
	cDrawLine(cid,x0-196,y0-120,x0-150,y0-80,"blue",10,"round");	// thigh
	cDrawLine(cid,x0-150,y0-80,x0-160,y0-8,"blue",10,"round");		// shin

	cDrawLine(cid,x0-165,y0-200,x0-135,y0-180,"blue",10,"round");			// arm high
	cDrawLine(cid,x0-135,y0-180,x0-rwp2-5,y0-190,"lightgray",10,"round");	// arm high
	cDrawArrow(cid,x0-135,y0-180,x0-rwp2-5,y0-190,"red",3,true);
	ctx.fillStyle= "red";
	ctx.font= "bold 14px Arial";
	ctx.fillText("P/2",x0-rwp2-50,y0-200);	
	cDrawLine(cid,x0-165,y0-200,x0-135,y0-160,"blue",10,"round");			// arm low
	cDrawLine(cid,x0-135,y0-160,x0-rwp2-5,y0-170,"lightgray",10,"round");	// arm low
	cDrawArrow(cid,x0-135,y0-160,x0-rwp2-5,y0-170,"red",3,true);	
	ctx.fillText("P/2",x0-rwp2-50,y0-140);		

	cDrawLine(cid,x0-160,y0-4,x0-135,y0-4,"black",8,"round");		// front foot
	cDrawLine(cid,x0-240,y0-4,x0-215,y0-4,"black",8,"round");		// back foot

	cDrawDoubleArrow(cid,x0-rwp2-20,y0,x0-rwp2-20,y0-170,"gray",2,true);
	ctx.font= "14px Arial";
	cDrawTextBG(cid,"h",x0-rwp2-25,y0-90);

	cDrawDoubleArrow(cid,x0+rwp2+20,y0,x0+rwp2+20,y0-rhp2,"gray",2,true);
	ctx.font= "14px Arial";
	cDrawTextBG(cid,"3 ft",x0+rwp2+10,y0-rhp2/2-10);
	cDrawLine(cid,x0+rwp2+3,y0-rhp2,x0+rwp2+30,y0-rhp2,"black",1,"butt");	
	
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
/*
	// extract values from ivcode
	var stmt= ivcode.split(";");
	var val=  [];
	for (var i=0; i<stmt.length-1; i++) {
		var list= stmt[i].split("=");
		val[i]=   list[1];
	}
	var F1m= Number(val[0])*0.5;
	var F1d= Number(val[1]);
	var F2m= Number(val[2])*0.5;
	var F2d= Number(val[3]);
	
	// draw the forces
	var F1x= F1m*Math.cos(F1d*Math.PI/180);
	var F1y= F1m*Math.sin(F1d*Math.PI/180);	
	var F2x= F2m*Math.cos(F2d*Math.PI/180);
	var F2y= F2m*Math.sin(F2d*Math.PI/180);		
	
	cDrawArrow(cid,x0,y0,x0+F1x,y0-F1y,"red",3,true);	
	cDrawArrow(cid,x0,y0,x0+F2x,y0-F2y,"red",3,true); */
	
}