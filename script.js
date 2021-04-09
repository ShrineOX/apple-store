// Header background animation
const bgImgs = document.querySelectorAll('.header__background img');
let currImg = 0;

setInterval(() => {
  bgImgs[currImg].classList.remove('show');

  currImg = currImg === bgImgs.length - 1 ? 0 : currImg + 1;
  bgImgs[currImg].classList.add('show');
}, 5000);

// ROATE PHONE
const phone = document.querySelector('.header__iphone');
const leftSlider = document.querySelector('#rotate-left');
const upSlider = document.querySelector('#rotate-up');
// const stopBtn = document.querySelector('.rotate-stop');
let x = 0,
  y = 0,
  z = 0;
let xSpeed = 0,
  ySpeed = 0,
  zSpeed = 0;
xSpeed = 1;

upSlider.addEventListener('change', () => {
  ySpeed = Number(upSlider.value);
  console.log(upSlider.value);
  rotatePhone();
});

leftSlider.addEventListener('change', () => {
  xSpeed = Number(leftSlider.value);
  console.log(leftSlider.value);
  rotatePhone();
});

function rotatePhone() {
  let rotateInterval = setInterval(() => {
    x += xSpeed;
    y += ySpeed;
    z += zSpeed;
    phone.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  }, 500);
}
rotatePhone();

// MACBOOK LOADING EVENT
const macbookHeading = document.querySelector('.macbook__heading');
const macbookContainer = document.querySelector('.macbook__container');

macbookHeading.addEventListener('mouseover', () => {
  macbookContainer.classList.toggle('loading');
});

// WATCH SECTION
const faceContainer = document.querySelector('.watch__face-container');
const bandContainer = document.querySelector('.watch__band-container');
const FACE_NUMBER = 9;
const BAND_NUMBER = 9;

// insert faces
for (let i = 1; i <= FACE_NUMBER; i++) {
  const html = `<img class="watch__face watch__face--1" src="images/watches/watch-case-${i}.png" alt="watch face ${i}" >`;
  faceContainer.insertAdjacentHTML('beforeend', html);
}

// insert bands
for (let i = 1; i <= BAND_NUMBER; i++) {
  const html = `<img class="watch__band watch__band--1" src="images/watches/watch-band-${i}.jpg" alt="watch band ${i}" >`;
  bandContainer.insertAdjacentHTML('beforeend', html);
}

// NAVIGATION BUTTONS IN CHOOSING WATCH SECTION
const upBtn = document.querySelector('.watch__up');
const downBtn = document.querySelector('.watch__down');
const leftBtn = document.querySelector('.watch__left');
const rightBtn = document.querySelector('.watch__right');
let currentBand = 5;
let currentFace = 5;
let currentY = 0;
let currentX = 0;

upBtn.addEventListener('click', () => {
  currentY += 50;
  faceContainer.style.marginTop = currentY + 'rem';
  currentFace--;
  if (currentFace === 1) upBtn.style.display = 'none';

  downBtn.style.display = 'block';
});

downBtn.addEventListener('click', () => {
  currentY -= 50;
  faceContainer.style.marginTop = currentY + 'rem';
  currentFace++;
  if (currentFace === FACE_NUMBER) downBtn.style.display = 'none';

  upBtn.style.display = 'block';
});

leftBtn.addEventListener('click', () => {
  currentX += 50;
  bandContainer.style.marginLeft = currentX + 'rem';
  currentBand--;
  if (currentBand === 1) leftBtn.style.display = 'none';

  rightBtn.style.display = 'block';
});

rightBtn.addEventListener('click', () => {
  currentX -= 50;
  bandContainer.style.marginLeft = currentX + 'rem';
  currentBand++;
  if (currentBand === BAND_NUMBER) rightBtn.style.display = 'none';

  leftBtn.style.display = 'block';
});
