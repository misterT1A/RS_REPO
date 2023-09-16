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
const volume = document.getElementById('volume');
const volumeBtn = document.querySelector('.volume_wrapper');
const volumeProgress = document.querySelector('.volumeProgress');
const volumeCurrent = document.querySelector('.volumeCurrent');

const audio = new Audio();

let isPlay = false;
let playNow = 0;
let duration = 0;
const arrAudio = [
    'audio/nanebo - Friends.mp3',
    'audio/nanebo - Mistakes.mp3',
    'audio/nanebo - Home.mp3',
]

const backImg = [
    {
        'bG': './img/image1.jpg',
        'poster': './img/poster1.jpeg'
    },
    {
        'bG': './img/image2.jpg',
        'poster': './img/poster2.jpg'
    },
    {
        'bG': './img/image3.jpg',
        'poster': './img/poster3.jpg'
    }
]

console.log(backImg[1].bG)
let currentIndex = 0;
setInterval(function () {
    bgImg.classList.add('imgFade');
    bgImg.src = backImg[currentIndex].bG;

    currentIndex++;
    if (currentIndex >= backImg.length) {
        currentIndex = 0;
    }
    setTimeout(() => {
        bgImg.classList.remove('imgFade');
    }, 2500)
}, 2000);




audio.src = arrAudio[playNow];
audio.loop = false;

audio.addEventListener('loadeddata', () => {
    durationTime.textContent = getTime(audio.duration)
    audio.volume = 0.9;
    duration = audio.duration;
})

audio.onended = function () {
    console.log('df')
    playNow += 1;
    audio.src = arrAudio[playNow];
    audio.play()
};

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
        audio.loop = false;
        loop.classList.toggle('active');
    } else {
        audio.loop = true;
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


//переключение по прогрессбару
timeline.addEventListener('click', (e) => {
    const lineWidth = window.getComputedStyle(timeline).width;
    const timeTo = e.offsetX / parseInt(lineWidth) * audio.duration;
    audio.currentTime = timeTo;
})
// прогресс бар
setInterval(() => {
    progress.style.width = audio.currentTime / audio.duration * 100 + '%';
    currentTime.textContent = getTime(audio.currentTime);
}, 500);
///===================

//volume=============

function volumeMute() {
    if (!audio.muted) {
        audio.muted = true;
        volume.src = './img/volume_off.svg';
    } else {
        audio.muted = false;
        volume.src = './img/volume.svg';
    }
}

function changeVolume(e) {
    const progressWidth = window.getComputedStyle(volumeProgress).width;
    const newVolume = e.offsetX / parseInt(progressWidth);
    audio.volume = newVolume;
    volumeCurrent.style.width = newVolume * 100 + '%';
}

volumeProgress.addEventListener('click', changeVolume);
volume.addEventListener('click', volumeMute);
//=======================

