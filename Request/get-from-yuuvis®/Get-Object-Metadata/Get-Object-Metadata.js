const request = require("request");

const key = "";
const baseUrl = "https://ateamk8s.azure-api.net/";
const oid = "";

function createMetadataRequest(objectId) {
    return {
        method: "GET",
        uri: baseUrl + "dms-core/objects/" + objectId,
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

const simpleSearchRequest = createMetadataRequest(oid);
executeRequest(simpleSearchRequest)
