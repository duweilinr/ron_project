// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 150;
	var y0= 300;
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
	var rp=  60;
	var Rp=  80;
	var wp=  300;
	var hp=  240;
	var xAp= x0+rp;
	var yAp= y0-rp;
	var xBp= x0+wp-rp;
	var yBp= y0-rp;
	var xCp= x0+wp/2;
	var yCp= y0-rp-Rp-25;	
	
	// truck bedframe
	cDrawLine(cid,x0-8,y0+4,x0+wp+8,y0+4,"gray",8,"butt");
	cDrawLine(cid,x0-4,y0+2,x0-4,y0-hp,"gray",8,"butt");			
	cDrawLine(cid,x0+wp+4,y0+2,x0+wp+4,y0-hp,"gray",8,"butt");
	
	// log ends
	cDrawDot(cid,xAp,yAp,rp,"brown");
	cDrawDot(cid,xAp,yAp,rp-10,"ivory");
	cDrawDot(cid,xAp,yAp,3,"black")
	cDrawDot(cid,xBp,yBp,rp,"brown");
	cDrawDot(cid,xBp,yBp,rp-10,"ivory");
	cDrawDot(cid,xBp,yBp,3,"black")	
	cDrawDot(cid,xCp,yCp,Rp,"brown");
	cDrawDot(cid,xCp,yCp,Rp-12,"ivory");
	cDrawDot(cid,xCp,yCp,3,"black")	
	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp-15,yAp-10);
	ctx.fillText("B",xBp-15,yBp-10);
	ctx.fillText("C",xCp-15,yCp-10);
	
	//ctx.fillText("D",xDp-4,yDp-20);
	//ctx.fillText("E",xEp-15,yEp+25);	

	// dimensions
	cDrawDoubleArrow(cid,x0,y0+30,x0+wp,y0+30,"black",1,true);	
	cDrawLine(cid,x0,y0+10,x0,y0+45,"black",1,"butt");	
	cDrawLine(cid,x0+wp,y0+10,x0+wp,y0+45,"black",1,"butt");	
	cDrawTextBG(cid," 6 ft ",x0+wp/2-10,y0+22);

	// radii
	cDrawArrow(cid,xAp,yAp,xAp+rp,yAp,"black",2,true);		// r A
	cDrawArrow(cid,xBp,yBp,xBp+rp,yBp,"black",2,true);		// r B
	cDrawArrow(cid,xCp,yCp,xCp+Rp,yCp,"black",2,true);		// R C
	cDrawTextBG(cid," r ",xAp+rp/2-10,yAp-8);
	cDrawTextBG(cid," r ",xBp+rp/2-10,yBp-8);	
	cDrawTextBG(cid," R ",xCp+Rp/2-10,yCp-8);		

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