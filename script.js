// const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
// const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

// const keys = document.querySelectorAll('.key')
// const whiteKeys = document.querySelectorAll('.key.white')
// const blackKeys = document.querySelectorAll('.key.black')

// keys.forEach(key => {
//   key.addEventListener('click', () => playNote(key))
// })

// document.addEventListener('keydown', e => {
//   if (e.repeat) return
//   const key = e.key
//   const whiteKeyIndex = WHITE_KEYS.indexOf(key)
//   const blackKeyIndex = BLACK_KEYS.indexOf(key)

//   if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
//   if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
// })

// function playNote(key) {
//   const noteAudio = document.getElementById(key.dataset.note)
//   noteAudio.currentTime = 0
//   noteAudio.play()
//   key.classList.add('active')
//   noteAudio.addEventListener('ended', () => {
//     key.classList.remove('active')
//   })
// }


// const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
// const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

// const keys = document.querySelectorAll('.key');
// const whiteKeys = document.querySelectorAll('.key.white');
// const blackKeys = document.querySelectorAll('.key.black');

// let isKeyPressed = false;

// keys.forEach(key => {
//   key.addEventListener('mousedown', () => playNote(key));
//   key.addEventListener('mouseup', () => stopNote());
// });

// document.addEventListener('keydown', e => {
//   if (e.repeat) return;
//   const key = e.key;
//   const whiteKeyIndex = WHITE_KEYS.indexOf(key);
//   const blackKeyIndex = BLACK_KEYS.indexOf(key);

//   if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
//   if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
// });

// document.addEventListener('keyup', () => stopNote());

// function playNote(key) {
//   if (!isKeyPressed) {
//     isKeyPressed = true;
//     const noteAudio = document.getElementById(key.dataset.note);
//     noteAudio.currentTime = 0;
//     noteAudio.play();
//     key.classList.add('active');
//   }
// }

// function stopNote() {
//   isKeyPressed = false;
//   keys.forEach(key => key.classList.remove('active'));
// }


// const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
// const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j','k'];

// const keys = document.querySelectorAll('.key');
// const whiteKeys = document.querySelectorAll('.key.white');
// const blackKeys = document.querySelectorAll('.key.black');

// let isKeyPressed = false;

// keys.forEach(key => {
//   key.addEventListener('mousedown', () => playNote(key));
//   key.addEventListener('mouseup', () => stopNote());
// });

// document.addEventListener('keydown', e => {
//   if (e.repeat) return; // Ignore repeated key presses
//   const key = e.key;
//   const whiteKeyIndex = WHITE_KEYS.indexOf(key);
//   const blackKeyIndex = BLACK_KEYS.indexOf(key);

//   if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
//   if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
// });

// document.addEventListener('keyup', () => stopNote());

// function playNote(key) {
//   if (!isKeyPressed) {
//     isKeyPressed = true;
//     const noteAudio = document.getElementById(key.dataset.note);

//     // Ensure at least 1 second of playback, using a timer if necessary
//     let timeoutId;
//     const minPlayTime = 1000; // Minimum milliseconds to play
//     const actualPlayTime = Math.max(minPlayTime, noteAudio.duration * 1000); // Use audio duration if longer

//     // Start playing
//     noteAudio.currentTime = 0;
//     noteAudio.play();
//     key.classList.add('active');

//     // Set a timer to stop playback after the minimum or actual duration
//     timeoutId = setTimeout(() => {
//       noteAudio.pause();
//       key.classList.remove('active');
//       isKeyPressed = false;
//     }, actualPlayTime);

//     // Stop automatically if audio ends before timer (for shorter audio files)
//     noteAudio.addEventListener('ended', () => {
//       clearTimeout(timeoutId);
//       noteAudio.pause();
//       key.classList.remove('active');
//       isKeyPressed = false;
//     });
//   }
// }

// function stopNote() {
//   isKeyPressed = false;
//   keys.forEach(key => key.classList.remove('active'));
// }


const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j','k'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

let isKeyPressed = false;
let timeoutId; // Variable to store the timeout ID

keys.forEach(key => {
  key.addEventListener('mousedown', () => playNote(key));
  key.addEventListener('mouseup', () => stopNote());
});

document.addEventListener('keydown', e => {
  if (e.repeat) return; // Ignore repeated key presses
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

document.addEventListener('keyup', () => stopNote());

function playNote(key) {
  if (!isKeyPressed) {
    isKeyPressed = true;
    const noteAudio = document.getElementById(key.dataset.note);

    // Clear existing timeout to stop the previous note
    clearTimeout(timeoutId);

    // Ensure at least 1 second of playback, using a timer if necessary
    const minPlayTime = 1000; // Minimum milliseconds to play
    const actualPlayTime = Math.max(minPlayTime, noteAudio.duration * 1000); // Use audio duration if longer

    // Start playing
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');

    // Set a timer to stop playback after the minimum or actual duration
    timeoutId = setTimeout(() => {
      noteAudio.pause();
      key.classList.remove('active');
      isKeyPressed = false;
    }, actualPlayTime);

    // Stop automatically if audio ends before the timer (for shorter audio files)
    noteAudio.addEventListener('ended', () => {
      clearTimeout(timeoutId);
      noteAudio.pause();
      key.classList.remove('active');
      isKeyPressed = false;
    });
  }
}

function stopNote() {
  isKeyPressed = false;
  keys.forEach(key => key.classList.remove('active'));

  // Clear the timeout to prevent further execution of the previous note
  clearTimeout(timeoutId);
}
