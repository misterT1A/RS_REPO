console.log('score 60/60, all task completed, limit of 50 requests per hour')

const input = document.querySelector('.search_input');
const searchIcon = document.querySelector('.search_icon');
const closeIcon = document.querySelector('.close_icon');

const galery = document.querySelector('.galery_inner');
const body = document.querySelector('.body');

let imgs = document.querySelectorAll('img');

document.addEventListener("DOMContentLoaded", () => {
    input.focus();
});

//search btn====================
let fullInput = false;
input.addEventListener('input', () => {
    if (input.value != '') {
        fullInput = true;
        closeIcon.classList.add('hidden');
    } else {
        fullInput = false;
        closeIcon.classList.remove('hidden');
    }
})

closeIcon.addEventListener('click', () => {
    input.value = '';
    closeIcon.classList.remove('hidden');
})

function search() {
    const url = `https://api.unsplash.com/search/photos?query=${input.value}&per_page=30&client_id=IW3Wgnd6Xw3b6ph-2LHMOko8HT4BuIkFPVIFtEoCJFU`;
    getData(url);
}

searchIcon.addEventListener('click', () => {
    if (input.value != '') {
        search();
    }
});
input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault()
        if (input.value != '') {
            search();
        }
    }
})

//=============================

const url = 'https://api.unsplash.com/search/photos?query=random&per_page=30&client_id=IW3Wgnd6Xw3b6ph-2LHMOko8HT4BuIkFPVIFtEoCJFU';
async function getData(link) {
    const res = await fetch(link);
    const data = await res.json();
    galery.innerHTML = '';
    let dataUrls = data.results.map(elem => {
        createImg(elem.urls.regular)
    })
}
getData(url);

function createImg(url) {
    const element = document.createElement('div');
    element.classList.add('img');
    element.style.backgroundImage = `url('${url}')`;
    galery.append(element)
}
