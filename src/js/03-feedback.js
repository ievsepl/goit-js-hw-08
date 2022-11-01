import { save, load } from './storage.js';

const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  STORAGE_KEY: 'feedback-form-state',
};

refs.form.addEventListener('input', onSaveInput);
refs.form.addEventListener('submit', onSubmitMessage);
// window.addEventListener('load', onLoadInput);
onLoadInput();
function onSubmitMessage(e) {
  e.preventDefault();
  e.currentTarget.reset();
}

function onSaveInput(e) {
  // formData[e.target.name] = e.target.value;
  // save(refs.STORAGE_KEY, formData);

  save(refs.STORAGE_KEY, {
    email: refs.form.email.value,
    message: refs.form.message.value,
  });
  // console.log(save(refs.STORAGE_KEY, formData));
  // localStorage.setItem(STORAGE_KEY);
  // console.log(formData);
  // return formData;
}

function onLoadInput() {
  const loadInput = load(refs.STORAGE_KEY);
  // if (loadInput.email) {
  //   refs.form.email.value = loadInput.email;
  //   refs.form.message.value = loadInput.message;
  //   console.log(refs.form.email.value);
  // }
  try {
    refs.form.email.value = loadInput.email;
    refs.form.message.value = loadInput.message;
  } catch (error) {
    // console.log('Local Storage is empty');
  }
}

// console.log(formData);
