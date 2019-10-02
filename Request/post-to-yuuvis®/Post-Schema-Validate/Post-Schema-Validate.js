const request = require("request");
const fs = require("fs");

const key = "";
const baseUrl = "https://ateamk8s.azure-api.net/";

function createSchemaValidateRequest(schema_filename) {
    return {
        method: "POST",
        uri: baseUrl + "admin/schema/validate",
        headers: {
            "Accept": "application/json",
            "Ocp-Apim-Subscription-Key": key,
            "Content-Type": "application/xml"
        },
        body: fs.createReadStream(schema_filename)
    };
}

function executeRequest(request_object) {
    request.post(request_object, function callback(err, httpResponse, body) {
        if (err) {
            throw err;
        } else {
            console.log(httpResponse.statusCode);
            console.log(body);
        }
    });
}

const simpleSearchRequest = createSchemaValidateRequest("new_schema.xml");
executeRequest(simpleSearchRequest)
