import { saveToLocalStorage, loadFromLocalStorage } from './storage';
const throttle = require('lodash.throttle');
import Player from '@vimeo/player';

const localStorageKey = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(setResumeVimeoPlay());
player.on('timeupdate', throttle(onVimeoPlay, 1000));

function onVimeoPlay(data) {
  saveToLocalStorage(localStorageKey, data.seconds);
}

function setResumeVimeoPlay() {
  return loadFromLocalStorage(localStorageKey) ?? 0;
}
