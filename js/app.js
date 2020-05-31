$(document).ready(function () {
    $('.imgTrailer img').click(function () {
        $('#video.hiddenTrailer').toggle('hiddenTrailer');
    })
    $('.close').click(function () {
        $('#video').toggle('hiddenTrailer');
    })
    $('.toggle').click(function () {
        $('#sideNav.hiddenToggle').toggle('.hiddenToggle')
    })


})

// scroll reveal
ScrollReveal().reveal('#header .content', {
    distance: '100px',
    origin: 'left',
    delay: 1000
});