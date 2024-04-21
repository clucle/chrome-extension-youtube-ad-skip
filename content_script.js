function SkipAd() {
    var array = Array.from(document.getElementsByClassName('ytp-ad-skip-button'))
        .concat(Array.from(document.getElementsByClassName('ytp-ad-overlay-close-button')))
        .concat(Array.from(document.getElementsByClassName('ytp-ad-skip-button-modern')))
        .concat(Array.from(document.getElementsByClassName('ytp-skip-ad-button'))) // 1.3
        .forEach(function(element) {
            element.click(function(e){
                e.stopImmediatePropagation();
            });
	});
}

var timer = null;

function StartTimer() {
    timer = setTimeout(StartTimer, 1000);
    SkipAd();
}

StartTimer();
