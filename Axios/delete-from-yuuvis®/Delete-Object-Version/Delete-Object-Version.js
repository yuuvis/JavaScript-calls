const axios = require("axios");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io";
const objectId = "your Object ID here";
const vnr = "";

axios.delete(
    baseUrl + "/dms-core/objects/" + objectId + "/versions/" + vnr, {
        headers: {
            "Ocp-Apim-Subscription-Key": key
        }
    }).then(response => {
    console.log(response.status);
    }).catch(error => console.log(error));
