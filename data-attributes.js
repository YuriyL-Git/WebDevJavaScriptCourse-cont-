// const test = document.querySelector('[data-my-value]')
// console.log(test.dataset.myValue)
//
// test.dataset.myValue = '1111'
// console.log(test)

const buttons = document.querySelectorAll('button')
buttons.forEach(
    button =>
    {
        button.addEventListener('click', () =>
        {
            const currentClicks = parseInt(button.dataset.clicks);
            button.dataset.clicks = (currentClicks + 1).toString()
            console.log(currentClicks)
        })
    }
)