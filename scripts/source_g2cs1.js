//dynamic menu for Learning Curve (lc) - British Empire klee v1.0
//Empire klee v1.1 fix on Opera5 and NS7 and IE cell layer.
function lcLoadMenus() {
  if (window.lc_menu_0) return;
  window.lc_menu_0 = new Menu("root",138,19,"Verdana, Arial, Helvetica, sans-serif",11,"#0099AA","#ffffff","#ffffff","#0099AA","left","middle",0,0,1000,0,0,true,true,true,10,true,true);
  lc_menu_0.addMenuItem("Source&nbsp;1","location='g2cs1s1.htm'");
  lc_menu_0.addMenuItem("Source&nbsp;2","location='g2cs1s2.htm'");
  lc_menu_0.addMenuItem("Source&nbsp;3","location='g2cs1s3a.htm'");
  lc_menu_0.bgImageUp="/education/leaders-and-controversies/images/dropdown/drop_option_d.gif";
  lc_menu_0.bgImageOver="/education/leaders-and-controversies/images/dropdown/drop_option_u.gif";
  lc_menu_0.fontWeight="normal";
  lc_menu_0.hideOnMouseOut=true;
  lc_menu_0.writeMenus();
}//dynamic menu for Learning Curve end
