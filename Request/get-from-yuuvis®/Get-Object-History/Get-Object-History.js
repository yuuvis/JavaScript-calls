const request = require("request");

const key = "";
const baseUrl = "https://ateamk8s.azure-api.net/";
const oid = "";

function createHistoryRequest(objectId) {
    return {
        method: "GET",
        uri: baseUrl + "dms-core/objects/" + objectId + "/history",
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

const simpleSearchRequest = createHistoryRequest(oid);
executeRequest(simpleSearchRequest)
