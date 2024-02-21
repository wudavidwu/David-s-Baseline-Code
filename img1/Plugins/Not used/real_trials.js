jsPsych.plugins['run-trials'] = (function() {

    var plugin = {};
  
    plugin.info = {
      name: 'run-trials',
      description: 'runs the actual experiment',
      parameters: {
        repetitions: {
          type: jsPsych.plugins.parameterType.INT,
          default: 10
        }
      }
    };
  
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
  
      // Create a timeline
      var practiceTimeline = [];
  
      // Add the trials to the timeline
      for (var i = 0; i < trial.repetitions; i++) {
        practiceTimeline.push(spacebarTrial);
        practiceTimeline.push(displayImage);
      }
  
      // Finish the current trial
      jsPsych.finishTrial({timeline: practiceTimeline});
    };
  
    return plugin;
  })();
  