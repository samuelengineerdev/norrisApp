const jokeArea = document.getElementById('joke-area')
const backButton = document.getElementById('back-button')
const nextButton = document.getElementById('next-button')

let backJoke = ''
let backJoke2 = ''

const jok = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json(res))
    .then(res => {
        traslate(res.value)
    })
}

jok()

nextButton.addEventListener('click', () => {
    backJoke2 = backJoke
    jok()
})

backButton.addEventListener('click', () => {
    jokeArea.value = backJoke2
})

const traslate = (res) => {
    fetch(`https://api.mymemory.translated.net/get?q=${res}&langpair=en|es`)
    .then(res => res.json(res))
    .then(res => jokeArea.value = res.responseData.translatedText)
    .then(res => backJoke = res)
}