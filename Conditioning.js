const userIsLoggedIn = true
const totalPrice = 443

if (totalPrice == null)
{
    console.log('User is logged in')
} else if (totalPrice < 10)
{
    console.log('user is not logged')
} else
{
    console.log('default')
}

userIsLoggedIn ? console.log('logged in') : console.log('not logged in')

