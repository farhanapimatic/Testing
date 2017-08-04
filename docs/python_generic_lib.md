# Getting started

WSDL File for HelloService

## How to Build


You must have Python 2 >=2.7.9 or Python 3 >=3.4 installed on your system to install and run this SDK. This SDK package depends on other Python packages like nose, jsonpickle etc. 
These dependencies are defined in the ```requirements.txt``` file that comes with the SDK.
To resolve these dependencies, you can use the PIP Dependency manager. Install it by following steps at [https://pip.pypa.io/en/stable/installing/](https://pip.pypa.io/en/stable/installing/).

Python and PIP executables should be defined in your PATH. Open command prompt and type ```pip --version```.
This should display the version of the PIP Dependency Manager installed if your installation was successful and the paths are properly defined.

* Using command line, navigate to the directory containing the generated files (including ```requirements.txt```) for the SDK.
* Run the command ```pip install -r requirements.txt```. This should install all the required dependencies.

![Building SDK - Step 1](https://apidocs.io/illustration/python?step=installDependencies&workspaceFolder=Testing%20OAuth2.0-Python)


## How to Use

The following section explains how to use the Testingoauth20 SDK package in a new project.

### 1. Open Project in an IDE

Open up a Python IDE like PyCharm. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

![Open project in PyCharm - Step 1](https://apidocs.io/illustration/python?step=pyCharm)

Click on ```Open``` in PyCharm to browse to your generated SDK directory and then click ```OK```.

![Open project in PyCharm - Step 2](https://apidocs.io/illustration/python?step=openProject0&workspaceFolder=Testing%20OAuth2.0-Python)     

The project files will be displayed in the side bar as follows:

![Open project in PyCharm - Step 3](https://apidocs.io/illustration/python?step=openProject1&workspaceFolder=Testing%20OAuth2.0-Python&projectName=testingoauth20)     

### 2. Add a new Test Project

Create a new directory by right clicking on the solution name as shown below:

![Add a new project in PyCharm - Step 1](https://apidocs.io/illustration/python?step=createDirectory&workspaceFolder=Testing%20OAuth2.0-Python&projectName=testingoauth20)

Name the directory as "test"

![Add a new project in PyCharm - Step 2](https://apidocs.io/illustration/python?step=nameDirectory)
   
Add a python file to this project with the name "testsdk"

![Add a new project in PyCharm - Step 3](https://apidocs.io/illustration/python?step=createFile&workspaceFolder=Testing%20OAuth2.0-Python&projectName=testingoauth20)

Name it "testsdk"

![Add a new project in PyCharm - Step 4](https://apidocs.io/illustration/python?step=nameFile)

In your python file you will be required to import the generated python library using the following code lines

```Python
from testingoauth20.testingoauth_20_client import Testingoauth20Client
```

![Add a new project in PyCharm - Step 4](https://apidocs.io/illustration/python?step=projectFiles&workspaceFolder=Testing%20OAuth2.0-Python&libraryName=testingoauth20.testingoauth_20_client&projectName=testingoauth20)

After this you can write code to instantiate an API client object, get a controller object and  make API calls. Sample code is given in the subsequent sections.

### 3. Run the Test Project

To run the file within your test project, right click on your Python file inside your Test project and click on ```Run```

![Run Test Project - Step 1](https://apidocs.io/illustration/python?step=runProject&workspaceFolder=Testing%20OAuth2.0-Python&libraryName=testingoauth20.testingoauth_20_client&projectName=testingoauth20)


## How to Test

You can test the generated SDK and the server with automatically generated test
cases. unittest is used as the testing framework and nose is used as the test
runner. You can run the tests as follows:

  1. From terminal/cmd navigate to the root directory of the SDK.
  2. Invoke 'pip install -r test-requirements.txt'
  3. Invoke 'nosetests'

## Initialization

### Authentication
In order to setup authentication and initialization of the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| o_auth_client_id | OAuth 2 Client ID |
| o_auth_client_secret | OAuth 2 Client Secret |
| o_auth_redirect_uri | OAuth 2 Redirection endpoint or Callback Uri |



API client can be initialized as following.

```python
# Configuration parameters and credentials
o_auth_client_id = 'o_auth_client_id' # OAuth 2 Client ID
o_auth_client_secret = 'o_auth_client_secret' # OAuth 2 Client Secret
o_auth_redirect_uri = 'o_auth_redirect_uri' # OAuth 2 Redirection endpoint or Callback Uri

client = Testingoauth20Client(o_auth_client_id, o_auth_client_secret, o_auth_redirect_uri)
```


You must now authorize the client.

### Authorizing your client

Your application must obtain user authorization before it can execute an endpoint call.
The SDK uses *OAuth 2.0 authorization* to obtain a user's consent to perform an API request on the user's behalf.

#### 1. Obtain user consent

To obtain user's consent, you must redirect the user to the authorization page. The `get_authorization_url()` method creates the URL to the authorization page. You must pass
the *[scopes](#scopes)* for which you need permission to access.
```python
auth_url = client.auth.get_authorization_url([OAuthScope.NEW, OAuthScope.NEW])
```

#### 2. Handle the OAuth server response

Once the user responds to the consent request, the OAuth 2.0 server responds to your application's access request by redirecting the user to your redirect URI.

If the user approves the request, the authorization code will be sent as the `code` query string:
 
```
https://example.com/oauth/callback?code=XXXXXXXXXXXXXXXXXXXXXXXXX
```

If the user does not approve the request, the response contains an `error` query string:

```
https://example.com/oauth/callback?error=access_denied
```

#### 3. Authorize the client using the code

After the server receives the code, it can exchange this for an *access token*. The access token is an object containing information for authorizing client requests and refreshing the token itself.

```python
try:
    client.auth.authorize('code')
except OAuthProviderException as ex:
    # handle exception
```

### Scopes

Scopes enable your application to only request access to the resources it needs while enabling users to control the amount of access they grant to your application. Available scopes are defined in the `testingoauth20.models.o_auth_scope.OAuthScope` enumeration.

| Scope Name | Description |
| --- | --- |
| `NEW` |  |
| `NEW` |  |

### Refreshing token

An access token may expire after some time. To extend its lifetime, you must refresh the token.

```python
if client.auth.is_token_expired():
    try:
        client.auth.refresh_token()
    except OAuthProviderException as ex:
        # handle exception
```

If a token expires, the SDK will attempt to automatically refresh the token before the next endpoint call requiring authentication.

### Storing an access token for reuse

It is recommended that you store the access token for reuse.

You can store the access token in a file or a database.

```python
# store token
save_token_to_database(client.config.o_auth_token)
```
 
However, since the the SDK will attempt to automatically refresh the token when it expires, it is recommended that you register a *token update callback* to detect any change to the access token.

```python
client.config.o_auth_callback = save_token_to_database
```

The token update callback will be fired upon authorization as well as token refresh.

### Creating a client from a stored token

To authorize a client from a stored access token, just set the access token after creating the client:

```python
client = Testingoauth20Client()
client.config.o_auth_token = load_token_from_database()
```


# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [HelloBinding](#hello_binding)
* [OAuthAuthorization](#o_auth_authorization)

## <a name="hello_binding"></a>![Class: ](https://apidocs.io/img/class.png ".HelloBinding") HelloBinding

### Get controller instance

An instance of the ``` HelloBinding ``` class can be accessed from the API Client.

```python
 hello_binding_client = client.hello_binding
```

### <a name="say_hello"></a>![Method: ](https://apidocs.io/img/method.png ".HelloBinding.say_hello") say_hello

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description

```python
def say_hello(self,
                  body)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```python
body = SayHelloRequestModel()

result = hello_binding_client.say_hello(body)

```


[Back to List of Controllers](#list_of_controllers)

## <a name="o_auth_authorization"></a>![Class: ](https://apidocs.io/img/class.png ".OAuthAuthorization") OAuthAuthorization

### Get controller instance

An instance of the ``` OAuthAuthorization ``` class can be accessed from the API Client.

```python
 o_auth_authorization_client = client.o_auth_authorization
```

### <a name="request_token"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.request_token") request_token

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.

```python
def request_token(self,
                      options=dict(),
                      _optional_form_parameters=None)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| _optional_form_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```python
collect = {}

authorization = 'Authorization'
collect['authorization'] = authorization

code = 'code'
collect['code'] = code

redirect_uri = 'redirect_uri'
collect['redirect_uri'] = redirect_uri

# key-value map for optional form parameters
optional_form_parameters = { }


result = o_auth_authorization_client.request_token(collect, optional_form_parameters, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




### <a name="refresh_token"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.refresh_token") refresh_token

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token

```python
def refresh_token(self,
                      options=dict(),
                      _optional_form_parameters=None)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| _optional_form_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```python
collect = {}

authorization = 'Authorization'
collect['authorization'] = authorization

refresh_token = 'refresh_token'
collect['refresh_token'] = refresh_token

scope = 'scope'
collect['scope'] = scope

# key-value map for optional form parameters
optional_form_parameters = { }


result = o_auth_authorization_client.refresh_token(collect, optional_form_parameters, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




### <a name="request_token_1"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.request_token_1") request_token_1

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.

```python
def request_token_1(self,
                        options=dict(),
                        _optional_form_parameters=None)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| _optional_form_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```python
collect = {}

authorization = 'Authorization'
collect['authorization'] = authorization

code = 'code'
collect['code'] = code

redirect_uri = 'redirect_uri'
collect['redirect_uri'] = redirect_uri

# key-value map for optional form parameters
optional_form_parameters = { }


result = o_auth_authorization_client.request_token_1(collect, optional_form_parameters, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




### <a name="refresh_token_1"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.refresh_token_1") refresh_token_1

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token

```python
def refresh_token_1(self,
                        options=dict(),
                        _optional_form_parameters=None)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| _optional_form_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```python
collect = {}

authorization = 'Authorization'
collect['authorization'] = authorization

refresh_token = 'refresh_token'
collect['refresh_token'] = refresh_token

scope = 'scope'
collect['scope'] = scope

# key-value map for optional form parameters
optional_form_parameters = { }


result = o_auth_authorization_client.refresh_token_1(collect, optional_form_parameters, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




### <a name="request_token_2"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.request_token_2") request_token_2

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.

```python
def request_token_2(self,
                        options=dict(),
                        _optional_form_parameters=None)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| _optional_form_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```python
collect = {}

authorization = 'Authorization'
collect['authorization'] = authorization

code = 'code'
collect['code'] = code

redirect_uri = 'redirect_uri'
collect['redirect_uri'] = redirect_uri

# key-value map for optional form parameters
optional_form_parameters = { }


result = o_auth_authorization_client.request_token_2(collect, optional_form_parameters, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




### <a name="refresh_token_2"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.refresh_token_2") refresh_token_2

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token

```python
def refresh_token_2(self,
                        options=dict(),
                        _optional_form_parameters=None)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| _optional_form_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```python
collect = {}

authorization = 'Authorization'
collect['authorization'] = authorization

refresh_token = 'refresh_token'
collect['refresh_token'] = refresh_token

scope = 'scope'
collect['scope'] = scope

# key-value map for optional form parameters
optional_form_parameters = { }


result = o_auth_authorization_client.refresh_token_2(collect, optional_form_parameters, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




### <a name="request_token_11"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.request_token_11") request_token_11

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.

```python
def request_token_11(self,
                         options=dict(),
                         _optional_form_parameters=None)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| _optional_form_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```python
collect = {}

authorization = 'Authorization'
collect['authorization'] = authorization

code = 'code'
collect['code'] = code

redirect_uri = 'redirect_uri'
collect['redirect_uri'] = redirect_uri

# key-value map for optional form parameters
optional_form_parameters = { }


result = o_auth_authorization_client.request_token_11(collect, optional_form_parameters, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




### <a name="refresh_token_11"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.refresh_token_11") refresh_token_11

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token

```python
def refresh_token_11(self,
                         options=dict(),
                         _optional_form_parameters=None)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| _optional_form_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```python
collect = {}

authorization = 'Authorization'
collect['authorization'] = authorization

refresh_token = 'refresh_token'
collect['refresh_token'] = refresh_token

scope = 'scope'
collect['scope'] = scope

# key-value map for optional form parameters
optional_form_parameters = { }


result = o_auth_authorization_client.refresh_token_11(collect, optional_form_parameters, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




### <a name="request_token_21"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.request_token_21") request_token_21

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.

```python
def request_token_21(self,
                         options=dict(),
                         _optional_form_parameters=None)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| _optional_form_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```python
collect = {}

authorization = 'Authorization'
collect['authorization'] = authorization

code = 'code'
collect['code'] = code

redirect_uri = 'redirect_uri'
collect['redirect_uri'] = redirect_uri

# key-value map for optional form parameters
optional_form_parameters = { }


result = o_auth_authorization_client.request_token_21(collect, optional_form_parameters, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




### <a name="refresh_token_21"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.refresh_token_21") refresh_token_21

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token

```python
def refresh_token_21(self,
                         options=dict(),
                         _optional_form_parameters=None)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| _optional_form_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```python
collect = {}

authorization = 'Authorization'
collect['authorization'] = authorization

refresh_token = 'refresh_token'
collect['refresh_token'] = refresh_token

scope = 'scope'
collect['scope'] = scope

# key-value map for optional form parameters
optional_form_parameters = { }


result = o_auth_authorization_client.refresh_token_21(collect, optional_form_parameters, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




### <a name="request_token_1"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.request_token_1") request_token_1

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.

```python
def request_token_1(self,
                        options=dict(),
                        _optional_form_parameters=None)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| _optional_form_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```python
collect = {}

authorization = 'Authorization'
collect['authorization'] = authorization

code = 'code'
collect['code'] = code

redirect_uri = 'redirect_uri'
collect['redirect_uri'] = redirect_uri

# key-value map for optional form parameters
optional_form_parameters = { }


result = o_auth_authorization_client.request_token_1(collect, optional_form_parameters, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




### <a name="refresh_token_1"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.refresh_token_1") refresh_token_1

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token

```python
def refresh_token_1(self,
                        options=dict(),
                        _optional_form_parameters=None)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| _optional_form_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |



#### Example Usage

```python
collect = {}

authorization = 'Authorization'
collect['authorization'] = authorization

refresh_token = 'refresh_token'
collect['refresh_token'] = refresh_token

scope = 'scope'
collect['scope'] = scope

# key-value map for optional form parameters
optional_form_parameters = { }


result = o_auth_authorization_client.refresh_token_1(collect, optional_form_parameters, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |




[Back to List of Controllers](#list_of_controllers)



