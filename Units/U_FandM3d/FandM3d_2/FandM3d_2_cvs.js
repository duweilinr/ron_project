// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 200;
	var y0= 250;
	var xydata= {x0:x0,xmin:x0-300,xmax:x0+400,
				 y0:y0,ybot:y0+200,ytop:y0-200 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
	// draw 3d axes
	cDrawArrow(cid,x0+150, y0-90, x0-100,y0+60, "gray",1,true);	// x axis
	cDrawArrow(cid,x0-60,y0-20, x0+300,y0+100,"gray",1,true);	// y axis
	cDrawArrow(cid,x0,   y0+100,x0,    y0-180,"gray",1,true);	// z axis
	ctx.fillStyle="gray";
	ctx.font="bold 14px Arial";
	ctx.fillText("X",x0-115,y0+60);
	ctx.fillText("Y",x0+275,y0+120);
	ctx.fillText("Z",x0-20, y0-160);	

	//	Draw structure
	cDrawLine(cid,x0-30,y0-5, x0+30,y0-40,"silver",20,"round");
	cDrawLine(cid,x0-30,y0+15, x0+30,y0-20,"silver",20,"round");
	cDrawLine(cid,x0-30,y0+35, x0+30,y0,"silver",20,"round");
	cDrawLine(cid,x0-30,y0+35, x0-30,y0-5,"silver",20,"round");
	cDrawLine(cid,x0+30,y0, x0+30,y0-40,"silver",20,"round");	
	
	cDrawLine(cid,x0,y0,x0+180,y0+60,"lightblue",20,"round");
	cDrawLine(cid,x0+180,y0+60,x0+300,y0-30,"lightblue",20,"round");
	cDrawLine(cid,x0+300,y0-30,x0+300,y0-120,"lightblue",20,"round");

	cDrawDot(cid,x0,y0,3,"gray");			// A
	cDrawDot(cid,x0+180,y0+60,3,"gray");	// B	
	cDrawDot(cid,x0+300,y0-30,3,"gray");	// C
	cDrawDot(cid,x0+300,y0-120,3,"gray");	// D	
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",x0-25,y0+5);
	ctx.fillText("B",x0+180,y0+90);
	ctx.fillText("C",x0+310,y0-20);	
	ctx.fillText("D",x0+310,y0-120);
	
//  Draw guidelines and force
	cDrawLine(cid,x0+10,y0-5,x0+185,y0-77,"red",0.6,"round");
	//cDrawLine(cid,x0,y0,x0+300,y0-30,"black",0.6,"round");	
	cDrawArrow(cid,x0+295,y0-120,x0+190,y0-79,"red",3,true);	// force FD
	ctx.fillStyle="red";
	ctx.fillText("FD",x0+200,y0-100);		

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