const axios = require("axios");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io";
const oid = "";

axios.delete(
    baseUrl + "/dms-core/objects/" + oid, {
        headers: {
            "Ocp-Apim-Subscription-Key": key
        }
    }).then(response => {
    console.log(response.status);
    }).catch(error => console.log(error));
