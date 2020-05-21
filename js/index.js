$(function(){
  // 스킵메뉴
  $('.skip_menu>a').focus(function(){
    $('.skip_menu').animate({top:'0px'},300);
  });
  $('.skip_menu>a').blur(function(){
    $('.skip_menu').animate({top:'-43px'},300);
  });

  // 토글네비
  var tgl_nav=$('.large_nav>.content>ul:first-child>li>a');
  tgl_nav.click(function(){
    if($(this).parent().hasClass('active')){
      tgl_nav.parent().removeClass('active');
      // $('#car_show').removeClass('active');
    }else{
      tgl_nav.parent().removeClass('active');
      $(this).parent().addClass('active');
    }   
  })
  $('#car_show').click(function(){
    $(this).next().toggleClass('active');
  })

  // 자동차 종류 선택
  $('.car_list>li:first-child>p').click(function(){
    $('.car_list>li:first-child>p').removeClass('active');
    $(this).addClass('active');
  });

  // 자동차 회전 지연시간
  var rotateItem=$('.car_list>li:last-child>p>img');
  for(var cnt=0;cnt<rotateItem.length;cnt++){
    rotateItem.eq(cnt).css('animation-delay',(cnt+10)*30+'ms');
  }
  
})