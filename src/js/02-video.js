import Player from '@vimeo/player';

// отримати посилання на iframe
const iframe = document.querySelector('iframe');

// // Ініціалізувати плеєр
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

