//insert windows media clips
//by Kwok Lee
//version 1.0
				
document.write("  <OBJECT classid='CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95'");
document.write("           CODEBASE='http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,0,02,902'");
document.write("           standby='Loading Windows® Media Player components...'");
document.write("           type='application/x-oleobject'");
document.write("           WIDTH=352");
document.write("           HEIGHT=334");
document.write("           ID='mediaplayer'>");
document.write("    		<PARAM NAME='filename' VALUE='/education/heroesvillains/wmv/g3cs3s1_300k.wmv' />");
document.write("		<PARAM NAME='animationatStart' VALUE='true'>");
document.write("		<PARAM NAME='autoStart' VALUE='true'>");
document.write("		<PARAM NAME='showControls' VALUE='true'>");
document.write("		<EMBED type='application/x-mplayer2'");
document.write("           PLUGINSPAGE='http://www.microsoft.com/Windows/MediaPlayer/'");
document.write("           WIDTH=352");
document.write("           HEIGHT=334");
document.write("           src='/education/heroesvillains/wmv/g3cs3s1_300k.wmv'");
document.write("           autostart=true>");
document.write("    	</EMBED>");
document.write("   </OBJECT>");
//end