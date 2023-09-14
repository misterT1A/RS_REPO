const bgImg = document.getElementById('backGroundImg');
// const audio = document.getElementById('audio');
const posterImg = document.getElementById('posterImg');
const name = document.getElementById('name');
const artist = document.getElementById('artist');
const timeline = document.querySelector('.timeline');
const progress = document.querySelector('.progress');
const currentTime = document.querySelector('.currentTime');
const durationTime = document.querySelector('.durationTime');
const prevBtn = document.getElementById('prevBtn');
const playPause = document.getElementById('play_pause');
const nextBtn = document.getElementById('nextBtn');
const loop = document.getElementById('loop');

const audio = new Audio();

let isPlay = false;
let playNow = 0;
const arrAudio = [
    'audio/nanebo - Friends.mp3',
    'audio/nanebo - Mistakes.mp3',
    'audio/nanebo - Home.mp3',
]
audio.src = arrAudio[playNow];
audio.loop = true;

function playPauseAudio() {
    if (audio.paused) {
        // console.log(audio.currentTime)
        // if (audio.currentTime === 0) {
        //     audio.currentTime = 0;
        // }
        // audio.src = arrAudio[playNow]
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
        audio.src = arrAudio[playNow];
    } else {
        playNow += 1;
        audio.src = arrAudio[playNow]
    }

    if (isPlay) {
        isPlay = false;
        playPause.src = './img/circle-play.svg';
        playPauseAudio()
    }
}

function prevTrack() {
    if (playNow === 0) {
        playNow = arrAudio[arrAudio.length - 1];
        audio.src = arrAudio[playNow];
    } else {
        playNow -= 1;
        audio.src = arrAudio[playNow]
    }

    if (isPlay) {
        isPlay = false;
        playPause.src = './img/circle-play.svg';
        playPauseAudio()
    }
}

function repeatTrack() {
    if (audio.loop) {
        audio.loop = true;
        loop.classList.toggle('active');
    } else {
        audio.loop = false;
        loop.classList.toggle('active');
    }
}

playPause.addEventListener('click', playPauseAudio);
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);
loop.addEventListener('click', repeatTrack);

//timeline=============
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

audio.addEventListener('loadeddata', () => {
    durationTime.textContent = getTime(audio.duration)
    audio.volume = 0.9;
})
//переключение по прогрессбару
timeline.addEventListener('click', (e) => {
    const lineWidth = window.getComputedStyle(timeline).width;
    const timeTo = e.offsetX / parseInt(lineWidth) * audio.duration;
    audio.currentTime = timeTo;
    console.log(audio.currentTime)
})
// прогресс бар
setInterval(() => {
    progress.style.width = audio.currentTime / audio.duration * 100 + '%';
    currentTime.textContent = getTime(audio.currentTime);
}, 500);
///===================


