// drawCvs1
function drawCvs1()
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;
	var y0= 250;
	var xydata= {x0:x0,xmin:x0-100,xmax:x0+600,
				 y0:y0,ybot:y0+50,ytop:y0-350 };
	var x0=   xydata.x0;
	var xmin= xydata.xmin;
	var xmax= xydata.xmax;
	var y0=   xydata.y0;
	var ybot= xydata.ybot;
	var ytop= xydata.ytop;
	//cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop);

	// show image
	var xi0= 250;
	var yi0= 50;
	var imageObj = new Image();
	imageObj.onload = function() {
		ctx.drawImage(imageObj, xi0,yi0);
		}
	var imgfil= './Units/U_AreaMoments/AreaMoments_1/AreaMoments_1_img.JPG';	
	imageObj.src = imgfil;		// keep caps for jpg tag	

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