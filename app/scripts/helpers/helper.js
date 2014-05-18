Handlebars.registerHelper('times', function (n, block) {
    var accum = '',
        i = -1;

    while (++i < n) {
        accum += block.fn(i);
    }
    return accum;
});