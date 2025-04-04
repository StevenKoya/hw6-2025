var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");

  video = document.getElementById("player1");
  video.autoplay = false;
  video.loop = false;
  video.load();

  // Play
  document.getElementById("play").addEventListener("click", function () {
    console.log("Play Video");
    video.play();
    document.getElementById("volume").innerHTML = Math.round(video.volume * 100) + "%";
  });

  //Pause
  document.getElementById("pause").addEventListener("click", function () {
    console.log("Pause Video");
    video.pause();
  });

  //Slow 
  document.getElementById("slower").addEventListener("click", function () {
    video.playbackRate *= 0.9;
    console.log("New speed:", video.playbackRate);
  });

  //Speed 
  document.getElementById("faster").addEventListener("click", function () {
    video.playbackRate /= 0.9;
    console.log("New speed:", video.playbackRate);
  });

  // Skip Ahead
  document.getElementById("skip").addEventListener("click", function () {
    if (video.currentTime + 10 < video.duration) {
      video.currentTime += 10;
    } else {
      video.currentTime = 0;
    }
    console.log("Current time:", video.currentTime);
  });

  // Mute/Unmute
  document.getElementById("mute").addEventListener("click", function () {
    video.muted = !video.muted;
    this.innerHTML = video.muted ? "Unmute" : "Mute";
  });

  // Volume 
  document.getElementById("slider").addEventListener("input", function () {
    video.volume = this.value / 100;
    document.getElementById("volume").innerHTML = this.value + "%";
  });

  // Styled Button (Old School)
  document.getElementById("vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
  });

  // Original Button (Remove Styling)
  document.getElementById("orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
  });
});