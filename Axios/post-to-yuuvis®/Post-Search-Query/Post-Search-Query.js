const fs = require("fs");
const axios = require("axios");

const key = "c14c917c38a64a5f82b73f4022fbb723";
const baseUrl = "https://api.yuuvis.io/";

let query = fs.createReadStream("sample_query.json")

axios.post(
    baseUrl + "dms-core/objects/search/",
    query,
    {
        headers: {
            "Ocp-Apim-Subscription-Key": key,
            "Content-Type": "application/json"
        }
    }).then(response => {
    console.log(response);
    }).catch(error => console.log(error));
