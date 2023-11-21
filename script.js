// Access HTML elements
let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');
let startButton = document.getElementById('start');

// set images path
let botPath = 'robot.svg';
let beachPath = 'beach.svg';
let spacePath = 'space.svg';
let closedPath = 'closed-door.svg';
const path = './img/';

// Set initial variables
let numClosedDoors = 3;
let imgOpenDoors = [];
let areOpenDoors = [false, false, false, false];
let currentlyPlaying = true;

// Load initial random images behind the doors
const randomChoreDoorGenerator = () => {
  console.log('Random Chore door is called');
  let choreDoor = Math.floor(Math.random() *3);
  console.log(choreDoor);

  if (choreDoor === 0) {
    imgOpenDoors[1] = botPath;
    imgOpenDoors[2] = beachPath;
    imgOpenDoors[3] = spacePath;
  } else if (choreDoor === 1) {
    imgOpenDoors[2] = botPath;
    imgOpenDoors[1] = beachPath;
    imgOpenDoors[3] = spacePath;
  } else {
    imgOpenDoors[3] = botPath;
    imgOpenDoors[1] = beachPath;
    imgOpenDoors[2] = spacePath;
  }
  console.log(imgOpenDoors[1],imgOpenDoors[2],imgOpenDoors[3]);

}

// Start a game round
const startRound = () => {
  console.log('Game starts!');
  door1.src = path + closedPath;
  door2.src = path + closedPath;
  door3.src = path + closedPath;

  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good Luck!';
  randomChoreDoorGenerator();
}

startRound();

// Set click event
const clickEvent = (door) => {
  let doorNum = Number(door.id.slice(-1));
  console.log('-Click door',doorNum);
  if (currentlyPlaying && !areOpenDoors[doorNum]) {
    areOpenDoors[doorNum] = true;
    door.src = path + imgOpenDoors[doorNum];
    numClosedDoors--;
    console.log('open door')
    
    //check door
    if (numClosedDoors === 0) {
      console.log('game ends, you win!');
      startButton.innerHTML = 'You win! Play again?';
      currentlyPlaying = false;
    } else if (door.src.includes('bot')) {
      console.log('It\'s bot, you lose');
      startButton.innerHTML = 'Game over! Play again?';
      currentlyPlaying = false;
    }
  } else console.log('the door is already open')
}

// Add click event on doors
door1.addEventListener('click', (ev) => clickEvent(ev.target));
door2.addEventListener('click', (ev) => clickEvent(ev.target));
door3.addEventListener('click', (ev) => clickEvent(ev.target));