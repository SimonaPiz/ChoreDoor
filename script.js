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
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Start a game round
const startRound = () => {
  console.log('Game starts!');
  door1.src = path + closedPath;
  door2.src = path + closedPath;
  door3.src = path + closedPath;

  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good Luck!';
}

startRound();