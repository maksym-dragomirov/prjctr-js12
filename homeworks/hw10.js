'use strict';

const toggleButton = document.querySelector('.centred-button');
const infoLabel = document.querySelector('.info-label');
const pageBody = document.body;
let currentTime = localStorage.getItem('currentTime') || 0;
let buttonState = localStorage.getItem('buttonState') || 'Turn off';

// To return values based on localStorage on page initialization
if (buttonState === 'Turn on') {
    pageBody.classList.add('body-dark');
    infoLabel.classList.add('info-label-light');
    toggleButton.textContent = buttonState + ' 🌝';
} else {
    pageBody.classList.add('body-light');
    infoLabel.classList.add('info-label-dark');
    toggleButton.textContent = buttonState + ' 🌚';
}
if (currentTime === 0) {
    infoLabel.classList.remove('info-label-dark');
    infoLabel.classList.add('info-label-hidden');
} else {
    infoLabel.textContent = localStorage.getItem('labelText');
}

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
        pageBody.classList.remove('body-light');
        pageBody.classList.add('body-dark');
        infoLabel.classList.remove('info-label-hidden');
        infoLabel.classList.remove('info-label-dark');
        infoLabel.classList.add('info-label-light');
        infoLabel.textContent = `Last turn off: ${currentTime}`;
        toggleButton.textContent = 'Turn on 🌝';
        buttonState = 'Turn on';
        localStorage.setItem('buttonState', buttonState);
        localStorage.setItem('labelText', infoLabel.textContent);
    } else if (buttonState === 'Turn on') {
        pageBody.classList.remove('body-dark');
        pageBody.classList.add('body-light');
        infoLabel.classList.remove('info-label-hidden');
        infoLabel.classList.remove('info-label-light');
        infoLabel.classList.add('info-label-dark');
        infoLabel.textContent = `Last turn on: ${currentTime}`;
        toggleButton.textContent = 'Turn off 🌚';
        buttonState = 'Turn off';
        localStorage.setItem('buttonState', buttonState);
        localStorage.setItem('labelText', infoLabel.textContent);
    }
}

toggleButton.addEventListener('click', setDayNight);