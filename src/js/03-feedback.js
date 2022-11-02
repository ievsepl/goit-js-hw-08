import throttle from 'lodash.throttle';
import { save, load, clean } from './storage.js';

let formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  STORAGE_KEY: 'feedback-form-state',
};

refs.form.addEventListener('input', throttle(onSaveInput, 300));
refs.form.addEventListener('submit', onSubmitMessage);
// window.addEventListener('load', onLoadInput);
onLoadInput();
function onSubmitMessage(e) {
  e.preventDefault();
  if (refs.form.email.value && refs.form.message.value) {
    console.log(formData);
    clean(refs.STORAGE_KEY);
    e.currentTarget.reset();
  } else {
    alert('all field s should be fill');
  }
}

function onSaveInput() {
  // formData[e.target.name] = e.target.value;
  // save(refs.STORAGE_KEY, formData);
  formData = {
    email: refs.form.email.value,
    message: refs.form.message.value,
  };
  save(refs.STORAGE_KEY, formData);
}

function onLoadInput() {
  const loadInput = load(refs.STORAGE_KEY);
  // if (loadInput.email) {
  //   refs.form.email.value = loadInput.email;
  //   refs.form.message.value = loadInput.message;
  //   //   console.log(refs.form.email.value);
  // }
  try {
    refs.form.email.value = loadInput.email;
    refs.form.message.value = loadInput.message;
  } catch (error) {
    console.log('Local Storage is empty');
  }
}
