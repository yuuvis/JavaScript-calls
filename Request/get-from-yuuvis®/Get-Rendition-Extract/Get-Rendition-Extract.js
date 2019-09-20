const request = require('request');

var key = ""
var baseUrl = "https://api.yuuvis.io/"
var oid = ""


function createRenditionPdfRequest(objectId) {
  return{
    method: 'GET',
    uri: baseUrl + 'dms/objects/' + objectId +'/contents/renditions/extract',
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

var simpleSearchRequest = createRenditionPdfRequest(oid)
executeRequest(simpleSearchRequest)
