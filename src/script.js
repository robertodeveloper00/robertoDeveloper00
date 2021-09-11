'use strict';
// // PLAY AND PAUSE ABOUT VIDEO
// // Selectors
// const aboutVideo = document.getElementById('about-video');

// const pauseTag = document.querySelector('.about-video__tag--pause');
// const playTag = document.querySelector('.about-video__tag--play');

// // Functions
// function playVid() {
//   aboutVideo.play();
// }

// function pauseVid() {
//   aboutVideo.pause();
// }

// function togglePlayPause() {
//   aboutVideo.classList.toggle('playing');
//   aboutVideo.classList.toggle('paused');
// }

// function resetHover() {
//   aboutVideo.style.filter = 'brightness(100%)';
//   playTag.classList.add('hidden');
//   pauseTag.classList.add('hidden');
// }

// // Event listeners
// aboutVideo.addEventListener('click', () => {
//   if (aboutVideo.classList.contains('playing')) {
//     pauseVid();
//     togglePlayPause();
//     resetHover();
//   } else if (aboutVideo.classList.contains('paused')) {
//     playVid();
//     togglePlayPause();
//     resetHover();
//   }
// });

// aboutVideo.addEventListener('mouseover', () => {
//   aboutVideo.style.filter = 'brightness(70%)';
//   if (aboutVideo.classList.contains('playing')) {
//     pauseTag.classList.remove('hidden');
//   } else if (aboutVideo.classList.contains('paused')) {
//     playTag.classList.remove('hidden');
//   }
// });

// aboutVideo.addEventListener('mouseout', () => {
//   resetHover();
// });

// PORTFOLIO PAGE
// Project Objects
const projectOneObj = {
  backgroundUrl: 'https://www.nopainnumbing.com/assets/hero-bg.5b4f0377.jpg',
  logoUrl: 'https://www.nopainnumbing.com/assets/No_Pain_logo.d9a41c89.png',
  modalBody: [
    'I was given the opportunity to do some work with <a href="https://lionix.com/">Lionix Evolve</a> and this project is one of the results from it.',
    'I was given a Figma design which I then translated to the web.',
    'I coded everything in this website except for the addresses widget which was coded by another team member while I worked on the layout.',
  ],
  websiteUrl: 'https://www.nopainnumbing.com/',
};

const projectTwoObj = {
  backgroundUrl:
    'https://monasterioanunciada.com/img/extra-img/james-coleman-QHRZv6PIW4s-unsplash.jpg',
  logoUrl: 'https://monasterioanunciada.com/img/logo%20web%20bueno.png',
  modalBody: [
    'This project was created while working with <a href="https://lionix.com/">Lionix Evolve</a>.',
    'I designed and developed this project from scratch, where the branding we had was just the logo.',
    'The look and feel is a marriage between conservative, scripture-like textures and modern Web Design.',
  ],
  websiteUrl: 'https://monasterioanunciada.com/',
};

function generateModal(projectObject) {
  // Constructing Modal Conatiners
  const projectsContainer = document.querySelector('.projects-container');

  const modalContainer = document.createElement('div');
  modalContainer.className = 'modal__container';

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.style.background = `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${projectObject.backgroundUrl}) no-repeat bottom right 90% / cover`;

  modalContainer.append(modal);
  projectsContainer.append(modalContainer);

  // Constructing the header
  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal__header';

  const modalLogo = document.createElement('img');
  modalLogo.src = `${projectObject.logoUrl}`;
  modalLogo.className = 'modal__header--logo';

  const modalExit = document.createElement('img');
  modalExit.src =
    'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%220.69em%22%20height%3D%221em%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%20352%20512%22%3E%3Cpath%20d%3D%22M242.72%20256l100.07-100.07c12.28-12.28%2012.28-32.19%200-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48%200L176%20189.28L75.93%2089.21c-12.28-12.28-32.19-12.28-44.48%200L9.21%20111.45c-12.28%2012.28-12.28%2032.19%200%2044.48L109.28%20256L9.21%20356.07c-12.28%2012.28-12.28%2032.19%200%2044.48l22.24%2022.24c12.28%2012.28%2032.2%2012.28%2044.48%200L176%20322.72l100.07%20100.07c12.28%2012.28%2032.2%2012.28%2044.48%200l22.24-22.24c12.28-12.28%2012.28-32.19%200-44.48L242.72%20256z%22%20fill%3D%22whitesmoke%22%2F%3E%3C%2Fsvg%3E';
  modalExit.className = 'modal__header--exitBtn';

  modalHeader.append(modalLogo);
  modalHeader.append(modalExit);
  modal.appendChild(modalHeader);

  // Constructing the body
  const modalBody = document.createElement('ul');
  modalBody.className = 'modal__body';
  modalBody.classList.add('container');
  modalBody.innerHTML = `
  <li><img class="modal__body--icon" src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%220.88em%22%20height%3D%221em%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%20448%20512%22%3E%3Cpath%20d%3D%22M224.3%20273l-136%20136c-9.4%209.4-24.6%209.4-33.9%200l-22.6-22.6c-9.4-9.4-9.4-24.6%200-33.9l96.4-96.4l-96.4-96.4c-9.4-9.4-9.4-24.6%200-33.9L54.3%20103c9.4-9.4%2024.6-9.4%2033.9%200l136%20136c9.5%209.4%209.5%2024.6.1%2034zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9%200l-22.6%2022.6c-9.4%209.4-9.4%2024.6%200%2033.9l96.4%2096.4l-96.4%2096.4c-9.4%209.4-9.4%2024.6%200%2033.9l22.6%2022.6c9.4%209.4%2024.6%209.4%2033.9%200l136-136c9.4-9.2%209.4-24.4%200-33.8z%22%20fill%3D%22whitesmoke%22%2F%3E%3C%2Fsvg%3E'/>
  <p>${projectObject.modalBody[0]}</p></li>

  <li><img class="modal__body--icon" src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%220.88em%22%20height%3D%221em%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%20448%20512%22%3E%3Cpath%20d%3D%22M224.3%20273l-136%20136c-9.4%209.4-24.6%209.4-33.9%200l-22.6-22.6c-9.4-9.4-9.4-24.6%200-33.9l96.4-96.4l-96.4-96.4c-9.4-9.4-9.4-24.6%200-33.9L54.3%20103c9.4-9.4%2024.6-9.4%2033.9%200l136%20136c9.5%209.4%209.5%2024.6.1%2034zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9%200l-22.6%2022.6c-9.4%209.4-9.4%2024.6%200%2033.9l96.4%2096.4l-96.4%2096.4c-9.4%209.4-9.4%2024.6%200%2033.9l22.6%2022.6c9.4%209.4%2024.6%209.4%2033.9%200l136-136c9.4-9.2%209.4-24.4%200-33.8z%22%20fill%3D%22whitesmoke%22%2F%3E%3C%2Fsvg%3E'/>
  <p>${projectObject.modalBody[1]}</p></li>

  <li><img class="modal__body--icon" src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%220.88em%22%20height%3D%221em%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%20448%20512%22%3E%3Cpath%20d%3D%22M224.3%20273l-136%20136c-9.4%209.4-24.6%209.4-33.9%200l-22.6-22.6c-9.4-9.4-9.4-24.6%200-33.9l96.4-96.4l-96.4-96.4c-9.4-9.4-9.4-24.6%200-33.9L54.3%20103c9.4-9.4%2024.6-9.4%2033.9%200l136%20136c9.5%209.4%209.5%2024.6.1%2034zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9%200l-22.6%2022.6c-9.4%209.4-9.4%2024.6%200%2033.9l96.4%2096.4l-96.4%2096.4c-9.4%209.4-9.4%2024.6%200%2033.9l22.6%2022.6c9.4%209.4%2024.6%209.4%2033.9%200l136-136c9.4-9.2%209.4-24.4%200-33.8z%22%20fill%3D%22whitesmoke%22%2F%3E%3C%2Fsvg%3E'/>
  <p>${projectObject.modalBody[2]}</p></li>
`;

  modal.appendChild(modalBody);

  // Contructing the Footer
  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal__footer';

  modalFooter.innerHTML = `
  <a href="${projectObject.websiteUrl}" target="_blank">Visit Site</a>
  <a href="mailto:robertodeveloper00@gmail.com">Email Me</a>
`;
  modal.appendChild(modalFooter);

  // Close modal
  modalExit.addEventListener('click', () => closeModal());

  // Hide Modal on Outside Click
  window.addEventListener('click', e =>
    e.target == modalContainer ? closeModal() : false
  );

  // Hide Modal on ESC
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalContainer.classList.contains('show-modal')) {
      closeModal();
    }
  });

  // We return the whole Modal Element to be constructed Dynamicaly with a click Listener
  return modalContainer;
}

// OPEN AND CLOSE MODAL
// Selectors
const projectOne = document.querySelector('.project-one');
const projectTwo = document.querySelector('.project-two');

let modalContainer;

function closeModal() {
  modalContainer.classList.remove('show-modal');
}

// Show Modal
projectOne.addEventListener('click', () => {
  modalContainer = generateModal(projectOneObj);
  modalContainer.classList.add('show-modal');
});

projectTwo.addEventListener('click', () => {
  modalContainer = generateModal(projectTwoObj);
  modalContainer.classList.add('show-modal');
});
