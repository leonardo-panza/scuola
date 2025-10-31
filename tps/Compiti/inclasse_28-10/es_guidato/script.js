const form = document.getElementById('signupForm'); //uguale a querySelector ma posso non mettere #
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const msg = document.getElementById('msg');

form.addEventListener('submit', (event) => {
  event.preventDefault(); //Evita il reload della pagina

  const name = nameEl.value.trim();
  const email = emailEl.value.trim();

  if (!name || !email) {
    msg.textContent = 'Compila tutti i campi.';
    msg.classList.remove('ok');
    msg.classList.add('err');
    return;
  }

  msg.textContent = 'Dati ricevuti!';
  msg.classList.remove('err');
  msg.classList.add('ok');

  //fetch() posso inviare i dati

});

[nameEl, emailEl].forEach((el) => {
  el.addEventListener('focus', () => el.classList.add('is-focused'));

  el.addEventListener('blur', () => {
    el.classList.remove('is-focused');
    el.classList.toggle('err', el.value.trim() === '');
  });

  el.addEventListener('input', () => el.classList.remove('err'));
});
