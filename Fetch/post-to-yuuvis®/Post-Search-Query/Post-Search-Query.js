const fetch = require("node-fetch");
const fs = require("fs");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io";

fetch(baseUrl + "/dms-core/objects/search", {
    method: "POST",
    body: fs.createReadStream("sample_query.json"),
    headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Content-Type": "application/json"
    }
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
