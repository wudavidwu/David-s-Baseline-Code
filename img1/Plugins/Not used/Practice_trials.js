// jsPsych.plugins['run-practice'] = (function() {

//   var plugin = {};

//   plugin.info = {
//     name: 'run-practice',
//     description: 'runs practice trials before the actual experiment',
//     parameters: {
//       repetitions: {
//         type: jsPsych.plugins.parameterType.INT,
//         default: 10
//       }
//     }
//   };

//   plugin.trial = function(display_element, trial) {
//     // Define the trials to run
//     var spacebarTrial = {
//       type: 'html-keyboard-response',
//       stimulus: 'Press space to continue.',
//       choices: [' '] 
//     };
//     var displayLineTrial = {
//       type: 'display-line', //works off of the other plugin. This can be changed to be another plugin/experiment
//     };
//     var displayImgTrial = {
//       type: 'display-image', //calls the plugin that selects a random image from the source 
//     };

//     // Create a timeline
//     var practiceTimeline = [];

//     // Add the trials to the timeline
//     for (var i = 0; i < trial.repetitions; i++) {
//       practiceTimeline.push(spacebarTrial);
//       practiceTimeline.push(displayLineTrial);
//       practiceTimeline.push(displayImgTrial);
//     }

//     // Finish the current trial
//     jsPsych.finishTrial();

//     // Run the timeline
//     jsPsych.init({
//       timeline: practiceTimeline
//     });
//   };

//   return plugin;
// })();

// jsPsych.plugins['run-practice'] = (function() {

//   var plugin = {};

//   plugin.info = {
//     name: 'run-practice',
//     description: 'runs practice trials before the actual experiment',
//     parameters: {
//       repetitions: {
//         type: jsPsych.plugins.parameterType.INT,
//         default: 10
//       }
//     }
//   };

//   plugin.trial = function(display_element, trial) {
//     // Define the trials to run
//     var spacebarTrial = {
//       type: 'html-keyboard-response',
//       stimulus: 'Press space to continue.',
//       choices: [' '] 
//     };
//     var displayImage = {
//       type: 'display-img'
//     };

//     // Create a timeline
//     var practiceTimeline = [];

//     // Add the trials to the timeline
//     for (var i = 0; i < trial.repetitions; i++) {
//       practiceTimeline.push(spacebarTrial);
//       practiceTimeline.push(displayImage);
//     }

//     // Finish the current trial
//     jsPsych.finishTrial();

//     // Run the timeline
//     jsPsych.init({
//       timeline: practiceTimeline
//     });
//   };

//   return plugin;
// })();

jsPsych.plugins['run-practice'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'run-practice',
    description: 'runs practice trials before the actual experiment',
    parameters: {
      repetitions: {
        type: jsPsych.plugins.parameterType.INT,
        default: 10
      }
    }
  };

//   plugin.trial = function(display_element, trial) {
//     // Define the trials to run
//     var spacebarTrial = {
//       type: 'html-keyboard-response',
//       stimulus: 'Press space to continue.',
//       choices: [' '] 
//     };
//     var displayImage = {
//       type: 'display-img'
//     };
//     var displayLineTrial = {
//       type: 'display-line',
//     };
    

//     // Create a timeline
//     var practiceTimeline = [];

//     // Add the trials to the timeline
//     for (var i = 0; i < trial.repetitions; i++) {
//       practiceTimeline.push(spacebarTrial);
//       practiceTimeline.push(displayImage);
//       practiceTimeline.push(displayLineTrial);
//     }
//     trialList.push(afterPracticeInstructions);
//     // // Create a timeline variable
//     // var timelineVariable = new jsPsych.timelineVariable('practiceTimeline', practiceTimeline);

//     // // Add the timeline variable to the timeline
//     // jsPsych.addNodeToTimeline(timelineVariable, function() {
//     //   // This function is called when the practice timeline finishes
//     //   jsPsych.finishTrial();
//     });
//   };

//   return plugin;
// })();


plugin.trial = function(display_element, trial) {
  // Define the trials to run
  var spacebarTrial = {
    type: 'html-keyboard-response',
    stimulus: 'Press space to continue.',
    choices: [' '] 
  };
  var displayImage = {
    type: 'display-img'
  };
  var displayLineTrial = {
    type: 'display-line',
  };

  var practiceTimeline = [];

  // Add the trials to the timeline
  for (var i = 0; i < trial.repetitions; i++) {
    practiceTimeline.push(spacebarTrial);
    practiceTimeline.push(displayImage);
    practiceTimeline.push(displayLineTrial);
  }

  // Start the practice trials
  jsPsych.init({
    timeline: practiceTimeline,
    on_finish: function() {
      // This function is called when the practice trials finish
      jsPsych.finishTrial();
    }
  });
};

return plugin;
})();
