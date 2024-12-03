
const boxContainer = document.querySelector('.Box-Container');
const leftArrow = document.querySelector('.Arrow.left');
const rightArrow = document.querySelector('.Arrow.right');
var move = 0;
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

  if (move == 2) {
    rightArrow.classList.add('Hide');
  } else {
    rightArrow.classList.remove('Hide');
  }
}