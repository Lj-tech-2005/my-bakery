


var baricon = document.querySelector("#baricon");
var menubar = document.querySelector(".containor nav ul");
var navfull = document.querySelector(".containor nav");
var overlaymenu = document.querySelector(".overlay-menu");



baricon.addEventListener(

    "click",
    function () {

        menubar.classList.add("showmenubar")
        overlaymenu.classList.add("overlay-menushow")

    }
)


overlaymenu.addEventListener(

    "click",
    function () {
        menubar.classList.remove("showmenubar")
        overlaymenu.classList.remove("overlay-menushow")



    }
)


document.addEventListener(

    "scroll",
    function (e) {

        if (window.scrollY >= 48) {

            navfull.classList.add("topscrooll")

        } else {

            navfull.classList.remove("topscrooll")

        }

    }

)






$('.slider').slick({
    arrows: false,
    dots:true,
    slidesToShow: 2,
    slidesToScroll:2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive:[
      {
        breakpoint:576,
        settings: {
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1
      }
      }
    ]



  });
