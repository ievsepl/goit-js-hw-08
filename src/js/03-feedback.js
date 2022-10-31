import throttle from 'lodash.throttle';
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

onSavedTextArea();

function onSaveMessage(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSavedTextArea() {
  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    try {
      refs.inputEmail.value = savedFormData.email;
      refs.inputMessage.value = savedFormData.message;
    } catch (error) {}
  }
  console.log(savedFormData);
}

function onSubmitMessage(e) {
  e.preventDefault();
  e.currentTarget.reset();
  if (e) {
    console.log(formData);
  }
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
