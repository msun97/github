// $('body').css({'background-color' : '#FF5200', 'font-size':'20px'});

$('.btn1')
  .on('mouseenter', function(){
  $('.box').stop().slideDown('slow');  
  })
  .on('mouseleave', function(){
  $('.box').stop().slideUp('slow');
  })

$('.btn2')
  .mouseenter(function(){
  $('.box2').hide();
  })
  .mouseleave(function(){
  $('.box2').show();
  })


$('.btn3')
 .on('click', function(){
  $('.box3').animate({
    left: '100px',
    width: '+=150px',
  }, 1000);
 })