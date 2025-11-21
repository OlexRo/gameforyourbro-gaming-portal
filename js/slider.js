let sliderArray = ['img/slider/witcher_slider.jpg', 'img/slider/Assassins-creed-slider.jpg', 'img/slider/fallout-slider.jpg', 'img/slider/far-cry-slider.jpg', 'img/slider/skyrim-slider.jpg'];
let index = 0;

let slider = document.querySelector('#slider-img');
slider.src = sliderArray[index];

let next = document.querySelector('#next');
next.addEventListener('click', () => {
    index ++;
    if (index >= sliderArray.length)
        index = 0;
    slider.src = sliderArray[index];
})

let prev = document.querySelector('#prev');
prev.addEventListener('click', () => {
    index --;
    if (index < 0)
        index = sliderArray.length -1;
    slider.src = sliderArray[index];
})