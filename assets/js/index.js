

  // 브라우저 resize 처리
  // window.addEventListener('resize', function() {
  //   window.location.reload();
  // });





  // 스크롤 시 side-bar
  let lastScroll = 0;
  $(window).scroll(function(){
      var curr = $(this).scrollTop();
      var visual_top = $('#wrapper2').offset().top;
      if(curr > visual_top) {
        $('.side-bar-list').addClass('scroll');
      } else if(curr <= visual_top) {
        $('.side-bar-list').removeClass('scroll');
      } 
  })

  // top 버튼 클릭시
  $('.ico-top').click(function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  })


  // 서브메뉴
  // $('.gnb-item').hover(function() {
  //   $('.sub').addClass('on');
  // }, function() {
  //   $('.sub').removeClass('on');
  // })






  // sc-visual
  var mainimgSlide = new Swiper('.sc-visual .mainBanner-slide', {
    slidesPerView:"auto",
    effect: 'fade',
    loop:true,
    autoplay : {
      delay : 1000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".sc-visual .mainBanner-slide .navi-next",
      prevEl: ".sc-visual .mainBanner-slide .navi-prev",
    },
    pagination: {
      el: ".sc-visual .fraction-box",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return `<span class="curr">${current}</span>
                <span>/</span>
                <span class="total">${total}</span>`;
      }
    },
    on: {
      "init" : function() {
        $('.sc-visual .curr').text(this.realIndex+1);
      },
      "slideChange" : function() {
        $('.sc-visual .curr').text(this.realIndex+1);
      }
    }
  });

  var main_autoplay = mainimgSlide.params.autoplay.enabled;
  document.getElementById('m-play').addEventListener('click', function() {
    if(main_autoplay) {
      $(this).addClass('click');
      mainimgSlide.autoplay.stop(); 
      main_autoplay = false;
    } else {
      $(this).removeClass('click');
      mainimgSlide.autoplay.start(); 
      main_autoplay = true;
    }
  });





  // sc-board
  document.querySelectorAll('.tab-item').forEach(function(tab, index) {
    const swiperContainer = tab.querySelector('.news-slide');
    const newsSwiper = new Swiper(swiperContainer, {
      slidesPerView:"auto",
      spaceBetween:0,
      loop: true,
      breakpoints: { 
        768.33: {
          allowTouchMove:false,
        },
      },
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: tab.querySelector('.navi-next'),
        prevEl: tab.querySelector('.navi-prev'),
      },
    });
  });

  // 탭 클릭 시 활성화 상태 변경
  document.querySelectorAll('.newTit').forEach(function(title) {
    title.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelectorAll('.tab-item').forEach(function(item) {
        item.classList.remove('active');
      });
        title.parentElement.classList.add('active');
    });
  });




  // sc-notice
  var noticeSlide = new Swiper('.sc-notice .notice-slide', {
    slidesPerView:"auto",
    effect: 'fade',
    loop:true,
    allowTouchMove:false,
    autoplay : {
      delay : 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sc-notice .navi-next",
      prevEl: ".sc-notice .navi-prev",
    },
    pagination: {
      el: ".sc-notice .fraction",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return `<span class="curr">${current}</span>
                <span>/</span>
                <span class="total">${total}</span>`;
      }
    },
    on: {
      "init" : function() {
        $('.sc-notice .curr').text(this.realIndex+1);
      },
      "slideChange" : function() {
        $('.sc-notice .curr').text(this.realIndex+1);
      }
    }
  });

  var notice_autoplay = noticeSlide.params.autoplay.enabled;
  document.getElementById('n-play').addEventListener('click', function() {
    if(notice_autoplay) {
      $(this).addClass('click');
      noticeSlide.autoplay.stop(); 
      notice_autoplay = false;
    } else {
      $(this).removeClass('click');
      noticeSlide.autoplay.start(); 
      notice_autoplay = true;
    }
  });









  // sc-field
  var sertabSlide = new Swiper('.sc-field .tab-slide', {
    slidesPerView:'auto',
    breakpoints: { 
      1024.33: {
        allowTouchMove:false,
      },
    },
  });

  var sercontSlide = new Swiper('.sc-field .cont-slide', {
    slidesPerView:"auto",
    effect: 'fade',
    fadeEffect: { crossFade: true }, 
    observer: true,
    observeParents: true,
    allowTouchMove:false,
    navigation: {
      nextEl: ".sc-field .navi-next",
      prevEl: ".sc-field .navi-prev",
    },
    on : {
      slideChange: function() {
        var Idx = this.realIndex;
        $('.sc-field .group-field .tab-item').eq(Idx).addClass('on').siblings().removeClass('on');
        sertabSlide.slideTo(Idx);
      }
    }
  });

  $('.sc-field .group-field .tab-item a').click(function(e) {
    e.preventDefault();
    var indx = $(this).parent('li').index();
    console.log(indx)
    sercontSlide.slideTo(indx, 300);
  })

  // 서비스 메뉴 클릭시 하단 
  $('.btn-more').click(function() {
    var span = this.querySelector('.btn-more-txt');
        if (span.textContent === '전체보기') {
          span.textContent = '닫기';
        } else {
          span.textContent = '전체보기';
        }
    $('.serv-list').toggleClass('active');
    $('.btn-more').toggleClass('active');
  })





  // sc-sns
  var snsSlide = new Swiper('.sc-sns .sns-slide', {
    spaceBetween:30,
    initialSlide:1,
    slidesPerView:'auto',
    freeMode: true,
    observer: true,
    observeParents: true,
    loop:true,
    breakpoints: { 
      820.33: {
        allowTouchMove:false,
      },
    },
    navigation: {
      nextEl: ".sc-sns .navigation .navi-next",
      prevEl: ".sc-sns .navigation .navi-prev",
    },
  });






  // sc-banner
  var bannerSlide = new Swiper('.sc-banner .ban-slide', {
    slidesPerView:'auto',
    loop:true,
    allowTouchMove:false,
    observer: true,
    observeParents: true,
    speed: 1000,
    autoplay : {
      delay : 4000,
      disableOnInteraction: false,
    },
    spaceBetween:0,
    navigation: {
      nextEl: ".sc-banner .navigation .navi-next",
      prevEl: ".sc-banner .navigation .navi-prev",
    },
  });


  var sns_autoplay = bannerSlide.params.autoplay.enabled;
  document.getElementById('b-play').addEventListener('click', function() {
    if(sns_autoplay) {
      $(this).addClass('click');
      snsSlide.autoplay.stop(); 
      sns_autoplay = false;
    } else {
      $(this).removeClass('click');
      snsSlide.autoplay.start(); 
      sns_autoplay = true;
    }
  });


  $('.sc-banner .ban-slide').off('mouseenter').hover(function () {
    bannerSlide.autoplay.stop(); 
    }, function() {
      bannerSlide.autoplay.start(); 
  });



// 네비게이션 버튼 클릭 시 autoplay 재시작
document.querySelector('.sc-banner .navigation .navi-next').addEventListener('click', function() {
  if (sns_autoplay) {
    bannerSlide.autoplay.start();
  }
});

document.querySelector('.sc-banner .navigation .navi-prev').addEventListener('click', function() {
  if (sns_autoplay) {
    bannerSlide.autoplay.start();
  }
});

