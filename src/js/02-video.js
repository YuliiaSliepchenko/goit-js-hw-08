import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('#vimeo-player');
 
    const player = new Player(iframe);

    player.on('timeupdate',throttle (function(ev) {    
        console.log(ev);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(ev));
}, 1000));

    const saveTime = localStorage.getItem('videoplayer-current-time');
    const stopTime =JSON.parse(saveTime);

    player.setCurrentTime(stopTime.seconds || 0)
   