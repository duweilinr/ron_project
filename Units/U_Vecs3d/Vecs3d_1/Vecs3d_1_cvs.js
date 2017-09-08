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
	
	var xC= x0;
	var yC= y0;
	var yC2=yC/2;
	cDrawArrow(cid,xC+200,yC-100,xC-220,yC+110,"gray",2,true);	// x axis
	cDrawArrow(cid,xC-120,yC,xC+220,yC,"gray",2,true); 			// y axis
	cDrawArrow(cid,xC,yC,xC,yC-130,"gray",2,true); 				// z axis
	ctx.font="bold 14px Arial";
	ctx.fillStyle="gray";
	ctx.fillText("X",xC-230,yC+100);
	ctx.fillText("Y",xC+200,yC+20);
	ctx.fillText("Z",xC-20,yC-120);

	cDrawLampPost1(cid,xC,yC+120,200); // xbase,ybase,height 

	cDrawCableR(cid,xC,yC,xC-60,yC+160,2,20);	// A
	cDrawSupptHingR(cid,xC-60,yC+160,10,-150,-30,"cw","black",1,"grey",false,false,0);
	cDrawCableR(cid,xC,yC,xC+150,yC+30,2,20);	// B
	cDrawSupptHingR(cid,xC+150,yC+30,10,-150,-30,"cw","black",1,"grey",false,false,0);

	ctx.font="bold 16px Arial";
	ctx.fillStyle="black";
	ctx.fillText("O",xC-25,yC-5);
	ctx.fillText("A",xC-90,yC+160);
	ctx.fillText("B",xC+165,yC+30);

	// guidelines
	cDrawArrow(cid,xC,yC,xC-60,yC+60,"gray",1,false); 	// A
	cDrawArrow(cid,xC-60,yC+60,xC-60,yC+160,"gray",1,false); 	// A vertical
	cDrawArrow(cid,xC-60,yC+60,xC-120,yC+60,"gray",1,false); 	// A
	//cDrawArrow(cid,xC-60,yC+160,xC-120,yC+60,"gray",1,false); 	// A
	cDrawArrow(cid,xC+150,yC+30,xC+150,yC-50,"gray",1,false); 	// B vertical
	cDrawArrow(cid,xC,yC,xC+150,yC-50,"gray",1,false); 	// B
	cDrawArrow(cid,xC+100,yC-50,xC+150,yC-50,"gray",1,false); 	// B

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