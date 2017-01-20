console.log('ready');

window.addEventListener('load', function () {
    var ProgressBar = require('progressbar.js')

    // Assuming we have an empty <div id="container"></div> in
    // HTML
    var test = document.getElementById('container');
    var bar = new ProgressBar.Line(test, {easing: 'easeInOut'});
    bar.animate(1);  // Value from 0.0 to 1.0
});
