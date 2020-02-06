const fs = require("fs");
const fetch = require("node-fetch");
var FormData = require("form-data");


const key = "";
const baseUrl = "https://api.yuuvis.io/dms-core";

const data = new FormData();

const metadataBody = fs.createReadStream("metadata.json");
data.append("data", metadataBody);

const contentBody = fs.createReadStream("test.txt");
data.append("cid_63apple", contentBody);

const headersImport = {
    "Ocp-Apim-Subscription-Key": key
};


const optionsImport = {
    method: "POST",
    body: data,
    headers: headersImport
};

(async() => {
    try {
        const response = await fetch(baseUrl + "/objects/", optionsImport);
        const data = await response.json();
        const oid = data.objects[0].properties["system:objectId"].value;
        console.log("new oid: ", oid);


    } catch (error) {
        console.log(error);
    }
})();
