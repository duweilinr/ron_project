// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 250;
	var xydata= {x0:x0,xmin:x0-350,xmax:x0+350,
				 y0:y0,ybot:y0+100,ytop:y0-300 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);


	//	Draw structure
	var A= {x:x0-100,y:y0+100};
	var B= {x:x0, y:y0-100};

	// draw axes	
	cDrawArrow(cid,x0,y0+180,x0,y0-180,"grey",1,true);  	//z-axis
	cDrawArrow(cid,B.x-200,y0,B.x+200,y0,"grey",1,true);	//y-axis
	cDrawArrow(cid,x0,y0,x0-180,y0+180,"grey",1,true);		//x-axis
	ctx.font="normal 14px Arial";
	ctx.fillStyle="gray";
	ctx.fillText("Z", x0-20,y0-170);
	ctx.fillText("Y", x0+170,y0+20);
	ctx.fillText("X", x0-180,y0+155);	
	
	// draw the post sleeve and rod
	cDrawLine(cid,x0-60,y0,x0-20,y0,"black",6,"round");	
	cDrawLine(cid,x0-20,y0,x0+20,y0,"gray",12,"round");		// sleeve
	cDrawLine(cid,x0+22,y0,x0+60,y0,"black",6,"round");
	cDrawLine(cid,x0-26,y0,x0-26,y0-8,"black",4,"round");
	cDrawLine(cid,x0+25,y0,x0+25,y0-8,"black",4,"round");
	
	// draw the backplate at B
	var xs= B.x-20;
	var xe= B.x+20;
	var ys= B.y-20;
	var ye= B.y+20;	
	cDrawRectxy(cid,xs,ys,xe,ye,"gray",2,"lightgray");
	cDrawLine(cid,xs+2,ys-2,xe+2,ys-2,"gray",2,"round");
	cDrawLine(cid,xe+2,ys-2,xe+2,ye-2,"gray",2,"round");
	
	cDrawLine(cid,A.x,A.y,x0,y0,"gray",12,"round");		// post
	cDrawLine(cid,A.x,A.y,B.x,B.y,"blue",3,"round");	// cord
	
	//	Draw forces
	cDrawArrow(cid,A.x,A.y+4,A.x,A.y+80,"red",4,true);
	cDrawArrow(cid,A.x-70,A.y,A.x-8,A.y,"red",4,true);	
	ctx.fillStyle="red";
	ctx.font= "normal 16px Arial";
	ctx.fillText("W",A.x+10,A.y+60);
	ctx.fillText("F",A.x-50,A.y-15);

	cDrawDot(cid,A.x,A.y,4,"black");
	cDrawDot(cid,B.x,B.y,4,"black");	

	ctx.fillText("A (d,0,0)",A.x+15,A.y+10);
	ctx.fillText("B (0,0,h)",B.x+25,B.y+4);
	ctx.fillText("O",x0+8,y0+25);	

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
	//cDrawGrid1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
}