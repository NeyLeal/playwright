const newsletterForm = document.querySelector('#newsletter-form');
const statusMessage = document.querySelector('[role="status"]');

newsletterForm.addEventListener('submit', event => {
  event.preventDefault();
  statusMessage.textContent = 'Inscrição confirmada!';
});
