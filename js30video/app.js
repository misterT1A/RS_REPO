const videoWrapper = document.querySelector('.video_player_wrapper');
const video = videoWrapper.querySelector('.video');
const progressBar = videoWrapper.querySelector('.progress_bar');
const progress = videoWrapper.querySelector('.progress');
const playPause = videoWrapper.querySelector('.play_pause');
const btnSkip = videoWrapper.querySelectorAll('.btn[data-skip]')
const speed = videoWrapper.querySelector('.speed');
const volume = videoWrapper.querySelector('.volume');
const volumeProgress = videoWrapper.querySelector('.volume_progress');
const fullscreen = videoWrapper.querySelector('.fullscreen');
const currentTime = videoWrapper.querySelector('.current_time');
const durationTime = videoWrapper.querySelector('.duration_time');

let duration;

console.log(btnSkip)

video.addEventListener('loadeddata', () => {
    durationTime.textContent = getTime(video.duration)
    video.volume = 0.9;
    duration = video.duration;
})

video.addEventListener('click', playPauseScreen);
playPause.addEventListener('click', playPauseScreen);
fullscreen.addEventListener('click', tofullScreen);
speed.addEventListener('click', changeSpeed);
btnSkip.forEach((elem) => { elem.addEventListener('click', toSkip) });

//toggle video===========
function playPauseScreen() {
    if (video.paused) {
        video.play();
        playPause.src = './src/img/pause-svgrepo-com.svg';
    } else {
        video.pause();
        playPause.src = './src/img/play-svgrepo-com.svg';
    }
}

//==============
// progress bar ==============================
progressBar.addEventListener('click', (e) => {
    const progressWidth = window.getComputedStyle(progressBar).width;
    const progressTimeTO = e.offsetX / parseInt(progressWidth) * video.duration;
    video.currentTime = progressTimeTO;
    console.log(progressTimeTO)
})

setInterval(() => {
    progress.style.width = video.currentTime / video.duration * 100 + '%';
    currentTime.textContent = getTime(video.currentTime);
}, 500)

function getTime(num) {
    let sec = parseInt(num);
    let min = parseInt(sec / 60);
    sec -= min * 60;
    if (+sec < 10) {
        return `${min}:0${sec}`;
    } else {
        return `${min}:${sec}`;
    }
}
//=========================
//volume=============
function volumeMute() {
    if (!video.muted) {
        video.muted = true;
        volume.src = './src/img/volume-cross-svgrepo-com.svg';
    } else {
        video.muted = false;
        volume.src = './src/img/volume-loud-svgrepo-com.svg';
    }
}

function changeVolume(e) {
    video.volume = volumeProgress.value;
}

volumeProgress.addEventListener('click', changeVolume);
volume.addEventListener('click', volumeMute);
//=======================

function tofullScreen() {
    console.log(video.requestFullscreen)
    video.requestFullscreen();
}

function changeSpeed() {
    video.playbackRate = speed.value;
}

function toSkip() {
    video.currentTime += +(this.dataset.skip);
}