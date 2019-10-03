const request = require("request");

const key = "";
const baseUrl = "https://api.yuuvis.io/dms-core";
const oid = "";
const vid = ""; //version id

function createContentRequest(objectId, versionNr) {
    return {
        method: "GET",
        uri: baseUrl + "/objects/" + objectId + "/versions/" + versionNr + "/contents/file",
        headers: {
            "Ocp-Apim-Subscription-Key": key
        }
    };
}

function executeRequest(request_object) {
    request.get(request_object, function callback(err, httpResponse, body) {
        if (err) {
            throw err;
        } else {
            console.log(httpResponse.statusCode);
            console.log(body);
        }
    });
}

const simpleSearchRequest = createContentRequest(oid, vid);
executeRequest(simpleSearchRequest)
