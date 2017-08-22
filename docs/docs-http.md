# 

this is not the way we think.



## Base URL

The Base URL for this API is `http://adsabs.harvard.edu/`



## Authentication
This API uses `OAuth v2.0` with `bearer token`.






# <a name="api_reference"></a>API Reference

* [BibcodeQueryBinding](#bibcode_query_binding)

## <a name="bibcode_query_binding"></a>![Endpoint Group: ](https://apidocs.io/img/class.png "BibcodeQueryBinding") BibcodeQueryBinding


### <a name="get_bibcode"></a>![Endpoint: ](https://apidocs.io/img/method.png "getBibcode") getBibcode


**`GET`** `/cgi-bin/nph-bib_query`

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description




#### Query Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| -------------------------------- |
| bibcode | [string](#api_types) |  ``` Required ```  | TODO: Add a parameter description | `"bibcode"` | 
| db_key | [string](#api_types) |  ``` Required ```  | TODO: Add a parameter description | `"db_key"` | 
| data_type | [string](#api_types) |  ``` Required ```  | TODO: Add a parameter description | `"data_type"` | 

#### Responses
**200** 


Body ([returnBibcode](#return_bibcode)) 
```
{
  "body": "body"
}
```


[Back to API Reference](#api_reference)

## <a name="api_types"></a>![Models: ](https://apidocs.io/img/class.png "API Types") API Types

This section provides details on the available types. The primitive types available are:

| Type | Example |
| ---- | -------- |
| **string** | `hello world` |
| **boolean** |	`true` |
| **number** | `1` |
| **precision** | `1.5` |
| **datetime** | `2016-03-13T12:52:32.123Z` |
| **date** | `2016-03-13` |
|**void** | |
| **dynamic** | |
| **binary** | |
| **long** | `12345678910` |
| **file** | |
| **uuid** | `0f8fad5b-d9cb-469f-a165-70867728950e` |


In addition to the above types, the following complex types are also available:
### <a name="return_bibcode"></a>![Model: ](https://apidocs.io/img/method.png "returnBibcode") returnBibcode



> TODO: Add a method description




| Name | Type | Tags | Description |
|-----------|------| ---- |-------------| 
| body | [string](#api_types) |  ``` Required ```  | TODO: Add a property description |

