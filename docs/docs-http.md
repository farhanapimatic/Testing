# 

WSDL File for HelloService



## Base URL

The Base URL for this API is `http://www.examples.com/SayHello/`



## Authentication
The type of authentication used by this API is: `OAuth v2 Authorization Code Grant`



# <a name="api_reference"></a>API Reference

* [Hello_Binding](#hello_binding)
* [OAuth Authorization](#o_auth_authorization)

## <a name="hello_binding"></a>![Endpoint Group: ](https://apidocs.io/img/class.png "Hello_Binding") Hello_Binding


### <a name="say_hello"></a>![Endpoint: ](https://apidocs.io/img/method.png "sayHello") sayHello


**`POST`** `/sayHello`

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


#### Base URL
This endpoint uses server `Hello_Port`.

#### Request Headers
>Accept=application/json;
>Content-Type=application/json;

#### Request Body
Raw 

|  Type | Tags | Description |
| ------| ---- |-------------| 
| `sayhellorequest` |  ``` Required ```  | TODO: Add a parameter description | 

 Example 
``` 
{
  "firstName": "firstName"
}
``` 

#### Responses
**200** 

Body (_SayHelloResponse_) 
```
{
  "greeting": "greeting"
}
```


[Back to API Reference](#api_reference)

## <a name="o_auth_authorization"></a>![Endpoint Group: ](https://apidocs.io/img/class.png "OAuth Authorization") OAuth Authorization


### <a name="request_token"></a>![Endpoint: ](https://apidocs.io/img/method.png "request token") request token


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `authorization_code` | 
| code | `string` |  ``` Required ```  | Authorization Code | `"code"` | 
| redirect_uri | `string` |  ``` Required ```  | Redirect Uri | `"redirect_uri"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "34",
  "scope": "scope",
  "expiry": "34",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="refresh_token"></a>![Endpoint: ](https://apidocs.io/img/method.png "refresh token") refresh token


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `refresh_token` | 
| refresh_token | `string` |  ``` Required ```  | Refresh token | `"refresh_token"` | 
| scope | `string` |  ``` Optional ```  | Requested scopes as a space-delimited list. | `"scope"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "34",
  "scope": "scope",
  "expiry": "34",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="request_token1"></a>![Endpoint: ](https://apidocs.io/img/method.png "request token1") request token1


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `authorization_code` | 
| code | `string` |  ``` Required ```  | Authorization Code | `"code"` | 
| redirect_uri | `string` |  ``` Required ```  | Redirect Uri | `"redirect_uri"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "34",
  "scope": "scope",
  "expiry": "34",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="refresh_token1"></a>![Endpoint: ](https://apidocs.io/img/method.png "refresh token1") refresh token1


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `refresh_token` | 
| refresh_token | `string` |  ``` Required ```  | Refresh token | `"refresh_token"` | 
| scope | `string` |  ``` Optional ```  | Requested scopes as a space-delimited list. | `"scope"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "34",
  "scope": "scope",
  "expiry": "34",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="request_token2"></a>![Endpoint: ](https://apidocs.io/img/method.png "request token2") request token2


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `authorization_code` | 
| code | `string` |  ``` Required ```  | Authorization Code | `"code"` | 
| redirect_uri | `string` |  ``` Required ```  | Redirect Uri | `"redirect_uri"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "34",
  "scope": "scope",
  "expiry": "34",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="refresh_token2"></a>![Endpoint: ](https://apidocs.io/img/method.png "refresh token2") refresh token2


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `refresh_token` | 
| refresh_token | `string` |  ``` Required ```  | Refresh token | `"refresh_token"` | 
| scope | `string` |  ``` Optional ```  | Requested scopes as a space-delimited list. | `"scope"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "34",
  "scope": "scope",
  "expiry": "34",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="request_token11"></a>![Endpoint: ](https://apidocs.io/img/method.png "request token11") request token11


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `authorization_code` | 
| code | `string` |  ``` Required ```  | Authorization Code | `"code"` | 
| redirect_uri | `string` |  ``` Required ```  | Redirect Uri | `"redirect_uri"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "34",
  "scope": "scope",
  "expiry": "34",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="refresh_token11"></a>![Endpoint: ](https://apidocs.io/img/method.png "refresh token11") refresh token11


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `refresh_token` | 
| refresh_token | `string` |  ``` Required ```  | Refresh token | `"refresh_token"` | 
| scope | `string` |  ``` Optional ```  | Requested scopes as a space-delimited list. | `"scope"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "34",
  "scope": "scope",
  "expiry": "34",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="request_token21"></a>![Endpoint: ](https://apidocs.io/img/method.png "request token21") request token21


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `authorization_code` | 
| code | `string` |  ``` Required ```  | Authorization Code | `"code"` | 
| redirect_uri | `string` |  ``` Required ```  | Redirect Uri | `"redirect_uri"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "34",
  "scope": "scope",
  "expiry": "34",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="refresh_token21"></a>![Endpoint: ](https://apidocs.io/img/method.png "refresh token21") refresh token21


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `refresh_token` | 
| refresh_token | `string` |  ``` Required ```  | Refresh token | `"refresh_token"` | 
| scope | `string` |  ``` Optional ```  | Requested scopes as a space-delimited list. | `"scope"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "34",
  "scope": "scope",
  "expiry": "34",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="request_token11"></a>![Endpoint: ](https://apidocs.io/img/method.png "request token11") request token11


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `authorization_code` | 
| code | `string` |  ``` Required ```  | Authorization Code | `"code"` | 
| redirect_uri | `string` |  ``` Required ```  | Redirect Uri | `"redirect_uri"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "34",
  "scope": "scope",
  "expiry": "34",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="refresh_token11"></a>![Endpoint: ](https://apidocs.io/img/method.png "refresh token11") refresh token11


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `refresh_token` | 
| refresh_token | `string` |  ``` Required ```  | Refresh token | `"refresh_token"` | 
| scope | `string` |  ``` Optional ```  | Requested scopes as a space-delimited list. | `"scope"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "125",
  "scope": "scope",
  "expiry": "125",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="request_token1"></a>![Endpoint: ](https://apidocs.io/img/method.png "request token1") request token1


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `authorization_code` | 
| code | `string` |  ``` Required ```  | Authorization Code | `"code"` | 
| redirect_uri | `string` |  ``` Required ```  | Redirect Uri | `"redirect_uri"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "125",
  "scope": "scope",
  "expiry": "125",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="refresh_token1"></a>![Endpoint: ](https://apidocs.io/img/method.png "refresh token1") refresh token1


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `refresh_token` | 
| refresh_token | `string` |  ``` Required ```  | Refresh token | `"refresh_token"` | 
| scope | `string` |  ``` Optional ```  | Requested scopes as a space-delimited list. | `"scope"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "125",
  "scope": "scope",
  "expiry": "125",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="request_token2"></a>![Endpoint: ](https://apidocs.io/img/method.png "request token2") request token2


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `authorization_code` | 
| code | `string` |  ``` Required ```  | Authorization Code | `"code"` | 
| redirect_uri | `string` |  ``` Required ```  | Redirect Uri | `"redirect_uri"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "125",
  "scope": "scope",
  "expiry": "125",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="refresh_token2"></a>![Endpoint: ](https://apidocs.io/img/method.png "refresh token2") refresh token2


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `refresh_token` | 
| refresh_token | `string` |  ``` Required ```  | Refresh token | `"refresh_token"` | 
| scope | `string` |  ``` Optional ```  | Requested scopes as a space-delimited list. | `"scope"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "125",
  "scope": "scope",
  "expiry": "125",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="request_token3"></a>![Endpoint: ](https://apidocs.io/img/method.png "request token3") request token3


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `authorization_code` | 
| code | `string` |  ``` Required ```  | Authorization Code | `"code"` | 
| redirect_uri | `string` |  ``` Required ```  | Redirect Uri | `"redirect_uri"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "125",
  "scope": "scope",
  "expiry": "125",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="refresh_token3"></a>![Endpoint: ](https://apidocs.io/img/method.png "refresh token3") refresh token3


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `refresh_token` | 
| refresh_token | `string` |  ``` Required ```  | Refresh token | `"refresh_token"` | 
| scope | `string` |  ``` Optional ```  | Requested scopes as a space-delimited list. | `"scope"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "125",
  "scope": "scope",
  "expiry": "125",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="request_token"></a>![Endpoint: ](https://apidocs.io/img/method.png "request token") request token


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `authorization_code` | 
| code | `string` |  ``` Required ```  | Authorization Code | `"code"` | 
| redirect_uri | `string` |  ``` Required ```  | Redirect Uri | `"redirect_uri"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "125",
  "scope": "scope",
  "expiry": "125",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


### <a name="refresh_token"></a>![Endpoint: ](https://apidocs.io/img/method.png "refresh token") refresh token


**`POST`** `/odfksdlfksld345345fdgdfg3453`

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


#### Base URL
This endpoint uses server ``.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;
>Authorization="Authorization";

#### Request Body
Url Encoded

> Additional optional form parameters are allowed

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| grant_type | `string` |  ```Constant ```  ``` Required ```  ``` DefaultValue ```  | Grant Type | `refresh_token` | 
| refresh_token | `string` |  ``` Required ```  | Refresh token | `"refresh_token"` | 
| scope | `string` |  ``` Optional ```  | Requested scopes as a space-delimited list. | `"scope"` | 

#### Responses
**200** 

Body (_OAuthToken_) 
```
{
  "access_token": "access_token",
  "token_type": "token_type",
  "expires_in": "125",
  "scope": "scope",
  "expiry": "125",
  "refresh_token": "refresh_token"
}
```


**400** 

> OAuth 2 provider returned an error.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```
**401** 

> OAuth 2 provider says client authentication failed.
Body (_OAuthProvider_) 
```
{
  "error": "invalid_request",
  "error_description": "error_description",
  "error_uri": "error_uri"
}
```


[Back to API Reference](#api_reference)

