// add libs like
var gsap = require('gsap');

function moveTitlesDown($titlesContainer) {
    TweenLite.to($titlesContainer, 1, {
        height: '15%'
    })
}

function makeImageFullscreen($images, indexToMakeFullScreen) {
    const $imageToMakeFullScreen = $images[indexToMakeFullScreen]
    const $imagesToShrink = $images.filter((image, i) => i !== indexToMakeFullScreen)

    TweenLite.to($imagesToShrink, 1, {
        flexGrow: 0
    })
    TweenLite.to($imageToMakeFullScreen, 1, {
        flexGrow: 1
    })

}

(function(window) {
  const $titlesContainer =  document.querySelector(".xpr-nav__titles")
  const $titles =  Array.from(document.querySelectorAll(".xpr-nav__title"))
  const $images =  Array.from(document.querySelectorAll(".xpr-nav__image"))

    const growOnMouseOverListeners = [];
    const shrinkOnMouseOutListeners = [];
    const clickListners = [];


    $titles.forEach(($title, i) => {
        growOnMouseOverListeners.push(function() {
            TweenLite.to([$images[i], $title], 1, {
                flexGrow: 1.2
            })
        })

        shrinkOnMouseOutListeners.push(function() {
            TweenLite.to([$images[i], $title], 1, {
                flexGrow: 1
            })
        })

        clickListners.push(function() {
            moveTitlesDown($titlesContainer)
            makeImageFullscreen($images, i)

            $titles.forEach(($title, i) => {
                $title.removeEventListener('mouseover', growOnMouseOverListeners[i])
                $title.removeEventListener('mouseout', shrinkOnMouseOutListeners[i])
            })
        })

        $title.addEventListener('mouseover', growOnMouseOverListeners[i])

        $title.addEventListener('mouseout', shrinkOnMouseOutListeners[i])

        $title.addEventListener('click', clickListners[i])

    })

  'use strict';

  // do your magic

})(window);
