const fetch = require("node-fetch");
const fs = require("fs");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io";
const objectId = "your Object ID here";

let metadata = fs.createReadStream("metadata.json");

fetch(baseUrl + "/dms-core/objects/" + objectId, {
    method: "POST",
    body: metadata,
    headers: {
        "Ocp-Apim-Subscription-Key": key,
    }
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
