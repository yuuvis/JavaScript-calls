## Request URL
https://api.yuuvis.io/dms-core/objects

## Request headers
| Header                    | Type   | Meaning                                                                                             |
|---------------------------|--------|-----------------------------------------------------------------------------------------------------|
| Ocp-Apim-Subscription-Key | String | Subscription key which provides access to the API. Found on the Subscriptions page of your account. |

!!!NOTE!!!
Make sure to extend the your tenant schema with the example schema provided in the [Schema Update code example](https://github.com/yuuvis/JavaScript-calls/tree/feature/axiosReview/Axios/post-to-yuuvis%C2%AE/Post-Schema-Update) by retrieving your current schema and appending the contents of the sample_schema.xml file. This will allow you to import the example metadata associated with this code example.

This code example uses the Two-Part import strategy to import documents with yuuvis®. This means it uses two HTTP requests: the first imports just the metadata .json file to create an object in yuuvis®; then the generated object ID is retrieved from the response; and finally the content of the new object is updated in a second HTTP request. This presents a workaround to using a multipart/binary request body, which can be difficult to set up with some JS HTTP libraries such as axios.
Two things to note about this:
1. Two HTTP calls are made.
2. The first version of the object with content will end up being '2', since the second call updates the object.

This strategy can't be used with many of the default system object types provided in the global schema, so extending your tenant schema with an object type that allows missing content is essential to making this example run.

&rarr; [Documentation: Importing and Storing a Single Document](https://github.com/yuuvis/Documentation/wiki/Import-and-store#importing-and-storing-a-single-document)

&rarr; [Try out the endpoint in our developer portal](https://yuuvis.io/Apis/Endpoints/dms-core-api)
