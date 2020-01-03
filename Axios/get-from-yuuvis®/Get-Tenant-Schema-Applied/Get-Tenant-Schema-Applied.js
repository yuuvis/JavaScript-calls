const axios = require("axios");

const key = "";
const baseUrl = "https://api.yuuvis.io";

axios.get(
    baseUrl + "/dms-core/schema/native", {
        headers: {
            "Ocp-Apim-Subscription-Key": key
        }
    }).then(response => {
    console.log(response);
    }).catch(error => console.log(error));
