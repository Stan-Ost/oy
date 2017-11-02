$(document).ready(function() {

});


document.querySelector('.navigation-bar_menu-item').addEventListener('click', function(e) {
    e.preventDefault();

    var menuItem = document.querySelector('.navigation-bar_menu-item');

        menuItem.classList.toggle('_active');

        if(menuItem.classList.contains('_active')) {
            document.querySelector('.navigation-bar-secondary').style.display = ('flex');
        } else {
             document.querySelector('.navigation-bar-secondary').style.display = ('none');
        }
})
