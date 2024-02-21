class jsPsychDisplayLine {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
  
    info = {
      name: "display-line",
      description: "plugin for displaying a line and allowing the subject to rotate it using the keyboard",
      parameters: {
        // add any parameters that you want to use for your plugin
      }
    };
  
    trial(display_element, trial) {
      var img = document.createElement("img");
      img.src = "img1/TheWhiteLine.png"; // Hardcode the image path
      img.style.display = "block";
      img.style.position = "absolute"; // Position the image absolutely
      img.style.top = "50%"; // Center the image vertically
      img.style.right = "5%"; // Position the image 25% from the right of the screen
      img.style.transformOrigin = "center"; // Set the origin of transformation to the center of the image
      img.style.transform = "translateY(-50%)"; // Center the image vertically
      img.style.maxWidth = "42%"; // Ensure the image is not wider than the screen
      img.style.maxHeight = "42%"; // Ensure the image is not taller than the screen
  
      var initialRotationLine = Math.floor(Math.random() * 180);
      img.style.transform += " rotate(" + initialRotationLine + "deg)"; // Apply the rotate transformation
      this.jsPsych.data.addDataToLastTrial({ initialRotationLine: initialRotationLine }); // adding the initial rotation to the savedata
      var finalRotationLine = initialRotationLine;
      img.style.transition = "transform .1625s"; // This makes the rotation smooth
      const keydownHandler = (event) => {
        var currentRotation = parseFloat(img.style.transform.replace(/rotate\((.*?)deg\)/, "$1")) || 0;
  
        switch (event.key) {
          case "D":
          case "d":
            // rotate the line clockwise
            finalRotationLine = currentRotation + 7.5;
            img.style.transform = "rotate(" + finalRotationLine + "deg)";
            break;
          case "A":
          case "a":
            // rotate the line counterclockwise
            finalRotationLine = currentRotation - 7.5;
            img.style.transform = "rotate(" + finalRotationLine + "deg)";
            break;
          case "W":
          case "w":
            // rotate the line clockwise
            finalRotationLine = currentRotation - 2.5;
            img.style.transform = "rotate(" + finalRotationLine + "deg)";
            break;
          case "S":
          case "s":
            // rotate the line counterclockwise
            finalRotationLine = currentRotation + 2.5;
            img.style.transform = "rotate(" + finalRotationLine + "deg)";
            break;
        }
      };
  
      this.jsPsych.data.addDataToLastTrial({ finalRotationLine: finalRotationLine }); //adding the final rotation to the savedata
      // Add the event listener
      document.addEventListener("keydown", keydownHandler);
  
      // Add the image to the display element
      display_element.appendChild(img);
  
      // Use setTimeout to remove the container after 3 seconds
      setTimeout(() => {
        document.removeEventListener("keydown", keydownHandler); // Remove the event listener
        this.jsPsych.finishTrial();
      }, 3000); // 3000 milliseconds = 3 seconds
    }
  }
  
  export default jsPsychDisplayLine;
  