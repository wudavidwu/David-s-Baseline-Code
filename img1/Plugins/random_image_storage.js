// //Test with ANIMATIONS
// jsPsych.plugins['display-img'] = (function() {

//     var plugin = {};
  
//     plugin.info = {
//       name: 'display-img',
//       description: 'plugin for displaying a specific image',
//       parameters: {}
//     };
  
//     plugin.trial = function(display_element, trial) {
//       // Create a div to hold the image and dot. This helps keep them in line
//       var container = document.createElement('div');
//       container.style.position = 'relative';
//       container.style.display = 'inline-block';
    
//       var chosen = Math.floor(Math.random() * 10) + 1;

//       var img = document.createElement('img');
//       img.src = 'img1/' + chosen +'.png'; // Hardcode the image path
//       img.style.display = 'block';
//       img.style.position = 'fixed'; // Position the image absolutely
//       img.style.top = '50%'; // Center the image vertically
//       img.style.left = '50%'; // Center the image horizontally
//       img.style.transform = 'translate(-50%, -50%)'; // Offset the image by half its height and width
//       var initialRotation = Math.floor(Math.random() * 180);
//       img.style.transform = 'rotate(' + initialRotation + 'deg)';
  
  
//       img.style.transition = 'transform 0.15s'; // !!!!!!!!!!!!THIS IS WHAT MAKES THE ROTATION SMOOTH 
  
  
    
//       // Add the image and dot to the container
//       container.appendChild(img);
    
//       // Add the container to the display element
//       display_element.appendChild(container);

//       // Call the 'display-line' plugin
//       jsPsych.plugins['display-line'].trial(display_element, trial);
  
  
//       // Use setTimeout to remove the container after 5 seconds
//       setTimeout(function() {
//         display_element.removeChild(container);
//         document.removeEventListener('keydown', keydownHandler); // Remove the event listener
//         jsPsych.finishTrial();
//       }, 3000); // 500 milliseconds = 0.5 seconds
//     };
  
//     return plugin;
//   })();

//test with centering images
jsPsych.plugins['display-img'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'display-img',
    description: 'plugin for displaying a specific image',
    parameters: {}
  };

  plugin.trial = function(display_element, trial) {
    // Create a div to hold the image. This helps keep them in line
    var container = document.createElement('div');
    container.style.position = 'fixed'; // Position the container fixed
    container.style.top = '50%'; // Center the container vertically
    container.style.left = '27%'; // Center the container horizontally
    container.style.transform = 'translate(-50%, -50%)'; // Offset the container by half its height and width

    var chosen = Math.floor(Math.random() * 10) + 1;

    
    // var containerSize = document.createElement('div');
    // var curWidth = parseInt(window.getComputedStyle(document.getElementById('img1/' +chosen+'.png')).width);
    // var browserWidth = parseInt(window.getComputedStyle(document.body).width)-100;
    // var curHeight = parseInt(window.getComputedStyle(document.getElementById('img1/' +chosen+'.png')).height);
    // var browserHeight = parseInt(window.getComputedStyle(document.body).height)-50;
    // var ratioW = browserWidth/curWidth;
    // var ratioH = browserHeight/curHeight;
    // var scaleFactor = (ratioW<ratioH) ? ratioW-0.1 : ratioH-0.1;
    // if (scaleFactor<1) { scaleFactor=1; }
    // document.getElementById('img1/' +chosen+'.png').style.transform = "scale("+scaleFactor+")";




    var img = document.createElement('img');
    img.src = 'img1/' + chosen +'.png'; // Hardcode the image path
    img.style.display = 'block';
    img.style.position = 'absolute'; // Position the image absolutely
    img.style.transform = 'translate(-50%, -50%)'; // Offset the image by half its height and width
    img.style.maxHeight = '90vh';
    img.style.maxWidth = '90vw';



    var initialRotationImg = Math.floor(Math.random() * 180);
    img.style.transform += ' rotate(' + initialRotationImg + 'deg)'; // Add the rotation

    img.style.transition = 'transform 0.15s'; // This makes the rotation smooth

    // Add the image to the container
    container.appendChild(img);
    // container.appendChild(containerSize)

    // Add the container to the display element
    display_element.appendChild(container);
    // display_element.appendChild(containerSize);

    // Call the 'display-line' plugin
    jsPsych.plugins['display-line'].trial(display_element, trial);

    // Use setTimeout to remove the container after 5 seconds
    setTimeout(function() {
      display_element.removeChild(container);// Remove the event listener
      jsPsych.finishTrial();
    }, 3000); // milliseconds
  };

  return plugin;
})();
