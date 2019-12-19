const fs = require("fs");
const axios = require("axios");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io/";
const objectId = "your Object ID here";

let newContent = fs.createReadStream("test.txt")

axios.post(
    baseUrl + "dms-core/objects/" + objectId + "/contents/file",
    newContent,
    {
        headers: {
            "Ocp-Apim-Subscription-Key": key
        }
    }).then(response => {
    console.log(response);
    }).catch(error => console.log(error));
