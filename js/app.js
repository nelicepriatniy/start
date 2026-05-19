const popup = document.querySelector('.form-popup');
const overlay = document.querySelector('.offset');

if (popup) {
  const openButtons = document.querySelectorAll('.form-popup-open');
  const closeButton = popup.querySelector('.form-close');

  const openPopup = () => {
    popup.classList.add('active');
    overlay?.classList.add('active');
  };

  const closePopup = () => {
    popup.classList.remove('active');
    overlay?.classList.remove('active');
  };

  openButtons.forEach((button) => {
    button.addEventListener('click', openPopup);
  });

  closeButton?.addEventListener('click', closePopup);
  overlay?.addEventListener('click', closePopup);
}
