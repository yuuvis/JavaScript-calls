const fetch = require("node-fetch");
const fs = require("fs");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io";
const objectId = "your Object ID here";

fetch(baseUrl + "/dms-core/objects/" + objectId + "/contents/file", {
    method: "POST",
    body: fs.createReadStream("test.txt"),
    headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Content-Disposition": "attachment; filename=test.txt",
    }
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
