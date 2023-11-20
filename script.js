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

// Load initial random images behind the doors
const randomChoreDoorGenerator = () => {
  console.log('Random Chore door is called');
  let choreDoor = Math.floor(Math.random() *3);
  console.log(choreDoor);

  if (choreDoor === 0) {
    openDoor1 = botPath;
    openDoor2 = beachPath;
    openDoor3 = spacePath;
  } else if (choreDoor === 1) {
    openDoor2 = botPath;
    openDoor1 = beachPath;
    openDoor3 = spacePath;
  } else {
    openDoor3 = botPath;
    openDoor1 = beachPath;
    openDoor2 = spacePath;
  }
  console.log(openDoor1,openDoor2,openDoor3);

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