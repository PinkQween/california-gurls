document.addEventListener('DOMContentLoaded', function () {
    var playButton = document.getElementById('play-button');
    var youtubePlayer = document.getElementById('youtube-player');

    playButton.addEventListener('click', function () {
        if (youtubePlayer.paused) {
            youtubePlayer.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
            playButton.style.backgroundImage = 'url("../assets/mute.png")'
        } else {
            youtubePlayer.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        }
    });
});
