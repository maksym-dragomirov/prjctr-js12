'use strict';

const toggleButton = document.querySelector('.centred-button');
const infoLabel = document.querySelector('.info-label');
const pageBody = document.querySelector('.main-body');
let currentTime = localStorage.getItem('currentTime') || 0;
let buttonState = localStorage.getItem('buttonState') || 'Turn off';

// To return values based on localStorage on page initialization
(() => {
    if (buttonState === null || buttonState === 'Turn on') {
        pageBody.style.backgroundColor = '#2F2222';
        toggleButton.textContent = buttonState + ' 🌝';
    } else {
        pageBody.style.backgroundColor = '#F6E5E5';
        toggleButton.textContent = buttonState + ' 🌚';
    }
    if (currentTime === 0 || currentTime === null) {
        infoLabel.style.visibility = 'hidden';
    } else {
        infoLabel.textContent = localStorage.getItem('labelText');
        infoLabel.style.color = localStorage.getItem('labelColor');
    }
})();

// Format {DD-MM-YYYY HH:MM:SS}
function returnFormattedDate() {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth()).padStart(2, '0');
    const year = currentDate.getFullYear();

    const hour = String(currentDate.getHours()).padStart(2, '0');
    const minute = String(currentDate.getMinutes()).padStart(2, '0');
    const second = String(currentDate.getSeconds()).padStart(2, '0');

    const currentTime = `${day}-${month}-${year} ${hour}:${minute}:${second}`;
    localStorage.setItem('currentTime', currentTime);

    return currentTime;
}

function setDayNight() {
    currentTime = returnFormattedDate();

    if (buttonState === null || buttonState === 'Turn off') {
        pageBody.style.backgroundColor = '#2F2222';
        infoLabel.style.visibility = 'visible';
        infoLabel.style.color = '#F6E5E5';
        infoLabel.textContent = `Last turn off: ${currentTime}`;
        toggleButton.textContent = 'Turn on 🌝';
        buttonState = 'Turn on';
        localStorage.setItem('buttonState', buttonState);
        localStorage.setItem('labelText', infoLabel.textContent);
        localStorage.setItem('labelColor', infoLabel.style.color);
    } else if (buttonState === 'Turn on') {
        pageBody.style.backgroundColor = '#F6E5E5';
        infoLabel.style.visibility = 'visible';
        infoLabel.style.color = '#2F2222';
        infoLabel.textContent = `Last turn on: ${currentTime}`;
        toggleButton.textContent = 'Turn off 🌚';
        buttonState = 'Turn off';
        localStorage.setItem('buttonState', buttonState);
        localStorage.setItem('labelText', infoLabel.textContent);
        localStorage.setItem('labelColor', infoLabel.style.color);
    }
}

toggleButton.addEventListener('click', setDayNight);

