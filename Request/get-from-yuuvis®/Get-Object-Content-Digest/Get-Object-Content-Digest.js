const request = require("request");

const key = "";
const baseUrl = "https://api.yuuvis.io/dms-core";
const oid = "";

function createContentDigestRequest(objectId) {
    return {
        method: "GET",
        uri: baseUrl + "/objects/" + objectId + "/actions/validate/digest",
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

const simpleSearchRequest = createContentDigestRequest(oid);
executeRequest(simpleSearchRequest);
