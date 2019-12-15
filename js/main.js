lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'showImageNumberLabel': false
})

$('#filter').on('keyup', function (event) {
    var searchString = $(this).val().toLowerCase();
    $('.image a').each(function () {
        if ($(this).attr('data-title').toLowerCase().indexOf(searchString) == -1 && $(this).attr('data-alt').toLowerCase().indexOf(searchString) == -1) {
            $(this).hide(500);
        } else {
            $(this).show(500);
        }
    });
});