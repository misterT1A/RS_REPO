const input = document.querySelector('.search_input');
const searchIcon = document.querySelector('.search_icon');
const closeIcon = document.querySelector('.close_icon');

const galery = document.querySelector('.galery_inner');
const body = document.querySelector('.body');

let imgs = document.querySelectorAll('img');

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
//=============================

// const url = 'https://api.unsplash.com/search/photos?query=winter&per_page=30&client_id=IW3Wgnd6Xw3b6ph-2LHMOko8HT4BuIkFPVIFtEoCJFU';
// const url = 'https://type.fit/api/quotes';

// async function getData() {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
//     galery.innerHTML = '';
//     // let dataUrls = data.results.map(elem => {

//     //     console.log(elem.urls.regular)

//     //     createImg(elem.urls.regular)
//     // })
//     localStorage.setItem('data', JSON.stringify(data));
// }
// getData();
let data = JSON.parse(localStorage.getItem('data'));
galery.innerHTML = '';
let arrUrl = data.results.map(elem => {
    createImg(elem.urls.regular)
})

function createImg(url) {
    const element = document.createElement('div');
    element.classList.add('img');
    element.style.backgroundImage = `url('${url}')`;
    galery.append(element)
}
