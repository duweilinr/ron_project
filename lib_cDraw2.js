// File: lib_cDraw2_v1.js	rev.06/11/2016
/*
	Line  13: function cDrawCableR(cid,xs,ys,xe,ye,w,n)
	Line 141: function cDrawLampPost1(cid,xc,yc,ht)
	Line 207: function supportLamp(cid,xs,ys,ht)
	Line 219: function cDrawSupptHingR(cid,xc,yc,rs,sAd,eAd,ccws,bcol,bwid,fcol,end1,end2,rot)
	Line 279: function cDrawTrapezoid(cid,P1,P2,P3,P4,col)
	Line 295: function defineTrapezoid(cid,xs3,ys3,xe3,ye3,xcn,ycn,rsn, rotr)
	Line 330: function supportsupport(cid,xcn,ycn,rsn, rotr)
	
	
	
	
*/

// cDrawCableR ---------------------------------------------------------------->
function cDrawCableR(cid,xs,ys,xe,ye,w,n)
{
	var rotr=Math.atan((ye-ys)/(xe-xs))	
	var xs=Number(xs);
	var ys=Number(ys);
	var xe=Number(xe);
	var ye=Number(ye);
	var w=Number(w);
	var n=Number(n);
		
	var L=Math.sqrt(Math.pow((xe-xs),2)+Math.pow((ye-ys),2));
	
	var dx=xe-xs;
	var dy=ye-ys;
	
	if (dx<0){rotr=rotr+3.142;}
	if (dy<0){rotr=rotr+2*3.142;}
	
	var ctx=document.getElementById(cid).getContext("2d");
	ctx.lineWidth=1;
	//	ctx.lineCap="round";
	ctx.strokeStyle="grey";
	ctx.beginPath();
	ctx.moveTo(xs,ys-w/2);
	ctx.lineTo(xs,ys+w/2);
    ctx.lineTo(xe,ye+w/2);
	ctx.lineTo(xe,ye-w/2);
	ctx.lineTo(xs,ys-w/2);
	ctx.stroke();
	ctx.fillStyle="grey";
	ctx.fill();
	
	ctx.strokeStyle="black";	
	// Sin
	ctx.beginPath();
	ctx.moveTo(xs, ys);
	var x=xs;
	var theta=0;
	// x < xe-(xe-xs)/4);
    for( i=0; i<n*100+1; i++) {
        // Sine wave equation
        var y =ys+  w*Math.sin(theta);
		//  x=x+(xe-xs)/(n*100);
		x=x+L/(n*100);
		//Rotation here
		var xt1=x-xs;
		var yt1=y-ys;
		var xt2=xt1*Math.cos(rotr)-yt1*Math.sin(rotr);
		var yt2=xt1*Math.sin(rotr)+yt1*Math.cos(rotr);
		var xt3=xt2+xs;
		var yt3=yt2+ys;
	    theta=theta+n*Math.PI/(n*100);
        ctx.lineTo(xt3, yt3);
	}
 	ctx.stroke();    
				
	// Cos
	ctx.beginPath();
    ctx.moveTo(xs, ys);
	var x =xs;
	var theta=0;
    for( i=0; i<n*100+1; i++) {
        // Sine wave equation
        var y = ys+ w*Math.cos(theta);
		//  x=x+(xe-xs)/(n*100);
		x=x+L/(n*100);
		//Rotation here
		var xt1=x-xs;
		var yt1=y-ys;
		var xt2=xt1*Math.cos(rotr)-yt1*Math.sin(rotr);
		var yt2=xt1*Math.sin(rotr)+yt1*Math.cos(rotr);
		var xt3=xt2+xs;
		var yt3=yt2+ys;	
		//
	    theta=theta+n*Math.PI/(n*100);
        ctx.lineTo(xt3, yt3);
	}
  	ctx.stroke();    
				
	// Sin
	ctx.beginPath();
    ctx.moveTo(xs, ys);
	var x=xs;
	var theta=3.142;
	// x < xe-(xe-xs)/4);
	for( i=0; i<n*100+1; i++) {
        // Sine wave equation
        var y = ys+ w*Math.sin(theta);
		//  x=x+(xe-xs)/(n*100);
		x=x+L/(n*100);
		//Rotation here
		var xt1=x-xs;
		var yt1=y-ys;
		var xt2=xt1*Math.cos(rotr)-yt1*Math.sin(rotr);
		var yt2=xt1*Math.sin(rotr)+yt1*Math.cos(rotr);
		var xt3=xt2+xs;
		var yt3=yt2+ys;	
		//			
		theta=theta+n*Math.PI/(n*100);
        ctx.lineTo(xt3, yt3);
	}
  	ctx.stroke();    
							
	// Cos
	ctx.beginPath();
    ctx.moveTo(xs, ys);
	var x =xs;
	var theta=3.142;
    for( i=0; i<n*100+1; i++) {
        // Sine wave equation
        var y =  ys+w*Math.cos(theta);	  
		//  x=x+(xe-xs)/(n*100);
		x=x+L/(n*100);
		//Rotation here		
		var xt1=x-xs;
		var yt1=y-ys;
		var xt2=xt1*Math.cos(rotr)-yt1*Math.sin(rotr);
		var yt2=xt1*Math.sin(rotr)+yt1*Math.cos(rotr);
		var xt3=xt2+xs;
		var yt3=yt2+ys;
		//
		theta=theta+n*Math.PI/(n*100);
		ctx.lineTo(xt3, yt3);
	}
  	ctx.stroke();   
}

// cDrawLampPost1 ------------------------------------------------------------->
function cDrawLampPost1(cid,xc,yc,ht)
{
	var xs=Number(xc);
	var ys=Number(yc);
	var ht=Number(ht);	
	var ctx=document.getElementById(cid).getContext("2d");
	
	// vertical member
    ctx.lineWidth=0.06*ht;
//	ctx.lineCap="round";
	ctx.strokeStyle="black";
	ctx.beginPath();
	ctx.moveTo(xs,ys);
    ctx.lineTo(xs,ys-ht);
//	ctx.fillStyle="black";
//	ctx.fill();
	ctx.stroke();
	
	// horizontal member
	ctx.lineWidth=0.04*ht;
	ctx.lineCap="round";
	ctx.beginPath();
	ctx.moveTo(xs,ys-ht);
	ctx.lineTo(xs-ht/2.6,ys-ht);
	ctx.stroke();
	
	// bulb
	ctx.strokeStyle="black";
	ctx.lineWidth=0.03*ht;
	ctx.fillStyle="orange";
	ctx.beginPath();
	ctx.moveTo(xs-ht/2.6,ys-ht);
	ctx.arc(xs-ht/2.6+0.1*ht,ys-ht,0.1*ht,0.01745*180,0,"true");
	ctx.fill();
	ctx.stroke();
			
	// light
	ctx.lineWidth=0.01*ht;
	ctx.beginPath();
	ctx.moveTo(xs-ht/2.5,ys-ht+0.12*ht);
    ctx.lineTo(xs-ht/2.5-0.065*ht,ys-ht+0.16*ht);
//	ctx.fillStyle="black";
//	ctx.fill();
	ctx.stroke();
	
	ctx.lineWidth=0.01*ht;
	ctx.beginPath();
	ctx.moveTo(xs-ht/2.6+0.1*ht,ys-ht+0.15*ht);
    ctx.lineTo(xs-ht/2.6+0.1*ht,ys-ht+0.22*ht);
//	ctx.fillStyle="black";
//	ctx.fill();
	ctx.stroke();

	// light
	ctx.lineWidth=0.01*ht;
	ctx.beginPath();
	ctx.moveTo(xs-ht/2.5+0.2*ht,ys-ht+0.12*ht);
    ctx.lineTo(xs-ht/2.5+0.265*ht,ys-ht+0.16*ht);
//	ctx.fillStyle="black";
//	ctx.fill();
	ctx.stroke();
	
	supportLamp(cid,xs,ys,ht);
}

// supportLamp ---------------------------------------------------------------->
function supportLamp(cid,xs,ys,ht)
{
	var c=document.getElementById(cid);
	var ctx=c.getContext("2d");
	var grd=ctx.createLinearGradient(xs,ys,xs,ys+.15*ht);
	grd.addColorStop(0,"brown");
	grd.addColorStop(1,"white");
	ctx.fillStyle=grd;
	ctx.fillRect(xs-0.15*ht,ys,0.3*ht,0.15*ht);
}

// cDrawSupportHingR ---------------------------------------------------------->
function cDrawSupptHingR(cid,xc,yc,rs,sAd,eAd,ccws,bcol,bwid,fcol,end1,end2,rot)
{
/*	xc,yc,rd: ctr of arc and radius in canvas coordinates
	sAd: start_angle_deg, eAd: end_angle_deg, ccws=["ccw":"cw"] for draw direction.
	bcol: border_color, bwid: border_width (px), fcol: fill_color.
	endsbool=[true:false] for end markings
	Note 1. To make a circle: sAd=0, eAd=360, ccws=cw.
	Note 2. To make a dot: make a circle with bcol=fcol.
	Note 3. To suppress border: bcol="none".
	Note 4. To suppress fill: fcol="none".   */
	var rotr=0.01745*rot;
	var sAr=0.01745*(sAd);
	var sAr1=0.01745*(sAd+rot);
	var eAr=0.01745*(eAd);
	var eAr1=0.01745*(eAd+rot);
	var xcn=Number(xc);
	var ycn=Number(yc);
	var rsn=Number(rs);
// starting point
	var xs=xcn+rsn*Math.cos(sAr);
	var ys=ycn+rsn*Math.sin(sAr);
	var xs1=xs-xcn;
	var ys1=ys-ycn;
	var xs2=xs1*Math.cos(rotr)-ys1*Math.sin(rotr);
	var ys2=xs1*Math.sin(rotr)+ys1*Math.cos(rotr);
	var xs3=xs2+xcn;
	var ys3=ys2+ycn;
	
// ending point
	var xe=xcn+rsn*Math.cos(eAr);
	var ye=ycn+rsn*Math.sin(eAr);
	var xe1=xe-xcn;
	var ye1=ye-ycn;
	var xe2=xe1*Math.cos(rotr)-ye1*Math.sin(rotr);
	var ye2=xe1*Math.sin(rotr)+ye1*Math.cos(rotr);
	var xe3=xe2+xcn;
	var ye3=ye2+ycn;

	var ctx=document.getElementById(cid).getContext("2d");	
    ctx.strokeStyle=bcol;
//	ctx.lineWidth=bwid;
	ctx.lineWidth=2;
	ctx.fillStyle=fcol;
	ctx.beginPath();
		ctx.moveTo(xs3,ys3);
			var ccwb=false;
	if (ccws=="ccw") {
		ccwb=true; }
	ctx.arc(xcn,ycn,rsn,sAr1,eAr1,ccwb);
	if (bcol!="none") { ctx.stroke(); }
	if (fcol!="none") { ctx.fill(); }

	defineTrapezoid(cid,xs3,ys3,xe3,ye3,xcn,ycn,rsn,rotr);
	cDrawDot(cid,xcn,ycn,rsn/2,"black");
//  cDrawDot(cid,xcn,ycn-rsn/4,rsn/2,"black");	
	supportsupport(cid,xcn,ycn,rsn, rotr);

}
	
// cDrawTrapezoid ----------------------------------------------------------->
function cDrawTrapezoid(cid,P1,P2,P3,P4,col)
{
	// points 1,2,3,4 ccw from lower left, where P1= {x:xval,y:yval}	
	var ctx=document.getElementById(cid).getContext("2d");	
	ctx.beginPath();        
	ctx.moveTo(P1.x,P1.y);
    ctx.lineTo(P2.x,P2.y);
    ctx.lineTo(P3.x,P3.y);
    ctx.lineTo(P4.x,P4.y);	
	ctx.closePath();
	ctx.fillStyle= col;
	ctx.fill();
	ctx.stroke();
}

// defineTrapezoid ------------------------------------------------------------>
function defineTrapezoid(cid,xs3,ys3,xe3,ye3,xcn,ycn,rsn, rotr)
{
	var ctx=document.getElementById(cid).getContext("2d");
    ctx.beginPath();        
	ctx.moveTo(xs3,ys3);
	var	xt=xcn-1.2*rsn;
	var	yt=ycn+1.2*rsn;
			
	var xt1=xt-xcn;
	var yt1=yt-ycn;
	var xt2=xt1*Math.cos(rotr)-yt1*Math.sin(rotr);
	var yt2=xt1*Math.sin(rotr)+yt1*Math.cos(rotr);
	var xt3=xt2+xcn;
	var yt3=yt2+ycn;		
				
    ctx.lineTo(xt3,yt3);
	xt=xcn+1.2*rsn;
	yt=ycn+1.2*rsn;
			
	var xt1=xt-xcn;
	var yt1=yt-ycn;
	var xt2=xt1*Math.cos(rotr)-yt1*Math.sin(rotr);
	var yt2=xt1*Math.sin(rotr)+yt1*Math.cos(rotr);
	var xt3=xt2+xcn;
	var yt3=yt2+ycn;		
				
    ctx.lineTo(xt3,yt3);
    ctx.lineTo(xe3,ye3);
//  ctx.closePath();
	ctx.fillStyle="grey";
	ctx.fill();
	ctx.stroke();
}

// supportsupport ------------------------------------------------------------->
function supportsupport(cid,xcn,ycn,rsn, rotr)
{
	var c=document.getElementById(cid);
    var ctx=c.getContext("2d");
	ctx.beginPath();

	var xt= xcn-2*rsn;
	var yt= ycn+1.2*rsn;
	var xt1=xt-xcn;
	var yt1=yt-ycn;
	var xt2=xt1*Math.cos(rotr)-yt1*Math.sin(rotr);
	var yt2=xt1*Math.sin(rotr)+yt1*Math.cos(rotr);
	var xt3=xt2+xcn;
	var yt3=yt2+ycn;		
	ctx.moveTo(xt3,yt3);

	var xt= xcn-2*rsn;
	var yt= ycn+1.2*rsn+0.4*rsn;
	var xt1=xt-xcn;
	var yt1=yt-ycn;
	var xt2=xt1*Math.cos(rotr)-yt1*Math.sin(rotr);
	var yt2=xt1*Math.sin(rotr)+yt1*Math.cos(rotr);
	var xt3=xt2+xcn;
	var yt3=yt2+ycn;		
	ctx.lineTo(xt3,yt3);		

	var xt= xcn-2*rsn+4*rsn;
	var yt= ycn+1.2*rsn+0.4*rsn;
	var xt1=xt-xcn;
	var yt1=yt-ycn;
	var xt2=xt1*Math.cos(rotr)-yt1*Math.sin(rotr);
	var yt2=xt1*Math.sin(rotr)+yt1*Math.cos(rotr);
	var xt3=xt2+xcn;
	var yt3=yt2+ycn;		
	ctx.lineTo(xt3,yt3);				
			
	var xt= xcn-2*rsn+4*rsn;
	var yt= ycn+1.2*rsn;
	var xt1=xt-xcn;
	var yt1=yt-ycn;
	var xt2=xt1*Math.cos(rotr)-yt1*Math.sin(rotr);
	var yt2=xt1*Math.sin(rotr)+yt1*Math.cos(rotr);
	var xt3=xt2+xcn;
	var yt3=yt2+ycn;		
	ctx.lineTo(xt3,yt3);						
			
//  ctx.fillRect(xt3,yt3,4*rsn,.4*rsn);		   
	ctx.fillStyle="black";
	ctx.fill();
	ctx.stroke();				
	ctx.beginPath();

	var xt= xcn-1.1*rsn;
	var yt= ycn+2.1*rsn;
	var xt1=xt-xcn;
	var yt1=yt-ycn;
	var xt2=xt1*Math.cos(rotr)-yt1*Math.sin(rotr);
	var yt2=xt1*Math.sin(rotr)+yt1*Math.cos(rotr);
	var xt3=xt2+xcn;
	var yt3=yt2+ycn;				
				
}

// cDrawSpringR --------------------------------------------------------------->
function cDrawSpringR(cid,xs,ys,xe,ye,w,n)
{
	var rotr=Math.atan((ye-ys)/(xe-xs))	
	var xs=Number(xs);
	var ys=Number(ys);
	var xe=Number(xe);
	var ye=Number(ye);
	var w=Number(w);
	var n=Number(n);
	var L=Math.sqrt(Math.pow((xe-xs),2)+Math.pow((ye-ys),2));
	var dx=xe-xs;
	var dy=ye-ys;
	
	if (dx<0){ rotr=rotr+3.142;	}
	if (dy<0){ rotr=rotr+2*3.142; }
		
	var ctx=document.getElementById(cid).getContext("2d");
	ctx.lineWidth=2;
//	ctx.lineCap="round";
	ctx.strokeStyle="black";
		
	ctx.beginPath();
	ctx.moveTo(xs,ys);
    ctx.lineTo(xs+(xe-xs)/4,ys+(ye-ys)/4);
		ctx.stroke();
		
	ctx.beginPath();
	ctx.moveTo(xe-(xe-xs)/4,ye-(ye-ys)/4);
	ctx.lineTo(xe,ye);
		ctx.stroke();
		
	ctx.beginPath();
    ctx.moveTo(xs+(xe-xs)/4, ys+(ye-ys)/4);
	var x =xs+(xe-xs)/4;
	var theta=0;
	// x < xe-(xe-xs)/4);
    for( i=0; i<n*100+1; i++) {
        // Sine wave equation
        var y = ys+(ye-ys)/4+ w*Math.sin(theta);
	    x=x+L/(2*n*100);
		//Rotation here
		var xt1=x-xs-(xe-xs)/4;
		var yt1=y-ys-(ye-ys)/4;
		var xt2=xt1*Math.cos(rotr)-yt1*Math.sin(rotr);
		var yt2=xt1*Math.sin(rotr)+yt1*Math.cos(rotr);
		var xt3=xt2+xs+(xe-xs)/4;
		var yt3=yt2+ys+(ye-ys)/4;	
	    theta=theta+n*Math.PI/(n*100);
        ctx.lineTo(xt3, yt3);
		// ctx.lineTo(x, y+ys+(ye-ys)/4);
	}
		ctx.stroke();    
}
// EOF ------------------------------------------------------------------------>