const querystring = require('querystring');

// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     const queryObject = querystring.parse(req.body);

//     var reqbody = req.body
//     context.log(reqbody)

//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: queryObject.MediaUrl0
//     };
// }

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');  

   const queryObject = querystring.parse(req.body);

    var reqbody = req.body
    context.log(reqbody)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: reqbody
    };
}
