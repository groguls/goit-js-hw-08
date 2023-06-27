const throttle = require('lodash.throttle');
import {
  saveToLocalStorage,
  loadFromLocalStorage,
  removeFromLocalStorage,
} from './storage';
const formEl = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

checkLocalStorageData(localStorageKey);
formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  const {
    elements: {
      email: { value: email },
      message: { value: message },
    },
  } = event.target.form;

  const formData = { email, message };
  saveToLocalStorage(localStorageKey, formData);
}

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: {
      email: { value: email },
      message: { value: message },
    },
  } = event.currentTarget;

  if (email === '' || message === '') {
    return alert('Будь ласка, заповніть усі поля форми');
  }

  console.log(loadFromLocalStorage(localStorageKey));
  removeFromLocalStorage(localStorageKey);
  event.currentTarget.reset();
}

function checkLocalStorageData(key) {
  const localStorageData = loadFromLocalStorage(key);
  if (localStorageData) {
    const {
      elements: { email, message },
    } = formEl;
    email.value = localStorageData.email;
    message.textContent = localStorageData.message;
  }
  return;
}
