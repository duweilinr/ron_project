// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 350;
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
	cDrawArrow(cid,x0+150,y0-100,x0-150,y0+100,"gray",1,true);	// x axis
	cDrawArrow(cid,x0-200,y0,x0+200,y0,"gray",1,true);		// y axis
	cDrawArrow(cid,x0,y0+200,x0,y0-200,"gray",1,true);		// z axis	
	ctx.fillStyle="gray";
	ctx.font="bold 14px Arial";
	ctx.fillText("X",x0-165,y0+100);
	ctx.fillText("Y",x0+190,y0-15);
	ctx.fillText("Z",x0-15,y0-190);
	
	//	Draw structure and forces
	cDrawDot(cid,x0,y0,10,"darkgray");
	cDrawArrow(cid,x0,y0,x0-80,y0+54,"red",3,true);		// force F1
	cDrawArrow(cid,x0,y0,x0+100,y0-110,"red",3,true);	// force F2
	cDrawArrow(cid,x0,y0,x0+100,y0+60,"red",3,true);	// force F3
	ctx.fillStyle= "red";
	ctx.font= "bold 14px Arial";
	ctx.fillText("F1 (F1x,0,0)",x0-85,y0+75);
	ctx.fillText("F2",x0+75,y0-105);
	ctx.fillText("F3 (F3x,F3y,F3z)",x0+95,y0+45);		
	
	// draw the angle arcs and labels
	cDrawArrow(cid,x0+100,y0-40,x0+100,y0-107,"gray",1,false);	// F2 lines	
	cDrawArrow(cid,x0,y0,x0+100,y0-40,"gray",1,false);			// F2 lines	
	cDrawArc3(cid,x0-20,y0,105,-17,0,"cw","black",1,"none",true,true);//a21
	cDrawArc3(cid,x0,y0,83,-47,-22,"cw","black",1,"none",true,true);//a22
	ctx.fillStyle= "black";
	ctx.font= "bold 12px Arial";
	ctx.fillText("a21",x0+90,y0-12);
	ctx.fillText("a22",x0+73,y0-52);

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