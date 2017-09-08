// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 300;
	var y0= 250;
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
	var A= {x:x0+40,y:y0+80};
	var B= {x:x0+200,y:y0};
	var C= {x:x0+100,y:y0-160};
	var D= {x:x0,y:y0};		
	
	// draw wall background
	cDrawRectxy(cid,D.x-100,C.y-40,B.x+100,B.y+200,"lightgray",1,"azure");	
	
	// draw axes	
	cDrawArrow(cid,x0,y0+200,x0,y0-200,"grey",1,true); //z-axis
	cDrawArrow(cid,x0-100,y0,x0+300,y0,"grey",1,true); //y-axis
	cDrawArrow(cid,x0+180,y0-180,x0-140,y0+140,"grey",1,true); //x-axis
	ctx.font="normal 14px Arial";
	ctx.fillStyle="black";
	ctx.fillText("Z", x0-20,y0-180);
	ctx.fillText("Y", x0+280,y0+20);
	ctx.fillText("X", x0-145,y0+120);

	//	Draw forces
	cDrawArrow(cid,A.x,A.y+4,A.x,A.y+80,"red",3,true);	
	ctx.fillStyle="red";	
	ctx.fillText("W",A.x+8,A.y+50);

	cDrawDot(cid,C.x,C.y,10,"black");
	cDrawDot(cid,C.x,C.y,7,"white");

	// draw the truss
	cDrawLine(cid,A.x,A.y,B.x,B.y,"gray",5,"round");
	cDrawLine(cid,A.x,A.y,C.x,C.y,"gray",5,"round");
	cDrawLine(cid,C.x,C.y,B.x,B.y,"gray",5,"round");
	cDrawLine(cid,D.x,D.y,B.x,B.y,"gray",5,"round");
	cDrawLine(cid,C.x,C.y,D.x,D.y,"gray",5,"round");
	cDrawLine(cid,D.x,D.y,A.x,A.y,"gray",5,"round");
	
	cDrawDot(cid,A.x,A.y,4,"black");
	cDrawDot(cid,B.x,B.y,4,"black");	
	cDrawDot(cid,C.x,C.y,4,"black");	
	cDrawDot(cid,D.x,D.y,4,"black");		

	ctx.fillText("A(d,1.5,0)",A.x+10,A.y+10);
	ctx.fillText("B(0,3,0)",B.x,B.y+20);
	ctx.fillText("C(0,1.5,h)",C.x-78,C.y+5);
	ctx.fillText("D(0,0,0)",D.x-60,D.y-10);

	ctx.font="normal 16px Arial";
	ctx.fillText("wall",B.x+40,B.y+160);	

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