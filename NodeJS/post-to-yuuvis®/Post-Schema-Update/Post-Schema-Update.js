const request = require('request');
const fs = require('fs');

var key = ""
var baseUrl = "https://api.yuuvis.io/"


function createSchemaUpdateRequest(schema_filename) {
  return{
    method: 'POST',
    uri: baseUrl + 'admin/schema',
    headers: {
      'Accept': 'application/json',
      'Ocp-Apim-Subscription-Key': key,
      'Content-Type': 'application/xml'
    },
    body: fs.createReadStream(schema_filename)
  }
}

function executeRequest(request_object){
  request.post(request_object, function callback(err, httpResponse, body) {
    if(err) throw err;
    else {
      console.log(httpResponse.statusCode)
      console.log(body)
    }
  })
}

var simpleSearchRequest = createSchemaUpdateRequest('new_schema.xml')
executeRequest(simpleSearchRequest)
