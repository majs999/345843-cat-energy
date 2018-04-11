var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector('.page-header');

var sliderToggleBefore = document.querySelector('.slider__toggle--before');
var sliderToggleAfter = document.querySelector('.slider__toggle--after');
var imageBefore = document.querySelector('.slider__image--before');
var imageAfter = document.querySelector('.slider__image--after');
var sliderBar = document.querySelector('.slider__bar');

navMain.classList.remove('main-nav--nojs');
pageHeader.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});

sliderToggleBefore.addEventListener('click', function() {
  imageBefore.classList.remove('slider__image--hidden');
  imageAfter.classList.add('slider__image--hidden');
  sliderBar.classList.remove('slider__bar--after');
  sliderBar.classList.add('slider__bar--before');
});

sliderToggleAfter.addEventListener('click', function() {
  imageAfter.classList.remove('slider__image--hidden');
  imageBefore.classList.add('slider__image--hidden');
  sliderBar.classList.remove('slider__bar--before');
  sliderBar.classList.add('slider__bar--after');
});
