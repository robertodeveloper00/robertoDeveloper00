'use strict';
// PLAY AND PAUSE ABOUT VIDEO
// Selectors
const aboutVideo = document.getElementById('about-video');

const pauseTag = document.querySelector('.about-video__tag--pause');
const playTag = document.querySelector('.about-video__tag--play');

// Functions
function playVid() {
  aboutVideo.play();
}

function pauseVid() {
  aboutVideo.pause();
}

function togglePlayPause() {
  aboutVideo.classList.toggle('playing');
  aboutVideo.classList.toggle('paused');
}

function resetHover() {
  aboutVideo.style.filter = 'brightness(100%)';
  playTag.classList.add('hidden');
  pauseTag.classList.add('hidden');
}

// Event listeners
aboutVideo.addEventListener('click', () => {
  if (aboutVideo.classList.contains('playing')) {
    pauseVid();
    togglePlayPause();
    resetHover();
  } else if (aboutVideo.classList.contains('paused')) {
    playVid();
    togglePlayPause();
    resetHover();
  }
});

aboutVideo.addEventListener('mouseover', () => {
  aboutVideo.style.filter = 'brightness(70%)';
  if (aboutVideo.classList.contains('playing')) {
    pauseTag.classList.remove('hidden');
  } else if (aboutVideo.classList.contains('paused')) {
    playTag.classList.remove('hidden');
  }
});

aboutVideo.addEventListener('mouseout', () => {
  resetHover();
});
