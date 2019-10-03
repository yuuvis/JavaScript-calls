const fetch = require("node-fetch");

const key = "";
const baseUrl = "https://api.yuuvis.io/dms-core";
const oid = "";

fetch(baseUrl + "/objects/" + oid, {
    method: "delete",
    headers: {
        "Ocp-Apim-Subscription-Key": key
    }
}).then(response => console.log(response.status));
