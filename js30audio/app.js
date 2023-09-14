const bgImg = document.getElementById('backGroundImg');
// const audio = document.getElementById('audio');
const posterImg = document.getElementById('posterImg');
const name = document.getElementById('name');
const artist = document.getElementById('artist');
const progressBar = document.getElementById('progress_bar');
const currentTime = document.querySelector('.currentTime');
const durationTime = document.querySelector('.durationTime');
const prevBtn = document.getElementById('prevBtn');
const playPause = document.getElementById('play_pause');
const nextBtn = document.getElementById('nextBtn');

const audio = new Audio();

let isPlay = false;
let playNow = 0;
const arrAudio = [
    'audio/nanebo - Friends.mp3',
    'audio/nanebo - Home.mp3',
    'audio/nanebo - Mistakes.mp3',
]

function playPauseAudio() {
    if (!isPlay) {
        audio.src = arrAudio[playNow]
        audio.currentTime = 0;
        audio.play()
        isPlay = true;
        playPause.src = './img/circle-pause.svg';
    } else {
        audio.pause()
        isPlay = false;
        playPause.src = './img/circle-play.svg';
    }
}

function nextTrack() {
    if (playNow === arrAudio.length - 1) {
        playNow = 0;
        isPlay = false;
        playPause.src = './img/circle-play.svg';
        playPauseAudio()
    } else {
        playNow += 1;
        isPlay = false;
        playPause.src = './img/circle-play.svg';
        playPauseAudio();
    }
}

playPause.addEventListener('click', playPauseAudio);
nextBtn.addEventListener('click', nextTrack)