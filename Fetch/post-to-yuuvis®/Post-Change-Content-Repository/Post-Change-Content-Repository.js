const fetch = require("node-fetch");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io";
const objectId = "your Object ID here";
const repoId = "";

fetch(baseUrl + "/dms-core/objects/" + objectId + "/actions/move/contents/repositories/" + repoId, {
    method: "POST",
    headers: {
        "Ocp-Apim-Subscription-Key": key,
    }
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
