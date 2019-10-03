const request = require("request");

const key = "";
const baseUrl = "https://api.yuuvis.io/dms-core";
const oid = "";
const vid = ""; //version id

function createContentValidateRequest(objectId, versionNr) {
    return {
        method: "GET",
        uri: baseUrl + "/objects/" + objectId + "/versions/" + versionNr + "/actions/validate/digest",
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

const simpleSearchRequest = createContentValidateRequest(oid, vid);
executeRequest(simpleSearchRequest)
