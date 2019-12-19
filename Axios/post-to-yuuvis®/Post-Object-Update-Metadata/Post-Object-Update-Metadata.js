const fs = require("fs");
const axios = require("axios");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io/";
const objectId = "your Object ID here";

let newMetadata = fs.createReadStream("metadata.json")

axios.post(
    baseUrl + "dms-core/objects/" + objectId,
    newMetadata,
    {
        headers: {
            "Ocp-Apim-Subscription-Key": key,
            "Content-Type": "application/json"
        }
    }).then(response => {
    console.log(response);
    }).catch(error => console.log(error));
