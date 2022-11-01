import throttle from 'lodash.throttle';
import save from './storage';
import load from './storage';
const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  submit: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input'),
  inputMessage: document.querySelector('textarea'),
};

// console.log(inputEmail.value);

const formData = {};
refs.form.addEventListener('input', throttle(onSaveMessage, 300));
refs.submit.addEventListener('submit', onSubmitMessage);

onLoadTextArea();

function onSaveMessage(e) {
  formData[e.target.name] = e.target.value;
  // save(STORAGE_KEY, formData);
  // localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  // console.log(formData);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function onLoadTextArea() {
  try {
    const savedFormData = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    if (savedFormData === undefined) {
      return;
    } else {
      refs.inputEmail.value = savedFormData.email;
      refs.inputMessage.value = savedFormData.message;
    }
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
  //   console.log(refs.inputMessage.value);
  console.log(savedFormData);

  // load('feedback-form-state');

  // try {
  //   const serializedState = localStorage.getItem(STORAGE_KEY);
  //   return serializedState === null ? undefined : JSON.parse(serializedState);
  // } catch (error) {
  //   console.error('Get state error: ', error.message);
  // }
  // console.log(localStorage.getItem(STORAGE_KEY));
}

function onSubmitMessage(e) {
  e.preventDefault();
  e.currentTarget.reset();
  // if (e) {
  // console.log(formData);
  // }
  localStorage.removeItem('feedback-form-state');
}

// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error('Set state error: ', error.message);
//   }
// };

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };
