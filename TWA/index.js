const fetch = require('node-fetch');

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const joke = Joke.getRandomJoke();

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: piglatin(joke),
  };
};