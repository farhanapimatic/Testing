# Getting started

WSDL File for HelloService

## How to Build


The generated code has dependencies over external libraries like UniRest. These dependencies are defined in the ```PodFile``` file that comes with the SDK. 
To resolve these dependencies, we use the Cocoapods package manager.
Visit https://guides.cocoapods.org/using/getting-started.html to setup Cocoapods on your system.
Open command prompt and type ```pod --version```. This should display the current version of Cocoapods installed if the installation was successful.

Using command line, navigate to the directory containing the generated files (including ```PodFile```) for the SDK. 
Run the command ```pod install```. This should install all the required dependencies and create the ```pods``` directory in your project directory.

![Installing dependencies using Cocoapods](https://apidocs.io/illustration/objc?step=AddDependencies&workspaceFolder=Testing%20OAuth2.0-ObjC&workspaceName=TestingOAuth20&projectName=TestingOAuth20&rootNamespace=TestingOAuth20)

Open the project workspace using the (TestingOAuth20.xcworkspace) file. Invoke the build process using `Command(⌘)+B` shortcut key or using the `Build` menu as shown below.

![Building SDK using Xcode](https://apidocs.io/illustration/objc?step=BuildSDK&workspaceFolder=Testing%20OAuth2.0-ObjC&workspaceName=TestingOAuth20&projectName=TestingOAuth20&rootNamespace=TestingOAuth20)


## How to Use

The generated code is a Cocoa Touch Static Library which can be used in any iOS project. The support for these generated libraries go all the way back to iOS 6.

The following section explains how to use the TestingOAuth20 library in a new iOS project.     
### 1. Starting a new project
To start a new project, left-click on the ```Create a new Xcode project```.
![Create Test Project - Step 1](https://apidocs.io/illustration/objc?step=Test1&workspaceFolder=Testing%20OAuth2.0-ObjC&workspaceName=TestingOAuth20&projectName=TestingOAuth20&rootNamespace=TestingOAuth20)

Next, choose **Single View Application** and click ```Next```.
![Create Test Project - Step 2](https://apidocs.io/illustration/objc?step=Test2&workspaceFolder=Testing%20OAuth2.0-ObjC&workspaceName=TestingOAuth20&projectName=TestingOAuth20&rootNamespace=TestingOAuth20)

Provide **Test-Project** as the product name click ```Next```.
![Create Test Project - Step 3](https://apidocs.io/illustration/objc?step=Test3&workspaceFolder=Testing%20OAuth2.0-ObjC&workspaceName=TestingOAuth20&projectName=TestingOAuth20&rootNamespace=TestingOAuth20)

Choose the desired location of your project folder and click ```Create```.
![Create Test Project - Step 4](https://apidocs.io/illustration/objc?step=Test4&workspaceFolder=Testing%20OAuth2.0-ObjC&workspaceName=TestingOAuth20&projectName=TestingOAuth20&rootNamespace=TestingOAuth20)

### 2. Adding the static library dependency
To add this dependency open a terminal and navigate to your project folder. Next, input ```pod init``` and press enter.
![Add dependency - Step 1](https://apidocs.io/illustration/objc?step=Add0&workspaceFolder=Testing%20OAuth2.0-ObjC&workspaceName=TestingOAuth20&projectName=TestingOAuth20&rootNamespace=TestingOAuth20)

Next, open the newly created ```PodFile``` in your favourite text editor. Add the following line : pod 'TestingOAuth20', :path => 'Vendor/TestingOAuth20'
![Add dependency - Step 2](https://apidocs.io/illustration/objc?step=Add1&workspaceFolder=Testing%20OAuth2.0-ObjC&workspaceName=TestingOAuth20&projectName=TestingOAuth20&rootNamespace=TestingOAuth20)

Execute `pod install` from terminal to install the dependecy in your project. This would add the dependency to the newly created test project.
![Add dependency - Step 3](https://apidocs.io/illustration/objc?step=Add2&workspaceFolder=Testing%20OAuth2.0-ObjC&workspaceName=TestingOAuth20&projectName=TestingOAuth20&rootNamespace=TestingOAuth20)


## How to Test

Unit tests in this SDK can be run using Xcode. 

First build the SDK as shown in the steps above and naivgate to the project directory and open the TestingOAuth20.xcworkspace file.

Go to the test explorer in Xcode as shown in the picture below and click on `run tests` from the menu. 
![Run tests](https://apidocs.io/illustration/objc?step=RunTests&workspaceFolder=Testing%20OAuth2.0-ObjC&workspaceName=TestingOAuth20&projectName=TestingOAuth20&rootNamespace=TestingOAuth20)


## Initialization

### Authentication
In order to setup authentication and initialization of the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthClientId | OAuth 2 Client ID |
| oAuthClientSecret | OAuth 2 Client Secret |
| oAuthRedirectUri | OAuth 2 Redirection endpoint or Callback Uri |



Configuration variables can be set as following.
```Objc
// Configuration parameters and credentials
Configuration_OAuthClientId = "Configuration_OAuthClientId"; // OAuth 2 Client ID
Configuration_OAuthClientSecret = "Configuration_OAuthClientSecret"; // OAuth 2 Client Secret
Configuration_OAuthRedirectUri = "Configuration_OAuthRedirectUri"; // OAuth 2 Redirection endpoint or Callback Uri

```

# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [HelloBinding](#hello_binding)
* [OAuthAuthorization](#o_auth_authorization)

## <a name="hello_binding"></a>![Class: ](https://apidocs.io/img/class.png ".HelloBinding") HelloBinding

### Get singleton instance
```objc
HelloBinding* helloBinding = [[HelloBinding alloc]init] ;
```

### <a name="say_hello_async_with_body"></a>![Method: ](https://apidocs.io/img/method.png ".HelloBinding.sayHelloAsyncWithBody") sayHelloAsyncWithBody

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```objc
function sayHelloAsyncWithBody:(SayHelloRequestModel*) body
                completionBlock:(CompletedPostSayHello) onCompleted(body)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |





#### Example Usage

```objc
    // Parameters for the API call
    SayHelloRequestModel* body = [[SayHelloRequestModel alloc]init];

    [self.helloBinding sayHelloAsyncWithBody: body  completionBlock:^(BOOL success, HttpContext* context, SayHelloResponseModel* response, NSError* error) { 
       //Add code here
    }];
```


[Back to List of Controllers](#list_of_controllers)

## <a name="o_auth_authorization"></a>![Class: ](https://apidocs.io/img/class.png ".OAuthAuthorization") OAuthAuthorization

### Get singleton instance
```objc
OAuthAuthorization* oAuthAuthorization = [[OAuthAuthorization alloc]init] ;
```

### <a name="request_token_async_with_request_token_input"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.requestTokenAsyncWithRequestTokenInput") requestTokenAsyncWithRequestTokenInput

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```objc
function requestTokenAsyncWithRequestTokenInput:(RequestTokenInput*) input
                fieldParameters:(NSDictionary*) fieldParameters
                completionBlock:(CompletedPostRequestToken) onCompleted(input formParameters : formParams)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirectUri |  ``` Required ```  | Redirect Uri |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |





#### Example Usage

```objc
    // Parameters for the API call
    RequestTokenInput *input = [[RequestTokenInput alloc]init];
    input.authorization = @"Authorization";
    input.code = @"code";
    input.redirectUri = @"redirect_uri";
    // Dictionary for optional form parameters
    NSMutableDictionary* formParamsMutable = [[NSMutableDictionary alloc] init];
    NSDictionary *formParams= [formParamsMutable copy];

    [self.oAuthAuthorization requestTokenAsyncWithRequestTokenInput: input formParameters : formParams  completionBlock:^(BOOL success, HttpContext* context, OAuthTokenModel* response, NSError* error) { 
       //Add code here
    }];
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token_async_with_refresh_token_input"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.refreshTokenAsyncWithRefreshTokenInput") refreshTokenAsyncWithRefreshTokenInput

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```objc
function refreshTokenAsyncWithRefreshTokenInput:(RefreshTokenInput*) input
                fieldParameters:(NSDictionary*) fieldParameters
                completionBlock:(CompletedPostRefreshToken) onCompleted(input formParameters : formParams)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refreshToken |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| fieldParameters | ``` Optional ``` | Additional optional form parameters are supported by this method |





#### Example Usage

```objc
    // Parameters for the API call
    RefreshTokenInput *input = [[RefreshTokenInput alloc]init];
    input.authorization = @"Authorization";
    input.refreshToken = @"refresh_token";
    input.scope = @"scope";
    // Dictionary for optional form parameters
    NSMutableDictionary* formParamsMutable = [[NSMutableDictionary alloc] init];
    NSDictionary *formParams= [formParamsMutable copy];

    [self.oAuthAuthorization refreshTokenAsyncWithRefreshTokenInput: input formParameters : formParams  completionBlock:^(BOOL success, HttpContext* context, OAuthTokenModel* response, NSError* error) { 
       //Add code here
    }];
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



[Back to List of Controllers](#list_of_controllers)



