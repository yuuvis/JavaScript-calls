const fs = require("fs");
const axios = require("axios");
var FormData = require("form-data");


const key = "";
const baseUrl = "https://api.yuuvis.io/";

const data = new FormData();

const metadataBody = fs.createReadStream("metadata.json");
data.append("data", metadataBody);

const contentBody = fs.createReadStream("text.txt");
data.append("cid_63apple", contentBody);

const formDataHeaders = data.getHeaders();
formDataHeaders["Ocp-Apim-Subscription-Key"] = key;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


(async() => {
    try {
        const response = await axios.post(baseUrl + "dms-core/objects", data, {headers: formDataHeaders});
        console.log(response.status);
        const objectId = response.data.objects[0].properties["system:objectId"].value;
        console.log(objectId);
        await sleep(1000);
    } catch (error) {
        console.log(error);
    }
})();
