$(document).ready(function() {

    // $(".navigation-bar_menu-item").hover(function(event) {
    //     event.preventDefault();
    //     $(this).toggleClass("_active");

    //     var menuItem = document.querySelector('.navigation-bar_menu-item');
    //     if(menuItem.classList.contains('_active')) {
    //         document.querySelector('.navigation-bar-secondary').style.display = ('flex');
    //     }
    // });

    // $('.homepage').hover(function() {
    //    $(".navigation-bar_menu-item ._active").removeClass('_active');
    //     if(!menuItem.classList.contains('_active')) {
    //         document.querySelector('.navigation-bar-secondary').style.display = ('none');
    //     }
    // });


});





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


