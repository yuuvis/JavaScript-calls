const request = require("request");

const key = "";
const baseUrl = "https://api.yuuvis.io/dms-core";

const statement = "SELECT * FROM system:object";
const max_items = 50;
const skip_items = 0;

function createSearchQuery(statement, max_items, skip_items) {
    return {
        "query": {
            "statement": statement,
            "maxItems": max_items,
            "skipCount": skip_items
        }
    };
}

function createSearchRequest(statement, max_items, skip_items) {
    return {
        method: "POST",
        uri: baseUrl + "/objects/search",
        headers: {
            "Accept": "application/json",
            "Ocp-Apim-Subscription-Key": key,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createSearchQuery(statement, max_items, skip_items))
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

const simpleSearchRequest = createSearchRequest(statement, max_items, skip_items);
executeRequest(simpleSearchRequest)
