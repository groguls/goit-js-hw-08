import Player from '@vimeo/player';
import { saveToLocalStorage, loadFromLocalStorage } from './storage';
const throttle = require('lodash.throttle');

const localStorageKey = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(setResumeVimeoPlay());
player.on('timeupdate', onVimeoPlay);

function onVimeoPlay(data) {
  console.log(data);
  saveToLocalStorage(localStorageKey, JSON.stringify(data));
}

function setResumeVimeoPlay() {
  const time = loadFromLocalStorage(localStorageKey);
  return JSON.parse(time).seconds ?? 0;
}
