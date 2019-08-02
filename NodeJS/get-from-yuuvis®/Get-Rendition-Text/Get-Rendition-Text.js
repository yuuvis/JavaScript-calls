const request = require('request');
const fs = require('fs');

var key = ""
var baseUrl = "https://api.yuuvis.io/"
var oid = ""


function createRenditionTextRequest(objectId) {
  return{
    method: 'GET',
    uri: baseUrl + 'dms/objects/' + objectId +'/contents/renditions/text',
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
