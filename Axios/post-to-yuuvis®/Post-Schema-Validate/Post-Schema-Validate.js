const fs = require("fs");
const axios = require("axios");

const key = "0208377eb42c4e1d925976a2d063d288";
const baseUrl = "https://api.yuuvis.io/";
const objectId = "your Object ID here";

let newSchema = fs.createReadStream("sample_schema.xml")

axios.post(
    baseUrl + "admin/schema/validate",
    newSchema,
    {
        headers: {
            "Ocp-Apim-Subscription-Key": key,
            "Content-Type": "application/xml"
        }
    }).then(response => {
    console.log(response);
    }).catch(error => console.log(error));
