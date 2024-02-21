jsPsych.plugins['display-line'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'display-line',
    description: 'plugin for displaying a specific image',
    parameters: {}
  };

  plugin.trial = function(display_element, trial) {    
    var img = document.createElement('img');
    img.src = 'img1/TheWhiteLine.png'; // Hardcode the image path
    img.style.display = 'block';
    img.style.position = 'absolute'; // Position the image absolutely
    img.style.top = '50%'; // Center the image vertically
    img.style.right = '5%'; // Position the image 25% from the right of the screen
    img.style.transformOrigin = 'center'; // Set the origin of transformation to the center of the image
    img.style.transform = 'translateY(-50%) rotate(' + initialRotationLine + 'deg)'; // Center the image vertically and apply the rotate transformation
    img.style.maxWidth = '42%'; // Ensure the image is not wider than the screen
    img.style.maxHeight = '42%'; // Ensure the image is not taller than the screen

    var initialRotationLine = Math.floor(Math.random() * 180);
    img.style.transform = 'rotate(' + initialRotationLine + 'deg)'; // Apply the rotate transformation
    jsPsych.data.addDataToLastTrial({ initialRotationLine: initialRotationLine }); // adding the initial rotation to the savedata
    var finalRotationLine = initialRotationLine;
    img.style.transition = 'transform .1625s';     

    var keydownHandler = function(event) {
      var currentRotation = parseFloat(img.style.transform.replace(/rotate\((.*?)deg\)/, '$1')) || 0;
    
      switch (event.key) {
        case 'ArrowRight':
        // case 'd':
          // rotate the line clockwise
          finalRotationLine = currentRotation + 7.5;
          img.style.transform = 'rotate(' + finalRotationLine + 'deg)';
          break;
        case 'ArrowLeft':
        // case 'a':
          // rotate the line counterclockwise
          finalRotationLine = currentRotation - 7.5;
          img.style.transform = 'rotate(' + finalRotationLine + 'deg)';
          break;
        case 'ArrowUp':
        // case 'w':
          // rotate the line clockwise
          finalRotationLine = currentRotation - 2.5;
          img.style.transform = 'rotate(' + finalRotationLine + 'deg)';
          break;
        case 'ArrowDown':
        // case 's':
          // rotate the line counterclockwise
          finalRotationLine = currentRotation + 2.5;
          img.style.transform = 'rotate(' + finalRotationLine + 'deg)';
          break;
      }
    };
    
    jsPsych.data.addDataToLastTrial({ finalRotationLine: finalRotationLine }); //adding the final rotation to the savedata 
    // Add the event listener
    document.addEventListener('keydown', keydownHandler);    

    // Add the image to the display element
    display_element.appendChild(img);

    // Use setTimeout to remove the container after 3 seconds
    setTimeout(function() {
      document.removeEventListener('keydown', keydownHandler); // Remove the event listener
      jsPsych.finishTrial();
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  return plugin;
})();



// when making a plugin you have to:
// define the name in order to call it
// program the functionality
// call it back in the main experiment code

// for Holly's code we need:
// one plugin that stores all of the random images
// one plugin that runs the code
// some more default jspsych library plugins

//removing the dot

// jsPsych.plugins['display-line'] = (function() {

//   var plugin = {};

//   plugin.info = {
//     name: 'display-line',
//     description: 'plugin for displaying a specific image',
//     parameters: {}
//   };

//   plugin.trial = function(display_element, trial) {

//     // Create the image element this is for the white line you ALWAYS want to be displayed
//     var img = document.createElement('img');
//     img.src = 'img1/TheWhiteLine.png'; // Hardcode the image path
//     img.style.display = 'block';
//     img.style.position = 'absolute'; // Position the image absolutely
//     img.style.top = '50%'; // Center the image vertically
//     img.style.left = '50%'; // Center the image horizontally
//     img.style.transformOrigin = 'center'; // Set the origin of transformation to the center of the image

//     var initialRotation = Math.floor(Math.random() * 180);
//     img.style.transform = 'rotate(' + initialRotation + 'deg)'; // Apply the rotate transformation

//     img.style.transition = 'transform 0.15s'; // This makes the rotation smooth

//     var keydownHandler = function(event) {
//       var currentRotation = parseFloat(img.style.transform.replace(/rotate\((.*?)deg\)/, '$1')) || 0;

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
//       // display_element.removeChild(containerDot);
//       // display_element.removeChild(containerLine);
//       document.removeEventListener('keydown', keydownHandler); // Remove the event listener
//       jsPsych.finishTrial();
//     }, 3000); // 500 milliseconds = 0.5 seconds
//   };

//   return plugin;
    // var keydownHandler = function(event) {
    //   var currentRotation = parseFloat(img.style.transform.replace(/rotate\((.*?)deg\)/, '$1')) || 0;

    //   switch (event.key) {
    //     case 'D':
    //     case 'd':
    //       // rotate the line clockwise
    //       img.style.transform = 'rotate(' + (currentRotation + 9) + 'deg)';
    //       break;
    //     case 'A':
    //     case 'a':
    //       // rotate the line counterclockwise
    //       img.style.transform = 'rotate(' + (currentRotation - 9) + 'deg)';
    //       break;
    //     case 'W':
    //     case 'w':
    //       // rotate the line clockwise
    //       img.style.transform = 'rotate(' + (currentRotation - 3) + 'deg)';
    //       break;
    //     case 'S':
    //     case 's':
    //       // rotate the line counterclockwise
    //       img.style.transform = 'rotate(' + (currentRotation + 3) + 'deg)';
    //       break;
    //   }
    // };
// })();


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
//     img.style.position = 'fixed'; // Position the image absolutely
//     img.style.top = '50%'; // Center the image vertically
//     img.style.left = '50%'; // Center the image horizontally
//     img.style.transform = 'translate(-50%, -50%)'; // Offset the image by half its height and width
//     var initialRotation = Math.floor(Math.random() * 180);
//     img.style.transform = 'rotate(' + initialRotation + 'deg)';


//     img.style.transition = 'transform 0.15s'; // !!!!!!!!!!!!THIS IS WHAT MAKES THE ROTATION SMOOTH 



  
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
//           img.style.transform = 'rotate(' + (currentRotation - 2) + 'deg)';
//           break;
//         case 'A':
//         case 'a':
//           // rotate the line counterclockwise
//           img.style.transform = 'rotate(' + (currentRotation + 2) + 'deg)';
//           break;
//         case 'W':
//         case 'w':
//           // rotate the line clockwise
//           img.style.transform = 'rotate(' + (currentRotation + 8) + 'deg)';
//           break;
//         case 'S':
//         case 's':
//           // rotate the line counterclockwise
//           img.style.transform = 'rotate(' + (currentRotation - 8) + 'deg)';
//           break;
//       }
//     };

//     // Add the event listener
//     document.addEventListener('keydown', keydownHandler);

//     // Use setTimeout to remove the container after x seconds
//     setTimeout(function() {
//       display_element.removeChild(container);
//       document.removeEventListener('keydown', keydownHandler); // Remove the event listener
//       jsPsych.finishTrial();
//     }, 3000); // milliseconds
//   };

//   return plugin;
// })();




//test with everything centered (including the dot)
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
//     container.style.position = 'fixed'; // Position the container fixed
//     container.style.top = '50%'; // Center the container vertically
//     container.style.left = '50%'; // Center the container horizontally
//     container.style.transform = 'translate(-50%, -50%)'; // Offset the container by half its height and width

//     // Create the image element this is for the white line you ALWAYS want to be displayed
//     var img = document.createElement('img');
//     img.src = 'img1/Whiteline1.png'; // Hardcode the image path
//     img.style.display = 'block';
//     img.style.position = 'absolute'; // Position the image absolutely
//     img.style.top = '50%'; // Center the image vertically
//     img.style.left = '50%'; // Center the image horizontally
//     img.style.transform = 'translate(-50%, -50%)'; // Offset the image by half its height and width

//     var initialRotation = Math.floor(Math.random() * 180);
//     img.style.transform += ' rotate(' + initialRotation + 'deg)'; // Add the rotation

//     img.style.transition = 'transform 0.15s'; // This makes the rotation smooth

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
//     dot.style.zIndex = '1'; // Add a z-index to the dot to bring it to the front

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
//           img.style.transform = 'rotate(' + (currentRotation - 2) + 'deg)';
//           break;
//         case 'A':
//         case 'a':
//           // rotate the line counterclockwise
//           img.style.transform = 'rotate(' + (currentRotation + 2) + 'deg)';
//           break;
//         case 'W':
//         case 'w':
//           // rotate the line clockwise
//           img.style.transform = 'rotate(' + (currentRotation + 8) + 'deg)';
//           break;
//         case 'S':
//         case 's':
//           // rotate the line counterclockwise
//           img.style.transform = 'rotate(' + (currentRotation - 8) + 'deg)';
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
//     }, 3000); // 500 milliseconds = 0.5 seconds
//   };

//   return plugin;
// })();











// plugin for centered experiment

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
//     container.style.position = 'fixed'; // Position the container fixed
//     container.style.top = '50%'; // Center the container vertically
//     container.style.right = '50%'; // Move the container to the right side of the screen
//     container.style.transform = 'translate(50%, -50%)'; // Offset the container by half its height and width

//     // Create the image element this is for the white line you ALWAYS want to be displayed
//     var img = document.createElement('img');
//     img.src = 'img1/Whiteline1.png'; // Hardcode the image path
//     img.style.display = 'block';
//     img.style.position = 'absolute'; // Position the image absolutely
//     img.style.top = '50%'; // Center the image vertically
//     img.style.right = '50%'; // move the image to the right side 
//     img.style.transformOrigin = 'center'; // Set the origin of transformation to the center of the image

//     var initialRotation = Math.floor(Math.random() * 180);
//     img.style.transform = 'translate(-50%, -50%) rotate(' + initialRotation + 'deg)'; // Apply the translate transformation before the rotate transformation

//     img.style.transition = 'transform 0.15s'; // This makes the rotation smooth

//     // Create the dot
//     var dot = document.createElement('div');
//     dot.style.position = 'absolute';
//     dot.style.top = '50%';
//     dot.style.right = '50%';
//     dot.style.width = '10px';
//     dot.style.height = '10px';
//     dot.style.backgroundColor = 'black';
//     dot.style.borderRadius = '50%';
//     dot.style.transform = 'translate(-50%, -50%)';
//     dot.style.zIndex = '1'; // Add a z-index to the dot to bring it to the front

//     // Add the image and dot to the container
//     container.appendChild(img);
//     container.appendChild(dot);

//     // Add the container to the display element
//     display_element.appendChild(container);

//     // Define the event listener
//     var keydownHandler = function(event) {
//       var currentRotation = parseFloat(img.style.transform.replace(/translate\(-50%, -50%\)\srotate\((.*?)deg\)/, '$1')) || 0;

//       switch (event.key) {
//         case 'D':
//         case 'd':
//           // rotate the line clockwise
//           img.style.transform = 'translate(-50%, -50%) rotate(' + (currentRotation - 3) + 'deg)';
//           break;
//         case 'A':
//         case 'a':
//           // rotate the line counterclockwise
//           img.style.transform = 'translate(-50%, -50%) rotate(' + (currentRotation + 3) + 'deg)';
//           break;
//         case 'W':
//         case 'w':
//           // rotate the line clockwise
//           img.style.transform = 'translate(-50%, -50%) rotate(' + (currentRotation + 9) + 'deg)';
//           break;
//         case 'S':
//         case 's':
//           // rotate the line counterclockwise
//           img.style.transform = 'translate(-50%, -50%) rotate(' + (currentRotation - 9) + 'deg)';
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
//     }, 3000); // 500 milliseconds = 0.5 seconds
//   };

//   return plugin;
// })();



// ATTMEPT TO USE TWO CONTAINERS TO MOVE THE SHIT SEPERATELY 
// jsPsych.plugins['display-line'] = (function() {

//   var plugin = {};

//   plugin.info = {
//     name: 'display-line',
//     description: 'plugin for displaying a specific image',
//     parameters: {}
//   };

//   plugin.trial = function(display_element, trial) {
//     // Create a div to hold the image and dot. This helps keep them in line
//     var containerDot = document.createElement('div');
//     containerDot.style.position = 'fixed'; // Position the container fixed
//     containerDot.style.top = '50%'; // Center the container vertically
//     containerDot.style.right = '25%'; // Position the container to the right
//     containerDot.style.transform = 'translate(50%, -50%)'; // Offset the container by half its height and width

//     var containerLine = document.createElement('div');
//     containerLine.style.position = 'fixed'; // Position the container fixed
//     containerLine.style.top = '50%'; // Center the container vertically
//     containerLine.style.right = '50%'; // Position the container to the right
//     containerLine.style.transform = 'translate(50%, -50%)'; // Offset the container by half its height and width

//     // Create the image element this is for the white line you ALWAYS want to be displayed
//     var img = document.createElement('img');
//     img.src = 'img1/Whiteline1.png'; // Hardcode the image path
//     img.style.display = 'block';
//     img.style.position = 'absolute'; // Position the image absolutely
//     img.style.top = '0'; // Center the image vertically
//     img.style.left = '0'; // Center the image horizontally
//     img.style.transformOrigin = 'center'; // Set the origin of transformation to the center of the image

//     var initialRotation = Math.floor(Math.random() * 180);
//     img.style.transform = 'rotate(' + initialRotation + 'deg)'; // Apply the rotate transformation

//     img.style.transition = 'transform 0.15s'; // This makes the rotation smooth

//     display_element.appendChild(containerLine);

//     // Create the dot
//     var dot = document.createElement('div');
//     dot.style.position = 'absolute';
//     dot.style.top = '50%';
//     dot.style.right = '50%';
//     dot.style.width = '10px';
//     dot.style.height = '10px';
//     dot.style.backgroundColor = 'black';
//     dot.style.borderRadius = '50%';
//     dot.style.transform = 'translate(-50%, -50%)';
//     dot.style.zIndex = '1'; // Add a z-index to the dot to bring it to the front

//     // Add the image and dot to the container
//     containerDot.appendChild(img);
//     containerDot.appendChild(dot);

//     // Add the container to the display element
//     display_element.appendChild(containerDot);

//     // Define the event listener
//     var keydownHandler = function(event) {
//       var currentRotation = parseFloat(img.style.transform.replace(/rotate\((.*?)deg\)/, '$1')) || 0;

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
//       display_element.removeChild(containerDot);
//       document.removeEventListener('keydown', keydownHandler); // Remove the event listener
//       jsPsych.finishTrial();
//     }, 3000); // 500 milliseconds = 0.5 seconds
//     setTimeout(function() {
//       display_element.removeChild(containerLine);
//       document.removeEventListener('keydown', keydownHandler); // Remove the event listener
//       jsPsych.finishTrial();
//     }, 3000); // 500 milliseconds = 0.5 seconds
//   };

//   return plugin;
// })();
















//Closest code, issues with window size


// jsPsych.plugins['display-line'] = (function() {

//   var plugin = {};

//   plugin.info = {
//     name: 'display-line',
//     description: 'plugin for displaying a specific image',
//     parameters: {}
//   };

//   plugin.trial = function(display_element, trial) {


//     // // Create a div to hold the image
//     // var containerLine = document.createElement('div');
//     // containerLine.style.position = 'absolute'; // Position the container fixed
//     // containerLine.style.top = '42.66vh'; // Center the container vertically
//     // containerLine.style.right = '45.5vw'; // Position the container to the right

//     // Create the image element this is for the white line you ALWAYS want to be displayed
//     var img = document.createElement('img');
//     img.src = 'img1/TheWhiteLine.png'; // Hardcode the image path
//     img.style.display = 'block';
//     img.style.position = 'absolute'; // Position the image absolutely
//     img.style.top = '50%'; // Center the image vertically
//     img.style.left = '50%'; // Center the image horizontally
//     img.style.transformOrigin = 'center'; // Set the origin of transformation to the center of the image

//     var initialRotation = Math.floor(Math.random() * 180);
//     img.style.transform = 'rotate(' + initialRotation + 'deg)'; // Apply the rotate transformation

//     img.style.transition = 'transform 0.15s'; // This makes the rotation smooth

//     // // Create a div to hold the dot
//     // var containerDot = document.createElement('div');
//     // containerDot.style.position = 'absolute'; // Position the container fixed
//     // containerDot.style.top = '49.5vh'; // Center the container vertically
//     // containerDot.style.right = '25.3vw'; // Position the container to the right
//     // containerDot.style.transform = 'translate(50%, -50%)'; // Offset the container by half its height and width

//     // // Create the dot
//     // var dot = document.createElement('div');
//     // dot.style.position = 'fixed';
//     // dot.style.top = '50%';
//     // dot.style.right = '50%';
//     // dot.style.width = '10px';
//     // dot.style.height = '10px';
//     // dot.style.backgroundColor = 'black';
//     // dot.style.borderRadius = '50%';


//     // Add the image to the container
//     // containerLine.appendChild(img);

//     // Add the container to the display element
//     // display_element.appendChild(containerLine);

//     // // Add the dot to the container
//     // containerDot.appendChild(dot);

//     // // Add the container to the display element
//     // display_element.appendChild(containerDot);

//     // Define the event listener
//     var keydownHandler = function(event) {
//       var currentRotation = parseFloat(img.style.transform.replace(/rotate\((.*?)deg\)/, '$1')) || 0;

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
//       // display_element.removeChild(containerDot);
//       // display_element.removeChild(containerLine);
//       document.removeEventListener('keydown', keydownHandler); // Remove the event listener
//       jsPsych.finishTrial();
//     }, 3000); // 500 milliseconds = 0.5 seconds
//   };

//   return plugin;
// })();



















// jsPsych.plugins['display-line'] = (function() {

//   var plugin = {};

//   plugin.info = {
//     name: 'display-line',
//     description: 'plugin for displaying a specific image',
//     parameters: {}
//   };

//   plugin.trial = function(display_element, trial) {
//     // Create a div to hold the image
//     var containerLine = document.createElement('div');
//     containerLine.style.position = 'fixed'; // Position the container fixed
//     containerLine.style.top = '42.66vh'; // Center the container vertically
//     containerLine.style.right = '45.5vw'; // Position the container to the right

//     // Create the image element this is for the white line you ALWAYS want to be displayed
//     var img = document.createElement('img');
//     img.src = 'img1/Whiteline1.png'; // Hardcode the image path
//     img.style.display = 'block';
//     img.style.position = 'fixed'; // Position the image fixed
//     img.style.top = '50vh'; // Center the image vertically
//     img.style.left = '50vw'; // Center the image horizontally
//     img.style.transformOrigin = 'center'; // Set the origin of transformation to the center of the image

//     var initialRotation = Math.floor(Math.random() * 180);
//     img.style.transform = 'rotate(' + initialRotation + 'deg)'; // Apply the rotate transformation

//     img.style.transition = 'transform 0.15s'; // This makes the rotation smooth

//     // Create a div to hold the dot
//     var containerDot = document.createElement('div');
//     containerDot.style.position = 'fixed'; // Position the container fixed
//     containerDot.style.top = '50vh'; // Center the container vertically
//     containerDot.style.right = '25vw'; // Position the container to the right

//     // Create the dot
//     var dot = document.createElement('div');
//     dot.style.position = 'fixed'; // Position the dot fixed
//     dot.style.top = '50vh';
//     dot.style.right = '50vw';
//     dot.style.width = '10px';
//     dot.style.height = '10px';
//     dot.style.backgroundColor = 'black';
//     dot.style.borderRadius = '50%';

//     // Add the image to the container
//     containerLine.appendChild(img);

//     // Add the container to the display element
//     display_element.appendChild(containerLine);

//     // Add the dot to the container
//     containerDot.appendChild(dot);

//     // Add the container to the display element
//     display_element.appendChild(containerDot);

//     // Define the event listener
//     var keydownHandler = function(event) {
//       var currentRotation = parseFloat(img.style.transform.replace(/rotate\((.*?)deg\)/, '$1')) || 0;

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
//       display_element.removeChild(containerDot);
//       display_element.removeChild(containerLine);
//       document.removeEventListener('keydown', keydownHandler); // Remove the event listener
//       jsPsych.finishTrial();
//     }, 3000); // 500 milliseconds = 0.5 seconds
//   };

//   return plugin;
// })();



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






