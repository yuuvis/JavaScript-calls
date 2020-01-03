const axios = require("axios");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io";

axios.get(
    baseUrl + "/admin/schema", {
        headers: {
            "Ocp-Apim-Subscription-Key": key
        }
    }).then(response => {
    console.log(response);
    }).catch(error => console.log(error));
