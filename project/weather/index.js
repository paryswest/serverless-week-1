const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');

const days = document.querySelector('.days');

const starSign = (value) => {
fetch("http://ohmanda.com/api/horoscope/aries")
  .then(response => response.json())
  .then(data => { $(".daily-horoscope").append(JSON.stringify(data))  });
//   fetch('	https://ohmanda.com/api/horoscope/' + value, {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       let nameValue = data['name'];
//       let tempValue = data['main']['temp'];
//       let descValue = data['weather'][0]['description'];

//       horoscope.innerHTML = nameValue;
//     });
};

button.addEventListener('click', function () {
  fetch(
    'https://pro.openweathermap.org/data/2.5/weather?q=' +
      inputValue.value +
      '&appid=b603af9acd96c879fb647ff394b51ead'
  )
    .then((response) => response.json())
    .then((data) => {
      let nameValue = data['name'];
      let tempValue = data['main']['temp'];
      let descValue = data['weather'][0]['description'];

      name.innerHTML = nameValue;
      temp.innerHTML = Math.trunc(((tempValue - 273) * 9) / 5 + 32) + '°F';
      console.log(tempValue);
      desc.innerHTML = descValue;
      console.log(descValue);
    })

    .catch((err) => alert('Wrong city name!'));

  fetch(
    'https://pro.openweathermap.org/data/2.5/forecast/daily?q=' +
      inputValue.value +
      '&appid=b603af9acd96c879fb647ff394b51ead'
  )
    .then((response) => response.json())
    .then((data) => {
      days.innerHTML = data;
      console.log(data);
    })

    .catch((err) => alert('Wrong city name!'));
});

// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     button.addEventListener('click', function() {
//         fetch('https://pro.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=b603af9acd96c879fb647ff394b51ead')
//           .then(response => response.json())
//           .then(data => {
//               let nameValue = data['name'];
//               let tempValue = data['main']['temp'];
//               let descValue = data['weather'][0]['description'];

//               name.innerHTML = nameValue;
//               temp.innerHTML = tempValue;
//               console.log(tempValue);
//               desc.innerHTML = descValue;
//               console.log(descValue);
//           })

//       .catch(err => alert('Wrong city name!'))
//       });
//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: responseMessage
//     };
//
