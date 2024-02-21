class jsPsychDisplayImg {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
  
    info = {
      name: "display-img",
      description: "plugin for displaying a specific image",
      parameters: {
        // add any parameters that you want to use for your plugin
      }
    };
  
    trial(display_element, trial) {
      // Create a div to hold the image. This helps keep them in line
      var container = document.createElement("div");
      container.style.position = "fixed"; // Position the container fixed
      container.style.top = "50%"; // Center the container vertically
      container.style.left = "27%"; // Center the container horizontally
      container.style.transform = "translate(-50%, -50%)"; // Offset the container by half its height and width
  
      var chosen = Math.floor(Math.random() * 10) + 1;
      var img = document.createElement("img");
      img.src = "img1/" + chosen + ".png"; // Hardcode the image path
      img.style.display = "block";
      img.style.position = "absolute"; // Position the image absolutely
      img.style.transform = "translate(-50%, -50%)"; // Offset the image by half its height and width
      img.style.maxHeight = "90vh";
      img.style.maxWidth = "90vw";
      var initialRotationImg = Math.floor(Math.random() * 180);
      img.style.transform += " rotate(" + initialRotationImg + "deg)"; // Add the rotation
  
      img.style.transition = "transform 0.15s"; // This makes the rotation smooth
  
      // Add the image to the container
      container.appendChild(img);
      // container.appendChild(containerSize)
  
      // Add the container to the display element
      display_element.appendChild(container);
      // display_element.appendChild(containerSize);
  
      // Call the 'display-line' plugin
      this.jsPsych.plugins["display-line"].trial(display_element, trial);
  
      // Use setTimeout to remove the container after 5 seconds
      setTimeout(() => {
        display_element.removeChild(container); // Remove the event listener
        this.jsPsych.finishTrial();
      }, 3000); // milliseconds
    }
  }
  
  export default jsPsychDisplayImg;
  