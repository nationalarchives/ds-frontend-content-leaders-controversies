//zoomify klee v1.1
//02-06-2005 added wmode=transparent
var urlString = document.location.href;
var paramIndex = urlString.indexOf("?")+1;
var paramString = urlString.substring(paramIndex,urlString.length);

document.write("  <OBJECT CLASSID='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'");
document.write("           CODEBASE='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0'");
document.write("           WIDTH='600'");
document.write("           HEIGHT='400'");
document.write("           ID='theMovie'>");
document.write("    		<PARAM NAME='src' VALUE='/education/leaders-and-controversies/swf/g5cs1s4_map.swf'>");
document.write("			<PARAM NAME=wmode VALUE=transparent>");
document.write("			<PARAM NAME='FlashVars' VALUE='" + paramString + "' >");
document.write("		<EMBED SRC='/education/leaders-and-controversies/swf/g5cs1s4_map.swf'");
document.write("		   FlashVars='" + paramString + "'");
document.write("           PLUGINSPAGE='http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash'");
document.write("           WIDTH='600'");
document.write("           HEIGHT='400'");
document.write("           wmode=transparent");
document.write("           NAME='theMovie'>");
document.write("    	</EMBED>");
document.write("   </OBJECT>");
//zoomify klee v1.1
