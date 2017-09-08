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
	cDrawArrow(cid,x0,y0,x0-150,y0+100,"gray",1,true);	// x axis
	cDrawArrow(cid,x0,y0,x0+200,y0,"gray",1,true);		// y axis
	cDrawArrow(cid,x0,y0,x0,y0-200,"gray",1,true);		// z axis	
	ctx.fillStyle="gray";
	ctx.font="bold 14px Arial";
	ctx.fillText("X",x0-165,y0+100);
	ctx.fillText("Y",x0+190,y0-15);
	ctx.fillText("Z",x0-15,y0-190);
	
	//	Draw structure
	cDrawArrow(cid,x0-50,y0-150,x0+150,y0+50,"black",3,false);	// BC
	cDrawArrow(cid,x0,y0-100,x0+100,y0,"gray",8,false);	// BC	
	cDrawArrow(cid,x0-90,y0+60,x0,y0-100,"gray",4,false);	// AC
	cDrawArrow(cid,x0-90,y0+60,x0+100,y0,"gray",4,false);	// AB

	cDrawArrow(cid,x0-88,y0+58,x0-20,y0-10,"red",3,true);	// force F1

//	Labels
	ctx.fillStyle= "black";
	ctx.font= "bold 14px Arial";
	ctx.fillText("A (x,0,0)",x0-160,y0+60);
	ctx.fillText("B (0,0,z)",x0+10,y0-110);
	ctx.fillText("C (0,y,0)",x0+100,y0-10);

	ctx.fillStyle= "red";
	ctx.fillText("F1",x0-25,y0-20);

	cDrawLine(cid,x0-90,y0+60,x0-20,y0+100,"gray",1,"butt");
	cDrawLine(cid,x0-20,y0-10,x0-20,y0+100,"gray",1,"butt");	

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