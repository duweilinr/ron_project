// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 300;
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
	var a=  200;
	var b2= 100;	// b/2
	var c=  160;
	
	var A= {x:x0-180,y:y0+40};
	var B= {x:x0-b2,y:y0-c};
	var C= {x:x0+b2,y:y0-c};
	var D= {x:x0,y:y0};		
	
	// draw wall as background
	cDrawRectxy(cid,B.x-40,B.y-30,C.x+40,D.y+30,"lightgray",1,"azure");
	
	// draw axes	
	cDrawArrow(cid,x0,y0+80,x0,y0-240,"grey",1,true); 			//z-axis
	cDrawArrow(cid,B.x-140,y0,C.x+140,y0,"grey",1,true); 		//y-axis
	cDrawArrow(cid,x0+100,y0-100,x0-180,y0+180,"grey",1,true); 	//x-axis
	ctx.font="normal 16px Arial";
	ctx.fillStyle="gray";
	ctx.fillText("Z", x0-20,y0-210);
	ctx.fillText("Y", x0+190,y0+20);
	ctx.fillText("X", x0-180,y0+160);

	// draw force and label it
	cDrawArrow(cid,A.x,A.y+4,A.x+80,A.y+80,"red",4,true);
	ctx.font="bold 16px Arial";	
	ctx.fillStyle="red";	
	ctx.fillText("F= Fmag*(0i +0.714j -0.714k)",A.x+90,A.y+90);
	
	// draw the truss
	cDrawDot(cid,B.x,B.y,10,"black");
	cDrawDot(cid,B.x,B.y,7,"white");		
	cDrawLine(cid,C.x-10,C.y-6,C.x+10,C.y-6,"black",4,"round");
	cDrawLine(cid,C.x-10,C.y+6,C.x+10,C.y+6,"black",4,"round");
	cDrawLine(cid,A.x,A.y,B.x,B.y,"gray",6,"round");
	cDrawLine(cid,A.x,A.y,C.x,C.y,"gray",6,"round");
	cDrawLine(cid,C.x,C.y,B.x,B.y,"gray",4,"round");
	cDrawLine(cid,D.x,D.y,B.x,B.y,"gray",4,"round");
	cDrawLine(cid,C.x,C.y,D.x,D.y,"gray",4,"round");
	cDrawLine(cid,D.x,D.y,A.x,A.y,"gray",6,"round");
	
	cDrawDot(cid,A.x,A.y,4,"black");
	cDrawDot(cid,B.x,B.y,4,"black");	
	cDrawDot(cid,C.x,C.y,4,"black");	
	cDrawDot(cid,D.x,D.y,4,"black");		

	ctx.fillText("A (a,0,c)",A.x-70,A.y);
	ctx.fillText("B (0,-b/2,c)",B.x-100,B.y);
	ctx.fillText("C (0,b/2,c)",C.x+20,C.y);
	ctx.fillText("D (0,0,0)",D.x+10,D.y+20);		

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