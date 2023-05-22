// const submitBtn = document.getElementById("button");
// const ratingValues = document.getElementsByClassName("numbers");
// const currStates = toGetListState(ratingValues);

// const pagesDisplay = document.getElementsByClassName('pages');
// const indexChoiceDisplay = document.getElementById('displayChoice');
// var indexChoice = 0;

// for(let i=0 ; i < ratingValues.length ; i++){
// let d = i + 1;
// ratingValues[i].addEventListener('click',function (){
//     if (ratingValues[i].getAttribute('state') == 'active'){
//         ratingValues[i].setAttribute('state','not-active');
//     } else {
//         ratingValues[i].setAttribute('state','active');
//         coloriseOnlyClicked(ratingValues, i);
//         indexChoice = i + 1;
//     }
// })
// }

// submitBtn.addEventListener('click',function() {
//     const listOfCurrentState = toGetListState(ratingValues);
//     const state='active'

//     if (listOfCurrentState.includes(state)){
//         pagesDisplay[0].style.display = 'none';
//         pagesDisplay[1].style.display = '';
//         indexChoiceDisplay.innerHTML = 'You selected ' + indexChoice + ' out of 5';
//     }
// })

// function coloriseOnlyClicked(listOfVariables, n) {
//     for (let i = 0; i < listOfVariables.length ; i++){
//         if (i != n){
//             listOfVariables[i].setAttribute('state','not-active');
//         }else{
//             continue;
//         }
//     }
// }

// function toGetListState(list){
//     const states = [];
//     for (let i = 0 ; i < list.length ; i++){
//         var curState= list[i].getAttribute('state');
//         states.push(curState);
//     }
//     return states;
// }

let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
  // console.log();
  //   let i = Math.floor(Math.random() * 2);
  if (heads > tails +1 && heads + tails > 15){
    setTimeout(function () {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
    tails++;
  }else if (tails > heads + 1 && heads + tails > 15){
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
    heads++;
  }else{
    let i = Math.round(Math.random());
    coin.style.animation = "none";
    if (i) {
      setTimeout(function () {
        coin.style.animation = "spin-heads 3s forwards";
      }, 100);
      heads++;
    } else {
      setTimeout(function () {
        coin.style.animation = "spin-tails 3s forwards";
      }, 100);
      tails++;
    }
  }
  
  setTimeout(updateStats, 3000);
  disableButton();
});
function updateStats() {
  document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
  document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}
function disableButton() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, 3000);
}
resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
});
