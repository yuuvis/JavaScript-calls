const request = require('request');

var key = ""
var baseUrl = "https://api.yuuvis.io/"
var oid = ""


function createDeleteRequest(objectId) {
  return{
    method: 'DELETE',
    uri: baseUrl + 'dms/objects/'+oid,
    headers: {
      'Ocp-Apim-Subscription-Key': key
    }
  }
}

function executeRequest(request_object){
  request.delete(request_object, function callback(err, httpResponse, body) {
    if(err) throw err;
    else {
      console.log(httpResponse.statusCode)
      console.log(body)
    }
  })
}

var simpleSearchRequest = createDeleteRequest(oid)
executeRequest(simpleSearchRequest)
