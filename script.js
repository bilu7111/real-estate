document.addEventListener("DOMContentLoaded",function(){
var menu=document.getElementById("menu-bar"),aboutOffset=744,contactOffset=aboutOffset+744,
aboutmenu=document.getElementById("about-menu"),
contactmenu=document.getElementById("contact-menu");

document.addEventListener("scroll",function(){
if(window.pageYOffset>aboutOffset&&window.pageYOffset<contactOffset){
  menu.style.position="fixed";
  menu.style.top=0;
  menu.style.left=0;
  aboutmenu.style.background="darkred";
  contactmenu.style.background="";
}
else if(window.pageYOffset>contactOffset){
  aboutmenu.style.background="";
  contactmenu.style.background="darkred";
}
else if(window.pageYOffset<740){
  menu.style.position="relative";
  contactmenu.style.background="";
  aboutmenu.style.background="";
}
});
});
