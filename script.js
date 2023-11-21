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
let openDoor = [];
let currentlyPlaying = true;

// Load initial random images behind the doors
const randomChoreDoorGenerator = () => {
  console.log('Random Chore door is called');
  let choreDoor = Math.floor(Math.random() *3);
  console.log(choreDoor);

  if (choreDoor === 0) {
    openDoor[1] = botPath;
    openDoor[2] = beachPath;
    openDoor[3] = spacePath;
  } else if (choreDoor === 1) {
    openDoor[2] = botPath;
    openDoor[1] = beachPath;
    openDoor[3] = spacePath;
  } else {
    openDoor[3] = botPath;
    openDoor[1] = beachPath;
    openDoor[2] = spacePath;
  }
  console.log(openDoor[1],openDoor[2],openDoor[3]);

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
  if (currentlyPlaying) {
    door.src = path + openDoor[doorNum];
    console.log(door.src);
    //check door
  }
}

// Add click event on doors
door1.addEventListener('click', (ev) => clickEvent(ev.target));
door2.addEventListener('click', (ev) => clickEvent(ev.target));
door3.addEventListener('click', (ev) => clickEvent(ev.target));