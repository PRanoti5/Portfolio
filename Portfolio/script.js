$(document).ready(function() {
    // Example: Change background color on hover
    $('.project').hover(function() {
        $(this).css('background-color', '#e0e0e0');
    }, function() {
        $(this).css('background-color', '#fff');
    });
});