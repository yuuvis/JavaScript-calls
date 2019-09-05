const fetch = require('node-fetch');

var key = "your API key here"
var baseUrl = "https://api.yuuvis.io/" 
oid = "your Object ID here"

  fetch(
    baseUrl + 'dms/objects/'+ oid,{
        headers: {
            'Ocp-Apim-Subscription-Key': key
          }
    }) 
        .then(function(response) {
      // handle HTTP response
      console.log('cat',response)
    }, function(error) {
      // handle network error
    })
    
    function deleteData(item, url) {
        return fetch(url + '/' + item, {
          method: 'delete'
        })
        .then(response => response.json());
    }