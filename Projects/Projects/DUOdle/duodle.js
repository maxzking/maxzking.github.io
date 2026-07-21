// Track current position
let player1CurrentRow = 0;
let player1CurrentCol = 0;
let player2CurrentRow = 0;
let player2CurrentCol = 0;
let currentTurn = 0; // It is player 1's turn if currentTurn is even, and player 2's turn if currentTurn is odd.

const WORD_LENGTH = 5;
const MAX_ROWS = 4;

// Game is active - 0. Game is over - 1.
gameOverStatus = 0;

// Keeps track of when a player's turn is over. 0 means a turn is still active, 1 means a guess has been submitted.
player1TurnStatus = 0;
player2TurnStatus = 0;

async function loadAnswerList() {
  try {
    const response = await fetch("answerbank.txt");
    const text = await response.text();
    answerbank = text.split("\n").map((word) => word.trim().toUpperCase());

    pickRandomAnswer(); // pick the answer once the word list is ready
  } catch (error) {
    console.error("Failed to answer word list:", error);
  }
}

async function loadGuessList() {
  try {
    const response = await fetch("guessbank.txt");
    const text = await response.text();
    guessbank = text.split("\n").map((word) => word.trim().toUpperCase());
  } catch (error) {
    console.error("Failed to guess word list:", error);
  }
}

loadAnswerList(); // call this once when the script runs
loadGuessList(); // call this once when the script runs

// Randomly choose a word from the word list to be the answer

function pickRandomAnswer() {
  const randomIndex1 = Math.floor(Math.random() * answerbank.length);
  const randomIndex2 = Math.floor(Math.random() * answerbank.length);
  player1Answer = answerbank[randomIndex1];
  player2Answer = answerbank[randomIndex2];
  console.log(player1Answer);
  console.log(player2Answer);

  // Loads the answer for both players in the reveal-answers-container
  const player1ANSWER = document.getElementById("player-1-Answer");
  const player2ANSWER = document.getElementById("player-2-Answer");
  player1ANSWER.textContent = player1Answer;
  player2ANSWER.textContent = player2Answer;
}

function revealAnswers(element) {
  const container = element.closest(".reveal-answers-container");
  const player1Answer = container.querySelector(".player-1-answer");
  const player2Answer = container.querySelector(".player-2-answer");

  player1Answer.classList.add("revealed");
  player2Answer.classList.add("revealed");
  element.style.display = "none";
}

function keepPlaying() {
  gameOverStatus = 0;
  const endGameContainer = document.getElementById("endGameContainer");
  endGameContainer.classList.remove("show");
}

// Get all guess cells for both players
const player1Cells = document.querySelectorAll(
  ".player-1-guess-board .guess-cell",
);
const player2Cells = document.querySelectorAll(
  ".player-2-guess-board .guess-cell",
);

// Get all answer cells for both players (the ones that are cross-player)
const player1AnswerCells = document.querySelectorAll(
  ".player-1-answer-board .answer-cell",
);
const player2AnswerCells = document.querySelectorAll(
  ".player-2-answer-board .answer-cell",
);

function getCellIndex(row, col) {
  return row * WORD_LENGTH + col;
}

function addLetter(letter) {
  if (gameOverStatus === 1) return; // block input if the game has reached the end
  if (isRevealing) return; // block input while the scoring animation plays

  if (currentTurn % 2 === 0) {
    // player 1's turn

    if (player1CurrentCol >= WORD_LENGTH) return; // row is full

    const cellIndex = getCellIndex(player1CurrentRow, player1CurrentCol);
    player1Cells[cellIndex].textContent = letter;
    player1CurrentCol++;
  } else {
    //player 2's turn

    if (player2CurrentCol >= WORD_LENGTH) return; // row is full

    const cellIndex = getCellIndex(player2CurrentRow, player2CurrentCol);
    player2Cells[cellIndex].textContent = letter;
    player2CurrentCol++;
  }
}

function deleteLetter() {
  if (gameOverStatus === 1) return; // block input if the game has reached the end
  if (isRevealing) return; // block input while the scoring animation plays

  if (currentTurn % 2 === 0) {
    // player 1's turn

    if (player1CurrentCol <= 0) return; // nothing to delete

    player1CurrentCol--;
    const cellIndex = getCellIndex(player1CurrentRow, player1CurrentCol);
    player1Cells[cellIndex].textContent = "";
  } else {
    //player 2's turn

    if (player2CurrentCol <= 0) return; // nothing to delete

    player2CurrentCol--;
    const cellIndex = getCellIndex(player2CurrentRow, player2CurrentCol);
    player2Cells[cellIndex].textContent = "";
  }
}

function showError(message) {
  const errorBox = document.getElementById("errorMessage");
  errorBox.textContent = message;
  errorBox.classList.add("show");

  setTimeout(() => {
    errorBox.classList.remove("show");
  }, 1500); // visible for 1.5 seconds, then fades out
}

function switchTurns() {
  if ((currentTurn % 2 === 0) & (player2TurnStatus === 0)) {
    // Player 1's turn and player 2 hasn't submitted their guess
    currentTurn++;
    updateActiveRowHighlight();
    console.log("switched turns", currentTurn);
  } else if ((currentTurn % 2 === 0) & (player2TurnStatus === 1)) {
    // Player 1's turn and player 2 has submitted their guess
    showError("Can't switch turns");
    shakeRow(player1CurrentRow);
  } else if ((currentTurn % 2 === 1) & (player1TurnStatus === 0)) {
    // Player 2's turn and player 1 hasn't submitted their guess
    currentTurn--;
    updateActiveRowHighlight();
    console.log("switched turns", currentTurn);
  } else if ((currentTurn % 2 === 1) & (player1TurnStatus === 1)) {
    // Player 2's turn and player 1 has submitted their guess
    showError("Can't switch turns");
    shakeRow(player2CurrentRow);
  }
}

function getPlayer1CurrentGuess() {
  let player1Guess = "";
  for (let col = 0; col < WORD_LENGTH; col++) {
    const cellIndex = getCellIndex(player1CurrentRow, col);
    player1Guess += player1Cells[cellIndex].textContent;
  }
  return player1Guess;
}

function getPlayer2CurrentGuess() {
  let player2Guess = "";
  for (let col = 0; col < WORD_LENGTH; col++) {
    const cellIndex = getCellIndex(player2CurrentRow, col);
    player2Guess += player2Cells[cellIndex].textContent;
  }
  return player2Guess;
}

let player1PreviousGuesses = [];
let player2PreviousGuesses = [];

function computeResult(guess, answer) {
  const result = new Array(WORD_LENGTH).fill("absent");
  const answerLetters = answer.split("");
  const guessLetters = guess.split("");

  // First pass: correct (green)
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessLetters[i] === answerLetters[i]) {
      ((result[i] = "correct"), "present");
      answerLetters[i] = null;
      guessLetters[i] = null;
    }
  }

  // Second pass: present (yellow)
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessLetters[i] === null) continue;
    const indexInAnswer = answerLetters.indexOf(guessLetters[i]);
    if (indexInAnswer !== -1) {
      result[i] = "present";
      answerLetters[indexInAnswer] = null;
    }
  }

  return result;
}

// SOUND EFFECTS FOR SCORING REVEALS
// Player 1's guesses always play as square waves; player 2's guesses always
// play as sawtooth waves. Only "correct" (green) letters make sound, using
// the first 5 notes of a C major scale, one note per column (C D E F G).
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const HIGH_NOTES = [261.63, 293.66, 329.63, 349.23, 392.0];

function playNote(waveType, frequency1, duration = 0.18) {
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  const now = audioCtx.currentTime;

  const osc1 = audioCtx.createOscillator();
  osc1.type = waveType;
  osc1.frequency.setValueAtTime(frequency1, now);

  const gainNode1 = audioCtx.createGain();
  gainNode1.gain.setValueAtTime(0.2, now);
  gainNode1.gain.linearRampToValueAtTime(0, now + duration); // fade out to avoid a click

  osc1.connect(gainNode1);
  gainNode1.connect(audioCtx.destination);

  osc1.start(now);
  osc1.stop(now + duration);
}

// Copies guess letters onto a board immediately, with no color yet
function copyGuessLetters(cells, row, guess) {
  for (let col = 0; col < WORD_LENGTH; col++) {
    const cellIndex = getCellIndex(row, col);
    cells[cellIndex].textContent = guess[col];
  }
}

// Builds a list of { cell, status, sound } entries, one per column, for a single board/row
function buildColumnSequence(cells, row, result, waveType) {
  const sequence = [];
  for (let col = 0; col < WORD_LENGTH; col++) {
    const cellIndex = getCellIndex(row, col);
    const status = result[col];
    sequence.push({
      cell: cells[cellIndex],
      status,
      sound:
        status === "correct"
          ? {
              type: waveType,
              frequency1: HIGH_NOTES[col],
            }
          : status === "present"
            ? {
                type: waveType,
                frequency1: 0,
              }
            : null,
    });
  }
  return sequence;
}

const REVEAL_STEP_DELAY = 200; // ms between the start of each cell's reveal
const REVEAL_ANIM_DURATION = 200; // ms for the shrink/grow pop animation

let isRevealing = false;

// Plays the shrink-then-grow reveal animation across an ordered sequence of
// cells, one at a time, left to right. The color is applied at the midpoint
// of each cell's animation, as it's shrunk down, then it grows back to size.
function animateReveal(sequence, onComplete) {
  isRevealing = true;

  sequence.forEach((step, i) => {
    const startDelay = i * REVEAL_STEP_DELAY;
    setTimeout(() => {
      step.cell.classList.add("cell-reveal");

      // Reveal the color (and play the note, if any) at the midpoint of the
      // shrink/grow animation
      setTimeout(() => {
        step.cell.classList.add(step.status);
        if (step.sound) {
          playNote(
            step.sound.type,
            step.sound.frequency1,
            step.sound.frequency2,
          );
        }
      }, REVEAL_ANIM_DURATION / 2);

      // Clean up the animation class once it finishes
      setTimeout(() => {
        step.cell.classList.remove("cell-reveal");
      }, REVEAL_ANIM_DURATION);
    }, startDelay);
  });

  const totalDuration =
    (sequence.length - 1) * REVEAL_STEP_DELAY + REVEAL_ANIM_DURATION;

  setTimeout(() => {
    isRevealing = false;
    if (onComplete) onComplete();
  }, totalDuration);
}

function scoreGuess(row, player1Guess, player2Guess, onComplete) {
  // Player 1's own guess, scored against player 1's own answer (their guess board)
  const player1OwnResult = computeResult(player1Guess, player1Answer);

  // Player 2's own guess, scored against player 2's own answer (their guess board)
  const player2OwnResult = computeResult(player2Guess, player2Answer);

  // Player 1's guess shown on player 2's answer board, scored against player 2's answer
  const crossResultOnPlayer2 = computeResult(player1Guess, player2Answer);

  // Player 2's guess shown on player 1's answer board, scored against player 1's answer
  const crossResultOnPlayer1 = computeResult(player2Guess, player1Answer);

  // First, copy the guesses onto the opponent's answer board immediately (letters only, no color yet)
  copyGuessLetters(player2AnswerCells, row, player1Guess);
  copyGuessLetters(player1AnswerCells, row, player2Guess);

  // Then reveal colors left to right, in true screen order:
  // player 1's answer board -> player 1's guess board -> player 2's answer board -> player 2's guess board
  const revealSequence = [
    ...buildColumnSequence(
      player1AnswerCells,
      row,
      crossResultOnPlayer1,
      "square",
    ),
    ...buildColumnSequence(player1Cells, row, player1OwnResult, "square"),
    ...buildColumnSequence(
      player2AnswerCells,
      row,
      crossResultOnPlayer2,
      "sawtooth",
    ),
    ...buildColumnSequence(player2Cells, row, player2OwnResult, "sawtooth"),
  ];

  animateReveal(revealSequence, () => {
    // --- Update each player's keyboard using EVERYTHING scored against their own answer ---
    // Player 1's keyboard: their own guess vs their answer, PLUS player 2's guess vs their answer (via the twist)
    updateLetterStatus(player1LetterStatus, player1Guess, player1OwnResult);
    updateLetterStatus(player1LetterStatus, player2Guess, crossResultOnPlayer1);
    updateKeyboardColors(player1KeyboardButtons, player1LetterStatus);

    // Player 2's keyboard: their own guess vs their answer, PLUS player 1's guess vs their answer (via the twist)
    updateLetterStatus(player2LetterStatus, player2Guess, player2OwnResult);
    updateLetterStatus(player2LetterStatus, player1Guess, crossResultOnPlayer2);
    updateKeyboardColors(player2KeyboardButtons, player2LetterStatus);

    // After the animations, it checks if either player has won!
    checkEndGame(player1Guess, player2Guess);

    if (onComplete) onComplete();
  });
}

function submitGuess() {
  if (gameOverStatus === 1) return; // block input if the game has reached the end
  if (isRevealing) return; // block input while the scoring animation plays

  const player1Guess = getPlayer1CurrentGuess();
  const player2Guess = getPlayer2CurrentGuess();

  if (currentTurn % 2 === 0) {
    // player 1's turn

    if (player1CurrentCol < WORD_LENGTH) {
      // Error if not enough letters have been inputted
      showError("Not enough letters");
      shakeRow(player1CurrentRow);
      return;
    }

    if (!guessbank.includes(player1Guess)) {
      // Error if not in word bank
      showError("Not in word list");
      shakeRow(player1CurrentRow);
      return;
    }

    if (player1PreviousGuesses.includes(player1Guess)) {
      // Error if guess is repeated
      showError("Repeat guess");
      shakeRow(player1CurrentRow);
      return;
    }

    // If the guess is valid - record it to previousGuesses
    player1PreviousGuesses.push(player1Guess);

    // Increment the turn counter
    if (player2TurnStatus === 0) {
      // If player 2 hasn't submitted their guess, increase the turn count by 1
      player1TurnStatus = 1;
      currentTurn++;
      updateActiveRowHighlight();
    } else if (player2TurnStatus === 1) {
      // If player 2 has already submitted their guess, increase the turn count by 2, reset the turn status to 0, and score.
      player2TurnStatus = 0;
      currentTurn++;
      currentTurn++;
      const scoredRow = player1CurrentRow;

      scoreGuess(scoredRow, player1Guess, player2Guess, () => {
        updateActiveRowHighlight();
      });

      // Move to next row
      player1CurrentRow++;
      player1CurrentCol = 0;
      player2CurrentRow++;
      player2CurrentCol = 0;
    }

    console.log("ended player 1 turn", currentTurn);
    updateActiveRowHighlight();
  } else {
    // player 2's turn

    if (player2CurrentCol < WORD_LENGTH) {
      // Error if not enough letters have been inputted
      showError("Not enough letters");
      shakeRow(player2CurrentRow);
      return;
    }

    if (!guessbank.includes(player2Guess)) {
      // Error if not in word bank
      showError("Not in word list");
      shakeRow(player2CurrentRow);
      return;
    }

    if (player2PreviousGuesses.includes(player2Guess)) {
      // Error if guess is repeated
      showError("Repeat guess");
      shakeRow(player2CurrentRow);
      return;
    }

    // If the guess is valid - record it to previousGuesses
    player2PreviousGuesses.push(player2Guess);

    const scoredRow = player1CurrentRow;

    // Increment the turn counter
    if (player1TurnStatus === 0) {
      // If player 1 hasn't submitted their guess, call the switch turns function
      player2TurnStatus = 1;
      switchTurns();
      console.log("switching turns because player 1 hasn't submitted yet");
    } else if (player1TurnStatus === 1) {
      // If player 1 has already submitted their guess, increase the turn count by 1, reset the turn statuses to 0, and score
      player1TurnStatus = 0;
      currentTurn++;

      scoreGuess(scoredRow, player1Guess, player2Guess, () => {
        updateActiveRowHighlight();
      });
      // Move to next row
      player1CurrentRow++;
      player1CurrentCol = 0;
      player2CurrentRow++;
      player2CurrentCol = 0;
    }
    console.log("ended player 2 turn", currentTurn);
  }
}

// Function that checks for when a player has correctly guessed their answer, or when
// both players are out of guesses
function checkEndGame(player1Guess, player2Guess) {
  const keepPlayingButton = document.getElementById("keep-playing-button");

  if ((player1Guess === player1Answer) & (player2Guess === player2Answer)) {
    gameOverStatus = 1;
    showEndGame("Tie Game!");
    victorySong();
    keepPlayingButton.classList.add("hide");
  } else if (player1Guess === player1Answer) {
    gameOverStatus = 1;
    showEndGame("Player 1 Wins!");
    victorySong();
  } else if (player2Guess === player2Answer) {
    gameOverStatus = 1;
    showEndGame("Player 2 Wins!");
    victorySong();
  } else if (player1CurrentRow === MAX_ROWS) {
    gameOverStatus = 1;
    showEndGame("Game Over!");
    defeatSong();
    keepPlayingButton.classList.add("hide");
  }
}

function victorySong(duration = 2.2) {
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  const firstNote = audioCtx.currentTime + 0.1;
  const rest = audioCtx.currentTime + 0.2;
  const secondNote = audioCtx.currentTime + 0.3;

  const osc1 = audioCtx.createOscillator();
  osc1.type = "square";
  osc1.frequency.setValueAtTime(261.63, firstNote);
  osc1.frequency.setValueAtTime(0, rest);
  osc1.frequency.setValueAtTime(261.63, secondNote);

  const osc2 = audioCtx.createOscillator();
  osc2.type = "square";
  osc2.frequency.setValueAtTime(329.63, firstNote);
  osc2.frequency.setValueAtTime(0, rest);
  osc2.frequency.setValueAtTime(329.63, secondNote);

  const osc3 = audioCtx.createOscillator();
  osc3.type = "square";
  osc3.frequency.setValueAtTime(392.0, firstNote);
  osc3.frequency.setValueAtTime(0, rest);
  osc3.frequency.setValueAtTime(392.0, secondNote);

  const osc4 = audioCtx.createOscillator();
  osc4.type = "square";
  osc4.frequency.setValueAtTime(523.26, firstNote);
  osc4.frequency.setValueAtTime(0, rest);
  osc4.frequency.setValueAtTime(523.26, secondNote);

  const gainNode1 = audioCtx.createGain();
  gainNode1.gain.setValueAtTime(0, firstNote);
  gainNode1.gain.linearRampToValueAtTime(0.05, firstNote + 0.01); // fade in to avoid a click
  gainNode1.gain.setValueAtTime(0.05, 2.05);
  gainNode1.gain.linearRampToValueAtTime(0, duration); // fade out to avoid a click

  osc1.connect(gainNode1);
  osc2.connect(gainNode1);
  osc3.connect(gainNode1);
  osc4.connect(gainNode1);
  gainNode1.connect(audioCtx.destination);

  osc1.start(firstNote);
  osc2.start(firstNote);
  osc3.start(firstNote);
  osc4.start(firstNote);
  osc1.stop(firstNote + duration);
  osc2.stop(firstNote + duration);
  osc3.stop(firstNote + duration);
  osc4.stop(firstNote + duration);

  // Bass note programming
  const firstBassNote = audioCtx.currentTime + 0.3;
  const firstBassRest = audioCtx.currentTime + 0.7;
  const secondBassNote = audioCtx.currentTime + 0.9;
  const secondBassRest = audioCtx.currentTime + 1.3;
  const thirdBassNote = audioCtx.currentTime + 1.5;

  const bass = audioCtx.createOscillator();
  bass.type = "square";
  bass.frequency.setValueAtTime(130.8, firstBassNote);
  bass.frequency.setValueAtTime(0, firstBassRest);
  bass.frequency.setValueAtTime(98, secondBassNote);
  bass.frequency.setValueAtTime(0, secondBassRest);
  bass.frequency.setValueAtTime(130.8, thirdBassNote);

  const bassGain = audioCtx.createGain();
  bassGain.gain.setValueAtTime(0, firstBassNote);
  bassGain.gain.linearRampToValueAtTime(0.05, firstBassNote + 0.01); // fade in to avoid a click
  bassGain.gain.setValueAtTime(0.05, 2.05);
  bassGain.gain.linearRampToValueAtTime(0, duration); // fade out to avoid a click

  bass.connect(bassGain);
  bassGain.connect(audioCtx.destination);

  bass.start(firstBassNote);
  bass.stop(firstBassNote + duration - 0.2);
}

function defeatSong(duration = 2) {
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  const Note1 = audioCtx.currentTime;
  const Note2 = audioCtx.currentTime + 0.3;
  const Note3 = audioCtx.currentTime + 0.6;
  const Note4 = audioCtx.currentTime + 0.9;

  const highVoice = audioCtx.createOscillator();
  highVoice.type = "square";
  highVoice.frequency.setValueAtTime(440, Note1);
  highVoice.frequency.setValueAtTime(415.3, Note2);
  highVoice.frequency.setValueAtTime(392, Note3);
  highVoice.frequency.setValueAtTime(369.99, Note4);

  const lowVoice = audioCtx.createOscillator();
  lowVoice.type = "square";
  lowVoice.frequency.setValueAtTime(277.18, Note1);
  lowVoice.frequency.setValueAtTime(261.63, Note2);
  lowVoice.frequency.setValueAtTime(246.94, Note3);
  lowVoice.frequency.setValueAtTime(233.08, Note4);

  const gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0, Note1);
  gainNode.gain.linearRampToValueAtTime(0.05, Note1 + 0.01); // fade in to avoid a click
  gainNode.gain.setValueAtTime(0.05, duration - 0.05);
  gainNode.gain.linearRampToValueAtTime(0, duration); // fade out to avoid a click

  highVoice.connect(gainNode);
  lowVoice.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  highVoice.start(Note1);
  highVoice.stop(Note1 + duration);
  lowVoice.start(Note1);
  lowVoice.stop(Note1 + duration);
}

function showEndGame(message) {
  const endGameContainer = document.getElementById("endGameContainer");
  const endGameText = document.getElementById("endGameText");
  const endOfGameButton = document.getElementById("endOfGameButton");
  endGameText.textContent = message;
  endGameContainer.classList.add("show");
  endOfGameButton.classList.add("show");
}

function shakeRow(row) {
  if (currentTurn % 2 === 0) {
    // player 1's turn
    // Get all cells in the current row
    const rowCells = [];
    for (let col = 0; col < WORD_LENGTH; col++) {
      const cellIndex = getCellIndex(row, col);
      rowCells.push(player1Cells[cellIndex]);
    }

    rowCells.forEach((cell) => {
      cell.classList.remove("shake"); // reset in case it's still animating
      void cell.offsetWidth; // force reflow so the animation restarts
      cell.classList.add("shake");
    });
  } else {
    //player 2's turn

    // Get all cells in the current row
    const rowCells = [];
    for (let col = 0; col < WORD_LENGTH; col++) {
      const cellIndex = getCellIndex(row, col);
      rowCells.push(player2Cells[cellIndex]);
    }

    rowCells.forEach((cell) => {
      cell.classList.remove("shake"); // reset in case it's still animating
      void cell.offsetWidth; // force reflow so the animation restarts
      cell.classList.add("shake");
    });
  }
}

function updateActiveRowHighlight() {
  // Clear all highlights first
  player1Cells.forEach((cell) => cell.classList.remove("active-row"));
  player2Cells.forEach((cell) => cell.classList.remove("active-row"));

  game_over_turn = MAX_ROWS * 2;

  if (currentTurn === game_over_turn) {
    return;
  } else if (currentTurn % 2 === 0) {
    // Player 1's turn - highlight their current row
    for (let col = 0; col < WORD_LENGTH; col++) {
      const cellIndex = getCellIndex(player1CurrentRow, col);
      player1Cells[cellIndex].classList.add("active-row");
    }
  } else {
    // Player 2's turn - highlight their current row
    for (let col = 0; col < WORD_LENGTH; col++) {
      const cellIndex = getCellIndex(player2CurrentRow, col);
      player2Cells[cellIndex].classList.add("active-row");
    }
  }
}

// Run this once on init. This highlights player 1's first row
updateActiveRowHighlight();

// These are state variables that keep track of the letter scores.
let player1LetterStatus = {}; // e.g. { A: "correct", B: "absent" }
let player2LetterStatus = {};
const player1KeyboardButtons = document.querySelectorAll(
  ".player-1-keyboard .letter-key",
);
const player2KeyboardButtons = document.querySelectorAll(
  ".player-2-keyboard .letter-key",
);

function updateLetterStatus(statusMap, guess, result) {
  for (let i = 0; i < WORD_LENGTH; i++) {
    const letter = guess[i];
    const newStatus = result[i];
    const currentStatus = statusMap[letter];

    // Priority: correct > present > absent — never downgrade a letter
    if (currentStatus === "correct") continue;
    if (currentStatus === "present" && newStatus === "absent") continue;

    statusMap[letter] = newStatus;
  }
}

function updateKeyboardColors(buttons, statusMap) {
  buttons.forEach((button) => {
    const letter = button.textContent;
    button.classList.remove("correct", "present", "absent");
    if (statusMap[letter]) {
      button.classList.add(statusMap[letter]);
    }
  });
}

// Listen for Physical Keyboard Clicks
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submitGuess();
  } else if (e.key === "Backspace") {
    deleteLetter();
  } else if (/^[a-zA-Z]$/.test(e.key)) {
    addLetter(e.key.toUpperCase());
  }
});

// Player 1 on-screen keyboard - only responds during player 1's turn
document
  .querySelectorAll(".player-1-keyboard .letter-key")
  .forEach((button) => {
    button.addEventListener("click", () => {
      if (currentTurn % 2 === 0) {
        addLetter(button.textContent);
      }
    });
  });

document
  .querySelector(".player-1-keyboard .enter-key")
  .addEventListener("click", () => {
    if (currentTurn % 2 === 0) {
      submitGuess();
    }
  });

document
  .querySelector(".player-1-keyboard .delete-key")
  .addEventListener("click", () => {
    if (currentTurn % 2 === 0) {
      deleteLetter();
    }
  });

// Player 2 on-screen keyboard - only responds during player 2's turn
document
  .querySelectorAll(".player-2-keyboard .letter-key")
  .forEach((button) => {
    button.addEventListener("click", () => {
      if (currentTurn % 2 === 1) {
        addLetter(button.textContent);
      }
    });
  });

document
  .querySelector(".player-2-keyboard .enter-key")
  .addEventListener("click", () => {
    if (currentTurn % 2 === 1) {
      submitGuess();
    }
  });

document
  .querySelector(".player-2-keyboard .delete-key")
  .addEventListener("click", () => {
    if (currentTurn % 2 === 1) {
      deleteLetter();
    }
  });
