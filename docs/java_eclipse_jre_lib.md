# Getting started

WSDL File for HelloService

## How to Build

The generated code uses a few Maven dependencies e.g., Jackson, UniRest,
and Apache HttpClient. The reference to these dependencies is already
added in the pom.xml file will be installed automatically. Therefore,
you will need internet access for a successful build.

* In order to open the client library in Eclipse click on ``` File -> Import ```.

![Importing SDK into Eclipse - Step 1](https://apidocs.io/illustration/java?step=import0&workspaceFolder=Testing%20OAuth2.0-Java&workspaceName=TestingOAuth20&projectName=TestingOAuth20Lib&rootNamespace=com.examples.www)

* In the import dialog, select ``` Existing Java Project ``` and click ``` Next ```.

![Importing SDK into Eclipse - Step 2](https://apidocs.io/illustration/java?step=import1&workspaceFolder=Testing%20OAuth2.0-Java&workspaceName=TestingOAuth20&projectName=TestingOAuth20Lib&rootNamespace=com.examples.www)

* Browse to locate the folder containing the source code. Select the detected location of the project and click ``` Finish ```.

![Importing SDK into Eclipse - Step 3](https://apidocs.io/illustration/java?step=import2&workspaceFolder=Testing%20OAuth2.0-Java&workspaceName=TestingOAuth20&projectName=TestingOAuth20Lib&rootNamespace=com.examples.www)

* Upon successful import, the project will be automatically built by Eclipse after automatically resolving the dependencies.

![Importing SDK into Eclipse - Step 4](https://apidocs.io/illustration/java?step=import3&workspaceFolder=Testing%20OAuth2.0-Java&workspaceName=TestingOAuth20&projectName=TestingOAuth20Lib&rootNamespace=com.examples.www)

## How to Use

The following section explains how to use the TestingOAuth20 library in a new console project.

### 1. Starting a new project

For starting a new project, click the menu command ``` File > New > Project ```.

![Add a new project in Eclipse](https://apidocs.io/illustration/java?step=createNewProject0&workspaceFolder=Testing%20OAuth2.0-Java&workspaceName=TestingOAuth20&projectName=TestingOAuth20Lib&rootNamespace=com.examples.www)

Next, choose ``` Maven > Maven Project ```and click ``` Next ```.

![Create a new Maven Project - Step 1](https://apidocs.io/illustration/java?step=createNewProject1&workspaceFolder=Testing%20OAuth2.0-Java&workspaceName=TestingOAuth20&projectName=TestingOAuth20Lib&rootNamespace=com.examples.www)

Here, make sure to use the current workspace by choosing ``` Use default Workspace location ```, as shown in the picture below and click ``` Next ```.

![Create a new Maven Project - Step 2](https://apidocs.io/illustration/java?step=createNewProject2&workspaceFolder=Testing%20OAuth2.0-Java&workspaceName=TestingOAuth20&projectName=TestingOAuth20Lib&rootNamespace=com.examples.www)

Following this, select the *quick start* project type to create a simple project with an existing class and a ``` main ``` method. To do this, choose ``` maven-archetype-quickstart ``` item from the list and click ``` Next ```.

![Create a new Maven Project - Step 3](https://apidocs.io/illustration/java?step=createNewProject3&workspaceFolder=Testing%20OAuth2.0-Java&workspaceName=TestingOAuth20&projectName=TestingOAuth20Lib&rootNamespace=com.examples.www)

In the last step, provide a ``` Group Id ``` and ``` Artifact Id ``` as shown in the picture below and click ``` Finish ```.

![Create a new Maven Project - Step 4](https://apidocs.io/illustration/java?step=createNewProject4&workspaceFolder=Testing%20OAuth2.0-Java&workspaceName=TestingOAuth20&projectName=TestingOAuth20Lib&rootNamespace=com.examples.www)

### 2. Add reference of the library project

The created Maven project manages its dependencies using its ``` pom.xml ``` file. In order to add a dependency on the *TestingOAuth20Lib* client library, double click on the ``` pom.xml ``` file in the ``` Package Explorer ```. Opening the ``` pom.xml ``` file will render a graphical view on the cavas. Here, switch to the ``` Dependencies ``` tab and click the ``` Add ``` button as shown in the picture below.

![Adding dependency to the client library - Step 1](https://apidocs.io/illustration/java?step=testProject0&workspaceFolder=Testing%20OAuth2.0-Java&workspaceName=TestingOAuth20&projectName=TestingOAuth20Lib&rootNamespace=com.examples.www)

Clicking the ``` Add ``` button will open a dialog where you need to specify TestingOAuth20 in ``` Group Id ``` and TestingOAuth20Lib in the ``` Artifact Id ``` fields. Once added click ``` OK ```. Save the ``` pom.xml ``` file.

![Adding dependency to the client library - Step 2](https://apidocs.io/illustration/java?step=testProject1&workspaceFolder=Testing%20OAuth2.0-Java&workspaceName=TestingOAuth20&projectName=TestingOAuth20Lib&rootNamespace=com.examples.www)

### 3. Write sample code

Once the ``` SimpleConsoleApp ``` is created, a file named ``` App.java ``` will be visible in the *Package Explorer* with a ``` main ``` method. This is the entry point for the execution of the created project.
Here, you can add code to initialize the client library and instantiate a *Controller* class. Sample code to initialize the client library and using controller methods is given in the subsequent sections.

![Adding dependency to the client library - Step 2](https://apidocs.io/illustration/java?step=testProject2&workspaceFolder=Testing%20OAuth2.0-Java&workspaceName=TestingOAuth20&projectName=TestingOAuth20Lib&rootNamespace=com.examples.www)

## How to Test

The generated code and the server can be tested using automatically generated test cases. 
JUnit is used as the testing framework and test runner.

In Eclipse, for running the tests do the following:

1. Select the project *TestingOAuth20Lib* from the package explorer.
2. Select "Run -> Run as -> JUnit Test" or use "Alt + Shift + X" followed by "T" to run the Tests.

## Initialization

### Authentication
In order to setup authentication and initialization of the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthClientId | OAuth 2 Client ID |
| oAuthClientSecret | OAuth 2 Client Secret |
| oAuthRedirectUri | OAuth 2 Redirection endpoint or Callback Uri |



API client can be initialized as following.

```java
// Configuration parameters and credentials
String oAuthClientId = "oAuthClientId"; // OAuth 2 Client ID
String oAuthClientSecret = "oAuthClientSecret"; // OAuth 2 Client Secret
String oAuthRedirectUri = "oAuthRedirectUri"; // OAuth 2 Redirection endpoint or Callback Uri

TestingOAuth20Client client = new TestingOAuth20Client(oAuthClientId, oAuthClientSecret, oAuthRedirectUri);
```

You must authorize now authorize the client.

### Authorizing your client

Your application must obtain user authorization before it can execute an endpoint call.
The SDK uses *OAuth 2.0 authorization* to obtain a user's consent to perform an API request on user's behalf.

#### 1. Obtain user consent

To obtain user's consent, you must redirect the user to the authorization page. The `buildAuthorizationUrl()` method creates the URL to the authorization page. You must pass
the *[scopes](#scopes)* for which you need permission to access.
```java
String authUrl = client.auth().buildAuthorizationUrl(scopes); // build auth url
httpServletResponse.sendRedirect(authUrl); // show user the auth page in a browser or by redirection
```

#### 2. Handle the OAuth server response

Once the user responds to the consent request, the OAuth 2.0 server responds to your application's access request by redirecting the user to the redirect URI specified set in `Configuration`.

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

```java
try {
    client.auth().authorize(authorizationCode);
} catch (Throwable e) {
    // TODO Handle exception
}
```

### Scopes

Scopes enable your application to only request access to the resources it needs while enabling users to control the amount of access they grant to your application. Available scopes are defined in the `com.examples.www.Models.OAuthScope` enumeration.

| Scope Name | Description |
| --- | --- |
| `NEW` |  |
| `NEW` |  |

### Refreshing token

An access token may expire after sometime. To extend its lifetime, you must refresh the token.

```java
if(client.auth().isTokenExpired()) {
    try {
        client.auth().refreshToken();
    } catch (Throwable e) {
        // TODO Handle exception
    }
}
```

If a token expires, the SDK will attempt to automatically refresh the token before the next endpoint call requiring authentication.

### Storing an access token for reuse

It is recommended that you store the access token for reuse.

You can store the access token in the session if it is a web application:

```java
// store token
httpSession.setAttribute("access_token", com.examples.www.Configuration.oAuthToken);
```

However, since the the SDK will attempt to automatically refresh the token when it expires, it is recommended that you register a *token update callback* to detect any change to the access token.

```java
com.examples.www.Configuration.oAuthTokenUpdateCallBack = new com.examples.www.OAuthTokenUpdateCallBack() {
    public void tokenUpdate(OAuthTokenModel oAuthToken) {
        // use session or some other way to persist the $token
        httpSession.setAttribute("access_token", oAuthToken);
    }
};
```

The token update callback will be fired upon authorization as well as token refresh.

### Creating a client from a stored token

To authorize a client from a stored access token, just set the access token in `Configuration` along with the other configuration parameters before creating the client:

```java
// load token later...
com.examples.www.Configuration.oAuthToken = (OAuthTokenModel) httpSession.getAttribute("access_token");

// Set other configuration, then instantiate client
client = new TestingOAuth20Client();
```

### Complete example

In this example that uses the Spring framework, the `/callapi` route will first check if an access token is available for the user. If one is not set,
it redirects the user to `/authcallback` route which will obtain an access token and redirect the user back to the `/callapi` route.
Now that an access token is set, `/callapi` route can use the client to make authorized calls to the server.

#### `MainController.java`

```java
package com.example;

import java.util.LinkedList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.examples.www.TestingOAuth20Client;
import com.examples.www.models.OAuthScope;
import com.examples.www.models.OAuthTokenModel;

@Controller
@RequestMapping("/")
public class MainController {
    private final TestingOAuth20Client client;
    private final List<OAuthScope> scopes;

    public MainController() {
        // Configuration parameters and credentials
        String oAuthClientId = "oAuthClientId"; // OAuth 2 Client ID
        String oAuthClientSecret = "oAuthClientSecret"; // OAuth 2 Client Secret
        String oAuthRedirectUri = "oAuthRedirectUri"; // OAuth 2 Redirection endpoint or Callback Uri
        
        this.client = new TestingOAuth20Client(oAuthClientId, oAuthClientSecret, oAuthRedirectUri);
        this.scopes = new LinkedList<OAuthScope>();
        scopes.add(OAuthScope.NEW);
        scopes.add(OAuthScope.NEW);
    }

    @RequestMapping(value = "/callapi", method = RequestMethod.GET, produces = "application/json")
    public String callApi(HttpSession session, HttpServletResponse response) throws Throwable {
        // redirect if access token is not set
        if (session.getAttribute("access_token") == null) {
            response.sendRedirect("authcallback");
            return null;
        }

        synchronized (client) {
            com.examples.www.Configuration.oAuthToken = (OAuthTokenModel) session.getAttribute("access_token");

            // refresh the token if it is expired
            if(client.auth().isTokenExpired()) {
                try {
                    session.setAttribute("access_token", client.auth().refreshToken());
                } catch (Throwable e) {
                    // TODO Handle exception
                }
            }

            // now you can use client to make endpoint calls
            // client will automatically refresh the token when it expires
            return "someView";
        }
    }

    @RequestMapping(value = "/authcallback", method = RequestMethod.GET)
    public void authcallback(HttpSession session, @RequestParam(required = false) String code,
            HttpServletResponse response) throws Throwable {
        if (code == null) {
            String authUrl;
            
            synchronized (client) {
                authUrl = client.auth().buildAuthorizationUrl(this.scopes);
            }
            
            // if authorization code is absent, redirect to authorization page
            response.sendRedirect(authUrl);
        } else {
            OAuthTokenModel token;
            
            synchronized (client) {
                token = client.auth().authorize(code);
            }
            
            session.setAttribute("access_token", token);
            response.sendRedirect("callapi");
        }
    }
}
```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [HelloBinding](#hello_binding)
* [OAuthAuthorization](#o_auth_authorization)

## <a name="hello_binding"></a>![Class: ](https://apidocs.io/img/class.png "com.examples.www.controllers.HelloBinding") HelloBinding

### Get singleton instance

The singleton instance of the ``` HelloBinding ``` class can be accessed from the API Client.

```java
HelloBinding helloBinding = client.getHelloBinding();
```

### <a name="say_hello_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.HelloBinding.sayHelloAsync") sayHelloAsync

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```java
void sayHelloAsync(
        final SayHelloRequestModel body,
        final APICallBack<SayHelloResponseModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
try {
    SayHelloRequestModel body = new SayHelloRequestModel();
    // Invoking the API call with sample inputs
    helloBinding.sayHelloAsync(body, new APICallBack<SayHelloResponseModel>() {
        public void onSuccess(HttpContext context, SayHelloResponseModel response) {
            // TODO success callback handler
        }
        public void onFailure(HttpContext context, Throwable error) {
            // TODO failure callback handler
        }
    });
} catch(JsonProcessingException e) {
    // TODO Auto-generated catch block
    e.printStackTrace();
}
```


[Back to List of Controllers](#list_of_controllers)

## <a name="o_auth_authorization"></a>![Class: ](https://apidocs.io/img/class.png "com.examples.www.controllers.OAuthAuthorization") OAuthAuthorization

### Get singleton instance

The singleton instance of the ``` OAuthAuthorization ``` class can be accessed from the API Client.

```java
OAuthAuthorization oAuthAuthorization = client.getOAuthAuthorization();
```

### <a name="request_token_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.requestTokenAsync") requestTokenAsync

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```java
void requestTokenAsync(
        final RequestTokenInput input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RequestTokenInput collect = new RequestTokenInput();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String code = "code";
collect.setCode(code);

String redirectUri = "redirect_uri";
collect.setRedirectUri(redirectUri);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.requestTokenAsync(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.refreshTokenAsync") refreshTokenAsync

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```java
void refreshTokenAsync(
        final RefreshTokenInput input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RefreshTokenInput collect = new RefreshTokenInput();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String refreshToken = "refresh_token";
collect.setRefreshToken(refreshToken);

String scope = "scope";
collect.setScope(scope);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.refreshTokenAsync(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token1_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.requestToken1Async") requestToken1Async

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```java
void requestToken1Async(
        final RequestToken1Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RequestToken1Input collect = new RequestToken1Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String code = "code";
collect.setCode(code);

String redirectUri = "redirect_uri";
collect.setRedirectUri(redirectUri);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.requestToken1Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token1_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.refreshToken1Async") refreshToken1Async

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```java
void refreshToken1Async(
        final RefreshToken1Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RefreshToken1Input collect = new RefreshToken1Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String refreshToken = "refresh_token";
collect.setRefreshToken(refreshToken);

String scope = "scope";
collect.setScope(scope);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.refreshToken1Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token2_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.requestToken2Async") requestToken2Async

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```java
void requestToken2Async(
        final RequestToken2Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RequestToken2Input collect = new RequestToken2Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String code = "code";
collect.setCode(code);

String redirectUri = "redirect_uri";
collect.setRedirectUri(redirectUri);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.requestToken2Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token2_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.refreshToken2Async") refreshToken2Async

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```java
void refreshToken2Async(
        final RefreshToken2Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RefreshToken2Input collect = new RefreshToken2Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String refreshToken = "refresh_token";
collect.setRefreshToken(refreshToken);

String scope = "scope";
collect.setScope(scope);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.refreshToken2Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token11_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.requestToken11Async") requestToken11Async

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```java
void requestToken11Async(
        final RequestToken11Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RequestToken11Input collect = new RequestToken11Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String code = "code";
collect.setCode(code);

String redirectUri = "redirect_uri";
collect.setRedirectUri(redirectUri);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.requestToken11Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token11_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.refreshToken11Async") refreshToken11Async

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```java
void refreshToken11Async(
        final RefreshToken11Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RefreshToken11Input collect = new RefreshToken11Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String refreshToken = "refresh_token";
collect.setRefreshToken(refreshToken);

String scope = "scope";
collect.setScope(scope);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.refreshToken11Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token21_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.requestToken21Async") requestToken21Async

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```java
void requestToken21Async(
        final RequestToken21Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RequestToken21Input collect = new RequestToken21Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String code = "code";
collect.setCode(code);

String redirectUri = "redirect_uri";
collect.setRedirectUri(redirectUri);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.requestToken21Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token21_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.refreshToken21Async") refreshToken21Async

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```java
void refreshToken21Async(
        final RefreshToken21Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RefreshToken21Input collect = new RefreshToken21Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String refreshToken = "refresh_token";
collect.setRefreshToken(refreshToken);

String scope = "scope";
collect.setScope(scope);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.refreshToken21Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token11_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.requestToken11Async") requestToken11Async

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```java
void requestToken11Async(
        final RequestToken11Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RequestToken11Input collect = new RequestToken11Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String code = "code";
collect.setCode(code);

String redirectUri = "redirect_uri";
collect.setRedirectUri(redirectUri);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.requestToken11Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token11_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.refreshToken11Async") refreshToken11Async

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```java
void refreshToken11Async(
        final RefreshToken11Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RefreshToken11Input collect = new RefreshToken11Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String refreshToken = "refresh_token";
collect.setRefreshToken(refreshToken);

String scope = "scope";
collect.setScope(scope);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.refreshToken11Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token1_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.requestToken1Async") requestToken1Async

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```java
void requestToken1Async(
        final RequestToken1Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RequestToken1Input collect = new RequestToken1Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String code = "code";
collect.setCode(code);

String redirectUri = "redirect_uri";
collect.setRedirectUri(redirectUri);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.requestToken1Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token1_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.refreshToken1Async") refreshToken1Async

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```java
void refreshToken1Async(
        final RefreshToken1Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RefreshToken1Input collect = new RefreshToken1Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String refreshToken = "refresh_token";
collect.setRefreshToken(refreshToken);

String scope = "scope";
collect.setScope(scope);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.refreshToken1Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token2_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.requestToken2Async") requestToken2Async

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```java
void requestToken2Async(
        final RequestToken2Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RequestToken2Input collect = new RequestToken2Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String code = "code";
collect.setCode(code);

String redirectUri = "redirect_uri";
collect.setRedirectUri(redirectUri);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.requestToken2Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token2_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.refreshToken2Async") refreshToken2Async

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```java
void refreshToken2Async(
        final RefreshToken2Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RefreshToken2Input collect = new RefreshToken2Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String refreshToken = "refresh_token";
collect.setRefreshToken(refreshToken);

String scope = "scope";
collect.setScope(scope);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.refreshToken2Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token3_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.requestToken3Async") requestToken3Async

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```java
void requestToken3Async(
        final RequestToken3Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RequestToken3Input collect = new RequestToken3Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String code = "code";
collect.setCode(code);

String redirectUri = "redirect_uri";
collect.setRedirectUri(redirectUri);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.requestToken3Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token3_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.refreshToken3Async") refreshToken3Async

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```java
void refreshToken3Async(
        final RefreshToken3Input input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RefreshToken3Input collect = new RefreshToken3Input();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String refreshToken = "refresh_token";
collect.setRefreshToken(refreshToken);

String scope = "scope";
collect.setScope(scope);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.refreshToken3Async(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.requestTokenAsync") requestTokenAsync

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```java
void requestTokenAsync(
        final RequestTokenInput input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RequestTokenInput collect = new RequestTokenInput();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String code = "code";
collect.setCode(code);

String redirectUri = "redirect_uri";
collect.setRedirectUri(redirectUri);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.requestTokenAsync(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token_async"></a>![Method: ](https://apidocs.io/img/method.png "com.examples.www.controllers.OAuthAuthorization.refreshTokenAsync") refreshTokenAsync

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```java
void refreshTokenAsync(
        final RefreshTokenInput input,
        Map<String, Object> fieldParameters,
        final APICallBack<OAuthTokenModel> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```java
RefreshTokenInput collect = new RefreshTokenInput();

String authorization = "Authorization";
collect.setAuthorization(authorization);

String refreshToken = "refresh_token";
collect.setRefreshToken(refreshToken);

String scope = "scope";
collect.setScope(scope);

// key-value map for optional form parameters
Map<String, Object> formParams = new LinkedHashMap<String, Object>();
// Invoking the API call with sample inputs
oAuthAuthorization.refreshTokenAsync(collect, , formParams, new APICallBack<OAuthTokenModel>() {
    public void onSuccess(HttpContext context, OAuthTokenModel response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
}
);

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



[Back to List of Controllers](#list_of_controllers)



