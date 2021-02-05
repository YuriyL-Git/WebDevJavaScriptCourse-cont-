const grandParent = document.querySelector('#grand-parent')
grandParent.style.color = 'red'

const parentOne = grandParent.children[0]
parentOne.style.color = 'orange'
const parentTwo = parentOne.nextElementSibling
parentTwo.style.color = 'green'

const childOne = parentOne.children[0]
childOne.style.color = 'blue'

const childOne1 = document.querySelector("#child-one")
 parentOne1 = childOne1.parentElement
