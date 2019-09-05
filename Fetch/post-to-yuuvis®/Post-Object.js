const fetch = require('node-fetch')
const FormData = require('form-data')
const fs = require('fs')

var key = "your API key here"
var baseUrl = "https://api.yuuvis.io/"
var oid = ""

//Import Metadata
var headersImport = {
  'Content-Type': 'application/json',
  'Ocp-Apim-Subscription-Key': key
}
var optionsImport = {
  method: 'POST',
  body: fs.createReadStream("metadata.json"),
  headers: headersImport
}

fetch(baseUrl + "dms/objects/", optionsImport)
 .then((response) => {
   response.json().then((data) =>{
     oid = data.objects[0].properties['enaio:objectId'].value
     console.log("new oid: ",oid)

     //Add contentStreamAllowed
     var headersContentUpdate = {
       'Ocp-Apim-Subscription-Key': key,
       'Content-Disposition': 'attachment; filename="test.txt"'
     }
     var optionsContentUpdate = {
       method: 'POST',
       body: fs.createReadStream("test.txt"),
       headers: headersContentUpdate
     }

     fetch(baseUrl + "dms/objects/"+oid+"/contents/file", optionsContentUpdate)
       .then((response) => {
         console.log('cat', response)
       }), function(error){
         console.log(error)
       }
   })
 }), function(error) {
    console.log(error)
 }