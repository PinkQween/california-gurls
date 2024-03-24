document.addEventListener('DOMContentLoaded', () => {
    var playButton = document.getElementById('play-button');
    var youtubePlayer = document.getElementById('youtube-player');

    console.log(youtubePlayer)

    youtubePlayer.volume = 0;

    playButton.addEventListener('click', () => {
        console.log("click");

        if (youtubePlayer.volume == 0) {
            youtubePlayer.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
            // playButton.style.backgroundImage = 'url("../assets/icons8-speaker-96.png")'
            playButton.style.backgroundImage = '../assets/icons8-speaker-96.png'
        } else {
            youtubePlayer.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            // playButton.style.backgroundImage = 'url("../assets/mute.png")'
            playButton.style.backgroundImage = '../assets/mute.png'
        }
    });
});
