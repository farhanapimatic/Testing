# Getting started

WSDL File for HelloService

## How to Build


* In order to successfully build and run your SDK files, you are required to have the following setup in your system:
    * **Go**  (Visit [https://golang.org/doc/install](https://golang.org/doc/install) for more details on how to install Go)
    * **Java VM** Version 8 or later
    * **Eclipse 4.6 (Neon)** or later ([http://www.eclipse.org/neon/](http://www.eclipse.org/neon/))
    * **GoClipse** setup within above installed Eclipse (Follow the instructions at [this link](https://github.com/GoClipse/goclipse/blob/latest/documentation/Installation.md#instructions) to setup GoClipse)
* Ensure that ```GOPATH``` environment variable is set in the system variables. If not, set it to your workspace directory where you will be adding your Go projects.
* The generated code uses unirest-go http library. Therefore, you will need internet access to resolve this dependency. If Go is properly installed and configured, run the following command to pull the dependency:

```Go
go get github.com/apimatic/unirest-go
```

This will install unirest-go in the ```GOPATH``` you specified in the system variables.

Now follow the steps mentioned below to build your SDK:

1. Open eclipse in the Go language perspective and click on the ```Import``` option in ```File``` menu.

![Importing SDK into Eclipse - Step 1](https://apidocs.io/illustration/go?step=import0)

2. Select ```General -> Existing Projects into Workspace``` option from the tree list.

![Importing SDK into Eclipse - Step 2](https://apidocs.io/illustration/go?step=import1)

3. In ```Select root directory```, provide path to the unzipped archive for the generated code. Once the path is set and the Project becomes visible under ```Projects``` click ```Finish```

![Importing SDK into Eclipse - Step 3](https://apidocs.io/illustration/go?step=import2&workspaceFolder=Testing%20OAuth2.0-GoLang&projectName=testingoauth20_lib)

4. The Go library will be imported and its files will be visible in the Project Explorer

![Importing SDK into Eclipse - Step 4](https://apidocs.io/illustration/go?step=import3&projectName=testingoauth20_lib)

## How to Use

The following section explains how to use the Testingoauth20Lib library in a new project.

### 1. Add a new Test Project

Create a new project in Eclipse by ```File``` -> ```New``` -> ```Go Project```

![Add a new project in Eclipse](https://apidocs.io/illustration/go?step=createNewProject0)

Name the Project as ```Test``` and click ```Finish```

![Create a new Maven Project - Step 1](https://apidocs.io/illustration/go?step=createNewProject1)

Create a new directory in the ```src``` directory of this project

![Create a new Maven Project - Step 2](https://apidocs.io/illustration/go?step=createNewProject2&projectName=testingoauth20_lib)

Name it ```test.com```

![Create a new Maven Project - Step 3](https://apidocs.io/illustration/go?step=createNewProject3&projectName=testingoauth20_lib)

Now create a new file inside ```src/test.com```

![Create a new Maven Project - Step 4](https://apidocs.io/illustration/go?step=createNewProject4&projectName=testingoauth20_lib)

Name it ```testsdk.go```

![Create a new Maven Project - Step 5](https://apidocs.io/illustration/go?step=createNewProject5&projectName=testingoauth20_lib)

In this Go file, you can start adding code to initialize the client library. Sample code to initialize the client library and using its methods is given in the subsequent sections.

### 2. Configure the Test Project

You need to import your generated library in this project in order to make use of its functions. In order to import the library, you can add its path in the ```GOPATH``` for this project. Follow the below steps:

Right click on the project name and click on ```Properties```

![Adding dependency to the client library - Step 1](https://apidocs.io/illustration/go?step=testProject0&projectName=testingoauth20_lib)

Choose ```Go Compiler``` from the side menu. Check ```Use project specific settings``` and uncheck ```Use same value as the GOPATH environment variable.```. By default, the GOPATH value from the environment variables will be visible in ```Eclipse GOPATH```. Do not remove this as this points to the unirest dependency.

![Adding dependency to the client library - Step 2](https://apidocs.io/illustration/go?step=testProject1)

Append the library path to this GOPATH

![Adding dependency to the client library - Step 3](https://apidocs.io/illustration/go?step=testProject2&workspaceFolder=Testing%20OAuth2.0-GoLang)

Once the path is appended, click on ```OK```

### 3. Build the Test Project

Right click on the project name and click on ```Build Project```

![Build Project](https://apidocs.io/illustration/go?step=buildProject&projectName=testingoauth20_lib)

### 4. Run the Test Project

If the build is successful, right click on your Go file and click on ```Run As``` -> ```Go Application```

![Run Project](https://apidocs.io/illustration/go?step=runProject&projectName=testingoauth20_lib)

## Initialization

### Authentication
In order to setup authentication of the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthClientId | OAuth 2 Client ID |
| oAuthClientSecret | OAuth 2 Client Secret |
| oAuthRedirectUri | OAuth 2 Redirection endpoint or Callback Uri |


To configure these for your generated code, open the file "Configuration.go" and edit it's contents.


# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [hello_binding_pkg](#hello_binding_pkg)
* [oauthauthorization_pkg](#oauthauthorization_pkg)

## <a name="hello_binding_pkg"></a>![Class: ](https://apidocs.io/img/class.png ".hello_binding_pkg") hello_binding_pkg

### Get instance

Factory for the ``` HELLO_BINDING ``` interface can be accessed from the package hello_binding_pkg.

```go
helloBinding := hello_binding_pkg.NewHELLO_BINDING()
```

### <a name="say_hello"></a>![Method: ](https://apidocs.io/img/method.png ".hello_binding_pkg.SayHello") SayHello

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```go
func (me *HELLOBINDING_IMPL) SayHello(body *models_pkg.SayHelloRequestModel)(*models_pkg.SayHelloResponseModel,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```go
var body *models_pkg.SayHelloRequestModel

var result *models_pkg.SayHelloResponseModel
result,_ = helloBinding.SayHello(body)

```


[Back to List of Controllers](#list_of_controllers)

## <a name="oauthauthorization_pkg"></a>![Class: ](https://apidocs.io/img/class.png ".oauthauthorization_pkg") oauthauthorization_pkg

### Get instance

Factory for the ``` OAUTHAUTHORIZATION ``` interface can be accessed from the package oauthauthorization_pkg.

```go
oAuthAuthorization := oauthauthorization_pkg.NewOAUTHAUTHORIZATION()
```

### <a name="request_token"></a>![Method: ](https://apidocs.io/img/method.png ".oauthauthorization_pkg.RequestToken") RequestToken

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```go
func (me *OAUTHAUTHORIZATION_IMPL) RequestToken(input *RequestTokenInput, fieldParameters map[string]interface{})(*models_pkg.OAuthTokenModel,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```go
collect := new (oauthauthorization_pkg.RequestTokenInput)

authorization := "Authorization"
collect.Authorization = authorization

code := "code"
collect.Code = code

redirectUri := "redirect_uri"
collect.RedirectUri = redirectUri

// key-value map for optional form parameters
	formParams := map[string]interface{}{"key" : "value"}


var result *models_pkg.OAuthTokenModel
result,_ = oAuthAuthorization.RequestToken(collect, formParams, )

```

#### Errors
 
| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token"></a>![Method: ](https://apidocs.io/img/method.png ".oauthauthorization_pkg.RefreshToken") RefreshToken

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```go
func (me *OAUTHAUTHORIZATION_IMPL) RefreshToken(input *RefreshTokenInput, fieldParameters map[string]interface{})(*models_pkg.OAuthTokenModel,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```go
collect := new (oauthauthorization_pkg.RefreshTokenInput)

authorization := "Authorization"
collect.Authorization = authorization

refreshToken := "refresh_token"
collect.RefreshToken = refreshToken

scope := "scope"
collect.Scope = scope

// key-value map for optional form parameters
	formParams := map[string]interface{}{"key" : "value"}


var result *models_pkg.OAuthTokenModel
result,_ = oAuthAuthorization.RefreshToken(collect, formParams, )

```

#### Errors
 
| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token1"></a>![Method: ](https://apidocs.io/img/method.png ".oauthauthorization_pkg.RequestToken1") RequestToken1

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```go
func (me *OAUTHAUTHORIZATION_IMPL) RequestToken1(input *RequestToken1Input, fieldParameters map[string]interface{})(*models_pkg.OAuthTokenModel,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```go
collect := new (oauthauthorization_pkg.RequestToken1Input)

authorization := "Authorization"
collect.Authorization = authorization

code := "code"
collect.Code = code

redirectUri := "redirect_uri"
collect.RedirectUri = redirectUri

// key-value map for optional form parameters
	formParams := map[string]interface{}{"key" : "value"}


var result *models_pkg.OAuthTokenModel
result,_ = oAuthAuthorization.RequestToken1(collect, formParams, )

```

#### Errors
 
| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token1"></a>![Method: ](https://apidocs.io/img/method.png ".oauthauthorization_pkg.RefreshToken1") RefreshToken1

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```go
func (me *OAUTHAUTHORIZATION_IMPL) RefreshToken1(input *RefreshToken1Input, fieldParameters map[string]interface{})(*models_pkg.OAuthTokenModel,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```go
collect := new (oauthauthorization_pkg.RefreshToken1Input)

authorization := "Authorization"
collect.Authorization = authorization

refreshToken := "refresh_token"
collect.RefreshToken = refreshToken

scope := "scope"
collect.Scope = scope

// key-value map for optional form parameters
	formParams := map[string]interface{}{"key" : "value"}


var result *models_pkg.OAuthTokenModel
result,_ = oAuthAuthorization.RefreshToken1(collect, formParams, )

```

#### Errors
 
| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token2"></a>![Method: ](https://apidocs.io/img/method.png ".oauthauthorization_pkg.RequestToken2") RequestToken2

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```go
func (me *OAUTHAUTHORIZATION_IMPL) RequestToken2(input *RequestToken2Input, fieldParameters map[string]interface{})(*models_pkg.OAuthTokenModel,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```go
collect := new (oauthauthorization_pkg.RequestToken2Input)

authorization := "Authorization"
collect.Authorization = authorization

code := "code"
collect.Code = code

redirectUri := "redirect_uri"
collect.RedirectUri = redirectUri

// key-value map for optional form parameters
	formParams := map[string]interface{}{"key" : "value"}


var result *models_pkg.OAuthTokenModel
result,_ = oAuthAuthorization.RequestToken2(collect, formParams, )

```

#### Errors
 
| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token2"></a>![Method: ](https://apidocs.io/img/method.png ".oauthauthorization_pkg.RefreshToken2") RefreshToken2

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```go
func (me *OAUTHAUTHORIZATION_IMPL) RefreshToken2(input *RefreshToken2Input, fieldParameters map[string]interface{})(*models_pkg.OAuthTokenModel,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```go
collect := new (oauthauthorization_pkg.RefreshToken2Input)

authorization := "Authorization"
collect.Authorization = authorization

refreshToken := "refresh_token"
collect.RefreshToken = refreshToken

scope := "scope"
collect.Scope = scope

// key-value map for optional form parameters
	formParams := map[string]interface{}{"key" : "value"}


var result *models_pkg.OAuthTokenModel
result,_ = oAuthAuthorization.RefreshToken2(collect, formParams, )

```

#### Errors
 
| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token11"></a>![Method: ](https://apidocs.io/img/method.png ".oauthauthorization_pkg.RequestToken11") RequestToken11

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```go
func (me *OAUTHAUTHORIZATION_IMPL) RequestToken11(input *RequestToken11Input, fieldParameters map[string]interface{})(*models_pkg.OAuthTokenModel,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```go
collect := new (oauthauthorization_pkg.RequestToken11Input)

authorization := "Authorization"
collect.Authorization = authorization

code := "code"
collect.Code = code

redirectUri := "redirect_uri"
collect.RedirectUri = redirectUri

// key-value map for optional form parameters
	formParams := map[string]interface{}{"key" : "value"}


var result *models_pkg.OAuthTokenModel
result,_ = oAuthAuthorization.RequestToken11(collect, formParams, )

```

#### Errors
 
| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token11"></a>![Method: ](https://apidocs.io/img/method.png ".oauthauthorization_pkg.RefreshToken11") RefreshToken11

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```go
func (me *OAUTHAUTHORIZATION_IMPL) RefreshToken11(input *RefreshToken11Input, fieldParameters map[string]interface{})(*models_pkg.OAuthTokenModel,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```go
collect := new (oauthauthorization_pkg.RefreshToken11Input)

authorization := "Authorization"
collect.Authorization = authorization

refreshToken := "refresh_token"
collect.RefreshToken = refreshToken

scope := "scope"
collect.Scope = scope

// key-value map for optional form parameters
	formParams := map[string]interface{}{"key" : "value"}


var result *models_pkg.OAuthTokenModel
result,_ = oAuthAuthorization.RefreshToken11(collect, formParams, )

```

#### Errors
 
| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token21"></a>![Method: ](https://apidocs.io/img/method.png ".oauthauthorization_pkg.RequestToken21") RequestToken21

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```go
func (me *OAUTHAUTHORIZATION_IMPL) RequestToken21(input *RequestToken21Input, fieldParameters map[string]interface{})(*models_pkg.OAuthTokenModel,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```go
collect := new (oauthauthorization_pkg.RequestToken21Input)

authorization := "Authorization"
collect.Authorization = authorization

code := "code"
collect.Code = code

redirectUri := "redirect_uri"
collect.RedirectUri = redirectUri

// key-value map for optional form parameters
	formParams := map[string]interface{}{"key" : "value"}


var result *models_pkg.OAuthTokenModel
result,_ = oAuthAuthorization.RequestToken21(collect, formParams, )

```

#### Errors
 
| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token21"></a>![Method: ](https://apidocs.io/img/method.png ".oauthauthorization_pkg.RefreshToken21") RefreshToken21

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```go
func (me *OAUTHAUTHORIZATION_IMPL) RefreshToken21(input *RefreshToken21Input, fieldParameters map[string]interface{})(*models_pkg.OAuthTokenModel,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```go
collect := new (oauthauthorization_pkg.RefreshToken21Input)

authorization := "Authorization"
collect.Authorization = authorization

refreshToken := "refresh_token"
collect.RefreshToken = refreshToken

scope := "scope"
collect.Scope = scope

// key-value map for optional form parameters
	formParams := map[string]interface{}{"key" : "value"}


var result *models_pkg.OAuthTokenModel
result,_ = oAuthAuthorization.RefreshToken21(collect, formParams, )

```

#### Errors
 
| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token1"></a>![Method: ](https://apidocs.io/img/method.png ".oauthauthorization_pkg.RequestToken1") RequestToken1

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```go
func (me *OAUTHAUTHORIZATION_IMPL) RequestToken1(input *RequestToken1Input, fieldParameters map[string]interface{})(*models_pkg.OAuthTokenModel,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```go
collect := new (oauthauthorization_pkg.RequestToken1Input)

authorization := "Authorization"
collect.Authorization = authorization

code := "code"
collect.Code = code

redirectUri := "redirect_uri"
collect.RedirectUri = redirectUri

// key-value map for optional form parameters
	formParams := map[string]interface{}{"key" : "value"}


var result *models_pkg.OAuthTokenModel
result,_ = oAuthAuthorization.RequestToken1(collect, formParams, )

```

#### Errors
 
| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token1"></a>![Method: ](https://apidocs.io/img/method.png ".oauthauthorization_pkg.RefreshToken1") RefreshToken1

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```go
func (me *OAUTHAUTHORIZATION_IMPL) RefreshToken1(input *RefreshToken1Input, fieldParameters map[string]interface{})(*models_pkg.OAuthTokenModel,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```go
collect := new (oauthauthorization_pkg.RefreshToken1Input)

authorization := "Authorization"
collect.Authorization = authorization

refreshToken := "refresh_token"
collect.RefreshToken = refreshToken

scope := "scope"
collect.Scope = scope

// key-value map for optional form parameters
	formParams := map[string]interface{}{"key" : "value"}


var result *models_pkg.OAuthTokenModel
result,_ = oAuthAuthorization.RefreshToken1(collect, formParams, )

```

#### Errors
 
| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token"></a>![Method: ](https://apidocs.io/img/method.png ".oauthauthorization_pkg.RequestToken") RequestToken

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```go
func (me *OAUTHAUTHORIZATION_IMPL) RequestToken(input *RequestTokenInput, fieldParameters map[string]interface{})(*models_pkg.OAuthTokenModel,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```go
collect := new (oauthauthorization_pkg.RequestTokenInput)

authorization := "Authorization"
collect.Authorization = authorization

code := "code"
collect.Code = code

redirectUri := "redirect_uri"
collect.RedirectUri = redirectUri

// key-value map for optional form parameters
	formParams := map[string]interface{}{"key" : "value"}


var result *models_pkg.OAuthTokenModel
result,_ = oAuthAuthorization.RequestToken(collect, formParams, )

```

#### Errors
 
| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token"></a>![Method: ](https://apidocs.io/img/method.png ".oauthauthorization_pkg.RefreshToken") RefreshToken

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```go
func (me *OAUTHAUTHORIZATION_IMPL) RefreshToken(input *RefreshTokenInput, fieldParameters map[string]interface{})(*models_pkg.OAuthTokenModel,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```go
collect := new (oauthauthorization_pkg.RefreshTokenInput)

authorization := "Authorization"
collect.Authorization = authorization

refreshToken := "refresh_token"
collect.RefreshToken = refreshToken

scope := "scope"
collect.Scope = scope

// key-value map for optional form parameters
	formParams := map[string]interface{}{"key" : "value"}


var result *models_pkg.OAuthTokenModel
result,_ = oAuthAuthorization.RefreshToken(collect, formParams, )

```

#### Errors
 
| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



[Back to List of Controllers](#list_of_controllers)



