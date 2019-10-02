const fetch = require("node-fetch");

const key = "your API key here";
const baseUrl = "https://ateamk8s.azure-api.net/";
const objectId = "your Object ID here";

fetch(baseUrl + "dms-core/objects/" + objectId + "/contents/file", {
    headers: {
        "Ocp-Apim-Subscription-Key": key
    }
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
