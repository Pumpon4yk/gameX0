const grid = document.querySelector('.grid')



function createMarkup() {
    let box = '';
    
    for (let i = 1; i <= 9; i += 1) {
        box += `<div class='box' data-id='${i}'></div>`;
    }
    return box;
}

grid.insertAdjacentHTML('beforeend', createMarkup())
grid.addEventListener('click', onClick)



let player = 'X';
function onClick(evt) {

    // console.log(evt);
    if (!evt.target.classList.contains('box')) {
        return
    }

    if (!evt.target.textContents) {
        evt.target.textContents = player;
    }
    player = player === "X" ? "O" : "X";

    console.log(player);
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
