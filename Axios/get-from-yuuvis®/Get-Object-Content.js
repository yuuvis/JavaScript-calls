const axios = require('axios');

var key = "your API key here"
var baseUrl = "https://api.yuuvis.io/" 
var objectId = "your Object ID here"

axios.get(
  baseUrl + "dms/objects/"+ objectId + "/contents/file",{
  headers: {
    'Ocp-Apim-Subscription-Key': key
  }
}).then((response) => {
  console.log(response)
}).catch(error => console.log(error))

