// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 300;
	var y0= 100;
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
	var wp= 120;
	var hp= 200;
	var dp= 30;
	
	var xAp= x0; 
	var yAp= y0;
	var xBp= xAp+wp;
	var yBp= yAp;
	var xCp= xAp;
	var yCp= yAp+dp;
	var xDp= xBp;
	var yDp= yBp+dp;
	var xEp= xAp;
	var yEp= yCp+hp;
	var xFp= xBp;
	var yFp= yDp+hp;		
		
	// frame
	cDrawLine(cid,xAp-30,yAp-2,xBp+30,yBp-2,"black",4,"butt");
	cDrawRectxy(cid,xCp,yCp,xFp,yFp,"gray",2,"lightgray");
	cDrawLine(cid,xAp,yAp,xCp,yCp,"gray",5,"round");
	cDrawLine(cid,xBp,yBp,xDp,yDp,"gray",5,"round");		
	
	// supports
	cDrawDot(cid,xAp,yAp,4,"black");	
	cDrawDot(cid,xBp,yBp,4,"black");
	cDrawDot(cid,xCp,yCp,4,"black");	
	cDrawDot(cid,xDp,yDp,4,"black");			
		
	ctx.fillStyle="black";
	ctx.font="bold 14px Arial";
	ctx.fillText("A",xAp+6,yAp-12);
	ctx.fillText("B",xBp+6,yBp-12);
	ctx.fillText("C",xCp-20,yCp);
	ctx.fillText("D",xDp+6,yDp-5);

	// dimensions		
	cDrawDoubleArrow(cid,xEp,yEp+25,xFp,yFp+25,"black",1,true);
	cDrawTextBG(cid," w ",(xEp+xFp)/2-10,yEp+17);
	cDrawDoubleArrow(cid,xDp+30,yDp,xFp+30,yFp,"black",1,true);		
	cDrawTextBG(cid,"h",xDp+25,(yDp+yFp)/2-10);
	
	cDrawLine(cid,xFp,yFp+3,xFp,yFp+40,"gray",1,"round");	
	cDrawLine(cid,xFp+3,yFp,xFp+50,yFp,"gray",1,"round");	
	cDrawLine(cid,xDp+3,yDp,xDp+50,yDp,"gray",1,"round");	
		
	cDrawTextBG(cid,"Chain lengths:",xBp+120,yBp+10);	
	cDrawTextBG(cid,"AC = 1 ft",xBp+130,yBp+35);	
	cDrawTextBG(cid,"BD = 1 ft",xBp+130,yBp+55);	

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