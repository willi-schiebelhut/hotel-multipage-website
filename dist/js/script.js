//Мобильное меню
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu_link'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('header__menu_active');
  });
  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('header__menu_active');
    });
  });
});
//Табы
$(document).ready(function () {
  $('ul.advantages__tabs').on('click', 'li:not(.advantages__tab_active)', function () {
    $(this)
      .addClass('advantages__tab_active').siblings().removeClass('advantages__tab_active')
      .closest('div.container').find('div.advantages__content').removeClass('advantages__content_active').eq($(this).index()).addClass('advantages__content_active');
  });
  //Слайдер
  $('.about__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/section_2_photo/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/section_2_photo/next.svg"></button>',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          arrows: false
        }
      }
    ]
  });
  $('.feedback__inner').slick({
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/section_2_photo/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/section_2_photo/next.svg"></button>',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          arrows: false
        }
      }
    ]
  });

  $('.rest__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/section_2_photo/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/section_2_photo/next.svg"></button>',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          arrows: false
        }
      }
    ]
  });

  $('.events__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/section_2_photo/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/section_2_photo/next.svg"></button>',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          arrows: false
        }
      }
    ]
  });
  //Modal
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('fast');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation').fadeOut('fast');
  });
  $('.button_mini').on('click', function () {
    $('.overlay, #consultation').fadeIn('fast');
  });

  $(document).mouseup(function (e) {
    var modalctr = $(".overlay");
    var modal = $("#consultation");
    if (!modal.is(e.target) && modal.has(e.target).length === 0) {
      modalctr.hide();
    }
  });
  //Form validation
  $('#reserv-form form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: "required",
      check: "required",
      datein: "required",
      dateout: "required"
    },
    messages: {
      name: {
        required: "Пожалуйста, введите своё имя",
        minlength: jQuery.validator.format("Введите как минимум {0} символа!")
      },
      phone: "Пожалуйста, введите номер телефона",
      datein: "Пожалуйста, выберите дату заезда!",
      dateout: "Пожалуйста, выберите дату отъезда!",
      check: "Пожалуйста, выберите тип номера!"
    }
  });

  $('#consultationform form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: "required",
    },
    messages: {
      name: {
        required: "Пожалуйста, введите своё имя",
        minlength: jQuery.validator.format("Введите как минимум {0} символа!")
      },
      phone: "Пожалуйста, введите номер телефона",
    }
  });
  $('input[name=phone]').mask("+7 (999) 999-99-99");
  //pageup
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
  $("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px"
    });
    $('body').removeClass('lock');
    return false;
  });

  $('.modal-form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#consultation').fadeOut('fast');
      $('.overlay, #thanks').fadeIn('slow');
      setTimeout(function () {
        $('.overlay, #thanks').fadeOut('slow');
      }, 2000);

      $('form').trigger('reset');
    });
    return false;
  });

  $('.reserv-form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#reserv').fadeOut('fast');
      $('.overlay, #thanks').fadeIn('slow');
      setTimeout(function () {
        $('.overlay, #thanks').fadeOut('slow');
      }, 2000);
      $('#reserv').fadeIn('fast');
      $('form').trigger('reset');
    });
    return false;
  });

  $(function () {
    $('#but').click(function () {
      var p = $('#quotes').children('.show');
      var n = $(p).next();
      if ($(n).hasClass('quote')) {
        $(n).removeClass('none').addClass('show');
      } else {
        var obj = $('#quotes').children('.quote');
        $(obj[0]).addClass('show').removeClass('none');
      }
      $(p).removeClass('show').addClass('none');
    });
  });
  
  new WOW().init();

  //Показывать карту после докрутки

  var gallery = $('.gallery');
  var galleryTop = gallery.offset().top;
  $(window).scroll(function () {
    var windowTop = $(this).scrollTop();
    if (windowTop > galleryTop) {
    }
  });
});