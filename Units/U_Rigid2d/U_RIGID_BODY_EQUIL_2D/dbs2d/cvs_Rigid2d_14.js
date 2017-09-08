// drawCvs1
function drawCvs1(xydata)
{
	var cid=  "layer1";
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	
	var x0= 400;	// set default values as placeholder
	var y0= 250;
	var xydata= {x0:x0,xmin:x0-200,xmax:x0+200,
				 y0:y0,ybot:y0+100, ytop:y0-100 };

//	Draw structure
	var xi0= 100;
	var yi0= 150;
	var imageObj = new Image();
	imageObj.onload = function() {
		var w= imageObj.width;
		var h= imageObj.height;
		var xi0= (800-w)/2;
		var yi0= (500-h)/2;
		ctx.drawImage(imageObj,xi0,yi0);		
	}
	imageObj.src = './Units/U_Rigid2d/dbs/cvs_Rigid2d_14_img.JPG';
	
	return xydata;
}

// drawCvs2
function drawCvs2(xydata,ivvald)
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