const button = document.querySelector('.button');
const inputValue = document.querySelector('.input');
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');

button.addEventListener('click', function () {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      inputValue.value +
      '&APPID=b603af9acd96c879fb647ff394b51ead'
  )
    .then((response) => response.json)
    .then((data) => console.log(data))

    .catch((err) => alert('Wrong city name!'));
});

// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&APPID=b603af9acd96c879fb647ff394b51ead")

//     const name = (req.query.name || (req.body && req.body.name));
//     const responseMessage = name
//         ? "Hello, " + name + ". This HTTP triggered function executed successfully."
//         : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: responseMessage
//     };
// }
