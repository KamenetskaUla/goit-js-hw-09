const formData = { email: '', message: '' };
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector("input[name='email']");
const textareaEl = document.querySelector("textarea[name='message']");
const LS_KEY = 'feedback-form-state';
formEl.addEventListener('input', onSaveData);
formEl.addEventListener('submit', onFormSubmit);
function onSaveData(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}
function onFormSubmit(event) {
  event.preventDefault();
  if (emailEl.value === '' || textareaEl.value === '') {
    alert('Please fill in all fields');
    return;
  }
  event.currentTarget.reset();

  localStorage.removeItem(LS_KEY);
  console.log(formData);
}

function populateFormField() {
  const formDataFromLS = localStorage.getItem(LS_KEY);

  if (!formDataFromLS) return;

  const parsedData = JSON.parse(formDataFromLS);
  emailEl.value = parsedData.email || '';
  formData.email = parsedData.email || '';
  textareaEl.value = parsedData.message || '';
  formData.message = parsedData.message || '';
}

populateFormField();
