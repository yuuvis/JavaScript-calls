const request = require('request');

var key = ""
var baseUrl = "https://api.yuuvis.io/"
var oid = "" //object id
var vid = "" //version id

function createRenditionSlideRequest(objectId,versionNr) {
  return{
    method: 'GET',
    uri: baseUrl + 'dms/objects/' + objectId +'/versions/'+ versionNr +'/contents/renditions/slide',
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

var simpleSearchRequest = createRenditionSlideRequest(oid,vid)
executeRequest(simpleSearchRequest)
