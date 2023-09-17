const videoWrapper = document.querySelector('.video_player_wrapper');
const video = videoWrapper.querySelector('.video');
const progressBar = videoWrapper.querySelector('.progress_bar');
const progress = videoWrapper.querySelector('.progress');
const playPause = videoWrapper.querySelector('.play_pause');
const prev = videoWrapper.querySelector('.prev');
const next = videoWrapper.querySelector('.next');
const speed = videoWrapper.querySelector('.speed');
const volume = videoWrapper.querySelector('.volume');
const volumeProgress = videoWrapper.querySelector('.volume_progress');
const fullscreen = videoWrapper.querySelector('.fullscreen');

let currentTime;
let durationTime;

// playPause.addEventListener('click', () => {
//     video.play();
// })
video.addEventListener('click', playPauseScreen);


//======================
async function getDuration(file) {
    const url = './src/video/video (1080p).mp4';
    return new Promise((resolve) => {
        const audio = document.createElement("audio");
        audio.muted = true;
        const source = document.createElement("source");
        source.src = url;
        audio.preload = "metadata";
        audio.appendChild(source);
        audio.onloadedmetadata = function () {
            resolve(audio.duration)
        };
    });
}
const uploadFile = async (event) => {
    const duration = await getDuration('./src/video/video (1080p).mp4');
    durationTime = duration;
}

uploadFile()
//=================================

//toggle video===========



function playPauseScreen() {
    if (video.paused) {
        video.play();
        playPause.src = './src/img/pause-svgrepo-com.svg';
        updateProgress();
    }
}

function updateProgress() {
    let progress = video.currentTime / durationTime;
    console.log(durationTime)
}

