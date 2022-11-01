export const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

// export const save = (key, value) => {
//   try {
//     localStorage.setItem(key, JSON.stringify(value));
//   } catch (error) {
//     console.error('Set state error: ', error.message);
//   }
// };

export const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

//
//
//
//

//

//

//

//
// import { save, load, remove } from './storage';
// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const formRef = document.querySelector('.feedback-form');
// let formData = {};

// formRef.addEventListener('submit', onFormSubmit);
// formRef.addEventListener('input', throttle(onFormInput, 500));

// populateForm();

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   if (formRef[0].value && formRef[1].value) {
//     console.log(formData);
//     evt.currentTarget.reset();
//     remove(STORAGE_KEY);
//   } else alert('All fields must be filled!');
// }

// function onFormInput() {
//   formData = {
//     email: formRef[0].value,
//     message: formRef[1].value,
//   };
//   save(STORAGE_KEY, formData);
// }

// function populateForm() {
//   formData = load(STORAGE_KEY);
//   if (formData) {
//     formRef[0].value = formData.email;
//     formRef[1].value = formData.message;
//   }
// }
