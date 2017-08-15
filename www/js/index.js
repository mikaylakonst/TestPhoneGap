document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            document.getElementById("swipe_info").innerHTML = "Left!";
        } else {
            /* right swipe */
            document.getElementById("swipe_info").innerHTML = "Right!";
        }
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
            document.getElementById("swipe_info").innerHTML = "Up!";
        } else {
            /* down swipe */
            document.getElementById("swipe_info").innerHTML = "Down!";
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};
function goToPage2 () {
  location.href = "page2.html"
}
