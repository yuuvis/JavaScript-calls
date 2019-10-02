const request = require("request");

const key = "";
const baseUrl = "https://ateamk8s.azure-api.net/";
const oid = "";

function createDeleteRequest(objectId) {
    return {
        method: "DELETE",
        uri: baseUrl + "dms-core/objects/" + oid,
        headers: {
            "Ocp-Apim-Subscription-Key": key
        }
    };
}

function executeRequest(requestObject) {
    request.delete(requestObject, function callback(err, httpResponse, body) {
        if (err) {
            throw err;
        } else {
            console.log(httpResponse.statusCode);
            console.log(body);
        }
    });
}

const simpleSearchRequest = createDeleteRequest(oid);
executeRequest(simpleSearchRequest)
