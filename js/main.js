// slick slider 
$('.benefits-inner').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  prevArrow: '<button class="slick-btn slick-prev"><div class="btn-prev"></div></button>',
  nextArrow: '<button class="slick-btn slick-next"><div class="btn-next"></div></button>',
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 590,
      settings: {
        arrows: false,
      }
    }
  ]
});


// scroll for links 
document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('.scrollto').offsetHeight;
    // const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

// mobile menu 
$('.header-menu__btn').on('click', function () {
  $('.header-menu__btn').toggleClass('header-menu__btn--active');
  $('.header-menu__list').toggleClass('header-menu__list--active');

});

$('.header-menu__list-link').on('click', function () {
  $('.header-menu__btn').removeClass('header-menu__btn--active');
  $('.header-menu__list').removeClass('header-menu__list--active');

});

$('.header-menu__link').on('click', function () {
  $('.header-menu__btn').removeClass('header-menu__btn--active');
  $('.header-menu__list').removeClass('header-menu__list--active');

});

$('.header-social').on('click', function () {
  $('.header-menu__btn').removeClass('header-menu__btn--active');
  $('.header-menu__list').removeClass('header-menu__list--active');

});

// animation blocks 
window.sr = ScrollReveal(),
  sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25em',
    delay: 600
  }),
  sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25em',
    delay: 900
  }),
  sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25em',
    delay: 300
  }),
  sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25em',
    delay: 600
  });


//E-mail Ajax Send
$("form").submit(function () { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", //Change
    data: th.serialize()
  }).done(function () {
    alert("Thank you!");
    setTimeout(function () {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});



// redirect 
function opennewtab(url) {
  let result = document.getElementById("div").innerHTML;
  if(result === "Добро пожаловать"){
    var win = window.open(url, '_blank');
  }
};

function cl(){
  let a = document.getElementById("login");
  if(a.value === "admin"){
      document.getElementById("div").innerHTML = "Добро пожаловать";
  }else{
      document.getElementById("div").innerHTML = "Ошибка";
      return false;
    };
};


function ps(){
  let p = document.getElementById("pass");
  if(p.value === "admin"){
      document.getElementById("div").innerHTML = "Добро пожаловать";
  }else{
      document.getElementById("div").innerHTML = "Ошибка";
      return false;
    };
};


