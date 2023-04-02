import throttle from 'lodash.throttle';
// Отримати посилання на форму і поля форми
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Функція, яка зберігає стан форми в локальне сховище
const saveFormStateToLocalStorage = throttle(() => {
  const feedbackFormState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}, 500);

// Відслідкувати подію input і зберігти стан форми в локальне сховище
form.addEventListener('input', saveFormStateToLocalStorage);

// Перевірити наявність збереженого стану форми в локальному сховищі
const feedbackFormState =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};

//  Заповнити поля форми збереженими значеннями, якщо вони є
emailInput.value = feedbackFormState.email || '';
messageInput.value = feedbackFormState.message || '';

// Обробити подію сабміту форми
form.addEventListener('submit', event => {
  // Зупинити стандартну поведінку браузера
  event.preventDefault();
  // Вивести у консоль об'єкт з полями email, message та їхніми поточними значеннями
  const feedbackData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(feedbackData);
  // Очищистити локальне сховище
  localStorage.removeItem('feedback-form-state');
  // Очистити поля форми
  emailInput.value = '';
  messageInput.value = '';
});
