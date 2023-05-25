import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.querySelector('iframe');
  try {
    const player = new Player(iframe);
    const throttled = throttle(function(data) {
        localStorage.setItem('videoplayer-current-time', data.seconds)
        }, 1000);
    player.on('timeupdate', throttled);

    player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
    }).catch(function(error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });

  } catch (error) {
    console.error('An error occurred:', error);
  }
});