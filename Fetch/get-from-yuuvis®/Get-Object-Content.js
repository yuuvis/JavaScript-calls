const fetch = require('node-fetch');

var key = "your API key here"
var baseUrl = "https://api.yuuvis.io/" 
var objectId = "your Object ID here"


fetch(baseUrl + "dms/objects/"+ objectId + "/contents/file",{
headers: {
      'Ocp-Apim-Subscription-Key': key
  }
}) 
    .then(function(response) {
  // handle HTTP response
  console.log('cat', response)
}, function(error) {
  // handle network error
})
