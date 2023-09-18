const input = document.querySelector('.search_input');
const searchIcon = document.querySelector('.search_icon');
const closeIcon = document.querySelector('.close_icon');

const galery = document.querySelector('.galery_inner');

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

const url = 'https://api.unsplash.com/search/photos?query=spring&client_id=IW3Wgnd6Xw3b6ph-2LHMOko8HT4BuIkFPVIFtEoCJFU';


async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}
getData();