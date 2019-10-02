const request = require("request");

const key = "";
var baseUrl = "https://ateamk8s.azure-api.net/";
const oid = "";

function createRenditionPdfRequest(objectId) {
    return {
        method: "GET",
        uri: baseUrl + "dms-view/objects/" + objectId + "/contents/renditions/pdf",
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

const simpleSearchRequest = createRenditionPdfRequest(oid);
executeRequest(simpleSearchRequest)
