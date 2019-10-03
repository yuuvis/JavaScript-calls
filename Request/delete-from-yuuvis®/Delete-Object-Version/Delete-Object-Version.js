const request = require("request");

const key = "";
const baseUrl = "https://api.yuuvis.io/dms-core";
const oid = ""; //object id
const vid = ""; //version id

function createDeleteRequest(objectId, versionNr) {
    return {
        method: "DELETE",
        uri: baseUrl + "/objects/" + objectId + "/versions/" + versionNr,
        headers: {
            "Ocp-Apim-Subscription-Key": key
        }
    };
}

function executeRequest(request_object) {
    request.delete(request_object, function callback(err, httpResponse, body) {
        if (err) {
            throw err;
        } else {
            console.log(httpResponse.statusCode);
            console.log(body);
        }
    });
}

const simpleSearchRequest = createDeleteRequest(oid, vid);
executeRequest(simpleSearchRequest);
