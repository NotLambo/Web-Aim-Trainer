'use strict';

// Main Variables
const logo = document.querySelector('.logo');
const hThree = document.querySelector('.hThree');

let targets = 0;

// Button Variables
const start = document.querySelector('.start');
const settings = document.querySelector('.settings');
const credit = document.querySelector('.credit');

// Settings
const windowSettings = document.querySelector('.window-settings');
const settingsWindow = document.querySelector('.settings-window');
const buttonSettings = document.querySelector('.button-settings');
const settingsText = document.querySelector('.settings-text');
const btnX = document.querySelector('.btnn-x');

// Targets
const rangeWindow = document.querySelector('.target-range');
const targetRange = document.querySelector('.range');

const targetOne = document.querySelector('.target-one');
const targetTwo = document.querySelector('.target-two');
const targetThree = document.querySelector('.target-three');
const targetFour = document.querySelector('.target-four');
const targetFive = document.querySelector('.target-five');
const targetSix = document.querySelector('.target-six');
const targetSeven = document.querySelector('.target-seven');
const targetEight = document.querySelector('.target-eight');
const targetNine = document.querySelector('.target-nine');
const targetTen = document.querySelector('.target-ten');
const targetEleven = document.querySelector('.target-eleven');
const targetTweleve = document.querySelector('.target-twelve');
const targetThirteen = document.querySelector('.target-thirteen');
const targetFourTeen = document.querySelector('.target-fourteen');
const targetFithTeen = document.querySelector('.target-fifthteen');

// Credit
const creditModal = document.querySelector('.credit-modal');
const windowModal = document.querySelector('.window');
const img = document.querySelector('.img')
const text = document.querySelector('.text');
const btn = document.querySelector('.btn');

// Starting

settings.addEventListener('click', function() {
    openSettings();

    function closeSettings() {
        settings.classList.remove('hidden')
        windowSettings.classList.add('hidden');
        settingsWindow.classList.add('hidden');
        buttonSettings.classList.add('hidden');
        settingsText.classList.add('hidden');
    }
    function openSettings() {
        settings.classList.add('hidden')
        windowSettings.classList.remove('hidden');
        settingsWindow.classList.remove('hidden');
        buttonSettings.classList.remove('hidden');
        settingsText.classList.remove('hidden');
        btnX.addEventListener('click', function() {
            closeSettings();
        })
    }
    function styleSwitch(style, color) {
        btnLightDark.textContent = `${style}`;
        document.querySelector(':root').style.backgroundColor = `${color}`;
    }

    const btnLightDark = document.querySelector('.light-dark');

    let i = 0;
    
    btnLightDark.addEventListener('click', function() {
        i++;
        if(i === 1) {
            styleSwitch(`Dark Mode.`, `#393053`);
            btnLightDark.style.backgroundColor = '#635985';
            i++;
        } else if(i > 1) {
            styleSwitch(`Light Mode.`, `#635985`);
            btnLightDark.style.backgroundColor = '#393053';
            i--;
            i--;
        }
    })
})

credit.addEventListener('click', function() {
    openModal();
    function closeModal() {
        credit.classList.remove('hidden');
        creditModal.classList.add('hidden');
        windowModal.classList.add('hidden');
        img.classList.add('hidden');
        text.classList.add('hidden');
    }
    function openModal() {
        credit.classList.add('hidden');
        creditModal.classList.remove('hidden');
        windowModal.classList.remove('hidden');
        img.classList.remove('hidden');
        text.classList.remove('hidden');
        btn.classList.remove('hidden');
        btn.addEventListener('click', function() {
            closeModal();
        })
    }
});


// Functions

function closeAll() {
    logo.classList.add('hidden');
    start.classList.add('hidden');
    settings.classList.add('hidden');
    credit.classList.add('hidden');
    hThree.classList.add('hidden');
}

function targetRangeOpen() {
    targetRange.classList.remove('hidden');
    rangeWindow.classList.remove('hidden');
}

function startMenu() {
    targetRange.classList.add('hidden');
    rangeWindow.classList.add('hidden');
    logo.classList.remove('hidden');
    start.classList.remove('hidden');
    settings.classList.remove('hidden');
    credit.classList.remove('hidden');
    hThree.classList.remove('hidden');
}

// Game

start.addEventListener('click', function repeat() {
    targetRangeOpen();
    closeAll();

    function onClick(targetPara) {
        targetPara.addEventListener('click', function() {
            targetPara.classList.add('target-hide');
            repeat();
        })
    }

    const targetRandomize = Math.trunc(Math.random() * 15) + 1;
    
    switch (targetRandomize) {
        case 1:
            targetOne.classList.remove('target-hide');
            onClick(targetOne);
            break;
        case 2:
            targetTwo.classList.remove('target-hide');
            onClick(targetTwo);
            break;
        case 3:
            targetThree.classList.remove('target-hide');
            onClick(targetThree);
            break;
        case 4:
            targetFour.classList.remove('target-hide');
            onClick(targetFour);
            break;
        case 5:
            targetFive.classList.remove('target-hide');
            onClick(targetFive);
            break;
        case 6:
            targetSix.classList.remove('target-hide');
            onClick(targetSix);
            break;
        case 7:
            targetSeven.classList.remove('target-hide');
            onClick(targetSeven);
            break;
        case 8:
            targetEight.classList.remove('target-hide');
            onClick(targetEight);
            break;
        case 9:
            targetNine.classList.remove('target-hide');
            onClick(targetNine);
            break;
        case 10:
            targetTen.classList.remove('target-hide');
            onClick(targetTen);
            break;
        case 11:
            targetEleven.classList.remove('target-hide');
            onClick(targetEleven);
            break;
        case 12:
            targetTweleve.classList.remove('target-hide');
            onClick(targetTweleve);
            break;
        case 13:
            targetThirteen.classList.remove('target-hide');
            onClick(targetThirteen);
            break;
        case 14:
            targetFourTeen.classList.remove('target-hide');
            onClick(targetFourTeen);
            break;
        case 15:
            targetFithTeen.classList.remove('target-hide');
            onClick(targetFithTeen);
            break;
        default:
            console.log(`Error - NaN | DOM cannot get element.`);
            break;        
    }
})

document.querySelector('body').addEventListener('keydown', function(event) {
    if(event.key === 'Escape') {
        startMenu();
    }
})



/*


  ______ _____ _______ _     _ _     _ ______    _______  _____  _______    / __   _  _____  _______        _______ _______ ______   _____ 
 |  ____   |      |    |_____| |     | |_____]   |       |     | |  |  |   /  | \  | |     |    |    |      |_____| |  |  | |_____] |     |
 |_____| __|__    |    |     | |_____| |_____] . |_____  |_____| |  |  |  /   |  \_| |_____|    |    |_____ |     | |  |  | |_____] |_____|
                                                                         /                                                                 


*/