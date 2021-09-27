var scrolleffect = document.querySelector(".navbar");
$(window).on('scroll', function(){
  if($(window).scrollTop()){ 
    scrolleffect.classList.add("nav-sticky");
}else{
  scrolleffect.classList.remove("nav-sticky");
}
});
