const fetch = require("node-fetch");
const fs = require("fs");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io";

fetch(baseUrl + "/admin/schema", {
    method: "POST",
    body: fs.createReadStream("new_schema.xml"),
    headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Content-Type": "application/xml"
    }
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
