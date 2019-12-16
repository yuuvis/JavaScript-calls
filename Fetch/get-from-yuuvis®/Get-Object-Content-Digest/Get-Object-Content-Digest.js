const fetch = require("node-fetch");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io";
const objectId = "your Object ID here";

fetch(baseUrl + "/dms-core/objects/" + objectId + "/actions/validate/digest", {
    headers: {
        "Ocp-Apim-Subscription-Key": key
    }
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
