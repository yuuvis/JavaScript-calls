const request = require('request');
const fs = require('fs');

var key = ""
var baseUrl = "https://api.yuuvis.io/"

var current_doc_id = ""
var new_metadata = "metadata.json"

function createUpdateRequest(doc_id, doc_newFile) {
  return{
    method: 'POST',
    uri: baseUrl + 'dms/objects/' + doc_id + '/contents/file',
    headers: {
      'Accept': 'application/json',
      'Ocp-Apim-Subscription-Key': key,
    },
    body: fs.createReadStream(doc_newFile)
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

var simpleUpdateRequest = createUpdateRequest(current_doc_id, new_metadata)
executeRequest(simpleUpdateRequest)
