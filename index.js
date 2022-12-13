const grid = document.querySelector(".grid");
const btnReset = document.querySelector(".btn-reset");
let player = "X";
const win = [
  [1, 2, 3],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
];
const playerX = [];
const player0 = [];

grid.innerHTML = createMarkup();
grid.addEventListener("click", onClick);
btnReset.addEventListener("click", onRestart);

function createMarkup() {
  let box = "";

  for (let i = 1; i <= 9; i += 1) {
    box += `<div class="item" data-id="${i}"></div>`;
  }
  return box;
}

function isWinner(arr) {
  return win.some((item) => item.every((id) => arr.includes(id)));
}

function onClick(evt) {
  const id = Number(evt.target.dataset.id);
  let result;

  if (!evt.target.classList.contains("item")) {
    return;
  }

  if (evt.target.textContent) {
    return;
  }

  if (!evt.target.textContent) {
    evt.target.textContent = `${player}`;
  }

  if (player === "X") {
    playerX.push(id);
    result = isWinner(playerX);
  }

  if (player === "0") {
    player0.push(id);
    result = isWinner(player0);
  }

  setTimeout(() => {
    if (result) {
      winerModal(player);
      return;
    }
    player = player === "X" ? "0" : "X";
  }, 150);
}

function winerModal(winer) {
  const modal = `
    <div class="winner">
    <img src="https://cdn-icons-png.flaticon.com/512/5052/5052129.png" alt="" class="image">
    <p class="text">Сongratulations</p>
    <h2 class="title">${winer}</h2>
    <button class="close" type="button">Close</button>
</div>
    `;

  grid.innerHTML = modal;
  btnReset.classList.add("hidden");

  const btnClose = document.querySelector(".close");

  btnClose.addEventListener("click", onRestart);
}

function onRestart() {
  player = "X";
  playerX.splice(0, 10);
  player0.splice(0, 10);
  grid.innerHTML = createMarkup();
  btnReset.classList.remove("hidden");
  return;
}

// const content = document.querySelector('.grid');
// const restart = document.querySelector('.js-restart')
// content.insertAdjacentHTML('beforeend', createMarkup());
// content.addEventListener('click', onClick);
// restart.addEventListener('click', onRestart);

// const X_KEY = 'PlayerX';
// const O_KEY = 'PlayerO';
// let player = 'X';
// let stepX = JSON.parse(localStorage.getItem(X_KEY)) || [];
// let stepO = JSON.parse(localStorage.getItem(O_KEY)) || [];
// const win = [
//   [1, 2, 3],
//   [3, 6, 9],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [1, 5, 9],
//   [3, 5, 7]
// ];

// function startGame() {
//   [...content.children].forEach(item => {
//     const id = Number(item.dataset.id)

//     if (stepX.includes(id)) {
//       item.textContent = 'X';
//     } else if (stepO.includes(id)) {
//       item.textContent = 'O'
//     }
//   })
// }
// startGame()

// // const test = [1, 2, 3]
// // const isTrue = test.every(id => stepX.includes(id));
// // console.log(win.some(item => console.log(item)));

// function isWinner(arr) {
//   return win.some(item => item.every(id => arr.includes(id)))
// }

// function createMarkup() {
//   let markup = '';
//   for (let i = 1; i <= 9; i += 1) {
//     markup += `<div class="box" data-id="${i}"></div>`
//   }

//   return markup
// }

// function onClick(evt) {
//   if (!evt.target.textContent) {
//     evt.target.textContent = player;
//     const id = Number(evt.target.dataset.id);
//     let result;
//     if (player === "X") {
//       stepX.push(id)
//       localStorage.setItem(X_KEY, JSON.stringify(stepX));
//       result = isWinner(stepX);
//     } else {
//       stepO.push(id)
//       localStorage.setItem(O_KEY, JSON.stringify(stepO));
//       result = isWinner(stepO);
//     }

//     setTimeout(() => {
//       if (result) {
//         alert(`Winner ${player}`);
//         onRestart();
//         return;
//       }
//       player = player === "X" ? "O" : "X";
//     })
//   } else {
//     alert('Change!!!')
//   }
// }

// function onRestart() {
//   player = "X";
//   stepX = [];
//   stepO = [];
//   //   localStorage.removeItem(X_KEY);
//   //   localStorage.removeItem(O_KEY);
//   localStorage.clear()
//   content.innerHTML = createMarkup();
// }
