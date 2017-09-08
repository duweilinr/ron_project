// drawCvs1 for PE2d_9   06/15/2017
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 350;
	var xydata= {x0:x0,xmin:x0-300,xmax:x0+300,
				 y0:y0,ybot:y0+100,ytop:y0-300 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);
	
	// draw fixed body
	var xA= x0-160;
	var yA= y0;
	var xB= x0;
	var yB= y0-200;
	var xC= x0+160;
	var yC= y0;

	// draw crate and platform
	cDrawRectxy(cid,x0-50,y0-80,x0+50,y0-3,"brown",5,"burlywood");	
	cDrawRectxy(cid,xA-20,y0,xC+20,y0+8,"gray",2,"silver");	
	cDrawLine(cid,xA,yA,xB,yB,"gray",4,"round");
	cDrawLine(cid,xC,yC,xB,yB,"gray",4,"round");
					
	// draw and label fixed points
	cDrawDot(cid,xA,yA,4,"black");
	cDrawDot(cid,xB,yB,6,"black");
	cDrawDot(cid,xB,yB,3,"white");	
	cDrawDot(cid,xC,yC,4,"black");
	cDrawDot(cid,x0,y0,2,"black");	
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";
	ctx.fillText( "A",xA-20,yA-10);	
	ctx.fillText( "B",xB-25,yB);
	ctx.fillText( "C",xC+10,yC-10);


	// draw dimension lines
	cDrawLine(cid,xA,yA+8,xA,yA+45,"black",1,"butt");
	cDrawDoubleArrow(cid,xA,yA+30,x0,yA+30,"black",1,true)
	cDrawLine(cid,xC,yC+8,xC,yC+45,"black",1,"butt");
	cDrawDoubleArrow(cid,xC,yC+30,x0,yC+30,"black",1,true)
	
	ctx.fillStyle="black";
	ctx.font="bold 16px Arial";	
	cDrawTextBG(cid," d ",(xA+x0)/2-10,yA+21);
	cDrawTextBG(cid," d ",(xC+x0)/2-10,yC+21);	

	// draw force FL
	cDrawArrow(cid,xB,yB,xB,yB-80,"red",3,true);
	ctx.fillStyle="red";
	ctx.fillText( "FL",xB+15,yB-60);	
	
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