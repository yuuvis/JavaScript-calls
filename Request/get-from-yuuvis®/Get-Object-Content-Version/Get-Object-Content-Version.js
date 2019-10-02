const request = require("request");

const key = "";
const baseUrl = "https://ateamk8s.azure-api.net/";
const oid = "";
const vid = ""; //version id

function createContentRequest(objectId, versionNr) {
    return {
        method: "GET",
        uri: baseUrl + "dms-core/objects/" + objectId + "/versions/" + versionNr + "/contents/file",
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
