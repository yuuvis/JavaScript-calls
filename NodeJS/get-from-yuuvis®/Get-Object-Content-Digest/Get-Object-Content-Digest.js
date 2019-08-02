const request = require('request');
const fs = require('fs');

var key = ""
var baseUrl = "https://api.yuuvis.io/"
var oid = ""


function createContentDigestRequest(objectId) {
  return{
    method: 'GET',
    uri: baseUrl + 'dms/objects/' + objectId + '/actions/validate/digest',
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

var simpleSearchRequest = createContentDigestRequest(oid)
executeRequest(simpleSearchRequest)
