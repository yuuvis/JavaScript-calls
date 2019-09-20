const request = require('request');

var key = ""
var baseUrl = "https://api.yuuvis.io/"

var statement = "SELECT * FROM enaio:object"
var max_items = 50
var skip_items = 0

function createSearchQuery(statement, max_items, skip_items) {
  return {
    "query":{
        "statement": statement,
        "maxItems": max_items,
        "skipCount": skip_items
    }
  }
}

function createSearchRequest(statement, max_items, skip_items) {
  return{
    method: 'POST',
    uri: baseUrl + 'dms/objects/search',
    headers: {
      'Accept': 'application/json',
      'Ocp-Apim-Subscription-Key': key,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(createSearchQuery(statement, max_items, skip_items))
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

var simpleSearchRequest = createSearchRequest(statement, max_items, skip_items)
executeRequest(simpleSearchRequest)
