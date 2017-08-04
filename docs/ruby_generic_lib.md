# Getting started

## How to Build

This client library is a Ruby gem which can be compiled and used in your Ruby and Ruby on Rails project. This library requires a few gems from the RubyGems repository.

1. Open the command line interface or the terminal and navigate to the folder containing the source code.
2. Run ``` gem build global_weather.gemspec ``` to build the gem.
3. Once built, the gem can be installed on the current work environment using ``` gem install global_weather-1.0.0.gem ```

![Building Gem](https://apidocs.io/illustration/ruby?step=buildSDK&workspaceFolder=GlobalWeather-Ruby&workspaceName=GlobalWeather-Ruby&projectName=global_weather&gemName=global_weather&gemVer=1.0.0)

## How to Use

The following section explains how to use the GlobalWeather Ruby Gem in a new Rails project using RubyMine&trade;. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

### 1. Starting a new project

Close any existing projects in RubyMine&trade; by selecting ``` File -> Close Project ```. Next, click on ``` Create New Project ``` to create a new project from scratch.

![Create a new project in RubyMine](https://apidocs.io/illustration/ruby?step=createNewProject0&workspaceFolder=GlobalWeather-Ruby&workspaceName=GlobalWeather&projectName=global_weather&gemName=global_weather&gemVer=1.0.0)

Next, provide ``` TestApp ``` as the project name, choose ``` Rails Application ``` as the project type, and click ``` OK ```.

![Create a new Rails Application in RubyMine - step 1](https://apidocs.io/illustration/ruby?step=createNewProject1&workspaceFolder=GlobalWeather-Ruby&workspaceName=GlobalWeather&projectName=global_weather&gemName=global_weather&gemVer=1.0.0)

In the next dialog make sure that correct *Ruby SDK* is being used (minimum 2.0.0) and click ``` OK ```.

![Create a new Rails Application in RubyMine - step 2](https://apidocs.io/illustration/ruby?step=createNewProject2&workspaceFolder=GlobalWeather-Ruby&workspaceName=GlobalWeather&projectName=global_weather&gemName=global_weather&gemVer=1.0.0)

This will create a new Rails Application project with an existing set of files and folder.

### 2. Add reference of the gem

In order to use the GlobalWeather gem in the new project we must add a gem reference. Locate the ```Gemfile``` in the *Project Explorer* window under the ``` TestApp ``` project node. The file contains references to all gems being used in the project. Here, add the reference to the library gem by adding the following line: ``` gem 'global_weather', '~> 1.0.0' ```

![Add references of the Gemfile](https://apidocs.io/illustration/ruby?step=addReference&workspaceFolder=GlobalWeather-Ruby&workspaceName=GlobalWeather&projectName=global_weather&gemName=global_weather&gemVer=1.0.0)

### 3. Adding a new Rails Controller

Once the ``` TestApp ``` project is created, a folder named ``` controllers ``` will be visible in the *Project Explorer* under the following path: ``` TestApp > app > controllers ```. Right click on this folder and select ``` New -> Run Rails Generator... ```.

![Run Rails Generator on Controllers Folder](https://apidocs.io/illustration/ruby?step=addCode0&workspaceFolder=GlobalWeather-Ruby&workspaceName=GlobalWeather&projectName=global_weather&gemName=global_weather&gemVer=1.0.0)

Selecting the said option will popup a small window where the generator names are displayed. Here, select the ``` controller ``` template.

![Create a new Controller](https://apidocs.io/illustration/ruby?step=addCode1&workspaceFolder=GlobalWeather-Ruby&workspaceName=GlobalWeather&projectName=global_weather&gemName=global_weather&gemVer=1.0.0)

Next, a popup window will ask you for a Controller name and included Actions. For controller name provide ``` Hello ``` and include an action named ``` Index ``` and click ``` OK ```.

![Add a new Controller](https://apidocs.io/illustration/ruby?step=addCode2&workspaceFolder=GlobalWeather-Ruby&workspaceName=GlobalWeather&projectName=global_weather&gemName=global_weather&gemVer=1.0.0)

A new controller class anmed ``` HelloController ``` will be created in a file named ``` hello_controller.rb ``` containing a method named ``` Index ```. In this method, add code for initialization and a sample for its usage.

![Initialize the library](https://apidocs.io/illustration/ruby?step=addCode3&workspaceFolder=GlobalWeather-Ruby&workspaceName=GlobalWeather&projectName=global_weather&gemName=global_weather&gemVer=1.0.0)

## How to Test

You can test the generated SDK and the server with automatically generated test
cases as follows:

  1. From terminal/cmd navigate to the root directory of the SDK.
  2. Invoke: `bundle exec rake`

## Initialization

### 

API client can be initialized as following.

```ruby

client = GlobalWeather::GlobalWeatherClient.new
```

The added initlization code can be debugged by putting a breakpoint in the ``` Index ``` method and running the project in debug mode by selecting ``` Run -> Debug 'Development: TestApp' ```.

![Debug the TestApp](https://apidocs.io/illustration/ruby?step=addCode4&workspaceFolder=GlobalWeather-Ruby&workspaceName=GlobalWeather&projectName=global_weather&gemName=global_weather&gemVer=1.0.0&initLine=client%2520%253D%2520GlobalWeatherClient.new)



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [GlobalWeatherSoapController](#global_weather_soap_controller)
* [GlobalWeatherSoap12Controller](#global_weather_soap12_controller)
* [GlobalWeatherHttpGetController](#global_weather_http_get_controller)
* [GlobalWeatherHttpPostController](#global_weather_http_post_controller)

## <a name="global_weather_soap_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GlobalWeatherSoapController") GlobalWeatherSoapController

### Get singleton instance

The singleton instance of the ``` GlobalWeatherSoapController ``` class can be accessed from the API Client.

```ruby
globalWeatherSoap = client.global_weather_soap
```

### <a name="create_get_weather"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherSoapController.create_get_weather") create_get_weather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```ruby
def create_get_weather(body); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```ruby
body = GetWeatherSoapIn.new

result = globalWeatherSoap.create_get_weather(body)

```


### <a name="create_get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherSoapController.create_get_cities_by_country") create_get_cities_by_country

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```ruby
def create_get_cities_by_country(body); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```ruby
body = GetCitiesByCountrySoapIn.new

result = globalWeatherSoap.create_get_cities_by_country(body)

```


[Back to List of Controllers](#list_of_controllers)

## <a name="global_weather_soap12_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GlobalWeatherSoap12Controller") GlobalWeatherSoap12Controller

### Get singleton instance

The singleton instance of the ``` GlobalWeatherSoap12Controller ``` class can be accessed from the API Client.

```ruby
globalWeatherSoap12 = client.global_weather_soap_12
```

### <a name="create_get_weather"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherSoap12Controller.create_get_weather") create_get_weather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```ruby
def create_get_weather(body); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```ruby
body = GetWeatherSoapIn.new

result = globalWeatherSoap12.create_get_weather(body)

```


### <a name="create_get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherSoap12Controller.create_get_cities_by_country") create_get_cities_by_country

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```ruby
def create_get_cities_by_country(body); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```ruby
body = GetCitiesByCountrySoapIn.new

result = globalWeatherSoap12.create_get_cities_by_country(body)

```


[Back to List of Controllers](#list_of_controllers)

## <a name="global_weather_http_get_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GlobalWeatherHttpGetController") GlobalWeatherHttpGetController

### Get singleton instance

The singleton instance of the ``` GlobalWeatherHttpGetController ``` class can be accessed from the API Client.

```ruby
globalWeatherHttpGet = client.global_weather_http_get
```

### <a name="get_weather"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherHttpGetController.get_weather") get_weather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```ruby
def get_weather(city_name,
                    country_name); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| city_name |  ``` Required ```  | TODO: Add a parameter description |
| country_name |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```ruby
city_name = 'CityName'
country_name = 'CountryName'

result = globalWeatherHttpGet.get_weather(city_name, country_name)

```


### <a name="get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherHttpGetController.get_cities_by_country") get_cities_by_country

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```ruby
def get_cities_by_country(country_name); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| country_name |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```ruby
country_name = 'CountryName'

result = globalWeatherHttpGet.get_cities_by_country(country_name)

```


[Back to List of Controllers](#list_of_controllers)

## <a name="global_weather_http_post_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GlobalWeatherHttpPostController") GlobalWeatherHttpPostController

### Get singleton instance

The singleton instance of the ``` GlobalWeatherHttpPostController ``` class can be accessed from the API Client.

```ruby
globalWeatherHttpPost = client.global_weather_http_post
```

### <a name="create_get_weather"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherHttpPostController.create_get_weather") create_get_weather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```ruby
def create_get_weather(city_name,
                           country_name); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| city_name |  ``` Required ```  | TODO: Add a parameter description |
| country_name |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```ruby
city_name = 'CityName'
country_name = 'CountryName'

result = globalWeatherHttpPost.create_get_weather(city_name, country_name)

```


### <a name="create_get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherHttpPostController.create_get_cities_by_country") create_get_cities_by_country

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```ruby
def create_get_cities_by_country(country_name); end
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| country_name |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```ruby
country_name = 'CountryName'

result = globalWeatherHttpPost.create_get_cities_by_country(country_name)

```


[Back to List of Controllers](#list_of_controllers)



