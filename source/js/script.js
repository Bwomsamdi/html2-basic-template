let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});

//range-slider
const rangeSlider = document.querySelector('.range__slider');
const inputUpper = document.querySelector('.range__input--upper');
const inputLower = document.querySelector('.range__input--lower');

const inputs = [inputUpper, inputLower];

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 970
    }
  });

  rangeSlider.noUiSlider.on('update', function(values, handle){
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let array = [null, null];
    array[i] = value;
    rangeSlider.noUiSlider.set(array);
  };

  inputs.forEach((element, index) => {
    element.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}

//map
const map = L.map('map').setView([59.968137, 30.316272], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([59.968137, 30.316272]).addTo(map)

//slider-swiper
const swiper = new Swiper(".myswiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
