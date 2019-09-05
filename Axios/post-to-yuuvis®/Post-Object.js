const fs = require('fs');
const axios = require('axios');

var key = "your API key here"
var baseUrl = "https://api.yuuvis.io/"
var oid = ""

var headersImport = {
  'Content-Type': 'application/json',
  'Ocp-Apim-Subscription-Key': key
}
function sleep(miliseconds) {
  var currentTime = new Date().getTime();
  while (currentTime + miliseconds >= new Date().getTime()) {
  }
}
var metadataBody = fs.createReadStream("metadata.json")

axios.post(baseUrl + 'dms/objects', metadataBody, {headers: headersImport})
.then((response) => {
  console.log(response)
  oid = response.data.objects[0].properties['enaio:objectId'].value

sleep(1000);
console.log('look here',response.data.objects[0].properties)
  var contentBody = fs.createReadStream("text.txt")
  var headersContentUpdate = {
    'Ocp-Apim-Subscription-Key': key,
    'Content-Disposition': 'attachment; filename="text.txt"'
  }
  var contentUpdateURL = baseUrl+'dms/objects/'+oid+'/contents/file'

  axios.post(contentUpdateURL, contentBody, {headers: headersContentUpdate})
  .then((response) =>{
    console.log(response)
  }).catch((error) =>{
    console.log(error)
  })

 

}).catch(error =>{
  console.log(error)
})
