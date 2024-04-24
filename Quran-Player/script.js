
      let progress = document.getElementById("progress");
      let quran = document.getElementById("quran");
      let ctrlIcon = document.getElementById("ctrlIcon");

      quran.onloadedmetadata = function () {
        progress.max = quran.duration;
        progress.value = quran.currentTime;
      };

      function playPause() {
        if (ctrlIcon.classList.contains("fa-pause")) {
          quran.pause();
          ctrlIcon.classList.remove("fa-pause");
          ctrlIcon.classList.add("fa-play");
        } else {
          quran.play();
          ctrlIcon.classList.add("fa-pause");
          ctrlIcon.classList.remove("fa-play");
        }
      }

      if (quran.play()) {
        setInterval(() => {
          progress.value = quran.currentTime;
        }, 500);
      }

      progress.onchange = function () {
        quran.play();
        quran.currentTime = progress.value;
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
      };
