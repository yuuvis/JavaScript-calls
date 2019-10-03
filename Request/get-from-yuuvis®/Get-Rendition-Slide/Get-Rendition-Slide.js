const request = require("request");

const key = "";
const baseUrl = "https://api.yuuvis.io/dms-view";
const oid = "";

function createRenditionSlideRequest(objectId) {
    return {
        method: "GET",
        uri: baseUrl + "/objects/" + objectId + "/contents/renditions/slide",
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

const simpleSearchRequest = createRenditionSlideRequest(oid);
executeRequest(simpleSearchRequest)
