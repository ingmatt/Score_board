

let plusOneHome = document.getElementById("plus-point-home")
let plusOneAway = document.getElementById("plus-point-away")

let countHome = 0
let countAway = 0

function addOneHome() {
  countHome += 1
  plusOneHome.textContent = countHome
}

function addOneAway() {
  countAway += 1
  plusOneAway.textContent = countAway
}

function addTwoHome() {
  countHome += 2
  plusOneHome.textContent = countHome
}

function addTwoAway() {
  countAway += 2
  plusOneAway.textContent = countAway
}

function addThreeHome() {
  countHome += 3
  plusOneHome.textContent = countHome
}

function addThreeAway() {
  countAway += 3
  plusOneAway.textContent = countAway
}

function reset() {
  countHome = 0
  countAway = 0
  plusOneAway.textContent = countAway
  plusOneHome.textContent = countHome
}
