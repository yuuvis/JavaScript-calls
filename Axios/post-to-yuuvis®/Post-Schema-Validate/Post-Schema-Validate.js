const fs = require("fs");
const axios = require("axios");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io/";
const objectId = "your Object ID here";

let newSchema = fs.createReadStream("sample_schema.xml")

axios.post(
    baseUrl + "admin/schema/validate",
    newSchema,
    {
        headers: {
            "Ocp-Apim-Subscription-Key": key
        }
    }).then(response => {
    console.log(response);
    }).catch(error => console.log(error));
