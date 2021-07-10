const fetch = require('node-fetch');

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  const subscriptionKey = process.env.SUBSCRIPTIONKEY2;

  let resp = await fetch("https://api.funtranslations.com/translate/yoda.json", {
    method: 'POST',
    body: {
      text: 'I like cats because they are super adorable',
    },
    headers: {
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': subscriptionKey,
      // This is where you authenticate the API request!
    },
  });
  context.res = {
    // status: 200, /*Defaults to 200 */
    body: resp.contents.translation
  };
  return resp
};
