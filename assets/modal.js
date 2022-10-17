const switchModal = () => {
  const modal = document.querySelector('.modal');
  const actualStyle = modal.style.display;
  if(actualStyle == 'block') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'flex';
  }
};

const btn = document.querySelector('#join-now');
btn.addEventListener('click', switchModal);

window.onclick = function(event) {
  const modal = document.querySelector('.modal');
  if (event.target == modal) {
    switchModal();
  }
};

// Close modal
const closeModal = () => {
  const modal = document.querySelector('.modal');
  const actualStyle = modal.style.display;
  if(actualStyle == 'block') {
    modal.style.display = 'flex';
  } else {
    modal.style.display = 'none';
  }
};

const btnClose = document.querySelector('#close-btn');
btnClose.addEventListener('click', closeModal);

window.onclick = function(event) {
  const modal = document.querySelector('.modal');
  if (event.target == modal) {
    closeModal();
  }
};