// eslint-disable-next-line no-undef
jQuery(() => {
    const z = 0;
    // eslint-disable-next-line no-undef
    $('.tooltip').on('click', function () {
        // eslint-disable-next-line no-undef
        if (!$(this).find('ul').length > z) {
            // eslint-disable-next-line no-undef
            $(this).append('<ul class="list"><li></li></ul>');
        } else {
            // eslint-disable-next-line no-undef
            $(this).children().remove();
        }
    });
});