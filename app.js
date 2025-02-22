


var baricon = document.querySelector("#baricon");
var menubar = document.querySelector(".containor nav ul");
var navfull = document.querySelector(".containor nav");
var overlaymenu = document.querySelector(".overlay-menu");



baricon.addEventListener(

    "click",
    function () {

        baricon.classList.toggle("fa-bars")
        baricon.classList.toggle("fa-times")
        menubar.classList.add("showmenubar")
        overlaymenu.classList.add("overlay-menushow")

    }
)








overlaymenu.addEventListener(

    "click",
    function () {
        menubar.classList.remove("showmenubar")
        overlaymenu.classList.remove("overlay-menushow")
        baricon.classList.toggle("fa-bars")
        baricon.classList.toggle("fa-times")



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
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]



});





var btclick = document.querySelectorAll(".bt-click");
var tabcontentmenu = document.querySelectorAll(".tab-content-menu")


btclick[0].classList.add("bt-click-color");
btclick.forEach(

    function (btn, index) {

        btn.addEventListener(
            "click",
            function () {
                tabcontentmenu.forEach(
                    
                    function (value, i) {
                        
                        if (index == i) {
                            
                    
                            tabcontentmenu[i].classList.add("tab-show")
                            btclick[i].classList.add("bt-click-color")
                            

                        } else {

                            tabcontentmenu[i].classList.remove("tab-show")
                            btclick[i].classList.remove("bt-click-color")



                        }

                    }

                )

            }

        )

    }

)
