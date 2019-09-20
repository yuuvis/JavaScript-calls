const request = require('request');

var key = ""
var baseUrl = "https://api.yuuvis.io/"
var oid = "" //object id
var vid = "" //version id


function createRenditionTextRequest(objectId,versionNr) {
  return{
    method: 'DELETE',
    uri: baseUrl + 'dms/objects/'+objectId+'/versions/'+ versionNr,
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

var simpleSearchRequest = createRenditionTextRequest(oid,vid)
executeRequest(simpleSearchRequest)
