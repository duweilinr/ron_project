// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 240;
	var xydata= {x0:x0,xmin:x0-300,xmax:x0+300,
				 y0:y0,ybot:y0+200,ytop:y0-200 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	var A= {x:x0,y:y0};
	var B= {x:x0-80,y:y0+80};
	var C= {x:x0+120,y:y0+40};
	var D= {x:x0,y:y0-140};	
	
	ctx.font="normal 14px Arial";
	ctx.fillStyle="black";	
	cDrawDot(cid,A.x,A.y,4,"gray");
	cDrawDot(cid,B.x,B.y,4,"gray");	
	cDrawDot(cid,C.x,C.y,4,"gray");
	cDrawDot(cid,D.x,D.y,4,"gray");	
		
	cDrawArrow(cid,x0,y0+150,x0,y0-220,"grey",1.5,true); //z-axis
	cDrawArrow(cid,x0-225,y0,x0+225,y0,"grey",1.5,true); //y-axis
	cDrawArrow(cid,x0+100,y0-100,x0-125,y0+125,"grey",1.5,true); //x-axis
	ctx.font="normal 14px Arial";
	ctx.fillStyle="gray";
	ctx.fillText("Z", x0-25,y0-190);
	ctx.fillText("Y", x0+200,y0+25);
	ctx.fillText("X", x0-145,y0+120);

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
	
	ctx.fillText("A",A.x-18,A.y-6);
	ctx.fillText("B(6,0,0)",B.x-60,B.y+5);
	ctx.fillText("C(3,6,0)",C.x+10,C.y+10);
	ctx.fillText("D(0,0,8)",D.x+10,D.y);	
		
	//	Draw forces
	cDrawArrow(cid,A.x+40,A.y-40,A.x,A.y,"red",3,true);
	cDrawArrow(cid,B.x,B.y,B.x+70,B.y,"red",3,true);
	cDrawArrow(cid,C.x,C.y,C.x,C.y-70,"red",3,true);
	ctx.fillStyle="red";	
	ctx.fillText("FA",A.x+10,A.y-35);
	ctx.fillText("FB",B.x+50,B.y+20);
	ctx.fillText("FC",C.x+10,C.y-60);
	
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