const request = require("request");

const key = "";
const baseUrl = "https://api.yuuvis.io/dms-view";
const oid = ""; //object id
const vid = ""; //version id

function createRenditionSlideRequest(objectId, versionNr) {
    return {
        method: "GET",
        uri: baseUrl + "/objects/" + objectId + "/versions/" + versionNr + "/contents/renditions/slide",
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

const simpleSearchRequest = createRenditionSlideRequest(oid, vid);
executeRequest(simpleSearchRequest)
