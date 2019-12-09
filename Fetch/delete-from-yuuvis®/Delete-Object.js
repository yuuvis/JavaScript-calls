const fetch = require("node-fetch");

const key = "";
const baseUrl = "https://api.yuuvis.io";
const oid = "";

fetch(baseUrl + "/dms-core/objects/" + oid, {
    method: "delete",
    headers: {
        "Ocp-Apim-Subscription-Key": key
    }
}).then(response => console.log(response.status));
