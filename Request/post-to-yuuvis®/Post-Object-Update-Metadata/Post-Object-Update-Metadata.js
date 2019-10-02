const request = require("request");
const fs = require("fs");

const key = "";
const baseUrl = "https://ateamk8s.azure-api.net/";

const current_doc_id = "";
const new_metadata = "metadata.json";

function createUpdateRequest(doc_id, doc_newFile) {
    return {
        method: "POST",
        uri: baseUrl + "dms/objects/" + doc_id,
        headers: {
            "Accept": "application/json",
            "Ocp-Apim-Subscription-Key": key
        },
        body: fs.createReadStream(doc_newFile)
    };
}

function executeRequest(request_object) {
    request.post(request_object, function callback(err, httpResponse, body) {
        if (err) {
            throw err;
        } else {
            console.log(httpResponse.statusCode);
            console.log(body);
        }
    });
}

const simpleUpdateRequest = createUpdateRequest(current_doc_id, new_metadata);
executeRequest(simpleUpdateRequest)
