

//HAMBURGER MENU CODE
// HAMBERGUR
function openMenu() {
    document.getElementById('navbar').style.height = "100%";
  }

  function closeMenu() {
    document.getElementById('navbar').style.height = "0";
  }

  // SMOOTH SCROLL

  $(function(){
    $('.menu-items a, .hero-section a').on('click', function(){
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        },1000);
        return false;
    })
})

$(function(){
  $('#toogle-btn').click(function(){
    $('.toogle').toggle(500);//show() function
});

})
