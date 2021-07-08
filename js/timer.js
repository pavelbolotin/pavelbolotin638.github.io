var duration = {
        h: 2,
        m: 49,
        s: 57
    },
    sf = 120,
    maxH = 24,
    maxM = 60,
    maxS = 60;
setInterval(function() {
    $('.hr').html(duration.h);
    $('.min').html(duration.m).attr('data-t', duration.m - 1);
    $('.sec').html(duration.s).attr('data-t', duration.s - 1);
    duration.s--;
    $('.sec').addClass('flip');
    $('.min').removeClass('flip');
    $('.ih .circle').css('stroke-dashoffset', sf - (duration.h * (sf / maxH)));
    $('.im .circle').css('stroke-dashoffset', sf - (duration.m * (sf / maxM)));
    $('.is .circle').css('stroke-dashoffset', sf - (duration.s * (sf / maxS)));
    if (duration.s === 58) {
        $('.m').addClass('flip');
    }
    if (duration.s === 0) {
        duration.m--;
        duration.s = 59;
        if (duration.m === 0) {
            duration.h--;
            duration.m = 59
        }
    }
}, 1000);