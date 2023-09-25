const bgImg = document.querySelector('.bGimg');
const posterImg = document.querySelector('.poster');
const name = document.querySelector('.name');
const artist = document.querySelector('.artist');
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
audio.loop = false;

const arrAudio = [
    {
        'audio': 'audio/nanebo - Friends.mp3',
        'name': 'Friends',
        'artist': 'nanebo'
    },
    {
        'audio': 'audio/nanebo - Mistakes.mp3',
        'name': 'Mistakes',
        'artist': 'nanebo'
    },
    {
        'audio': 'audio/nanebo - Home.mp3',
        'name': 'Home',
        'artist': 'nanebo'
    }

]

audio.src = arrAudio[playNow].audio;

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

audio.addEventListener('loadeddata', () => {
    durationTime.textContent = getTime(audio.duration)
    audio.volume = 0.9;
    duration = audio.duration;
})

audio.onended = function () {
    console.log('df')
    playNow += 1;
    audio.src = arrAudio[playNow].audio;
    audio.play()
    changeImg();
    changeNameArtist();
};

function changeImg() {
    bgImg.classList.add('imgFade');
    posterImg.classList.add('imgFade');

    setTimeout(() => {
        bgImg.src = backImg[playNow].bG;
        posterImg.src = backImg[playNow].poster;
    }, 500)
    setTimeout(() => {
        bgImg.classList.remove('imgFade');
        posterImg.classList.remove('imgFade');
    }, 500)
}

function changeNameArtist() {
    name.classList.add('hidden');
    artist.classList.add('hidden');
    setTimeout(() => {
        name.textContent = arrAudio[playNow].name;
        artist.textContent = arrAudio[playNow].artist;
    }, 500)

    setTimeout(() => {
        name.classList.remove('hidden');
        artist.classList.remove('hidden');
    }, 500)

}

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
        audio.src = arrAudio[playNow].audio;
    } else {
        playNow += 1;
        audio.src = arrAudio[playNow].audio;
    }

    changeImg();
    changeNameArtist();

    if (isPlay) {
        isPlay = false;
        playPause.src = './img/circle-play.svg';
        playPauseAudio()
    }
}

function prevTrack() {
    if (playNow === 0) {
        playNow = arrAudio.length - 1;
        audio.src = arrAudio[playNow].audio;
    } else {
        playNow -= 1;
        audio.src = arrAudio[playNow].audio;
    }

    changeImg();
    changeNameArtist();

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

