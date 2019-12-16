To use this import script, you'll have to update your schema with an object type that does not require content, so that the import process can be split up into a pure metadata import and a content update. This script looks for a metadata file called 'metadata_nocontent.json' that does not specify a content stream that it will import to yuuvis®. From the response of that import, it extracts the objectId attribute value of the newly created object and builds a URL using that value to supply the object with the desired content. This is useful when a library does not support binary multipart requests.

# Request URL
https://api.yuuvis.io/dms-core/objects

## Request headers
| Header                    | Type   | Meaning                                                                                             |
|---------------------------|--------|-----------------------------------------------------------------------------------------------------|
| Ocp-Apim-Subscription-Key | String | Subscription key which provides access to the API. Found on the Subscriptions page of your account. |

&rarr; [Documentation: Importing Documents using two calls](https://github.com/yuuvis/Documentation/wiki/Import-and-store#import-using-two-post-requests-)

&rarr; [Try out the endpoint in our developer portal](https://yuuvis.io/Apis/Endpoints/dms-core-api)
