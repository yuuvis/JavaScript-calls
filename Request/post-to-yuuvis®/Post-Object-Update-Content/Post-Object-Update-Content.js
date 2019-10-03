const request = require("request");
const fs = require("fs");

const key = "";
const baseUrl = "https://api.yuuvis.io/dms-core";

const current_doc_id = "";
const new_content = "test.txt";

function createUpdateRequest(doc_id, doc_newFile) {
    return {
        method: "POST",
        uri: baseUrl + "/objects/" + doc_id + "/contents/file",
        headers: {
            "Accept": "application/json",
            "Ocp-Apim-Subscription-Key": key,
            "Content-Disposition": "attachment; filename=" + doc_newFile
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

const simpleUpdateRequest = createUpdateRequest(current_doc_id, new_content);
executeRequest(simpleUpdateRequest)
