const fs = require("fs");
const axios = require("axios");


const key = "";
const baseUrl = "https://api.yuuvis.io/";
const objectId = "your Object ID here";

let newSchema = fs.createReadStream("sample_schema.xml")

axios.post(
    baseUrl + "admin/schema",
    newSchema,
    {
        headers: {
            "Ocp-Apim-Subscription-Key": key,
            "Content-Type": "application/xml"
        }
    }).then(response => {
    console.log(response);
    }).catch(error => console.log(error));
