$(document).ready(function() {

    $(".navigation-bar_menu-item").hover(function(event) {
        event.preventDefault();
        $(this).toggleClass("_active");

        var menuItem = document.querySelector('.navigation-bar_menu-item');
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



});


// document.querySelector('.navigation-bar_menu-item').addEventListener('mouseover', function(e) {
//     e.preventDefault();

//     var menuItem = document.querySelector('.navigation-bar_menu-item');

//         menuItem.classList.add('_active');

//         if(menuItem.classList.contains('_active')) {
//             document.querySelector('.navigation-bar-secondary').style.display = ('flex');
//         } else {
//              document.querySelector('.navigation-bar-secondary').style.display = ('none');
//         }
// })

// document.querySelector('.navigation-bar-secondary').addEventListener('mouseover', function(e) {
//     e.preventDefault();

//       var menuItem = document.querySelector('.navigation-bar_menu-item');


//         if(menuItem.classList.contains('_active')) {
//             document.querySelector('.navigation-bar-secondary').style.display = ('flex');
//         } else {
//              document.querySelector('.navigation-bar-secondary').style.display = ('none');
//         }

// });

// document.querySelector('.navigation-bar_menu-item').addEventListener('mouseout', function(e) {
//     e.preventDefault();

//     var menuItem = document.querySelector('.navigation-bar_menu-item');

//         menuItem.classList.remove('_active');

//         if(menuItem.classList.contains('_active')) {
//             document.querySelector('.navigation-bar-secondary').style.display = ('flex');
//         } else {
//              document.querySelector('.navigation-bar-secondary').style.display = ('none');
//         }
// })
