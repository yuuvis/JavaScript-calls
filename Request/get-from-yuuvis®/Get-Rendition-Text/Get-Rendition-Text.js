const request = require('request');

var key = ""
var baseUrl = "https://ateamk8s.azure-api.net/"
const oid = "";


function createRenditionTextRequest(objectId) {
  return{
    method: 'GET',
    uri: baseUrl + 'dms-view/objects/' + objectId +'/contents/renditions/text',
    headers: {
      'Ocp-Apim-Subscription-Key': key
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

var simpleSearchRequest = createRenditionTextRequest(oid)
executeRequest(simpleSearchRequest)
