const fs = require("fs");
const axios = require("axios");

const key = "your API key here";
const baseUrl = "https://api.yuuvis.io/";

const headersImport = {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": key
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//make sure you have appended the sample_schema from the Post-Schema-Update example to your tenant schema 
const metadataBody = fs.createReadStream("metadata.json");

(async() => {
    try {
        const response = await axios.post(baseUrl + "dms-core/objects", metadataBody, { headers: headersImport });
        console.log(response.status);
        const objectId = response.data.objects[0].properties["system:objectId"].value;

        console.log(response.data.objects[0].properties);
        await sleep(1000);
        const contentBody = fs.createReadStream("text.txt");
        const headersContentUpdate = {
            "Ocp-Apim-Subscription-Key": key,
            "Content-Disposition": "attachment; filename=\"text.txt\""
        };
        const contentUpdateURL = baseUrl + "dms-core/objects/" + objectId + "/contents/file";

        const postResponse = await axios.post(contentUpdateURL, contentBody, { headers: headersContentUpdate });
        console.log(postResponse.status);
        console.log(postResponse.data);
    } catch (error) {
        console.log(error);
    }
})();
