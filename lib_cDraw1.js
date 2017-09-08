// File: lib_cDraw1_v5.js	rev.02/27/2017
/*
	Line 22:  function cDrawArc3 									(cid,xc,yc,rs,sAd,eAd,ccws,bcol,bwid,fcol,end1,end2)
	Line 87:  function cDrawArrow(canvasid,x1,y1,x2,y2,lincol,linwid,ahdbool)
	Line 112: function cDrawAxes1(cid,x0,y0,dxmin,dymin,dxmax,dymax)
	Line 131: function cDrawDot(cid,xc,yc,r,color) {
	Line 143: function cDrawDoubleArrow (canvasid,x1,y1,x2,y2,lincol,linwid,ahdbool)
	Line 175: function cDrawEllipse (cid,xc,yc,rX,rY,rotd,sAngd,eAngd,dir,bcol,bwid,fcol)
	Line 205: function cDrawForce2(cid,x1,y1,x2,y2,linwid,lincol,lincap,headlen)
	Line 227: function cDrawGrid1(cid,x0,y0,dxmin,dymin,dxmax,dymax)
	Line 261: function cDrawHexText(xnum)
	Line 269: function cDrawLine(canvasid,x1,y1,x2,y2,lincol,linwid,lincap)
	Line 286: function cDrawMoment(canvasid,x1,y1,x2,y2,lcol,lwid,drot)
	Line 323: function cDrawRect(canvasid,xs,ys,angdeg,rlen,rwid,bcol,bwid,fcol)
	Line 365: function cDrawRectxy(canvasid,xs,ys,xe,ye,bcol,bwid,fcol)
	Line 393: function cDrawTextBG(cid,txt,x,y)
	Line 410: function cDrawTriangle(cid,x1,y1,x2,y2,x3,y3,bcol,bwid,fcol)
*/


// cDrawArc3 ------------------------------------------------------------------>
function cDrawArc3(cid,xc,yc,rs,sAd,eAd,ccws,bcol,bwid,fcol,end1,end2)
{
/*	a. xc,yc,rd: ctr of arc and radius in canvas coordinates
	b. angles defined positive cw, since pos y-axis is down.
		sAd: start_angle_deg, eAd: end_angle_deg
		ccws=["ccw"/"cw"] for draw direction. 
		USE 'cw' ALWAYS. Avoids possible end marker error.
	c. bcol: border_color (arc line). Use bcol='none' to suppress border line.
		bwid: border_width (px),
		fcol: fill_color. Use fcol='none' to suppress fill.
	d. endsbool=[true:false] for end markings

	Note 1. To make a circle: sAd=0, eAd=360, ccws=cw.
	Note 2. To make a dot: make a circle with bcol=fcol.
*/
	
	var sAr=0.01745*sAd;
	var eAr=0.01745*eAd;
	var xcn=Number(xc);
	var ycn=Number(yc);
	var rsn=Number(rs);
	var xs=xcn+rsn*Math.cos(sAr);
	var ys=ycn+rsn*Math.sin(sAr);
	var ctx=document.getElementById(cid).getContext("2d");
	ctx.strokeStyle=bcol;
	ctx.lineWidth=bwid;
	ctx.fillStyle=fcol;
	ctx.beginPath();
	ctx.moveTo(xs,ys);
	var ccwb=false;
	if (ccws=="ccw") {
		ccwb=true; }
	ctx.arc(xcn,ycn,rsn,sAr,eAr,ccwb);
	if (bcol!="none") { ctx.stroke(); }
	if (fcol!="none") { ctx.fill(); }

/*	draw the arrowheads */
	var headlen=8;   		// length of head in pixels
	var headang=Math.PI/8;	// angle of head sides
 
	if (end1) {
		var ang1r=sAr+Math.PI/2;
		if (ccwb) {
			ang1r=sAr-Math.PI/2; }
		ctx.moveTo(xs,ys);
		ctx.lineTo(xs+headlen*Math.cos(ang1r-headang),ys+headlen*Math.sin(ang1r-headang));
		ctx.moveTo(xs,ys);
		ctx.lineTo(xs+headlen*Math.cos(ang1r+headang),ys+headlen*Math.sin(ang1r+headang));
		ctx.stroke();
	}
	if (end2) {
		var ang2r=eAr+Math.PI/2;
		if (ccwb) {
			ang2r=eAr+Math.PI/2; }
		var xe=xcn+rsn*Math.cos(eAr);
		var ye=ycn+rsn*Math.sin(eAr);
		ctx.moveTo(xe,ye);
		ctx.lineTo(xe-headlen*Math.cos(ang2r-headang),ye-headlen*Math.sin(ang2r-headang));
		ctx.moveTo(xe,ye);
		ctx.lineTo(xe-headlen*Math.cos(ang2r+headang),ye-headlen*Math.sin(ang2r+headang));
		ctx.stroke();
	}
}

// cDrawArrow ----------------------------------------------------------------->
function cDrawArrow(canvasid,x1,y1,x2,y2,lincol,linwid,ahdbool)
{			
/*  Line from (x1,y1) to (x2,y2) in canvas coordinates.
	Draw arrowhead? Set ahdbool=[true/false] */
	
	var ctx=document.getElementById(canvasid).getContext("2d");
	var headlen=13;   		// length of head in pixels
	var headang=Math.PI/8;	// angle of head sides
    var angle = Math.atan2(y2-y1,x2-x1);
    ctx.lineWidth=linwid;
	ctx.lineCap="round";
	ctx.strokeStyle=lincol;
	ctx.beginPath();
	ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
	if (ahdbool) { 
		ctx.moveTo(x2,y2);
		ctx.lineTo(x2-headlen*Math.cos(angle-headang),y2-headlen*Math.sin(angle-headang));
		ctx.moveTo(x2,y2);
		ctx.lineTo(x2-headlen*Math.cos(angle+headang),y2-headlen*Math.sin(angle+headang));
	}
	ctx.stroke();
}

// cDrawAxes1 ----------------------------------------------------------------->
function cDrawAxes1(cid,x0,xmin,xmax,y0,ybot,ytop)
{
	// uses px screen coords: x pos right, y pos down
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	ctx.clearRect(0,0,c.width,c.height);
	ctx.fillStyle="white";	
	ctx.fillRect(0,0,c.width,c.height);
	
	cDrawArrow(cid,xmin,y0,xmax,y0,"gray",1,true);
	cDrawArrow(cid,x0,ybot,x0,ytop,"gray",1,true);
	ctx.fillStyle= "black";
	ctx.font=      "bold 14px Arial";
	ctx.fillText("X",xmax-15,y0+20);
	ctx.fillText("Y",x0-20,ytop+15);
}

// cDrawDot ------------------------------------------------------------------->
function cDrawDot(cid,xc,yc,r,color) {
	var ctx=document.getElementById(cid).getContext("2d");
	ctx.fillStyle= color;
	ctx.beginPath();
	ctx.moveTo(xc+r,yc);
	var sAr= 0;
	var eAr= 2*Math.PI;
	ctx.arc(xc,yc,r,sAr,eAr,true);
	ctx.fill();
}

// cDrawDoubleArrow ----------------------------------------------------------->
function cDrawDoubleArrow(canvasid,x1,y1,x2,y2,lincol,linwid,ahdbool)
{			
/*  Line from (x1,y1) to (x2,y2) in canvas coordinates.
	Draw arrowhead? Set ahdbool=[true:false] */

	var ctx=document.getElementById(canvasid).getContext("2d");
	var headlen=13;   		// length of head in pixels
	var headang=Math.PI/8;	// angle of head sides
    var angle = Math.atan2(y2-y1,x2-x1);
    ctx.lineWidth=linwid;
//	ctx.lineCap="round";
	ctx.strokeStyle=lincol;
	ctx.beginPath();
	ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
	if (ahdbool) { 
		ctx.moveTo(x2,y2);
		ctx.lineTo(x2-headlen*Math.cos(angle-headang),y2-headlen*Math.sin(angle-headang));
		ctx.moveTo(x2,y2);
		ctx.lineTo(x2-headlen*Math.cos(angle+headang),y2-headlen*Math.sin(angle+headang));
	}
	ctx.stroke();
		if (ahdbool) { 
		ctx.moveTo(x1,y1);
		ctx.lineTo(x1+headlen*Math.cos(angle-headang),y1+headlen*Math.sin(angle-headang));
		ctx.moveTo(x1,y1);
		ctx.lineTo(x1+headlen*Math.cos(angle+headang),y1+headlen*Math.sin(angle+headang));
	}
	ctx.stroke();
}

// cDrawEllipse --------------------------------------------------------------->
function cDrawEllipse(cid,xc,yc,rX,rY,rotd,sAngd,eAngd,dir,bcol,bwid,fcol)
{
	// xc,yc: center
	// rX,rY: radius axis X, radius axis Y; rotd: axes angle cw+ in deg
	// sAngd,eAngd: startAngle, endAngle in deg cw+
	// dir: optional, default anticlockwise, true ccw
	// Note. Best to make sAng<eAng and set dir explicitely
	var ctx=document.getElementById(cid).getContext("2d");
	ctx.save();
	
	var rotr=  rotd*Math.PI/180;
	var sAngr= sAngd*Math.PI/180;
	var eAngr= eAngd*Math.PI/180;
	var dir=  false;		// true = anticlockwise
	
	ctx.beginPath();
	ctx.ellipse(xc,yc,rX,rY,rotr,sAngr,eAngr,dir);
	if (fcol !== "none") {
		ctx.fillStyle= fcol;	
		ctx.fill();
	}
	if (bcol !== "none") {
		ctx.lineWidth=   bwid;
		ctx.strokeStyle= bcol;
		ctx.stroke();
	}
	ctx.restore();
}

// cDrawForce2 ---------------------------------------------------------------->
function cDrawForce2(cid,x1,y1,x2,y2,linwid,lincol,lincap,headlen)
{			
	// linecap: butt (default),round,square
	//  Line from (x1,y1) to (x2,y2) in canvas coordinates.
	var ctx= document.getElementById(cid).getContext("2d");
		
	var headang=   Math.PI/8;	// angle of head sides
    var angle =    Math.atan2(y2-y1,x2-x1);
	ctx.lineWidth= linwid;
	ctx.lineCap=   lincap;
	ctx.strokeStyle= lincol;

	ctx.beginPath();
	ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
	ctx.moveTo(x2,y2);
	ctx.lineTo(x2-headlen*Math.cos(angle-headang),y2-headlen*Math.sin(angle-headang));
	ctx.moveTo(x2,y2);
	ctx.lineTo(x2-headlen*Math.cos(angle+headang),y2-headlen*Math.sin(angle+headang));
	ctx.stroke();
}

// cDrawGrid1 ----------------------------------------------------------------->
function cDrawGrid1(cid,x0,xmin,xmax,y0,ybot,ytop)
{
	var c=   document.getElementById(cid);
	var ctx = c.getContext('2d');
	ctx.clearRect(0,0,c.width,c.height);

	var dx=     50;
	var dy=     50;
	var lincol= "lightgray";
	var linwid= 0.6;
	var lincap= "butt";	
	// draw vertical grid lines	
	var x=  xmin;
	var nx= (xmax-xmin)/dx;
 	for (var i=0; i<=nx; i++) {
		cDrawLine(cid,x,ybot,x,ytop,lincol,linwid,lincap);
		x= x+dx;
	}
	// draw horizontal grid lines	
	var y=  ytop;
	var ny= (ybot-ytop)/dy;
	for (var j=0; j<=ny; j++) {
		cDrawLine(cid,xmin,y,xmax,y,lincol,linwid,lincap);
		y=y+dy;
	}	
}

// cDrawHexText --------------------------------------------------------------->
function cDrawHexText(xnum)
{
	var uni = '"\\u' + xnum + '"';
	var hex = eval(uni);
	return hex;
}

// cDrawLine ------------------------------------------------------------------>
function cDrawLine(canvasid,x1,y1,x2,y2,lincol,linwid,lincap)
{			
/*  Line from (x1,y1) to (x2,y2) in canvas coordinates.
	lincap= {"butt" / "round" (extension) / "square" (extension) ) */

	var c=document.getElementById(canvasid);
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.lineWidth=linwid;
	ctx.lineCap=lincap;
	ctx.strokeStyle=lincol;
	ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
	ctx.stroke();
}

// cDrawMoment ---------------------------------------------------------------->
function cDrawMoment(canvasid,x1,y1,x2,y2,lcol,lwid,drot)
{
	var dx=x2-x1;
	var dy=y2-y1;
	var rs= 0.5*Math.sqrt(dx*dx+dy*dy);
	var xc=(x1+x2)/2;
	var yc=(y1+y2)/2;
	var eAr= Math.atan2(dy,dx);		// end angle radians
	var sAr= eAr -Math.PI;			// start angle radians
	var ccw= true;		// default direction for 'arc' fcn
	if (drot == "cw") { ccw= false; }

	var ctx=document.getElementById(canvasid).getContext("2d");
	ctx.lineWidth=lwid;
	ctx.lineCap="round";
	ctx.strokeStyle=lcol;
	ctx.beginPath();
	// draw header lines
	var drs= 0.1*rs;		// delta in radius for header tail pts
	var hAr= eAr +0.3;		// header tail angle if ccw
	if (drot == "cw") {	hAr= eAr -0.3; }
	var htx= xc +(rs-drs)*Math.cos(hAr);	// header tail x
	var hty= yc +(rs-drs)*Math.sin(hAr);	// header tail y
	ctx.moveTo(x2,y2);
	ctx.lineTo(htx,hty);
	htx= xc +(rs+drs)*Math.cos(hAr);	// header tail x
	hty= yc +(rs+drs)*Math.sin(hAr);	// header tail y
	ctx.moveTo(x2,y2);
	ctx.lineTo(htx,hty);
	// draw the arc
	ctx.moveTo(x1,y1);
	ctx.arc(xc,yc,rs,sAr,eAr,ccw);
	ctx.stroke();
	ctx.closePath();		
}

// cDrawRect ------------------------------------------------------------------>
function cDrawRect(canvasid,xs,ys,angdeg,rlen,rwid,bcol,bwid,fcol)
{
/*	(xs,ys) is location of rect end on midline. angdeg is midline angle in deg.
	rlen,rwid are rect length along midline and width across it.
	bcol, bwid, fcol are border and fill properties.
	Pts 1,2,3,4 are cw at rect corners. Pt 1 at nominal upper-left corner.
	Note 1. bcol="none" draws no border.
	Note 2. fcol="none" draws no fill. 	*/
	
	var xsn=Number(xs);
	var ysn=Number(ys);
	var angr=0.01745*angdeg;	// Find rect projections in x-y
	var rlenn=Number(rlen);
	var rwidn=Number(rwid);
	var dxl= rlenn*Math.cos(angr);	// length projections
	var dyl= rlenn*Math.sin(angr);
	var dxw= rwidn*Math.sin(angr);
	var dyw= rwidn*Math.cos(angr);

	var ctx=document.getElementById(canvasid).getContext("2d");
	ctx.strokeStyle=bcol;
	ctx.lineWidth=bwid;
	ctx.fillStyle=fcol;
	ctx.beginPath();
	var x1= xsn+0.5*dxw;
	var y1= ysn-0.5*dyw;
	ctx.moveTo(x1,y1);
	var x2= x1+dxl;
	var y2= y1+dyl;
	ctx.lineTo(x2,y2);
	var x3= x2-dxw;
	var y3= y2+dyw;
	ctx.lineTo(x3,y3);
	var x4= x3-dxl;
	var y4= y3-dyl;
	ctx.lineTo(x4,y4);
	ctx.closePath();
	if (fcol!="none") { ctx.fill(); }
	if (bcol!="none") { ctx.stroke(); }
}

// cDrawRectxy ---------------------------------------------------------------->
function cDrawRectxy(canvasid,xs,ys,xe,ye,bcol,bwid,fcol)
{
/*	(xs,ys) is top left corner of rectangle aligned with x-y axes.
	(xe,ye) is bottom right corner.
	Note 1. bcol="none" draws no border.
	Note 2. fcol="none" draws no fill.
	Note 3. xe>xs and ye>ys.    */
	
	var dx= xe-xs;
	var dy= ye-ys;

	var ctx=document.getElementById(canvasid).getContext("2d");
	ctx.strokeStyle=bcol;
	ctx.lineWidth=bwid;
	ctx.fillStyle=fcol;
	ctx.beginPath();
	ctx.moveTo(xs,ys);
	var x2= xs+dx;
	ctx.lineTo(x2,ys);
	var y3= ys+dy;
	ctx.lineTo(x2,y3);
	ctx.lineTo(xs,y3);
	ctx.closePath();
	if (fcol!="none") { ctx.fill(); }
	if (bcol!="none") { ctx.stroke(); }
}

// cDrawTextBG ---------------------------------------------------------------->
function cDrawTextBG(cid,txt,x,y)
{
	// draw text with background
	var c = document.getElementById(cid);
	var ctx = c.getContext('2d');
    ctx.save();	// save current state as we make a lot of changes      
    ctx.font = "16px Arial";
    ctx.textBaseline = 'top';
    ctx.fillStyle = 'white';		// background color
    var width = ctx.measureText(txt).width;
    ctx.fillRect(x,y,width,16);	
    ctx.fillStyle = 'black';		// text color
    ctx.fillText(txt,x,y);
    ctx.restore();      // restore original state
}

// cDrawTriangle -------------------------------------------------------------->
function cDrawTriangle(cid,x1,y1,x2,y2,x3,y3,bcol,bwid,fcol)
{
	// bcol="none" draws no border, fcol="none" draws no fill.

	var ctx=document.getElementById(cid).getContext("2d");
	ctx.strokeStyle= bcol;
	ctx.lineWidth=   bwid;
	ctx.fillStyle=   fcol;
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.lineTo(x3,y3);
	ctx.closePath();
	if (fcol!="none") { ctx.fill(); }
	if (bcol!="none") { ctx.stroke(); }
}

// end of file ----------------------------------------------------------------|