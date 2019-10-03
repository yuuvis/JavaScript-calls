const fetch = require("node-fetch");
const FormData = require("form-data");
const fs = require("fs");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io/dms-core";

//Import Metadata
const headersImport = {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": key
};
const optionsImport = {
    method: "POST",
    body: fs.createReadStream("metadata.json"),
    headers: headersImport
}

(async() => {
    try {
        const response = await fetch(baseUrl + "/objects/", optionsImport);
        const data = await response.json();
        const oid = data.objects[0].properties["enaio:objectId"].value;
        console.log("new oid: ", oid);

        //Add contentStreamAllowed
        const headersContentUpdate = {
            "Ocp-Apim-Subscription-Key": key,
            "Content-Disposition": "attachment; filename=\"test.txt\""
        };
        const optionsContentUpdate = {
            method: "POST",
            body: fs.createReadStream("test.txt"),
            headers: headersContentUpdate
        };
        console.log(await fetch(baseUrl + "objects/" + oid + "/contents/file", optionsContentUpdate));
    } catch (error) {
        console.log(error);
    }
})();
