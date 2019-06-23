# yuuvis® Ultimate

### API change history

**yuuvis® Ultimate** is the ultimate freedom to innovate. Get access to the latest API endpoints as the yuuvis® development team releases them on its journey to aPaas.

## Get document content by ID

The **"Get document content by ID"** endpoint returns the original content file of the document (object) that matches the objectId parameter.



[How to ...](https://yuuvis.portal.azure-api.net/how-to/retrieve)

## Request

### Request URL

https://yuuvis.azure-api.net/dms/objects/{objectId}/contents/file

## Request parameters

```
objectId            string          The objectId of the document (object) to be requested.

```

## Request headers

```
Ocp-Apim-Subscription-Key           string          Subscription key which provides access to this API. Found in your Profile.

```
## Request body

## Responses

## 200 OK

### OK

## 404 Not Found

### NOT FOUND

### Code samples

[Get document content by ID](./Get-a-document-by-content-ID-to-yuuvis.html)