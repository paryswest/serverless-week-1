const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');

const days = document.querySelector('.days');
const feelsLike = document.querySelector('.feels');
const feelsLikeMorn = document.querySelector('.feels_morn');
const feelsLikeEve = document.querySelector('.feels_eve');
const feelsLikeNight = document.querySelector('.feels_night');

const grandRising = document.querySelector('.sunrise');
const grandEvening = document.querySelector('.sunset');
const windyDirt = document.querySelector('.gusty');
const humid = document.querySelector('.humidity');

const kelvinToF = (kelvin) => {
  return Math.trunc(((kelvin - 273) * 9) / 5 + 32) + '°F';
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

      function capitalizeTheFirstLetterOfEachWord(words) {
        const separateWord = words.toLowerCase().split(' ');
        for (let i = 0; i < separateWord.length; i++) {
           separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
           separateWord[i].substring(1);
        }
        return separateWord.join(' ');
     }

      let descValue = capitalizeTheFirstLetterOfEachWord(data['weather'][0]['description']);

      name.innerHTML = nameValue;
      temp.innerHTML = kelvinToF(tempValue);
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
      function timeConverter(UNIX_timestamp) {
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = month + ' '+ date + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
      }

      grandRising.innerHTML = 'Sunrise: ' + timeConverter((data.list[0].sunrise));
      grandEvening.innerHTML = 'Sunset: ' + timeConverter((data.list[0].sunset));
      feelsLike.innerHTML =
        'Feels Day: ' + kelvinToF(data.list[0].feels_like.day);
      feelsLikeMorn.innerHTML =
        ' Feels Morn: ' + kelvinToF(data.list[0].feels_like.morn);
      feelsLikeEve.innerHTML =
        ' Feels Eve: ' + kelvinToF(data.list[0].feels_like.eve);
      feelsLikeNight.innerHTML =
        ' Feels Night: ' + kelvinToF(data.list[0].feels_like.night);

      windyDirt.innerHTML = 'Winds: ' + (data.list[0].gust) + ' mph';
      humid.innerHTML = 'Humidity: ' + (data.list[0].humidity) + '%'

      console.log(data);
      console.log(data.list[0]);
    })

    .catch((err) => alert('Wrong city name!'));
});
                  

               

// const starSign = (value) => {
// fetch("http://ohmanda.com/api/horoscope/aries")
//   .then(response => response.json())
//   .then(data => { $(".daily-horoscope").append(JSON.stringify(data))  });
// //   fetch('	https://ohmanda.com/api/horoscope/' + value, {
// //     headers: {
// //       'Access-Control-Allow-Origin': '*',
// //     },
// //   })
// //     .then((response) => response.json())
// //     .then((data) => {
// //       console.log(data);
// //       let nameValue = data['name'];
// //       let tempValue = data['main']['temp'];
// //       let descValue = data['weather'][0]['description'];

// //       horoscope.innerHTML = nameValue;
// //     });
// };

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
