console.log('ready');


let ProgressBar = require('progressbar.js');

    let circleHeader = document.getElementById('container');
    let bar = new ProgressBar.Circle(circleHeader, {
    color: '#aaa',
    
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 2000,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },

    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
        circle.setText('');
        } else {
        circle.setText(value);
        }

    }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(1.0);  // Number from 0.0 to 1.0


    
    
    window.setInterval(function () {
        let progressContainer = document.getElementById('container');
        progressContainer.classList.add('hidden');

        let howSection = document.getElementById('how-it-works');
        howSection.classList.remove('hidden');

        let exampleSection = document.getElementById('full-examples');
        exampleSection.classList.remove('hidden');

        let vocabSection = document.getElementById('vocab');
        vocabSection.classList.remove('hidden');

    }, 2000);






