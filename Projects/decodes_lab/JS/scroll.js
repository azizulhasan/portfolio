

// PAGE SCROLL

$("body").toTopButton({
    // path to icons
    imagePath: './images/icons',
    // arrow, arrow-circle, caret, caret-circle, circle, circle-o, arrow-l, drop, rise, top
    // or your own SVG icon
    arrowType: 'arrow',
    // 'w' = white
    // 'b' = black
    iconColor: 'w',

    // icon shadow// from 1 to 16
    iconShadow: 1

});



 // Customize the appearance of the back to top button.

$("body").toTopButton({
    // opacity from 0 to 20
    opacity: 20,

// border radious from 0-10 (0-50%)
    shape: 10,

// from 0-10 (0-100px)
    margin: 2,


// custom color
    palette: '',



// background color

backgroundColor: '',

// border options
    border : {
        width: 0,
        color: ''

},

// 'tl': top-left

// 'tr': top-right

// 'bl': bottom-left

// 'br': bottom-right.
    position: 'br',
// button size from 1-6 (30-80px)
    size: 4,
// button shadow from 1-5
    btnShadow: 2,
// uses CSS filter
    filter: true,
// classes for the link
    linkClasses: [],



// classes for the image
    imgClasses: []



});
// Customize the behavior of the back to top button.



$("body").toTopButton({
    // scroll position to show the button
    scrollTrigger: 300,

// animation speed for smooth scroll
    animationTime: 700,
// fade in/out speed
    fadeInSpeed: 'fast',
    fadeOutSpeed: 'fast',
// auto hides when the screen size is smaller than this value
    mobileHide: 300,

// auto hides when reaching the top
    autoHide: true,


// additional selectors
    clickSelectors: []



});

