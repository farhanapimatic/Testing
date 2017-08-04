# Getting started

WSDL File for HelloService

## How to Build

The generated code uses the Newtonsoft Json.NET NuGet Package. If the automatic NuGet package restore
is enabled, these dependencies will be installed automatically. Therefore,
you will need internet access for build.

1. Open the solution (TestingOAuth20.sln) file.
2. Invoke the build process using `Ctrl+Shift+B` shortcut key or using the `Build` menu as shown below.

![Building SDK using Visual Studio](https://apidocs.io/illustration/cs?step=buildSDK&workspaceFolder=Testing%20OAuth2.0-CSharp&workspaceName=TestingOAuth20&projectName=TestingOAuth20.PCL)

## How to Use

The build process generates a portable class library, which can be used like a normal class library. The generated library is compatible with Windows Forms, Windows RT, Windows Phone 8,
Silverlight 5, Xamarin iOS, Xamarin Android and Mono. More information on how to use can be found at the [MSDN Portable Class Libraries documentation](http://msdn.microsoft.com/en-us/library/vstudio/gg597391%28v=vs.100%29.aspx).

The following section explains how to use the TestingOAuth20 library in a new console project.

### 1. Starting a new project

For starting a new project, right click on the current solution from the *solution explorer* and choose  ``` Add -> New Project ```.

![Add a new project in the existing solution using Visual Studio](https://apidocs.io/illustration/cs?step=addProject&workspaceFolder=Testing%20OAuth2.0-CSharp&workspaceName=TestingOAuth20&projectName=TestingOAuth20.PCL)

Next, choose "Console Application", provide a ``` TestConsoleProject ``` as the project name and click ``` OK ```.

![Create a new console project using Visual Studio](https://apidocs.io/illustration/cs?step=createProject&workspaceFolder=Testing%20OAuth2.0-CSharp&workspaceName=TestingOAuth20&projectName=TestingOAuth20.PCL)

### 2. Set as startup project

The new console project is the entry point for the eventual execution. This requires us to set the ``` TestConsoleProject ``` as the start-up project. To do this, right-click on the  ``` TestConsoleProject ``` and choose  ``` Set as StartUp Project ``` form the context menu.

![Set the new cosole project as the start up project](https://apidocs.io/illustration/cs?step=setStartup&workspaceFolder=Testing%20OAuth2.0-CSharp&workspaceName=TestingOAuth20&projectName=TestingOAuth20.PCL)

### 3. Add reference of the library project

In order to use the TestingOAuth20 library in the new project, first we must add a projet reference to the ``` TestConsoleProject ```. First, right click on the ``` References ``` node in the *solution explorer* and click ``` Add Reference... ```.

![Open references of the TestConsoleProject](https://apidocs.io/illustration/cs?step=addReference&workspaceFolder=Testing%20OAuth2.0-CSharp&workspaceName=TestingOAuth20&projectName=TestingOAuth20.PCL)

Next, a window will be displayed where we must set the ``` checkbox ``` on ``` TestingOAuth20.PCL ``` and click ``` OK ```. By doing this, we have added a reference of the ```TestingOAuth20.PCL``` project into the new ``` TestConsoleProject ```.

![Add a reference to the TestConsoleProject](https://apidocs.io/illustration/cs?step=createReference&workspaceFolder=Testing%20OAuth2.0-CSharp&workspaceName=TestingOAuth20&projectName=TestingOAuth20.PCL)

### 4. Write sample code

Once the ``` TestConsoleProject ``` is created, a file named ``` Program.cs ``` will be visible in the *solution explorer* with an empty ``` Main ``` method. This is the entry point for the execution of the entire solution.
Here, you can add code to initialize the client library and acquire the instance of a *Controller* class. Sample code to initialize the client library and using controller methods is given in the subsequent sections.

![Add a reference to the TestConsoleProject](https://apidocs.io/illustration/cs?step=addCode&workspaceFolder=Testing%20OAuth2.0-CSharp&workspaceName=TestingOAuth20&projectName=TestingOAuth20.PCL)

## How to Test

The generated SDK also contain one or more Tests, which are contained in the Tests project.
In order to invoke these test cases, you will need *NUnit 3.0 Test Adapter Extension for Visual Studio*.
Once the SDK is complied, the test cases should appear in the Test Explorer window.
Here, you can click *Run All* to execute these test cases.

## Initialization

### Authentication
In order to setup authentication and initialization of the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthClientId | OAuth 2 Client ID |
| oAuthClientSecret | OAuth 2 Client Secret |
| oAuthRedirectUri | OAuth 2 Redirection endpoint or Callback Uri |



API client can be initialized as following.

```csharp
// Configuration parameters and credentials
string oAuthClientId = "oAuthClientId"; // OAuth 2 Client ID
string oAuthClientSecret = "oAuthClientSecret"; // OAuth 2 Client Secret
string oAuthRedirectUri = "oAuthRedirectUri"; // OAuth 2 Redirection endpoint or Callback Uri

TestingOAuth20Client client = new TestingOAuth20Client(oAuthClientId, oAuthClientSecret, oAuthRedirectUri);
```


You must now authorize the client.

### Authorizing your client

Your application must obtain user authorization before it can execute an endpoint call.
The SDK uses *OAuth 2.0 authorization* to obtain a user's consent to perform an API request on the user's behalf.

#### 1. Obtain user consent

To obtain user's consent, you must redirect the user to the authorization page. The `BuildAuthorizationUrl()` method creates the URL to the authorization page. You must pass
the *[scopes](#scopes)* for which you need permission to access.
```csharp
String authUrl = client.Auth.BuildAuthorizationUrl()(new List<OAuthScope>(){OAuthScope.NEW, OAuthScope.NEW})
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

```csharp
try
{
    client.Auth.Authorize(/*code goes here*/)
}
catch (OAuthProviderException e)
{
    //handle exception here
}
```

### Scopes

Scopes enable your application to only request access to the resources it needs while enabling users to control the amount of access they grant to your application. Available scopes are defined in the `TestingOAuth20.PCL.Models.OAuthScope` enumeration.

| Scope Name | Description |
| --- | --- |
| `NEW` |  |
| `NEW` |  |

### Refreshing token

An access token may expire after some time. To extend its lifetime, you must refresh the token.

```csharp
try
{
    client.Auth.RefreshToken(scope=new List<OAuthScope>(){OAuthScope.NEW, OAuthScope.NEW})
}
catch (OAuthProviderException e)
{
    //handle exception here
}
```

If a token expires, the SDK will attempt to automatically refresh the token before the next endpoint call requiring authentication.

### Storing an access token for reuse

It is recommended that you store the access token for reuse.

You can store the access token in a file or a database.

```csharp
// store token
SaveTokenToDatabase(Configuration.OAuthToken);
```
 
However, since the the SDK will attempt to automatically refresh the token when it expires, it is recommended that you register a *token update delegate* to detect any change to the access token.

```csharp
client.Configuration.OAuthTokenUpdateCallback = SaveTokenToDatabase;
```

The token update callback will be fired upon authorization as well as token refresh.

### Creating a client from a stored token

To authorize a client from a stored access token, just set the access token after creating the client:

```csharp
client = TestingOAuth20Client();
Configuration.UpdateAccessToken(LoadTokenFromDatabase());
```


# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [HelloBinding](#hello_binding)
* [OAuthAuthorization](#o_auth_authorization)

## <a name="hello_binding"></a>![Class: ](https://apidocs.io/img/class.png "TestingOAuth20.PCL.Controllers.HelloBinding") HelloBinding

### Get singleton instance

The singleton instance of the ``` HelloBinding ``` class can be accessed from the API Client.

```csharp
HelloBinding helloBinding = client.HelloBinding;
```

### <a name="say_hello"></a>![Method: ](https://apidocs.io/img/method.png "TestingOAuth20.PCL.Controllers.HelloBinding.SayHello") SayHello

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```csharp
Task<Models.SayHelloResponseModel> SayHello(Models.SayHelloRequestModel body)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```csharp
var body = new Models.SayHelloRequestModel();

Models.SayHelloResponseModel result = await helloBinding.SayHello(body);

```


[Back to List of Controllers](#list_of_controllers)

## <a name="o_auth_authorization"></a>![Class: ](https://apidocs.io/img/class.png "TestingOAuth20.PCL.Controllers.OAuthAuthorization") OAuthAuthorization

### Get singleton instance

The singleton instance of the ``` OAuthAuthorization ``` class can be accessed from the API Client.

```csharp
OAuthAuthorization oAuthAuthorization = client.OAuthAuthorization;
```

### <a name="request_token"></a>![Method: ](https://apidocs.io/img/method.png "TestingOAuth20.PCL.Controllers.OAuthAuthorization.RequestToken") RequestToken

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```csharp
Task<Models.OAuthTokenModel> RequestToken(Models.RequestTokenInput input, Dictionary<string, object> fieldParameters = null)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```csharp
RequestTokenInput collect = new RequestTokenInput();

string authorization = "Authorization";
collect.Authorization = authorization;

string code = "code";
collect.Code = code;

string redirectUri = "redirect_uri";
collect.RedirectUri = redirectUri;

// key-value map for optional form parameters
var formParams = new Dictionary<string, object>();


Models.OAuthTokenModel result = await oAuthAuthorization.RequestToken(collect, formParams, );

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |


### <a name="refresh_token"></a>![Method: ](https://apidocs.io/img/method.png "TestingOAuth20.PCL.Controllers.OAuthAuthorization.RefreshToken") RefreshToken

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```csharp
Task<Models.OAuthTokenModel> RefreshToken(Models.RefreshTokenInput input, Dictionary<string, object> fieldParameters = null)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```csharp
RefreshTokenInput collect = new RefreshTokenInput();

string authorization = "Authorization";
collect.Authorization = authorization;

string refreshToken = "refresh_token";
collect.RefreshToken = refreshToken;

string scope = "scope";
collect.Scope = scope;

// key-value map for optional form parameters
var formParams = new Dictionary<string, object>();


Models.OAuthTokenModel result = await oAuthAuthorization.RefreshToken(collect, formParams, );

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |


### <a name="request_token1"></a>![Method: ](https://apidocs.io/img/method.png "TestingOAuth20.PCL.Controllers.OAuthAuthorization.RequestToken1") RequestToken1

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```csharp
Task<Models.OAuthTokenModel> RequestToken1(Models.RequestToken1Input input, Dictionary<string, object> fieldParameters = null)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```csharp
RequestToken1Input collect = new RequestToken1Input();

string authorization = "Authorization";
collect.Authorization = authorization;

string code = "code";
collect.Code = code;

string redirectUri = "redirect_uri";
collect.RedirectUri = redirectUri;

// key-value map for optional form parameters
var formParams = new Dictionary<string, object>();


Models.OAuthTokenModel result = await oAuthAuthorization.RequestToken1(collect, formParams, );

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |


### <a name="refresh_token1"></a>![Method: ](https://apidocs.io/img/method.png "TestingOAuth20.PCL.Controllers.OAuthAuthorization.RefreshToken1") RefreshToken1

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```csharp
Task<Models.OAuthTokenModel> RefreshToken1(Models.RefreshToken1Input input, Dictionary<string, object> fieldParameters = null)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```csharp
RefreshToken1Input collect = new RefreshToken1Input();

string authorization = "Authorization";
collect.Authorization = authorization;

string refreshToken = "refresh_token";
collect.RefreshToken = refreshToken;

string scope = "scope";
collect.Scope = scope;

// key-value map for optional form parameters
var formParams = new Dictionary<string, object>();


Models.OAuthTokenModel result = await oAuthAuthorization.RefreshToken1(collect, formParams, );

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |


### <a name="request_token2"></a>![Method: ](https://apidocs.io/img/method.png "TestingOAuth20.PCL.Controllers.OAuthAuthorization.RequestToken2") RequestToken2

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```csharp
Task<Models.OAuthTokenModel> RequestToken2(Models.RequestToken2Input input, Dictionary<string, object> fieldParameters = null)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```csharp
RequestToken2Input collect = new RequestToken2Input();

string authorization = "Authorization";
collect.Authorization = authorization;

string code = "code";
collect.Code = code;

string redirectUri = "redirect_uri";
collect.RedirectUri = redirectUri;

// key-value map for optional form parameters
var formParams = new Dictionary<string, object>();


Models.OAuthTokenModel result = await oAuthAuthorization.RequestToken2(collect, formParams, );

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |


### <a name="refresh_token2"></a>![Method: ](https://apidocs.io/img/method.png "TestingOAuth20.PCL.Controllers.OAuthAuthorization.RefreshToken2") RefreshToken2

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```csharp
Task<Models.OAuthTokenModel> RefreshToken2(Models.RefreshToken2Input input, Dictionary<string, object> fieldParameters = null)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```csharp
RefreshToken2Input collect = new RefreshToken2Input();

string authorization = "Authorization";
collect.Authorization = authorization;

string refreshToken = "refresh_token";
collect.RefreshToken = refreshToken;

string scope = "scope";
collect.Scope = scope;

// key-value map for optional form parameters
var formParams = new Dictionary<string, object>();


Models.OAuthTokenModel result = await oAuthAuthorization.RefreshToken2(collect, formParams, );

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |


### <a name="request_token"></a>![Method: ](https://apidocs.io/img/method.png "TestingOAuth20.PCL.Controllers.OAuthAuthorization.RequestToken") RequestToken

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```csharp
Task<Models.OAuthTokenModel> RequestToken(Models.RequestTokenInput input, Dictionary<string, object> fieldParameters = null)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```csharp
RequestTokenInput collect = new RequestTokenInput();

string authorization = "Authorization";
collect.Authorization = authorization;

string code = "code";
collect.Code = code;

string redirectUri = "redirect_uri";
collect.RedirectUri = redirectUri;

// key-value map for optional form parameters
var formParams = new Dictionary<string, object>();


Models.OAuthTokenModel result = await oAuthAuthorization.RequestToken(collect, formParams, );

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |


### <a name="refresh_token"></a>![Method: ](https://apidocs.io/img/method.png "TestingOAuth20.PCL.Controllers.OAuthAuthorization.RefreshToken") RefreshToken

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```csharp
Task<Models.OAuthTokenModel> RefreshToken(Models.RefreshTokenInput input, Dictionary<string, object> fieldParameters = null)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```csharp
RefreshTokenInput collect = new RefreshTokenInput();

string authorization = "Authorization";
collect.Authorization = authorization;

string refreshToken = "refresh_token";
collect.RefreshToken = refreshToken;

string scope = "scope";
collect.Scope = scope;

// key-value map for optional form parameters
var formParams = new Dictionary<string, object>();


Models.OAuthTokenModel result = await oAuthAuthorization.RefreshToken(collect, formParams, );

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |


[Back to List of Controllers](#list_of_controllers)



