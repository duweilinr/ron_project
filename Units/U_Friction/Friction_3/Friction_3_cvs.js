// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 400;
	var xydata= {x0:x0,xmin:x0-150,xmax:x0+550,
				 y0:y0,ybot:y0+250,ytop:y0-150 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	// set up
	var wp2=  80;			// frig width/2
	var htp=  320;			// frig height
	var rtop= y0-htp;		// location frig top
	var hp=   y0-200;		// location push	
	
	// draw x and y axes
	cDrawArrow(cid,x0-wp2-160,y0,x0+wp2+160,y0,"gray",1,true);	// x axis
	cDrawArrow(cid,x0,y0+50,x0,rtop-60,"gray",1,true);			// y axis
	ctx.fillStyle="black";
	ctx.font="14px Arial";
	ctx.fillText( "X",x0+wp2+140,y0+20);		// y value true pos top
	ctx.fillText( "Y",x0-20,rtop-40);
	
	// draw fixed body
	cDrawRectxy(cid,x0-wp2,rtop,x0+wp2,y0-2,"gray",3,"silver");
	cDrawLine(cid,x0-wp2,rtop+60,x0+wp2,rtop+60,"black",1,"butt");
	cDrawLine(cid,x0-wp2,y0-20,x0+wp2,y0-20,"black",1,"butt");
	cDrawLine(cid,x0+wp2-15,rtop+20,x0+wp2-15,rtop+40,"gray",6,"round"); // handle top
	cDrawLine(cid,x0+wp2-15,y0-htp/2+20,x0+wp2-15,y0-htp/2-20,"gray",6,"round"); // handle bot	
	cDrawLine(cid,x0-wp2-100,y0,x0+wp2+100,y0,"black",3,"round");	// ground line
	
	cDrawDot(cid,x0,y0-htp/2,3,"black");	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText( "C",x0-20,y0-htp/2);
	
	cDrawArrow(cid,x0,y0-htp/2,x0,y0-80,"red",3,true);		// W
	cDrawArrow(cid,x0-wp2-60,hp,x0-wp2,hp,"red",3,true);	// P	
	ctx.fillStyle= "red";
	ctx.font= "bold 14px Arial";
	ctx.fillText("W",x0+10,y0-120);
	ctx.fillText("P",x0-wp2-40,hp-10);

	// dimension lines and guidelines
	cDrawDoubleArrow(cid,x0-wp2,rtop-20,x0+wp2,rtop-20,"gray",2,true);
	ctx.font= "14px Arial";
	cDrawTextBG(cid," 3.2 ft ",x0-20,rtop-30);
	cDrawLine(cid,x0-wp2,rtop-3,x0-wp2,rtop-30,"gray",1,"butt");
	cDrawLine(cid,x0+wp2,rtop-3,x0+wp2,rtop-30,"gray",1,"butt");

	cDrawDoubleArrow(cid,x0-wp2-30,y0,x0-wp2-30,hp,"gray",2,true);
	ctx.font= "14px Arial";
	cDrawTextBG(cid,"4 ft",x0-wp2-40,y0-hp/2-10);
	
	cDrawArrow(cid,x0+60,y0+80,x0+60,y0+3,"green",3,true);	// N
	cDrawArrow(cid,x0+wp2,y0+5,x0+20,y0+5,"green",3,true);	// F
	ctx.font= "bold 14px Arial";
	ctx.fillStyle= "green";
	ctx.fillText("N",x0+65,y0+60);
	ctx.fillText("F",x0+wp2+5,y0+20);	
	
	cDrawDoubleArrow(cid,x0,y0+30,x0+60,y0+30,"gray",2,true);	
	cDrawTextBG(cid,"S",x0+24,y0+21);	

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