//Rock beats Spock
//Lizard beats scissors

document.querySelector("button").addEventListener('click', () => {
  let userChoice = document.querySelector("input").value
  if (userChoice.toUpperCase() === 'rock'.toUpperCase()) {
  console.log('rock')
  // document.getElementById('winLose').innerHTML = checkWin()
  }else if (userChoice.toUpperCase() === 'scissors'.toUpperCase()) {
  console.log('scissors')
  }else if(userChoice.toUpperCase() === 'paper'.toUpperCase()) {
  console.log('paper')
    }
  compChoice()
})


const compChoice = () => {
  let compValue = Math.ceil(Math.random() * 5)
  let rock = Math.ceil(Math.random() * 5)
  let paper = Math.ceil(Math.random() * 5)
  let lizard = Math.ceil(Math.random() * 5)
  let spock = Math.ceil(Math.random() * 5)
  let scissors = Math.ceil(Math.random() * 5)
  if(rock >= 5) {
    document.getElementById('compTurn').innerHTML = "rock"
  }else if (paper >= 5){
    document.getElementById('compTurn').innerHTML = "paper"
  }else if (lizard >= 5){
    document.getElementById('compTurn').innerHTML = "lizard"
  }else if (spock >= 5) {
    document.getElementById('compTurn').innerHTML = "spock"
  }else if (scissors >= 5){
    document.getElementById('compTurn').innerHTML = "scissors"
  }
}

console.log(compChoice())

const checkWin = () => {
  if (compChoice() === "paper" && userChoice === "rock") {
    console.log('this runs')
    document.getElementById('winLose').innerHTML = "You Lose!"
  }
}

checkWin()
