// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 300;
	var y0= 350;
	var xydata= {x0:x0,xmin:x0-250,xmax:x0+450,
				 y0:y0,ybot:y0+100,ytop:y0-300 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
		
//	Draw structure
	cDrawArrow(cid,x0,y0,x0,y0-200,"darkgray",20,false);			// post
	cDrawArrow(cid,x0,y0-200,x0+150,y0-230,"darkgray",15,false);	// boom	
	cDrawRectxy(cid,x0-80,y0-15,x0+15,y0+15,"black","2","gray");	// base
	cDrawArrow(cid,x0+75,y0-215,x0+75,y0-160,"brown",4,false);		// cable C1
	cDrawArrow(cid,x0+150,y0-230,x0+150,y0-160,"brown",4,false);	// cable D2
	cDrawRectxy(cid,x0+65,y0-160,x0+85,y0-110,"black","2","lightblue");	//load1
	cDrawRectxy(cid,x0+130,y0-170,x0+170,y0-120,"black","2","lightblue");//load2	
	
	cDrawDot(cid,x0,y0,3,"black");			// A
	cDrawDot(cid,x0,y0-200,3,"black");		// B	
	cDrawDot(cid,x0+75,y0-215,3,"black");	// C
	cDrawDot(cid,x0+150,y0-230,3,"black");	// D	
	
	cDrawArrow(cid,x0,y0-200,x0-120,y0-200,"gray",1,false);		// angle aBD
	cDrawArrow(cid,x0,y0-200,x0-120,y0-180,"gray",1,false);		// angle aBD	
	cDrawArc3(cid,x0,y0-200,110,170,180,"cw","black",1,"none",true,true);

// Draw the forces	
	cDrawArrow(cid,x0+75,y0-133,x0+75,y0-80,"red",3,true);		// W1
	cDrawArrow(cid,x0+150,y0-145,x0+150,y0-70,"red",3,true);	// W2	
	
//	Labels
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",x0+20,y0-5);
	ctx.fillText("B",x0-15,y0-210);
	ctx.fillText("C",x0+65,y0-225);	
	ctx.fillText("D",x0+140,y0-240);
	ctx.fillText("m1",x0+40,y0-130);
	ctx.fillText("m2",x0+175,y0-145);
	ctx.fillText("aBD",x0-150,y0-185);
	
	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText("W1",x0+80,y0-68);
	ctx.fillText("W2",x0+155,y0-58);	

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

	// extract values from ivcode


	// draw the force

	
}