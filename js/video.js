window.onload = function() {
  // Get the video.
  var video = document.getElementById("myVideo");

  // Play button variable.
  var playBtn = document.getElementById("playBtn");
  // Add an event listener for the Play button.
  playBtn.addEventListener("click", function(e) {
    // Play the video.
    video.play();
  });

  // Pause button variable.
  var pauseBtn = document.getElementById("pauseBtn");
  // Add an event listener for the Pause button.
  pauseBtn.addEventListener("click", function(e) {
    // Pause the video.
    video.pause();
  });

  // Seek button variable.
  var seekBar = document.getElementById("seekBar");
  // Add an event listener for the Seek bar.
  seekBar.addEventListener("change", function(e) {
    // Calculate the time in the video that playback should be moved to.
    var time = video.duration * (seekBar.value/100); 
        
    // Update the current time in the video.
    video.currentTime = time;
  });

  // Update the Seek bar as the video plays.
  video.addEventListener("timeupdate", function(e) {
    // Calculate the slider handle value.
    var handle = (100/video.duration) * video.currentTime;
        
    // Update the slider value.
    seekBar.value = handle;
  });

  // Pause playback when the video starts seeking.
  seekBar.addEventListener("mousedown", function(e) {
    video.pause();
  });

  // Continue playback when the video stops seeking.
  seekBar.addEventListener("mouseup", function(e) {
    video.play();
  });

  // Creating the volume button.
  var volumeControl = document.getElementById("volume");
  // Add an event listener for the volume control.
  volumeControl.addEventListener("change", function(e) {
    // Update the video's volume property.
    video.volume = volumeControl.value;
  });

  // Mute button variable.
  var muteBtn = document.getElementById("muteBtn");
  // Add an event listener for the Mute button.
  muteBtn.addEventListener("click", function(e) {
    // Mute/Unmute the video. I reversed the order of the code (IF&ELSE).
    if (video.muted == false) {
      video.muted = true;
      muteBtn.textContent = "UNMUTE";
    } else {
      video.muted = false;
      muteBtn.textContent = "MUTE";
    }
  });
}; 