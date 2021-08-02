const button = document.querySelector ('.button')
const inputValue = document.querySelector ('.input')
const name = documnent.querySelector('.name');
const desc = documnent.querySelector('.desc');
const temp = documnent.querySelector('.temp');

fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&APPID=b603af9acd96c879fb647ff394b51ead")

