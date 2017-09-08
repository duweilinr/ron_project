// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 150;
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
	Sx=    x0;
	Sy=    y0;
	Ex=    x0;
	Ey=    y0+200;
	Hx=    x0-200;
	Hy=    y0+200;
	
	cDrawArrow(cid,Sx-240,Sy,Sx+240,Sy,"gray",1.5,true);	// x axis
	cDrawArrow(cid,Sx,Sy+270,Sx,Sy-100,"gray",1.5,true);	// y axis
	ctx.fillStyle="gray";
	ctx.font="bold 14px Arial";
	ctx.fillText("X",Sx+220,Sy+20);
	ctx.fillText("Y",Sx-20,Sy-80);	
	
//	Draw structure
	cDrawLine(cid,Sx-60,Sy,Sx+60,Sy,"gray",6,"butt");	// base
	cDrawDot(cid,Sx,Sy,35,"silver");
	cDrawDot(cid,Sx,Sy,24,"brown");	
	
	cDrawLine(cid,Sx,Sy,Ex,Ey-8,"orange",40,"round"); 	// upper
	cDrawLine(cid,Ex,Ey,Hx,Hy,"orange",32,"round"); 	// lower	
	cDrawDot(cid,Hx,Hy,30,"black");						// weight
	cDrawDot(cid,Ex,Ey,14,"brown");						// elbow	
	cDrawDot(cid,Ex,Ey,10,"orange");			
	
	cDrawDot(cid,Sx,Sy,2,"black");
	cDrawDot(cid,Ex,Ey,2,"black");
	cDrawDot(cid,Hx,Hy,2,"white");

	// draw the force
	cDrawArrow(cid,Hx,Hy+30,Hx,Hy+110,"red",3,true);
	ctx.fillStyle= "red";
	ctx.font= "bold 14px Arial";
	ctx.fillText("W",Hx-20,Hy+80);
	
	// dimensioning
	cDrawDoubleArrow(cid,Hx,Hy+50,Ex,Ey+50,"black",1,true);

	cDrawDoubleArrow(cid,Ex+60,Ey,Sx+60,Sy,"black",1,true);
	cDrawLine(cid,Ex+15,Ey,Ex+80,Ey,"black",1,"butt");
	
	ctx.fillStyle="black";
	ctx.font="14px Arial";
	cDrawTextBG(cid," d1 ",(Hx+Ex)/2-10,Ey+42);
	cDrawTextBG(cid,"d2",Ex+52,(Ey+Sy)/2);

	cDrawTextBG(cid,"Shoulder",Sx+25,Sy-35);
	cDrawTextBG(cid,"Elbow",Ex+15,Ey+15);
	cDrawTextBG(cid,"Hand",Hx,Hy-50);	

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
	cDrawArrow(cid,x0,y0,x0+F2x,y0-F2y,"red",3,true);  */		
}