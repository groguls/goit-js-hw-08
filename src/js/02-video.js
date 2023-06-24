import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(setResumeVimeoPlay());
player.on('timeupdate', throttle(onVimeoPlay, 1000));

function onVimeoPlay(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}

function setResumeVimeoPlay() {
  const time = localStorage.getItem('videoplayer-current-time');
  return JSON.parse(time).seconds ?? 0;
}
