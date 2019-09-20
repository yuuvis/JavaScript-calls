const request = require('request');

var key = ""
var baseUrl = "https://api.yuuvis.io/"

function createRawSchemaRequest() {
  return{
    method: 'GET',
    uri: baseUrl + 'admin/schema',
    headers: {
      'Ocp-Apim-Subscription-Key': key,
      'Accept': 'application/xml'
    }
  }
}

function executeRequest(request_object){
  request.get(request_object, function callback(err, httpResponse, body) {
    if(err) throw err;
    else {
      console.log(httpResponse.statusCode)
      console.log(body)
    }
  })
}

var simpleSearchRequest = createRawSchemaRequest()
executeRequest(simpleSearchRequest)
