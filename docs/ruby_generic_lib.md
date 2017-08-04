# Getting started

WSDL File for HelloService

## How to Build

This client library is a Ruby gem which can be compiled and used in your Ruby and Ruby on Rails project. This library requires a few gems from the RubyGems repository.

1. Open the command line interface or the terminal and navigate to the folder containing the source code.
2. Run ``` gem build testing_o_auth_20.gemspec ``` to build the gem.
3. Once built, the gem can be installed on the current work environment using ``` gem install testing_o_auth_20-1.0.0.gem ```

![Building Gem](https://apidocs.io/illustration/ruby?step=buildSDK&workspaceFolder=Testing%20OAuth2.0-Ruby&workspaceName=Testing%20OAuth2.0-Ruby&projectName=testing_o_auth_20&gemName=testing_o_auth_20&gemVer=1.0.0)

## How to Use

The following section explains how to use the TestingOAuth20 Ruby Gem in a new Rails project using RubyMine&trade;. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

### 1. Starting a new project

Close any existing projects in RubyMine&trade; by selecting ``` File -> Close Project ```. Next, click on ``` Create New Project ``` to create a new project from scratch.

![Create a new project in RubyMine](https://apidocs.io/illustration/ruby?step=createNewProject0&workspaceFolder=Testing%20OAuth2.0-Ruby&workspaceName=TestingOAuth20&projectName=testing_o_auth_20&gemName=testing_o_auth_20&gemVer=1.0.0)

Next, provide ``` TestApp ``` as the project name, choose ``` Rails Application ``` as the project type, and click ``` OK ```.

![Create a new Rails Application in RubyMine - step 1](https://apidocs.io/illustration/ruby?step=createNewProject1&workspaceFolder=Testing%20OAuth2.0-Ruby&workspaceName=TestingOAuth20&projectName=testing_o_auth_20&gemName=testing_o_auth_20&gemVer=1.0.0)

In the next dialog make sure that correct *Ruby SDK* is being used (minimum 2.0.0) and click ``` OK ```.

![Create a new Rails Application in RubyMine - step 2](https://apidocs.io/illustration/ruby?step=createNewProject2&workspaceFolder=Testing%20OAuth2.0-Ruby&workspaceName=TestingOAuth20&projectName=testing_o_auth_20&gemName=testing_o_auth_20&gemVer=1.0.0)

This will create a new Rails Application project with an existing set of files and folder.

### 2. Add reference of the gem

In order to use the TestingOAuth20 gem in the new project we must add a gem reference. Locate the ```Gemfile``` in the *Project Explorer* window under the ``` TestApp ``` project node. The file contains references to all gems being used in the project. Here, add the reference to the library gem by adding the following line: ``` gem 'testing_o_auth_20', '~> 1.0.0' ```

![Add references of the Gemfile](https://apidocs.io/illustration/ruby?step=addReference&workspaceFolder=Testing%20OAuth2.0-Ruby&workspaceName=TestingOAuth20&projectName=testing_o_auth_20&gemName=testing_o_auth_20&gemVer=1.0.0)

### 3. Adding a new Rails Controller

Once the ``` TestApp ``` project is created, a folder named ``` controllers ``` will be visible in the *Project Explorer* under the following path: ``` TestApp > app > controllers ```. Right click on this folder and select ``` New -> Run Rails Generator... ```.

![Run Rails Generator on Controllers Folder](https://apidocs.io/illustration/ruby?step=addCode0&workspaceFolder=Testing%20OAuth2.0-Ruby&workspaceName=TestingOAuth20&projectName=testing_o_auth_20&gemName=testing_o_auth_20&gemVer=1.0.0)

Selecting the said option will popup a small window where the generator names are displayed. Here, select the ``` controller ``` template.

![Create a new Controller](https://apidocs.io/illustration/ruby?step=addCode1&workspaceFolder=Testing%20OAuth2.0-Ruby&workspaceName=TestingOAuth20&projectName=testing_o_auth_20&gemName=testing_o_auth_20&gemVer=1.0.0)

Next, a popup window will ask you for a Controller name and included Actions. For controller name provide ``` Hello ``` and include an action named ``` Index ``` and click ``` OK ```.

![Add a new Controller](https://apidocs.io/illustration/ruby?step=addCode2&workspaceFolder=Testing%20OAuth2.0-Ruby&workspaceName=TestingOAuth20&projectName=testing_o_auth_20&gemName=testing_o_auth_20&gemVer=1.0.0)

A new controller class anmed ``` HelloController ``` will be created in a file named ``` hello_controller.rb ``` containing a method named ``` Index ```. In this method, add code for initialization and a sample for its usage.

![Initialize the library](https://apidocs.io/illustration/ruby?step=addCode3&workspaceFolder=Testing%20OAuth2.0-Ruby&workspaceName=TestingOAuth20&projectName=testing_o_auth_20&gemName=testing_o_auth_20&gemVer=1.0.0)

## How to Test

You can test the generated SDK and the server with automatically generated test
cases as follows:

  1. From terminal/cmd navigate to the root directory of the SDK.
  2. Invoke: `bundle exec rake`

## Initialization

### Authentication
In order to setup authentication and initialization of the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| o_auth_client_id | OAuth 2 Client ID |
| o_auth_client_secret | OAuth 2 Client Secret |
| o_auth_redirect_uri | OAuth 2 Redirection endpoint or Callback Uri |



API client can be initialized as following.

```ruby
# Configuration parameters and credentials
o_auth_client_id = 'o_auth_client_id' # OAuth 2 Client ID
o_auth_client_secret = 'o_auth_client_secret' # OAuth 2 Client Secret
o_auth_redirect_uri = 'o_auth_redirect_uri' # OAuth 2 Redirection endpoint or Callback Uri

client = TestingOAuth20::TestingOAuth20Client.new(
  o_auth_client_id: o_auth_client_id,
  o_auth_client_secret: o_auth_client_secret,
  o_auth_redirect_uri: o_auth_redirect_uri
)
```

The added initlization code can be debugged by putting a breakpoint in the ``` Index ``` method and running the project in debug mode by selecting ``` Run -> Debug 'Development: TestApp' ```.

![Debug the TestApp](https://apidocs.io/illustration/ruby?step=addCode4&workspaceFolder=Testing%20OAuth2.0-Ruby&workspaceName=TestingOAuth20&projectName=testing_o_auth_20&gemName=testing_o_auth_20&gemVer=1.0.0&initLine=client%2520%253D%2520TestingOAuth20Client.new%2528%2527o_auth_client_id%2527%252C%2520%2527o_auth_client_secret%2527%252C%2520%2527o_auth_redirect_uri%2527%2529)


You must now authorize the client.

### Authorizing your client

Your application must obtain user authorization before it can execute an endpoint call.
The SDK uses *OAuth 2.0 authorization* to obtain a user's consent to perform an API request on the user's behalf.

#### 1. Obtain user consent

To obtain user's consent, you must redirect the user to the authorization page. The `get_authorization_url()` method creates the URL to the authorization page. You must pass
the *[scopes](#scopes)* for which you need permission to access.
```ruby
auth_url = client.auth.get_authorization_url(scope: [TestingOAuth20::OAuthScope::NEW, TestingOAuth20::OAuthScope::NEW])
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

```ruby
begin
  client.auth.authorize('code')
rescue TestingOAuth20::OAuthProviderException => ex
  # handle exception
end
```

### Scopes

Scopes enable your application to only request access to the resources it needs while enabling users to control the amount of access they grant to your application. Available scopes are defined in the `OAuthScope` enumeration.

| Scope Name | Description |
| --- | --- |
| `NEW` |  |
| `NEW` |  |

### Refreshing token

An access token may expire after some time. To extend its lifetime, you must refresh the token.

```ruby
if client.auth.is_token_expired
  begin
    client.auth.refresh_token
  rescue TestingOAuth20::OAuthProviderException => ex
    # handle exception
  end
end
```

If a token expires, the SDK will attempt to automatically refresh the token before the next endpoint call requiring authentication.

### Storing an access token for reuse

It is recommended that you store the access token for reuse.

You can store the access token in a file or a database.

```ruby
# store token
save_token_to_database(client.config.o_auth_token)
```
 
However, since the the SDK will attempt to automatically refresh the token when it expires, it is recommended that you register a *token update callback* to detect any change to the access token.

```ruby
client.config.o_auth_callback = Proc.new { |token| save_token_to_database(token) }
```

The token update callback will be fired upon authorization as well as token refresh.

### Creating a client from a stored token

To authorize a client from a stored access token, just set the access token after creating the client:

```ruby
client = TestingOAuth20::TestingOAuth20Client.new
client.config.o_auth_token = load_token_from_database
```


# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [HelloBinding](#hello_binding)
* [OAuthAuthorization](#o_auth_authorization)

## <a name="hello_binding"></a>![Class: ](https://apidocs.io/img/class.png ".HelloBinding") HelloBinding

### Get singleton instance

The singleton instance of the ``` HelloBinding ``` class can be accessed from the API Client.

```ruby
helloBinding = client.hello_binding
```

### <a name="say_hello"></a>![Method: ](https://apidocs.io/img/method.png ".HelloBinding.say_hello") say_hello

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add a method description


```ruby
def say_hello(body); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```ruby
body = SayHelloRequestModel.new

result = helloBinding.say_hello(body)

```


[Back to List of Controllers](#list_of_controllers)

## <a name="o_auth_authorization"></a>![Class: ](https://apidocs.io/img/class.png ".OAuthAuthorization") OAuthAuthorization

### Get singleton instance

The singleton instance of the ``` OAuthAuthorization ``` class can be accessed from the API Client.

```ruby
oAuthAuthorization = client.o_auth_authorization
```

### <a name="request_token"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.request_token") request_token

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```ruby
def request_token(options = Hash.new,
                      _field_parameters = nil); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirect_uri |  ``` Required ```  | Redirect Uri |
| _field_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```ruby
collect = Hash.new

authorization = 'Authorization'
collect['authorization'] = authorization

code = 'code'
collect['code'] = code

redirect_uri = 'redirect_uri'
collect['redirect_uri'] = redirect_uri

# key-value map for optional form parameters
formParams = { 'key' => 'value' }

result = oAuthAuthorization.request_token(collect, formParams, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.refresh_token") refresh_token

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```ruby
def refresh_token(options = Hash.new,
                      _field_parameters = nil); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refresh_token |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| _field_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```ruby
collect = Hash.new

authorization = 'Authorization'
collect['authorization'] = authorization

refresh_token = 'refresh_token'
collect['refresh_token'] = refresh_token

scope = 'scope'
collect['scope'] = scope

# key-value map for optional form parameters
formParams = { 'key' => 'value' }

result = oAuthAuthorization.refresh_token(collect, formParams, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token_1"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.request_token_1") request_token_1

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```ruby
def request_token_1(options = Hash.new,
                        _field_parameters = nil); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirect_uri |  ``` Required ```  | Redirect Uri |
| _field_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```ruby
collect = Hash.new

authorization = 'Authorization'
collect['authorization'] = authorization

code = 'code'
collect['code'] = code

redirect_uri = 'redirect_uri'
collect['redirect_uri'] = redirect_uri

# key-value map for optional form parameters
formParams = { 'key' => 'value' }

result = oAuthAuthorization.request_token_1(collect, formParams, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token_1"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.refresh_token_1") refresh_token_1

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```ruby
def refresh_token_1(options = Hash.new,
                        _field_parameters = nil); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refresh_token |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| _field_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```ruby
collect = Hash.new

authorization = 'Authorization'
collect['authorization'] = authorization

refresh_token = 'refresh_token'
collect['refresh_token'] = refresh_token

scope = 'scope'
collect['scope'] = scope

# key-value map for optional form parameters
formParams = { 'key' => 'value' }

result = oAuthAuthorization.refresh_token_1(collect, formParams, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token_2"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.request_token_2") request_token_2

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```ruby
def request_token_2(options = Hash.new,
                        _field_parameters = nil); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirect_uri |  ``` Required ```  | Redirect Uri |
| _field_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```ruby
collect = Hash.new

authorization = 'Authorization'
collect['authorization'] = authorization

code = 'code'
collect['code'] = code

redirect_uri = 'redirect_uri'
collect['redirect_uri'] = redirect_uri

# key-value map for optional form parameters
formParams = { 'key' => 'value' }

result = oAuthAuthorization.request_token_2(collect, formParams, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token_2"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.refresh_token_2") refresh_token_2

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```ruby
def refresh_token_2(options = Hash.new,
                        _field_parameters = nil); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refresh_token |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| _field_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```ruby
collect = Hash.new

authorization = 'Authorization'
collect['authorization'] = authorization

refresh_token = 'refresh_token'
collect['refresh_token'] = refresh_token

scope = 'scope'
collect['scope'] = scope

# key-value map for optional form parameters
formParams = { 'key' => 'value' }

result = oAuthAuthorization.refresh_token_2(collect, formParams, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token_1"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.request_token_1") request_token_1

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```ruby
def request_token_1(options = Hash.new,
                        _field_parameters = nil); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirect_uri |  ``` Required ```  | Redirect Uri |
| _field_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```ruby
collect = Hash.new

authorization = 'Authorization'
collect['authorization'] = authorization

code = 'code'
collect['code'] = code

redirect_uri = 'redirect_uri'
collect['redirect_uri'] = redirect_uri

# key-value map for optional form parameters
formParams = { 'key' => 'value' }

result = oAuthAuthorization.request_token_1(collect, formParams, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token_1"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.refresh_token_1") refresh_token_1

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```ruby
def refresh_token_1(options = Hash.new,
                        _field_parameters = nil); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refresh_token |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| _field_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```ruby
collect = Hash.new

authorization = 'Authorization'
collect['authorization'] = authorization

refresh_token = 'refresh_token'
collect['refresh_token'] = refresh_token

scope = 'scope'
collect['scope'] = scope

# key-value map for optional form parameters
formParams = { 'key' => 'value' }

result = oAuthAuthorization.refresh_token_1(collect, formParams, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="request_token_2"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.request_token_2") request_token_2

> *Tags:*  ``` Skips Authentication ``` 

> Create a new OAuth 2 token.


```ruby
def request_token_2(options = Hash.new,
                        _field_parameters = nil); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| code |  ``` Required ```  | Authorization Code |
| redirect_uri |  ``` Required ```  | Redirect Uri |
| _field_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```ruby
collect = Hash.new

authorization = 'Authorization'
collect['authorization'] = authorization

code = 'code'
collect['code'] = code

redirect_uri = 'redirect_uri'
collect['redirect_uri'] = redirect_uri

# key-value map for optional form parameters
formParams = { 'key' => 'value' }

result = oAuthAuthorization.request_token_2(collect, formParams, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



### <a name="refresh_token_2"></a>![Method: ](https://apidocs.io/img/method.png ".OAuthAuthorization.refresh_token_2") refresh_token_2

> *Tags:*  ``` Skips Authentication ``` 

> Obtain a new access token using a refresh token


```ruby
def refresh_token_2(options = Hash.new,
                        _field_parameters = nil); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| authorization |  ``` Required ```  | Authorization header in Basic auth format |
| refresh_token |  ``` Required ```  | Refresh token |
| scope |  ``` Optional ```  | Requested scopes as a space-delimited list. |
| _field_parameters | ``` Optional ``` | Additional optional form parameters are supported by this method |


#### Example Usage

```ruby
collect = Hash.new

authorization = 'Authorization'
collect['authorization'] = authorization

refresh_token = 'refresh_token'
collect['refresh_token'] = refresh_token

scope = 'scope'
collect['scope'] = scope

# key-value map for optional form parameters
formParams = { 'key' => 'value' }

result = oAuthAuthorization.refresh_token_2(collect, formParams, )

```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | OAuth 2 provider returned an error. |
| 401 | OAuth 2 provider says client authentication failed. |



[Back to List of Controllers](#list_of_controllers)



