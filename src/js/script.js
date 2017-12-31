

$(document).ready(function() {
     var menuItem = document.querySelector('.navigation-bar_menu-item');

    $(".navigation-bar_menu-item").hover(function(event) {
        event.preventDefault();
        $(this).toggleClass("_active");


        if(menuItem.classList.contains('_active')) {
            document.querySelector('.navigation-bar-secondary').style.display = ('flex');
        }
    });

    $('.homepage').hover(function() {
       $(".navigation-bar_menu-item ._active").removeClass('_active');
        if(!menuItem.classList.contains('_active')) {
            document.querySelector('.navigation-bar-secondary').style.display = ('none');
        }
    });

    // Burger

      // script for Burger and Main Menu
    $('.burger').on('click', function(){

        $('.navigation-mobile').toggleClass('_active');
    });

    // Slider

    $('.productpage-images').slick({
        breakpoint: 767,
        dots: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: 'unslick'
            }
        ]
    });


        //





});


// Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("_active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "inline-block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "inline-block";
        }
    }
}

// Tabs

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" _active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "inline-block";
    evt.currentTarget.className += " _active";
}

document.getElementById("defaultOpen").click();






