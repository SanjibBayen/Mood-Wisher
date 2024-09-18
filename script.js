const mainDiv = document.querySelector('.main');
const askMoodText = document.querySelector('.ask-mood');
const moodButtons = document.querySelectorAll('.mood-name');
let moodCycle;
let moodContainer;

moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.getAttribute('data-mood');
        handleMoodAction(mood);
    });
});

function handleMoodAction(mood) {
    clearTimeout(moodCycle);
    mainDiv.style.display = 'none'; 

    switch (mood) {
        case 'happy':
            showHappyMood();
            break;
        case 'sad':
            showSadMood();
            break;
        case 'angry':
            showAngryMood();
            break;
        case 'confused':
            showConfusedMood();
            break;
        case 'sleepy':
            showSleepyMood();
            break;
        case 'excited':
            showExcitedMood();
            break;
        default:
            console.log('Invalid mood');
            break;
    }

    moodCycle = setTimeout(() => {
        resetMood();
    }, 5000);
}

function showHappyMood() {
    showMoodAction('joyful', 'Yay! You are happy! 😊');
    document.body.style.backgroundColor = '#FFD700'; 
}

function showSadMood() {
    showMoodAction('rain', 'It’s raining... I love you 😢');
    document.body.style.backgroundImage = 'url("https://media.giphy.com/media/l41JWw65TcBGjPpRK/giphy.gif")';
    document.body.style.backgroundSize = 'cover';
}

function showAngryMood() {
    showMoodAction('calm', 'Take a deep breath... Calm down 😠');
    document.body.style.backgroundColor = '#FF6347'; 
    document.body.classList.add('shake'); 
    setTimeout(() => {
        document.body.classList.remove('shake');
    }, 500);
}

function showConfusedMood() {
    showMoodAction('thinking', 'Let’s take a moment to think 🤔');
    document.body.style.backgroundColor = '#ADD8E6'; 
}

function showSleepyMood() {
    showMoodAction('nap', 'It’s time for a nap... 💤');
    document.body.style.backgroundColor = '#87CEFA'; 
}

function showExcitedMood() {
    showMoodAction('celebrate', 'Woohoo! You are excited! 🎉');
    document.body.style.backgroundColor = '#FF69B4'; 
    document.body.style.backgroundImage = 'url("https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif")';
    document.body.style.backgroundSize = 'cover';
}

function showMoodAction(effect, message) {
    if (moodContainer) {
        moodContainer.remove();
    }
    
    moodContainer = document.createElement('div');
    moodContainer.className = `mood-action-${effect}`;
    moodContainer.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(moodContainer);
    document.addEventListener('click', handleClick, true);
}

function handleClick(event) {
    if (moodContainer && !moodContainer.contains(event.target)) {
        resetMood();
        document.removeEventListener('click', handleClick, true);
    }
}

function resetMood() {
    if (moodContainer) {
        moodContainer.remove();
        moodContainer = null;
    }

    mainDiv.style.display = 'flex';
    askMoodText.textContent = 'What is your mood right now?'; 
    document.body.style.backgroundImage = ''; 
    document.body.style.backgroundColor = ''; 
}
