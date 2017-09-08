// File: lib_Actions_8.js		last rev: 08/26/2016
//	This library supports button groups and utilities.
// Warning. Line numbers below are approximate.
/*
UTILITIES GROUP

	Line  34: function init_sys_data()

	Line  30: function initialize1()
	Line  45: function initialize2()
	Line  56: function getProbnam(unit,cid,idx)
	Line  77: function doENTER(partn)
	Line 109: function doENTERn(partn,ninputs)
	Line 157: function evalansP(partn)
	Line 280: function evalVxMx(x1,x2,Pfcn,Sfcn)
	Line 335: function evalPij(partn)
	Line 360: function evalPijk(partn)
	Line 390: function comp2Nbrs(nPstr,nSstr)
	Line 418: function comp2Strs(nP,nS)
	Line 435: function doCLR(partn)
	Line 487: function doMouseClick(event)
	Line 520: function setIVs(act)
	Line 598: function drawINSTANCE(act)
	Line 629: function doFEEDBACK()
	Line 640: function doHELP()
	Line 647: function doCLRMSG()
	Line 654: function doWORKSHEET()
	Line 667: function doSOLUTION()
*/

// UTILITIES GROUP ============================================================>

// initialize shared system data ---------------------------------------------->
function init_sys_data()
{	
	var hdrstr= "app4STATICS";
	var ftrstr= "College of Engineering :: Michigan State University";
	var sysdat= { hdrstr:hdrstr, ftrstr:ftrstr };
	return sysdat;
}	

// initialize for mouse selection on cvs2d and cvs3d -------------------------->
function initialize1()
{	
	//alert("initialize1()");	
	var ftrstr= "ip4STATICS -- College ofEngineering -- Michigan State University";
	document.getElementById("ftrlin1").innerHTML= ftrstr.bold();	
	
	var cid= "cvs2d";
	var c=   document.getElementById(cid);
	c.addEventListener("click",doMouseClick2d,false);
	
	cid= "cvs3d";
	c=   document.getElementById(cid);
	c.addEventListener("click",doMouseClick3d,false);	
}
// initialize for draw input on layer2 ---------------------------------------->
function initialize2()
{	
	var cid2= "layer2";
	var c2=   document.getElementById(cid2);
	c2.addEventListener("click",doMouseClick,false);
	
	var ftrstr= "ip4STATICS -- College of Engineering -- Michigan State University";
	document.getElementById("ftrlin1").innerHTML= ftrstr.bold();			
}

// getProbnam ----------------------------------------------------------------->
function getProbnam(unit,cid,idx)
{
	var units= String(unit);	
	if (unit<10) {units= "0"+units;}

	var	idxs= String(idx);	
	if (idx<10) {idxs= "0"+idxs;}		
	
	if (cid == "cvs2d") {
		var probnam= "./U".concat(units,"_P",idxs,".html");	
	}
	else {
		probnam= "./U".concat(units,"_3d_P",idxs,".html");	
	}
	//alert("probnam= "+probnam);
	return probnam;
}

// ENTER GROUP ================================================================>

// doENTER -------------------------------------------------------------------->
function doENTER(partn)
{	
	// get ansP
	var enterP= "enterP".concat(partn);
	var ansP=   document.getElementById(enterP).value;
	var ansP=   ansP.trim();  // trim fore/aft white spaces
	var resP=   "resP".concat(partn);	

	// check if empty
	if (ansP === "") {
		var strb= "Please enter an answer.";
		strb= strb.fontcolor("red");		
		document.getElementById(resP).innerHTML= strb;
		return ;
	}

	// bump up ntries counter
	var ntries= gvPart[partn].ntries +1;
	gvPart[partn].ntries= ntries;
	var tryP=   "tryP".concat(partn);
	document.getElementById(tryP).innerHTML= ntries;
	
	// evaluate ansP
	gvPart[partn].ansP= ansP;
	var res= evalansP(partn);
	
	// display eval result
	res= res.fontcolor("blue");
	document.getElementById(resP).innerHTML= res;		
}

// doENTERn ------------------------------------------------------------------->
function doENTERn(partn,ninputs)
{	
	var enterP= "enterP".concat(partn);
	var strb=   "";
	var resP=   "resP".concat(partn);		
	var res=    "Eval: ";
	var Parth=  gvPart[partn];
	var anstyp= Parth.typ;				// part typ code
	var typlst= anstyp.split(".");		// input field types
	var ansS=   Parth.ansS;				// ans string as stored
	var Slist=  ansS.split(",");
	
	// get ansP
	for (var i=1; i<ninputs+1; i++) {
		enterPi= enterP.concat(".",String(i));
		Pval=   document.getElementById(enterPi).value;
		Pval=   Pval.trim();  // trim fore/aft white spaces
		// check if input is empty
		if (Pval === "") {
			strb= "Input ".concat(String(i)," is empty.");
			strb= strb.fontcolor("red");		
			document.getElementById(resP).innerHTML= strb;
			return ;
		}
		typi= typlst[i];
		Sval= Slist[i-1];
		if (typi == "N") {
			resv= comp2Nbrs(Pval,Sval);
			res=  res.concat(" &#160; ",resv);
		}
		else if (typi == "S") {
			resv= comp2Strs(Pval,Sval);
			res=  res.concat(" ",resv);			
		}
	}
	
	// bump up ntries counter
	var ntries= gvPart[partn].ntries +1;
	gvPart[partn].ntries= ntries;
	var tryP=   "tryP".concat(partn);
	document.getElementById(tryP).innerHTML= ntries;
	
	// display eval result
	res=      res.fontcolor("blue");
	document.getElementById(resP).innerHTML= res;		
}

// evalansP ------------------------------------------------------------------->
function evalansP(partn)
{	
	var Parth= gvPart[partn];
	var typ=   Parth.typ;

	// special handling for ijk and ij
	// Use 2 fcns to preserve backward compatibility
	if (typ === "ijk")
	{ 
		var res= evalPijk(partn);
		return res;		
	}
	else if (typ == "ij") {
		var res= evalPij(partn);
		return res;		
	}		

	// initial handling
	var ansP=  Parth.ansP;
	var ansS=  Parth.ansS;
	if ( typ == "NS") {
		ansP= ansP.replace(" ",",");		
		ansS= ansS.replace(" ",",");
	}	
	var ansPlist= ansP.split(",");
	var ansSlist= ansS.split(",");

	// special handling here
	if ((typ === "Vx")||(typ === "Mx")) {
		var x1=   ansSlist[0];
		var x2=   ansSlist[1];
		var Sfcn= ansSlist[2];		
		var Pfcn= ansP;
		//alert(x1+","+x2+",S: "+Sfcn+",P: "+Pfcn);
		resv= evalVxMx(x1,x2,Pfcn,Sfcn);
		res=  " ".concat(resv);
		return res;
	}
	
	// check Plist length
	var lenP= ansPlist.length;
	var lenS= ansSlist.length;
	if (lenP != lenS) {
		var res= "Wrong nbr of entries.";
		return res;
	}			

	if (typ === "F") {
		// Force as 'mag,deg' (2d)
		var magP= ansPlist[0];
		var degP= ansPlist[1];
		var magS= ansSlist[0];
		var degS= ansSlist[1];
		
		var resm= comp2Nbrs(magP,magS);
		var resd= comp2Nbrs(degP,degS);	
		res=  "mag: ".concat(resm,", deg: ",resd);
	}
	else if (typ === "M") {
		// Moment as 'mag,dir' (2d)
		magP=     ansPlist[0];
		var dirP= ansPlist[1];
		magS=     ansSlist[0];
		var dirS= ansSlist[1];		
		
		resm= comp2Nbrs(magP,magS);
		resd= comp2Strs(dirP,dirS);
		res=  "mag: ".concat(resm,", dir: ",resd);
	}	
	else if (typ === "N") {
		// Number
		var Pval= ansPlist[0];
		var Sval= ansSlist[0];
		var resv= comp2Nbrs(Pval,Sval);
		res=      "val: ".concat(resv);
	}	
	else if (typ === "Nc") {
		// Number list, comma-separated
		res= "vals: ";
		for (var i=0; i<lenS; i++) {
			Pval= ansPlist[i];
			Sval= ansSlist[i];
			resv= comp2Nbrs(Pval,Sval);
			res=  res.concat(resv,", ");
		}
		res= res.slice(0,-2);	
	}

	else if (typ === "NS") {
		// Number (space) str converted to 'N,S'
		Pval= ansPlist[0];	// Number
		Sval= ansSlist[0];
		resv= comp2Nbrs(Pval,Sval);
		res=  "vals: ".concat(resv);
		Pval= ansPlist[1];	// String
		Sval= ansSlist[1];
		resv= comp2Strs(Pval,Sval);		
		res=  res.concat(",",resv);
		//alert("resvn,resvs= "+resvn+", "+resvs");		
	}	
	
	else if (typ === "P") {
		// Point 'x,y'  (2d)		
		var Px=   ansPlist[0];
		var Sx=   ansSlist[0];
		var resx= comp2Nbrs(Px,Sx);							
		var Py=   ansPlist[1];
		var Sy=   ansSlist[1];
		var resy= comp2Nbrs(Py,Sy);			
		res=      "x: ".concat(resx,", y: ",resy);
	}
	else if (typ === "S") {
		// String
		Pval= ansPlist[0];
		Sval= ansSlist[0];
		resv= comp2Strs(Pval,Sval);
		res=  " ".concat(resv);
	}

	return res;
}

// evalVxMx ------------------------------------------------------------------->
function evalVxMx(x1,x2,Pfcn,Sfcn)
{
	var ansPfcn= Pfcn.trim();	// reduces blank(s) to ""
	var ansSfcn= Sfcn.trim();

	// trap fixed 0 in either ansS or ansP fcn
	var strb= "test0ok";
	if (ansSfcn === "0") {
		if (ansPfcn === "0") {
			strb= "ok";
		}
		else {
			strb= "oops";
		}
	}
	else {
		if (ansPfcn === "0") {
			strb= "oops";
		}		
	}
	if (strb !== "test0ok") {
		var res= strb;
		return res;	
	}

	// build evaluation strings
	var ivstr= gvIVstr;
	var fcnP=  ivstr+" yP= "+ansPfcn+";";
	var fcnS=  ivstr+" yS= "+ansSfcn+";"; 

	// set x value for evaluating -- temporary!!!!
	var x1n= parseFloat(x1);
	var x2n= parseFloat(x2);
	var x= x1n +(x2n-x1n)*Math.random();
	x=     x.toPrecision(3);

	// evaluation with error-trapping
	try {
		var ansPval= eval(fcnP);
	}
	catch(err) {
		strb= err.toString();
		res= strb;
		return res;
	}				
	var fcnS=    ivstr+"y= "+ansSfcn+";";
	var ansSval= eval(fcnS);

	var rescomp=  comp2Nbrs(ansPval,ansSval);
	strb=     "At x= "+x+", res= "+rescomp;
	res= strb;
	return res;	
}

// evalPij -------------------------------------------------------------------->
function evalPij(partn)
{
	var ansP= gvPart[partn].ansP;	// ansP EX. "2i-3j"
	var ansS= gvPart[partn].ansS;	// ansS EX. "2,-3"
		
	// decode the ansP string into coefficients
	var cof=  ansP.split("i");
	var Pi=   Number(cof[0]).toPrecision(3);
	var ansP= cof[1];
	cof=      ansP.split("j");
	var Pj=   Number(cof[0]).toPrecision(3);

	// format ansS coefficients
	cof=    ansS.split(",");
	var Si= Number(cof[0]).toPrecision(3);
	var Sj= Number(cof[1]).toPrecision(3);
		
	var resi= comp2Nbrs(Pi,Si);
	var resj= comp2Nbrs(Pj,Sj);	
	res= "i,j: ".concat(resi,", ",resj);
	
	return res;
}

// evalPijk ------------------------------------------------------------------->
function evalPijk(partn)
{
	var ansP= gvPart[partn].ansP;	// ansP EX. "2i-3j+9k"
	var ansS= gvPart[partn].ansS;	// ansS EX. "2,-3,9"
		
	// decode the ansP string into coefficients
	var cof=  ansP.split("i");
	var Pi=   Number(cof[0]).toPrecision(3);
	var ansP= cof[1];
	cof=      ansP.split("j");
	var Pj=   Number(cof[0]).toPrecision(3);
	var ansP= cof[1];
	cof=      ansP.split("k");
	var Pk=   Number(cof[0]).toPrecision(3);

	// format ansS coefficients
	cof=    ansS.split(",");
	var Si= Number(cof[0]).toPrecision(3);
	var Sj= Number(cof[1]).toPrecision(3);
	var Sk= Number(cof[2]).toPrecision(3);
		
	var resi= comp2Nbrs(Pi,Si);
	var resj= comp2Nbrs(Pj,Sj);
	var resk= comp2Nbrs(Pk,Sk);			
	res= "i,j,k: ".concat(resi,", ",resj,", ",resk);
	
	return res;
}

// comp2Nbrs ------------------------------------------------------------------>
function comp2Nbrs(nPstr,nSstr)
{		
	var nP= Number(nPstr).toPrecision(3);
	if (nP == "NaN") {
		 res= "Not_a_Number";
		 return res;
	}
	var nS= Number(nSstr).toPrecision(3); 
	
	// special case of ansS = zero
	if ( nS*1000 == nS ) {
		var res= "ok";
		var nPabs= Math.abs(nP);
		if ( nPabs > 1.0e-4 ) {res= "oops";}
		return res;
	}

	// normal case
	var num= 100*nP/nS;
	num=     num.toFixed(0);
	res=     num.toString();
	res=     res.concat('%');
	if ( res === '100%' ) { res= "ok"; }
		
	return res;
}

// comp2Strs ------------------------------------------------------------------>
function comp2Strs(nP,nS)
{		
	// trim blanks etc here ...
	var nPtrim= nP;
	var nStrim= nS;
	
	if ( nPtrim === nStrim) {
		res= "ok";
	}
	else {
		res= "uh-oh";
	}
		
	return res;
}

// doCLR ---------------------------------------------------------------------->
function doCLR(partn)
{
	var strb= "&#160;&#160; Message:";
	document.getElementById('msgline').innerHTML= strb.bold();		
	
	if (partn == 0) {
		var i1= 1;
		var i2= gvPart[0];	// total number of answer parts	
	}
	else {
		i1= partn;
		i2= partn;
	}
	//alert("i1,i2= "+i1+","+i2);
	
	var blnk= " ";
	for (i=i1; i<i2+1; i++) {	
		var resP= "resP".concat(i);
		document.getElementById(resP).innerHTML= blnk;	
		var Pn=   gvPart[i];
		var act=  Pn.act;
		if (act === "enter") {
			var enterP= "enterP".concat(i);
			var typ=    gvPart[i].typ;
			var typlst= typ.split(".");
			var len=    typlst.length;
			if (len == 1) {
				document.getElementById(enterP).value= blnk;		
			}
			else {
				for (j=1; j<len; j++) {
					var enterPj= enterP.concat(".",j);
					document.getElementById(enterPj).value= blnk;
				}
			}
		}
		else if (act === "draw") {
			var msgDRAW= "msgDRAW".concat(i);
			document.getElementById(msgDRAW).innerHTML= blnk;
		}
		// new instance?
		if ( partn == 0) {
			var tryP= "tryP".concat(i);
			document.getElementById(tryP).innerHTML= blnk;
			gvPart[i].ntries= 0;		// reset ntries counters			
		}	
	}
}

// GRID and SET_IVs GROUP =====================================================>
 
// doMouseClick --------------------------------------------------------------->
function doMouseClick(event)
{
	// handles GRID button

	// where are we?
	var clientX= event.clientX;			// mouse pos in window coords
	var clientY= event.clientY;
	//alert("clientX,clientY= "+clientX+", "+clientY);	
	
	var cid=      "layer2";				// canvas pos in window coords
	var c=        document.getElementById(cid);
    var rect=     c.getBoundingClientRect();
	var rectleft= rect.left;
	var recttop=  rect.top;

	var posx=  clientX -rectleft;		// mouse pos in canvas coords
	var posy=  clientY -recttop;
	//alert("posx,posy= "+posx+", "+posy);

	// find GRID button zone (xs,xe,ys,ye) - see drawINSTANCE
	var ctx=  c.getContext("2d");
	var cwid= c.width;
	var chgt= c.height;
	var GRIDbox= { xs:15,ys:chgt-37,xe:68,ye:chgt-13 };
	
	if ((posx >= GRIDbox.xs) && (posx <= GRIDbox.xe)) {
		if ((posy >= GRIDbox.ys) && (posy <= GRIDbox.ye)) {
			doINSTANCE("grid");
		}
	}
}

// setIVs --------------------------------------------------------------------->
function setIVs(act)
{	
	if (act == "set") {
		// show the entry area
		document.getElementById("ivsethdr").style.display= "block";
		document.getElementById("ivsetwrap").style.display= "block";
		
		// set up entry data
		var niv=   gvIV[0];
		var strb=  "";
		var ivstr= "";
		var istr=  "";
		for (i=1; i<niv+1; i++) {
			istr= i.toString();
			strb= gvIV[i].nam;
			ivstr= "ivnam".concat(istr);
			document.getElementById(ivstr).innerHTML= strb.bold();
			strb= gvIV[i].min.toString();
			ivstr= "ivmin".concat(istr);
			document.getElementById(ivstr).innerHTML= strb.bold();
			strb= gvIV[i].max.toString();
			ivstr= "ivmax".concat(istr);
			document.getElementById(ivstr).innerHTML= strb.bold();		
			var vvalf= gvIV[i].val.toPrecision(3);
			strb= vvalf.toString();
			ivstr= "enteriv".concat(istr);
			document.getElementById(ivstr).value= strb;
		}
	}
	else if (act == "submit") {
		// process values one at a time
		var ivmsg= "Error in entry: ";
		var niv=   gvIV[0];
		for (i=1; i<niv+1; i++) {
			istr= i.toString();
			ivstr= "enteriv".concat(istr);
			strb= document.getElementById(ivstr).value;
			ivstr= "ivmsg".concat(istr);			
			if (isNaN(strb)) {
				ivmsg= ivmsg.concat(" &#160;",istr);
			}
			else {
				val= Number(strb);
				min= gvIV[i].min;
				max= gvIV[i].max;
				if ((val < min) || (val > max)) {
					ivmsg= ivmsg.concat(" &#160;",istr);
				}
				else {				
					gvIV[i].val= strb;	
				}
			}
		}
		if (ivmsg != "Error in entry: ") {
			document.getElementById("ivmsgline").innerHTML=ivmsg;
		}	
		
		// results are forced to be valid
		gvNinst= gvNinst +1;
		doINSTANCE("set");

		// hide the entry area
		document.getElementById("ivsethdr").style.display= "none";
		document.getElementById("ivsetwrap").style.display= "none";				
	}
	else if (act == "clr") {
		// clear iv_set message line
		var ivmsg= "";
		document.getElementById("ivmsgline").innerHTML= ivmsg;
	}
	else if (act == "hide") {
		// used at start-up
		document.getElementById("ivsethdr").style.display= "none";
		document.getElementById("ivsetwrap").style.display= "none";		
	}	
}

// drawINSTANCE --------------------------------------------------------------->
function drawINSTANCE(act)
{	
	// clears layer2, draws grid if selected, redraws GRID btn
	// it is misnamed for legacy reasons

	// initialize layer2 canvas
	var cid=  "layer2";
	var c=    document.getElementById(cid);
	var ctx=  c.getContext("2d");
	var cwid= c.width;
	var chgt= c.height;
	ctx.clearRect(0,0,cwid,chgt);
	
	// draw grid if selected
	gridon= gvgridon;
	if (gridon) { mydrawGrid(cid); }	

	// draw the GRID button
	var GRIDbox= { xs:15,ys:chgt-37,xe:68,ye:chgt-13};
	ctx.fillStyle="black";
	cDrawRectxy(cid,GRIDbox.xs,GRIDbox.ys,GRIDbox.xe,GRIDbox.ye,"black",1,
	"whitesmoke");

	ctx.font="bold 14px Arial";
	ctx.fillStyle="black";	
	ctx.fillText( " GRID ",20,chgt-20);
}

// CONTROL LINE GROUP =========================================================>

// doFEEDBACK ----------------------------------------------------------------->
function doFEEDBACK()
{	
	//alert("SEND FEEDBACK");
	var strb= "&#160;&#160; Message: sending email to ip4statics consulting.";
	document.getElementById("msgline").innerHTML= strb.bold();	
	var fb_url= "http://www.egr.msu.edu/webform/ip4statics-feedback";
	//alert(fb_url);
	window.open(fb_url,'_blank');
}

// doHELP --------------------------------------------------------------------->
function doHELP()
{
	var strb= "&#160;&#160; Message: &#160;HELP not implemented yet.";
	document.getElementById("msgline").innerHTML= strb.bold();
}

// doCLRMSG ------------------------------------------------------------------->
function doCLRMSG()
{
	var strb= "&#160;&#160; Message:";
	document.getElementById("msgline").innerHTML= strb.bold();
}

// doWORKSHEET ---------------------------------------------------------------->
function doWORKSHEET()
{	
	// open the associated worksheet file
	var vhref=  window.location.href;	
	var probid= gvprobid;
	var text1=  probid+".html";
	//var text2=  "worksheets/"+probid+"_ws.html";
	var text2=  "worksheets/"+probid+"_ws.pdf";
	var vhref1= vhref.replace(text1,text2);
	window.open(vhref1);
}

// doSOLUTION ----------------------------------------------------------------->
function doSOLUTION()
{
	// open the associated solution file
	var vhref=  window.location.href;	
	var probid= gvprobid;
	var text1=  probid+".html";
	var text2=  "solutions/"+probid+"_solution.pdf";
	var vhref1= vhref.replace(text1,text2);
	window.open(vhref1);
}

// EOF ========================================================================|

