const favoriteAnimal = 'lion'

switch (favoriteAnimal)
{
    case 'lion': // You can use multiple conditions for the same code
    case 'cat':
        console.log('cats are cool')
        break
    case "dog":
        console.log('dogs are cool')
        console.log('dogs are very cool')
        break
    default:
        console.log('I dont know such an animal')

}

const number = 0

switch (number)
{
    case 0:
        console.log('zero')
        break
    case 1:
        console.log('one')
        break
    default:
        console.log('another number')
}

for (let i = 0; i < 5; i++)
{
    console.log(i)
}

let i = 0
while (i < 5)
{
    console.log(i)
    i++
}

const person = {
    name: 'Kyle',
    friend: {
        name: 'Joe',
        friend: {
            name: 'Sally',
            friend: {
                name: 'Nikolas'
            }
        }
    }
}
let currentPerson = person

while (currentPerson != null)
{
    console.log(currentPerson.name)
    currentPerson = currentPerson.friend
}
