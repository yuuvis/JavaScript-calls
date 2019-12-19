const fs = require("fs");
const axios = require("axios");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io/";

let query = fs.createReadStream("sample_query.json")

axios.post(
    baseUrl + "dms-core/objects/search/",
    query,
    {
        headers: {
            "Ocp-Apim-Subscription-Key": key
        }
    }).then(response => {
    console.log(response);
    }).catch(error => console.log(error));
