const axios = require('axios');

var key = "your API key here"
var baseUrl = "https://api.yuuvis.io/" 
oid = "your Object ID here"

axios.delete(
    baseUrl + 'dms/objects/'+ oid,{
    headers: {
        'Ocp-Apim-Subscription-Key': key
      }
  })
  .then((response) => {
    console.log(response)
  }).catch(error => console.log(error))
  
