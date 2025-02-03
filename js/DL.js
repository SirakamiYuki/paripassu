
const boxContainer = document.querySelector('.Box-Container');
const leftArrow = document.querySelector('.Arrow.left');
const rightArrow = document.querySelector('.Arrow.right');
var move = 0;

var limit = document.querySelectorAll('.Box-Container > .Box').length -2

updateArrowVisibility()
leftArrow.addEventListener('click', () => {

  boxContainer.style.transform += `translateX(${50}%)`;
move--;
updateArrowVisibility()
});

rightArrow.addEventListener('click', () => {
 
  boxContainer.style.transform += `translateX(-${50}%)`;
move++;
updateArrowVisibility()
});


function updateArrowVisibility() {
  if (move == 0) {
    leftArrow.classList.add('Hide');
  } else {
    leftArrow.classList.remove('Hide');
  }

  if (move == limit) {
    rightArrow.classList.add('Hide');
  } else {
    rightArrow.classList.remove('Hide');
  }
}
