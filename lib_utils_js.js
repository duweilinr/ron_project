// File: lib_utils_js.js		last rev: 08/25/2017
/*
	Line  12: function init_sys_data()
	Line  61: function get_unit_index()
	Line  91: function doConvertSpecSymb(strarrraw,mark1,mark2,codearr)
	Line 160: function doRETURN()
	Line 167: function doHELP()
	Line 174: function doCLRMSG()
*/	

// initialize shared system data ---------------------------------------------->
function init_sys_data()
{	
	var hdrstr= "app4STATICS";
	var ftrstr= "College of Engineering :: Michigan State University";
	
	var marks=  [ '\u0040',		// start marker @
				  '\u007c' ]	// end marker   |
	
	var codearr= [
		{ name:'deg',   	code:'\u00b0' },
		{ name:'plusminus',	code:'\u00b1' },
		{ name:'super2', 	code:'\u00b2' },
		{ name:'super3', 	code:'\u00b3' },
					 
 		{ name:'alpha', 	code:'\u03b1' },
		{ name:'beta',  	code:'\u03b2' },
		{ name:'gamma', 	code:'\u03b3' },
		{ name:'delta', 	code:'\u03b4' },
		{ name:'epsilon', 	code:'\u03b5' },
		{ name:'zeta', 		code:'\u03b6' },
		{ name:'eta', 		code:'\u03b7' },
		{ name:'theta', 	code:'\u03b8' },
		{ name:'iota', 		code:'\u03b9' },
		{ name:'kappa', 	code:'\u03ba' },
		{ name:'lambda', 	code:'\u03bb' },
		{ name:'mu', 		code:'\u03bc' },
		{ name:'nu', 		code:'\u03bd' },
		{ name:'xi', 		code:'\u03be' },
		{ name:'omicron',  	code:'\u03bf' },					 
		{ name:'pi',    	code:'\u03c0' },					 
		{ name:'rho',   	code:'\u03c1' },
		//	 { name:'sigmaend', code:'\u03c2' },
		{ name:'sigma',    	code:'\u03c3' }, 					 
		{ name:'tau',   	code:'\u03c4' },
		{ name:'upsilon',  	code:'\u03c5' },					 
		{ name:'phi',   	code:'\u03c6' },
		{ name:'chi',    	code:'\u03c7' },					 
		{ name:'psi',   	code:'\u03c8' },
		{ name:'omega',		code:'\u03c9' } ]

	var sysdat=   {	hdrstr:		hdrstr,
					ftrstr:		ftrstr,
					marks:	    marks,
					codearr:	codearr };
					 
	return sysdat;
}	

// get_unit_index ------------------------------------------------------------->
function get_unit_index()
{
	var unitarr= [
	{'label':"Coords",'title':"Coordinate Systems", 'nprobs':10},
		
	{'label':"Vecs2d",'title':"Force and Position Vectors in 2d",'nprobs':9},
	{'label':"Vecs3d",'title':"Force and Position Vectors in 3d",'nprobs':7},
	{'label':"PEq2d", 'title':"Particle Equilibrium in 2d",		'nprobs':10},
	{'label':"PEq3d", 'title':"Particle Equilibrium in 3d", 		'nprobs':2},
	{'label':"FandM2d",'title':"Systems of Forces and Moments in 2d",'nprobs':12},
	{'label':"FandM3d",'title':"Systems of Forces and Moments in 3d",'nprobs':3},
	{'label':"Rigid2d",'title':"Rigid Body Equilibrium in 2d", 		'nprobs':17},
	{'label':"Rigid3d",'title':"Rigid Body Equilibrium in 3d", 		'nprobs':7},
		
	{'label':"Frames",	'title':"Frames and Machines", 	'nprobs':10},
	{'label':"Trusses",	'title':"Trusses", 			   	'nprobs':10},
	{'label':"Beams",	'title':"Beams", 				'nprobs':8},
	{'label':"Cables",	'title':"Cables", 				'nprobs':4},
	{'label':"Friction",'title':"Friction", 			'nprobs':7},
		
	{'label':"Centroids",  'title':"Centroids and Centers of Mass",'nprobs':8},
	{'label':"AreaMoments",'title':"Area Moments of Inertia", 	'nprobs':8},
		
	{'label':"zzTest",     'title':"Testing", 'nprobs':5}
	];	
		
	return unitarr;	
}

// doConvertSpecSymb ---------------------------------------------------------->
function doConvertSpecSymb(strarrraw,mark1,mark2,codearr)
{	
	// unicode used to replace spec symbols
	// delimit each spec char by mark1<spcharname>mark2  (eg, @theta|)
		
	var strarr=  [];
	var codelen= codearr.length;

	// for each line in input array	(index i)
	for (var i=0; i<strarrraw.length; i++)  {
		var testline= strarrraw[i];
		var testlen=  testline.length;

		// for each char in testline (index j)
		var tchar=    "";
		var newline=  "";				// converted line		
		var j=        0;
		while (j<testlen) {
			tchar= testline[j];

			if (tchar == mark1) {
				// build symtxt coded character: <mark1><symtxt><mark2>
				var symtxt= "";				
				var schar=  "";
				var done=   false;				
				do {
					j= j+1;
					schar= testline[j];
					if (schar != mark2) {
						symtxt= symtxt.concat(schar);
					}
					else {
						done= true;
					}
				}
				while (!done);
				
				// id symtxt (index k) and add to newline
				var name=  "";
				var cchar= "";
				var k=     0;				
				var kmax=  codearr.length;
				do {
					name= codearr[k].name;
					if (symtxt == name) {
						cchar=   codearr[k].code; 
						newline= newline.concat(cchar);
						k=       kmax;
					}
					else {
						k= k+1;
					}
				}
				while (k<kmax);
			}

			else {
				// add reg char to converted string
				newline= newline.concat(tchar);				
			}
			j= j+1;
		}
		strarr[i]= newline;
	}

	return strarr;
}

// doRETURN ------------------------------------------------------------------->
function doRETURN()
{
	var strb= " Message: &#160;RETURN not implemented yet.";
	document.getElementById("msgline").innerHTML= strb.bold();
}

// doHELP --------------------------------------------------------------------->
function doHELP()
{
	var strb= " Message: &#160;HELP not implemented yet.";
	document.getElementById("msgline").innerHTML= strb.bold();
}

// doCLRMSG ------------------------------------------------------------------->
function doCLRMSG()
{
	var strb= " Message:";
	document.getElementById("msgline").innerHTML= strb.bold();
}
	
// EOF ========================================================================|