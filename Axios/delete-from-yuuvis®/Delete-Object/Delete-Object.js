const axios = require("axios");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io";
const objectId = "your Object ID here";

axios.delete(
    baseUrl + "/dms-core/objects/" + objectId, {
        headers: {
            "Ocp-Apim-Subscription-Key": key
        }
    }).then(response => {
    console.log(response.status);
    }).catch(error => console.log(error));
