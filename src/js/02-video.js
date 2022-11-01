import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
window.addEventListener('load', autoLoad);
const player = new Player('vimeo-player');
player.on('timeupdate', throttle(onSaveTime, 1000));
function onSaveTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}
let savedTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

function autoLoad() {
  player
    .play()
    .then(function () {
      // the video was played
    })
    .catch(function (error) {
      switch (error.name) {
        case 'PasswordError':
          break;

        case 'PrivacyError':
          break;

        default:
          break;
      }
    });
}
