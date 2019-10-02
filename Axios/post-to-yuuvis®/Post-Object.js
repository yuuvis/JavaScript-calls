const fs = require("fs");
const axios = require("axios");

const key = "";
const baseUrl = "https://ateamk8s.azure-api.net/";

const headersImport = {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": key
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const metadataBody = fs.createReadStream("metadata.json");

(async() => {
    try {
        const response = await axios.post(baseUrl + "dms-core/objects", metadataBody, { headers: headersImport });
        console.log(response.status);
        const oid = response.data.objects[0].properties["enaio:objectId"].value;

        console.log("look here", response.data.objects[0].properties);
        await sleep(1000);
        const contentBody = fs.createReadStream("text.txt");
        const headersContentUpdate = {
            "Ocp-Apim-Subscription-Key": key,
            "Content-Disposition": "attachment; filename=\"text.txt\""
        };
        const contentUpdateURL = baseUrl + "dms-core/objects/" + oid + "/contents/file";

        const postResponse = await axios.post(contentUpdateURL, contentBody, { headers: headersContentUpdate });
        console.log(postResponse.status);
        console.log(postResponse.data);
    } catch (error) {
        console.log(error);
    }
})();

