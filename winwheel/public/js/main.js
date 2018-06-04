$(document).ready(function() {
          var obj = document.createElement("audio");
          obj.src = "public/audio/quay2.mp3";
          obj.volume = 1;
          obj.autoPlay = false;
          obj.preLoad = true;
          obj.controls = true;

          $("#spin_button").click(function() {
            obj.play();
    // obj.pause();
});
      });