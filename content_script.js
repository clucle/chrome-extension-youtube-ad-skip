function SkipAd() {
    var array = Array.from(document.getElementsByClassName('ytp-ad-skip-button'))
        .concat(Array.from(document.getElementsByClassName('ytp-ad-overlay-close-button')))
        .concat(Array.from(document.getElementsByClassName('ytp-ad-skip-button-modern')))
        .forEach(function(element) {
            element.click();
        });
}

var timer = null;

function StartTimer() {
    timer = setTimeout(StartTimer, 1000);
    SkipAd();
}

StartTimer();