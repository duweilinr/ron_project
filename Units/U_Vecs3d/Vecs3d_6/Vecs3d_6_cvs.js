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

	cDrawArrow(cid,x0,y0+180,x0,y0-180,"grey",1.5,true); //z-axis
	cDrawArrow(cid,x0-240,y0,x0+240,y0,"grey",1.5,true); //y-axis
	cDrawArrow(cid,x0+140,y0-140,x0-140,y0+140,"grey",1.5,true); //x-axis
	ctx.font="normal 14px Arial";
	ctx.fillStyle="grey";
	ctx.fillText("Z", x0-20,y0-150);
	ctx.fillText("Y", x0+210,y0+20);
	ctx.fillText("X", x0-150,y0+130);

	// F1 -------------------------------------
	var x1= x0+160;
	var y1= y0-50;	
	cDrawArrow(cid,x1,y0-115,x1,y1,"grey",1,false);			// proj z
	cDrawArrow(cid,x0,y0,x1,y1,"grey",1,false);				// proj xy
	cDrawArrow(cid,x1,y1,x1-50,y0,"grey",1,false);			// proj x
	cDrawForce2(cid,x0,y0,x1,y0-120,3,"red","round",12);	// force
	cDrawArc3(cid,x0-100,y0-200,270,38,47,"cw","black",1,"none",true,true); 	//a11
	cDrawArc3(cid,x0,y0-50,114,-14,6,"cw","black",1,"none",true,true); //a12	

	ctx.fillStyle= "black";
	ctx.font= "bold 14px Arial";
	ctx.fillText("F1",x1+10,y0-125);
	var xdeg= "02DA";		// hexadecimal for degree symbol
	var hex=  cDrawHexText(xdeg);
	var lbl=  "30".concat(hex);
	ctx.fillText(lbl,x0+88,y0-45);		// a11	
	ctx.fillText(lbl,x0+60,y0-5);		// a12		
	
	// F2 -------------------------------------
	var x2= x0+130;
	var y2= y0+40;
	cDrawArrow(cid,x2,y0+95,x2,y2,"grey",1,false);			// proj z	
	cDrawArrow(cid,x2,y2,x2+40,y0,"grey",1,false);			// proj x
	cDrawArrow(cid,x0,y0,x2,y2,"grey",1,false);				// proj xy
	cDrawForce2(cid,x0,y0,x2,y0+100,3,"red","round",12);	// force	

	cDrawArc3(cid,x0-100,y0-200,310,41,48, "cw","black",1,"none",true,true);	//a21
	cDrawArc3(cid,x0,y0,112,17,37,"cw","black",1,"none",true,true);	//a22

	ctx.fillStyle= "black";
	ctx.font= "bold 14px Arial";
	ctx.fillText("F2",x0+120,y0+120);		
	ctx.fillText("a21",x0+90,y0+20);
	ctx.fillText("a22",x0+73,y0+50);

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