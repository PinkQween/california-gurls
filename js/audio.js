document.addEventListener('DOMContentLoaded', () => {
    var playButton = document.getElementById('play-button');
    var youtubePlayer = document.getElementById('audio');

    console.log(youtubePlayer);

    youtubePlayer.volume = 0;

    playButton.addEventListener('click', () => {
        console.log("click");

        if (playButton.style.backgroundImage == 'url("../assets/mute.png")') {
            fadeAudioIn(youtubePlayer, 2000); // Fade in over 2000 milliseconds (2 seconds)
            playButton.style.backgroundImage = 'url("../assets/icons8-speaker-96.png")';
        } else {
            fadeAudioOut(youtubePlayer, 2000); // Fade out over 2000 milliseconds (2 seconds)
            playButton.style.backgroundImage = 'url("../assets/mute.png")';
        }
    });
});

const fadeAudioIn = (audioElement, duration) => {
    var interval = 5; // Lower interval for smoother fade
    var volumeIncrement = 1 / (duration / interval);
    var currentVolume = audioElement.volume;

    var fadeInterval = setInterval(function () {
        if (currentVolume < 1) {
            currentVolume += volumeIncrement;
            if (currentVolume > 1) {
                currentVolume = 1;
            }
            audioElement.volume = currentVolume;
        } else {
            clearInterval(fadeInterval);
        }
    }, interval);
}

const fadeAudioOut = (audioElement, duration) => {
    var interval = 5; // Lower interval for smoother fade
    var volumeDecrement = audioElement.volume / (duration / interval);
    var currentVolume = audioElement.volume;

    var fadeInterval = setInterval(function () {
        if (currentVolume > 0) {
            currentVolume -= volumeDecrement;
            if (currentVolume < 0) {
                currentVolume = 0;
            }
            audioElement.volume = currentVolume;
        } else {
            clearInterval(fadeInterval);
        }
    }, interval);
}