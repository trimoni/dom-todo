const btn = document.querySelector('#submit-button')
const input = document.querySelector('#sheet')
const list = document.querySelector('#todo-list')
const resetButton = document.querySelector('#reset-button')

document.querySelector('button').addEventListener('click', function(evt) {
  const li = document.createElement('li')
  // console.log(li)
  li.textContent = input.value
  // console.log(li)
  input.value = ''
  document.querySelector('ul').appendChild(li)
  // console.log(li)
})

// How to remove a bullet point

list.addEventListener('click', function(evt) {
  // Make an event listener for the 'ul'/ todo list. We will need to run a function to remove the bullet points
  const letItGo = evt.target.parentNode
  // we will make a variable called letItGo, and it will target the parentNode (ul) 
  letItGo.removeChild(evt.target)
  // we will then put removeChild which removes the children (li) from the parent (ul)
})

// Reset btn to remove all bullet points
resetButton.addEventListener('click', function(evt) {
  // make an eventlistener for the reset button
  list.innerHTML = ''
  // will change the text to have an empty string
  input.value = ''
  // make the input of what we wrote in empty
})
