const querystring = require('querystring');
var fetch = require('node-fetch');

// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//    const queryObject = querystring.parse(req.body);

//     var reqbody = req.body
//     context.log(reqbody)

//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: reqbody
//     };
// }

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const queryObject = querystring.parse(req.body);

  var reqbody = req.body;
  context.log(reqbody);

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: queryObject.MediaUrl0,
  };

  let resp = await fetch(YOUR_URL, {
    /*The await expression causes async function execution to pause until a Promise is settled 
    (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. 
    When resumed, the value of the await expression is that of the fulfilled Promise*/
    method: 'GET',
  });

  // receive the response
  let data = await resp.arrayBuffer();
  // we are receiving it as a Buffer since this is binary data

  var result = await analyzeImage(imageData);
  context.log(imageData);

  let age = result[0].faceAttributes.age;

  var result = await analyzeImage(data);
  let age = result[0].faceAttributes.age;

  context.log(age)
  context.log(generation)

  if (age >= 5 && age <= 25) {
    id = 'GenZ';
  } else if (age >= 26 && age <= 41) {
    id = 'GenY';
  } else if (age >= 42 && age <= 57) {
    id = 'GenX';
  } else if (age >= 58 && age <= 76) {
    id = 'BabyBoomers';
  } else {
    id = 'Unknown';
  }

  return generation 
};
