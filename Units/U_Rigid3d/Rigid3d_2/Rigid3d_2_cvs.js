// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 250;
	var y0= 150;
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
	var A= {x:x0,y:y0};
	var B= {x:x0-100,y:y0+100};
	var C= {x:x0+60, y:y0+100};
	var D= {x:x0+160,y:y0};

	// draw axes	
	cDrawArrow(cid,x0,y0,x0,y0-120,"grey",1,true); //z-axis
	cDrawArrow(cid,x0-140,y0,x0+240,y0,"grey",1,true); //y-axis
	cDrawArrow(cid,x0+120,y0-120,x0-160,y0+160,"grey",1,true); //x-axis
	ctx.font="normal 14px Arial";
	ctx.fillStyle="gray";
	ctx.fillText("Z", x0-20,y0-100);
	ctx.fillText("Y", x0+210,y0+20);
	ctx.fillText("X", x0-155,y0+135);

	// draw plate as trapezoid
	var col= "lightblue";	
	cDrawTrapezoid(cid,B,C,D,A,col);
	var E= {x:x0-100,y:y0+110};
	var F= {x:x0+60, y:y0+110};
	var G= {x:x0+160,y:y0+10};
	cDrawTrapezoid(cid,E,F,C,B,col);
	cDrawTrapezoid(cid,F,G,D,C,col);
/*	
	cDrawDot(cid,A.x,A.y,3,"black");
	cDrawDot(cid,B.x,B.y,3,"black");	
	cDrawDot(cid,C.x,C.y,3,"black");	
	cDrawDot(cid,D.x,D.y,3,"black"); */

	cDrawDoubleArrow(cid,B.x,B.y+30,C.x,C.y+30,"black",1,true);
	cDrawTextBG(cid," 5' ",(B.x+C.x)/2-5,B.y+21);
	cDrawLine(cid,B.x,B.y+12,B.x,B.y+45,"black",1,"round");
	cDrawLine(cid,C.x,C.y+12,C.x,C.y+45,"black",1,"round");
	cDrawDoubleArrow(cid,C.x,C.y+30,D.x,D.y+30,"black",1,true);	
	cDrawTextBG(cid," 6' ",(C.x+D.x)/2-5,(C.y+D.y)/2+20);
	cDrawLine(cid,D.x,D.y+12,D.x,D.y+45,"black",1,"round");
	
	
	cDrawArrow(cid,A.x,A.y,A.x,A.y-50,"red",3,true);	// F4
	cDrawArrow(cid,B.x,B.y-50,B.x,B.y,"red",3,true);	// F3
	cDrawArrow(cid,A.x,A.y,A.x+45,A.y-45,"red",3,true);	// F1
	cDrawArrow(cid,C.x+30,C.y+40,C.x,C.y,"red",3,true);	// F2
	ctx.font="normal 16px Arial";
	ctx.fillStyle="red";
	ctx.fillText("F1= -F1m*i", x0+60,y0-40);
	ctx.fillText("F2= F2m*(-0.5*i-0.25*j+0.86*k)", C.x+20,C.y+60);
	ctx.fillText("F3= -F3m*k", B.x-50,B.y-60);
	ctx.fillText("F4= F3m*k", x0-50,y0-55);		

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