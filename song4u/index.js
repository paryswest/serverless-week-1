const querystring = require('querystring');
const fetch = require('node-fetch');

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const queryObject = querystring.parse(req.body);
  context.log(queryObject);
  let url = queryObject.MediaUrl0;
  context.log(url);
  let resp = await fetch(url, {
    method: 'GET',
  });

  let data = await resp.arrayBuffer();

  var result = await analyzeImage(data);
  context.log(result);
  let age = result[0].faceAttributes.age;
context.log(age)
  let id = '';

  if (age > 5 && age < 25) {
    id = 'GenZ';
  } else if (age > 24 && age < 41) {
    id = 'GenY';
  } else if (age > 40 && age < 57) {
    id = 'GenX';
  } else if (age > 56 && age < 76) {
    id = 'BabyBoomers';
  } else {
    id = 'Unknown';
  }
context.log(id)
  context.res = {
    // status: 200, /*Defaults to 200 */
    body: id,
  };
};

async function analyzeImage(img) {
  //   const subscriptionKey = process.env.SUBSCRIPTIONKEY2;
  //   const uriBase = process.env.ENDPOINT2 + '/face/v1.0/detect';

  const subscriptionKey = 'a6d27d537aae4a4f965954450644a240';
  const uriBase =
    'https://shogomakishimaxx.cognitiveservices.azure.com/face/v1.0/detect';

  let params = new URLSearchParams({
    returnFaceId: 'true',
    returnFaceAttributes: 'age', //FILL IN THIS LINE
  });

  //COMPLETE THE CODE
  console.log(uriBase + '?' + params.toString());
  let resp = await fetch(uriBase + '?' + params.toString(), {
    method: 'POST', //WHAT TYPE OF REQUEST?
    body: img, //WHAT ARE WE SENDING TO THE API?

    //ADD YOUR TWO HEADERS HERE
    headers: {
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': subscriptionKey,
    },
  });

  let data = await resp.json();

  return data;
}
