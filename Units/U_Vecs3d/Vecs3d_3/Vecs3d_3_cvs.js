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

	cDrawArrow(cid,x0,y0+150,x0,y0-220,"grey",1.5,true); //z-axis
	cDrawArrow(cid,x0-225,y0,x0+225,y0,"grey",1.5,true); //y-axis
	cDrawArrow(cid,x0+100,y0-100,x0-125,y0+125,"grey",1.5,true); //x-axis
	ctx.font="normal 14px Arial";
	ctx.fillStyle="gray";
	ctx.fillText("Z", x0-25,y0-190);
	ctx.fillText("Y", x0+200,y0+25);
	ctx.fillText("X", x0-145,y0+120);

//	Draw forces and angles
	cDrawForce2(cid,x0,y0,x0+180,y0-150,3,"red","round",12);	// F1
	cDrawArrow(cid,x0,y0,x0+130,y0+40,"grey",1,false);			// F2 proj xy
	cDrawArrow(cid,x0+130,y0+40,x0+130,y0+100,"grey",1,false);	// F2 proj z
	cDrawArrow(cid,x0+130,y0+40,x0+163,y0,"grey",1,false);		// F2 proj 3	
	cDrawForce2(cid,x0,y0,x0+130,y0+100,3,"red","round",12);	// F2	

	cDrawDot(cid,x0,y0,3,"gray");

	cDrawArc3(cid,x0-40,y0-100,205,29,41.6,"cw","black",1,"none",true,true); // a21
	cDrawArc3(cid,x0-200,y0,315,6.3,14.8,"cw","black",1,"none",true,true);	  // a22

	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("F1",x0+185,y0-155);
	ctx.fillText("F2",x0+100,y0+120);		
	ctx.fillText("a21",x0+92,y0+20);
	ctx.fillText("a22",x0+78,y0+53);	

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