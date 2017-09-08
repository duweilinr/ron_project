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

	cDrawArrow(cid,x0,y0,x0,y0-200,"grey",1.5,true); 				//z-axis
	cDrawArrow(cid,x0-220,y0,x0+220,y0,"grey",1.5,true); 			//y-axis
	cDrawArrow(cid,x0+140,y0-140,x0-140,y0+140,"grey",1.5,true); 	//x-axis
	ctx.font="normal 14px Arial";
	ctx.fillStyle="grey";
	ctx.fillText("Z", x0-25,y0-180);
	ctx.fillText("Y", x0+200,y0+20);
	ctx.fillText("X", x0-150,y0+120);

//	Draw forces and angles
	cDrawArrow(cid,x0,y0-150,x0,y0-130,"black",6,false); 		//anchor
	cDrawArrow(cid,x0-20,y0-150,x0+20,y0-150,"black",8,false); 	//anchor	
	
	cDrawArrow(cid,x0-40,y0-35,x0+110,y0-35,"brown",15,false); 	//box
	cDrawArrow(cid,x0+110,y0-35,x0+40,y0+35,"brown",15,false); 	//box
	cDrawForce2(cid,x0,y0,x0,y0+100,3,"red","round",12); 		//weight
	cDrawArrow(cid,x0-110,y0+35,x0+40,y0+35,"brown",15,false); 	//box
	cDrawArrow(cid,x0-40,y0-35,x0-110,y0+35,"brown",15,false); 	//box

	cDrawArrow(cid,x0,y0-130,x0+110,y0-35,"grey",5,false); 	// cable D
	cDrawArrow(cid,x0,y0-130,x0-40,y0-35,"grey",5,false); 	// cable A
	cDrawDot(cid,x0,y0-130,7,"black"); 		// joint E	
	cDrawArrow(cid,x0,y0-130,x0+40,y0+35,"grey",5,false); 	// cable C
	cDrawArrow(cid,x0,y0-130,x0-110,y0+35,"grey",5,false); 	// cable B
	cDrawDot(cid,x0-40,y0-35,4,"black"); 	// joint A
	cDrawDot(cid,x0-110,y0+35,4,"black"); 	// joint B
	cDrawDot(cid,x0+40,y0+35,4,"black"); 	// joint C
	cDrawDot(cid,x0+110,y0-35,4,"black"); 	// joint D

	cDrawArrow(cid,x0+60,y0+35,x0+130,y0-35,"grey", 1, false); 	// x dimn
	cDrawArrow(cid,x0+55,y0+35,x0+65,y0+35,"grey", 1, false);
	cDrawArrow(cid,x0+125,y0-35,x0+135,y0-35,"grey", 1, false);
	cDrawArrow(cid,x0+90,y0,x0+100,y0,"grey", 1, false);
	ctx.fillStyle="grey";
	ctx.fillText("x",x0+115,y0-5);
	ctx.fillText("x",x0+90,y0+20);

	cDrawArrow(cid,x0-125,y0+50,x0+25,y0+50,"grey",1,false); 	// y dimn
	cDrawArrow(cid,x0-130,y0+55,x0-120,y0+45,"grey",1,false);
	cDrawArrow(cid,x0+30,y0+45,x0+20,y0+55,"grey",1, false);
	cDrawArrow(cid,x0-45,y0+45,x0-55,y0+55,"grey",1,false);
	ctx.fillStyle="grey";
	ctx.fillText("y",x0-90,y0+65);
	ctx.fillText("y",x0-20,y0+65);

	ctx.fillStyle="red";
	ctx.font="bold 14px Arial";
	ctx.fillText("W",x0+10,y0+100);
	ctx.fillStyle="black";
	ctx.fillText("A",x0-25,y0-45);
	ctx.fillText("B",x0-135,y0+45);
	ctx.fillText("C",x0+45,y0+60);
	ctx.fillText("D",x0+125,y0-40);
	ctx.fillText("E",x0-20,y0-130);		

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