const fetch = require("node-fetch");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io/dms-core";
const objectId = "your Object ID here";

fetch(baseUrl + "/objects/" + objectId + "/contents/file", {
    headers: {
        "Ocp-Apim-Subscription-Key": key
    }
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
