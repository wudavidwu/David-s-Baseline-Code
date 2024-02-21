// when making a plugin you have to:
// define the name in order to call it
// program the functionality
// call it back in the main experiment code

// for Holly's code we need:
// one plugin that stores all of the random images
// one plugin that runs the code
// some more default jspsych library plugins









// original code for plugin

// jsPsych.plugins['display-line'] = (function() {

//   var plugin = {};

//   plugin.info = {
//     name: 'display-line',
//     description: 'plugin for displaying a specific image',
//     parameters: {}
//   };

//   plugin.trial = function(display_element, trial) {
//     // Create a div to hold the image and dot. This helps keep them in line
//     var container = document.createElement('div');
//     container.style.position = 'relative';
//     container.style.display = 'inline-block';
  
//     // Create the image element this is for the white line you ALWAYS want to be displayed
//     var img = document.createElement('img');
//     img.src = 'img1/Whiteline1.png'; // Hardcode the image path
//     img.style.display = 'block';

  
//     // Create the dot
//     var dot = document.createElement('div');
//     dot.style.position = 'absolute';
//     dot.style.top = '50%';
//     dot.style.left = '50%';
//     dot.style.width = '10px';
//     dot.style.height = '10px';
//     dot.style.backgroundColor = 'black';
//     dot.style.borderRadius = '50%';
//     dot.style.transform = 'translate(-50%, -50%)';
  
//     // Add the image and dot to the container
//     container.appendChild(img);
//     container.appendChild(dot);
  
//     // Add the container to the display element
//     display_element.appendChild(container);
//     setTimeout(function(){
//       display_element.removeChild(container);
//       jsPsych.finishTrial(); 
//     }, 500)
//   };


//   return plugin;
// })();






//Test with ANIMATIONS
jsPsych.plugins['display-line'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'display-line',
    description: 'plugin for displaying a specific image',
    parameters: {}
  };

  plugin.trial = function(display_element, trial) {
    // Create a div to hold the image and dot. This helps keep them in line
    var container = document.createElement('div');
    container.style.position = 'relative';
    container.style.display = 'inline-block';
  
    // Create the image element this is for the white line you ALWAYS want to be displayed
    var img = document.createElement('img');
    img.src = 'img1/Whiteline1.png'; // Hardcode the image path
    img.style.display = 'block';
    img.style.transform = 'rotate(0deg)'; // Initialize rotation



    img.style.transition = 'transform 0.15s'; // !!!!!!!!!!!!THIS IS WHAT MAKES THE ROTATION SMOOTH 



  
    // Create the dot
    var dot = document.createElement('div');
    dot.style.position = 'absolute';
    dot.style.top = '50%';
    dot.style.left = '50%';
    dot.style.width = '10px';
    dot.style.height = '10px';
    dot.style.backgroundColor = 'black';
    dot.style.borderRadius = '50%';
    dot.style.transform = 'translate(-50%, -50%)';
  
    // Add the image and dot to the container
    container.appendChild(img);
    container.appendChild(dot);
  
    // Add the container to the display element
    display_element.appendChild(container);

    // Define the event listener
    var keydownHandler = function(event) {
      var currentRotation = parseFloat(img.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
  
      switch (event.key) {
        case 'D':
        case 'd':
          // rotate the line clockwise
          img.style.transform = 'rotate(' + (currentRotation - 2) + 'deg)';
          break;
        case 'A':
        case 'a':
          // rotate the line counterclockwise
          img.style.transform = 'rotate(' + (currentRotation + 2) + 'deg)';
          break;
        case 'W':
        case 'w':
          // rotate the line clockwise
          img.style.transform = 'rotate(' + (currentRotation + 8) + 'deg)';
          break;
        case 'S':
        case 's':
          // rotate the line counterclockwise
          img.style.transform = 'rotate(' + (currentRotation - 8) + 'deg)';
          break;
      }
    };

    // Add the event listener
    document.addEventListener('keydown', keydownHandler);

    // Use setTimeout to remove the container after 5 seconds
    setTimeout(function() {
      display_element.removeChild(container);
      document.removeEventListener('keydown', keydownHandler); // Remove the event listener
      jsPsych.finishTrial();
    }, 3000); // 500 milliseconds = 0.5 seconds
  };

  return plugin;
})();
















// jsPsych.plugins['display-line'] = (function() {

//   var plugin = {};

//   plugin.info = {
//     name: 'display-line',
//     description: 'plugin for displaying a specific image',
//     parameters: {}
//   };

//   plugin.trial = function(display_element, trial) {
//     // Create a div to hold the image and dot. This helps keep them in line
//     var container = document.createElement('div');
//     container.style.position = 'relative';
//     container.style.display = 'inline-block';
  
//     // Create the image element this is for the white line you ALWAYS want to be displayed
//     var img = document.createElement('img');
//     img.src = 'img1/Whiteline1.png'; // Hardcode the image path
//     img.style.display = 'block';
//     img.style.transform = 'rotate(0deg)'; // Initialize rotation
  
//     // Create the dot
//     var dot = document.createElement('div');
//     dot.style.position = 'absolute';
//     dot.style.top = '50%';
//     dot.style.left = '50%';
//     dot.style.width = '10px';
//     dot.style.height = '10px';
//     dot.style.backgroundColor = 'black';
//     dot.style.borderRadius = '50%';
//     dot.style.transform = 'translate(-50%, -50%)';
  
//     // Add the image and dot to the container
//     container.appendChild(img);
//     container.appendChild(dot);
  
//     // Add the container to the display element
//     display_element.appendChild(container);

//     // Define the event listener
//     var keydownHandler = function(event) {
//       var currentRotation = parseFloat(img.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
  
//       switch (event.key) {
//         case 'D':
//         case 'd':
//           // rotate the line clockwise
//           img.style.transform = 'rotate(' + (currentRotation - 3) + 'deg)';
//           break;
//         case 'A':
//         case 'a':
//           // rotate the line counterclockwise
//           img.style.transform = 'rotate(' + (currentRotation + 3) + 'deg)';
//           break;
//         case 'W':
//         case 'w':
//           // rotate the line clockwise
//           img.style.transform = 'rotate(' + (currentRotation + 9) + 'deg)';
//           break;
//         case 'S':
//         case 's':
//           // rotate the line counterclockwise
//           img.style.transform = 'rotate(' + (currentRotation - 9) + 'deg)';
//           break;
//       }
//     };

//     // Add the event listener
//     document.addEventListener('keydown', keydownHandler);

//     // Use setTimeout to remove the container after 5 seconds
//     setTimeout(function() {
//       display_element.removeChild(container);
//       document.removeEventListener('keydown', keydownHandler); // Remove the event listener
//       jsPsych.finishTrial();
//     }, 10000); // 500 milliseconds = 0.5 seconds
//   };

//   return plugin;
// })();











//TRYING TO ROTATE THE LINE
// THIS SHIT WORKSSSS
// jsPsych.plugins['display-line'] = (function() {

//   var plugin = {};

//   plugin.info = {
//     name: 'display-line',
//     description: 'plugin for displaying a specific image',
//     parameters: {}
//   };

//   plugin.trial = function(display_element, trial) {
//     // Create a div to hold the image and dot. This helps keep them in line
//     var container = document.createElement('div');
//     container.style.position = 'relative';
//     container.style.display = 'inline-block';
  
//     // Create the image element this is for the white line you ALWAYS want to be displayed
//     var img = document.createElement('img');
//     img.src = 'img1/Whiteline1.png'; // Hardcode the image path
//     img.style.display = 'block';
//     img.style.transform = 'rotate(0deg)'; // Initialize rotation
  
//     // Create the dot
//     var dot = document.createElement('div');
//     dot.style.position = 'absolute';
//     dot.style.top = '50%';
//     dot.style.left = '50%';
//     dot.style.width = '10px';
//     dot.style.height = '10px';
//     dot.style.backgroundColor = 'black';
//     dot.style.borderRadius = '50%';
//     dot.style.transform = 'translate(-50%, -50%)';
  
//     // Add the image and dot to the container
//     container.appendChild(img);
//     container.appendChild(dot);
  
//     // Add the container to the display element
//     display_element.appendChild(container);

//     // Define the event listener
//     var keydownHandler = function(event) {
//       if (event.key === 'A' || event.key === 'a') {
//         var currentRotation = parseFloat(img.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
//         img.style.transform = 'rotate(' + (currentRotation + 3) + 'deg)';
//       }
//     };

//     // Add the event listener
//     document.addEventListener('keydown', keydownHandler);

//     // Use setTimeout to remove the container after 5 seconds
//     setTimeout(function() {
//       display_element.removeChild(container);
//       document.removeEventListener('keydown', keydownHandler); // Remove the event listener
//       jsPsych.finishTrial();
//     }, 2000); // 500 milliseconds = 0.5 seconds
//   };

//   return plugin;
// })();














// PUTTING TOGETHER THE PLUGIN + THE ORIGINAL EVENT LISTENER FOR ROTATION


//trying to implement rotating the line
// jsPsych.plugins['display-line'] = (function() {

//   var plugin = {};

//   plugin.info = {
//     name: 'display-line',
//     description: 'plugin for displaying a specific image',
//     parameters: {}
//   };

//   plugin.trial = function(display_element, trial) {
//     // Create a div to hold the image and dot. This helps keep them in line
//     var container = document.createElement('div');
//     container.style.position = 'relative';
//     container.style.display = 'inline-block';
  
//     // Create the image element this is for the white line you ALWAYS want to be displayed
//     var img = document.createElement('img');
//     img.src = 'img1/Whiteline1.png'; // Hardcode the image path
//     img.style.display = 'block';
  
//     // Create the dot
//     var dot = document.createElement('div');
//     dot.style.position = 'absolute';
//     dot.style.top = '50%';
//     dot.style.left = '50%';
//     dot.style.width = '10px';
//     dot.style.height = '10px';
//     dot.style.backgroundColor = 'black';
//     dot.style.borderRadius = '50%';
//     dot.style.transform = 'translate(-50%, -50%)';
  
//     // Add the image and dot to the container
//     container.appendChild(img);
//     container.appendChild(dot);
  
//     // Add the container to the display element
//     display_element.appendChild(container);

//     // Define the event listener
//     var keydownHandler = function(event) {
//       var line = document.querySelector('img[src="img1/Whiteline1.png"]');
//       var currentRotation = parseFloat(line.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
  
//       switch (event.key) {
//         case 'D':
//         case 'd':
//           // rotate the line clockwise
//           line.style.transform = 'rotate(' + (currentRotation - 3) + 'deg)';
//           break;
//         case 'A':
//         case 'a':
//           // rotate the line counterclockwise
//           line.style.transform = 'rotate(' + (currentRotation + 3) + 'deg)';
//           break;
//         case 'W':
//         case 'w':
//           // rotate the line clockwise
//           line.style.transform = 'rotate(' + (currentRotation + 9) + 'deg)';
//           break;
//         case 'S':
//         case 's':
//           // rotate the line counterclockwise
//           line.style.transform = 'rotate(' + (currentRotation - 9) + 'deg)';
//           break;
//       }
//     };

//     // Add the event listener
//     document.addEventListener('keydown', keydownHandler);

//     // Use setTimeout to remove the container after 5 seconds
//     setTimeout(function() {
//       display_element.removeChild(container);
//       document.removeEventListener('keydown', keydownHandler); // Remove the event listener
//       jsPsych.finishTrial();
//     }, 5000); // 5000 milliseconds = 5 seconds
//   };

//   return plugin;
// })();






