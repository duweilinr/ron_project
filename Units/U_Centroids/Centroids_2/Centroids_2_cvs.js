// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 200;
	var xydata= {x0:x0,xmin:50,xmax:750,
				 y0:y0,ybot:450,ytop:50 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	//	do setup
	var Dscal= 40/1;
	var a=     1.6*Dscal;
	var h=     4*Dscal;	

	// draw cone figure
	cDrawArc3(cid,x0,y0,a-1,0,180,"ccw","green",2,"lightgreen",false,false);
	cDrawTriangle(cid,x0-a,y0,x0+a,y0,x0,y0+h,"brown",2,"bisque");
	
	cDrawDot(cid,x0,y0,2,"black");		// origin	
	cDrawDoubleArrow(cid,x0+a+20,y0,x0+a+20,y0+h,"gray",1,true);
	cDrawLine(cid,x0,y0+h,x0+a+40,y0+h,"gray",1,"round");
	cDrawTextBG(cid,"h",x0+a+15,y0+h/2-5);	

	cDrawDoubleArrow(cid,x0,y0-a-20,x0+a,y0-a-20,"gray",1,true);
	cDrawLine(cid,x0+a,y0-2,x0+a,y0-a-20,"gray",1,"round");	
	cDrawTextBG(cid," a ",x0+a/2-5,y0-a-25);	
		
	ctx.font="bold 14px Arial";		
	ctx.fillText( "O",x0-15,y0+20);	
	
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