# Getting started

## How to Build


The generated code has dependencies over external libraries like UniRest. These dependencies are defined in the ```PodFile``` file that comes with the SDK. 
To resolve these dependencies, we use the Cocoapods package manager.
Visit https://guides.cocoapods.org/using/getting-started.html to setup Cocoapods on your system.
Open command prompt and type ```pod --version```. This should display the current version of Cocoapods installed if the installation was successful.

Using command line, navigate to the directory containing the generated files (including ```PodFile```) for the SDK. 
Run the command ```pod install```. This should install all the required dependencies and create the ```pods``` directory in your project directory.

![Installing dependencies using Cocoapods](https://apidocs.io/illustration/objc?step=AddDependencies&workspaceFolder=GlobalWeather-ObjC&workspaceName=GlobalWeather&projectName=GlobalWeather&rootNamespace=GlobalWeather)

Open the project workspace using the (GlobalWeather.xcworkspace) file. Invoke the build process using `Command(⌘)+B` shortcut key or using the `Build` menu as shown below.

![Building SDK using Xcode](https://apidocs.io/illustration/objc?step=BuildSDK&workspaceFolder=GlobalWeather-ObjC&workspaceName=GlobalWeather&projectName=GlobalWeather&rootNamespace=GlobalWeather)


## How to Use

The generated code is a Cocoa Touch Static Library which can be used in any iOS project. The support for these generated libraries go all the way back to iOS 6.

The following section explains how to use the GlobalWeather library in a new iOS project.     
### 1. Starting a new project
To start a new project, left-click on the ```Create a new Xcode project```.
![Create Test Project - Step 1](https://apidocs.io/illustration/objc?step=Test1&workspaceFolder=GlobalWeather-ObjC&workspaceName=GlobalWeather&projectName=GlobalWeather&rootNamespace=GlobalWeather)

Next, choose **Single View Application** and click ```Next```.
![Create Test Project - Step 2](https://apidocs.io/illustration/objc?step=Test2&workspaceFolder=GlobalWeather-ObjC&workspaceName=GlobalWeather&projectName=GlobalWeather&rootNamespace=GlobalWeather)

Provide **Test-Project** as the product name click ```Next```.
![Create Test Project - Step 3](https://apidocs.io/illustration/objc?step=Test3&workspaceFolder=GlobalWeather-ObjC&workspaceName=GlobalWeather&projectName=GlobalWeather&rootNamespace=GlobalWeather)

Choose the desired location of your project folder and click ```Create```.
![Create Test Project - Step 4](https://apidocs.io/illustration/objc?step=Test4&workspaceFolder=GlobalWeather-ObjC&workspaceName=GlobalWeather&projectName=GlobalWeather&rootNamespace=GlobalWeather)

### 2. Adding the static library dependency
To add this dependency open a terminal and navigate to your project folder. Next, input ```pod init``` and press enter.
![Add dependency - Step 1](https://apidocs.io/illustration/objc?step=Add0&workspaceFolder=GlobalWeather-ObjC&workspaceName=GlobalWeather&projectName=GlobalWeather&rootNamespace=GlobalWeather)

Next, open the newly created ```PodFile``` in your favourite text editor. Add the following line : pod 'GlobalWeather', :path => 'Vendor/GlobalWeather'
![Add dependency - Step 2](https://apidocs.io/illustration/objc?step=Add1&workspaceFolder=GlobalWeather-ObjC&workspaceName=GlobalWeather&projectName=GlobalWeather&rootNamespace=GlobalWeather)

Execute `pod install` from terminal to install the dependecy in your project. This would add the dependency to the newly created test project.
![Add dependency - Step 3](https://apidocs.io/illustration/objc?step=Add2&workspaceFolder=GlobalWeather-ObjC&workspaceName=GlobalWeather&projectName=GlobalWeather&rootNamespace=GlobalWeather)


## How to Test

Unit tests in this SDK can be run using Xcode. 

First build the SDK as shown in the steps above and naivgate to the project directory and open the GlobalWeather.xcworkspace file.

Go to the test explorer in Xcode as shown in the picture below and click on `run tests` from the menu. 
![Run tests](https://apidocs.io/illustration/objc?step=RunTests&workspaceFolder=GlobalWeather-ObjC&workspaceName=GlobalWeather&projectName=GlobalWeather&rootNamespace=GlobalWeather)


## Initialization

### 

Configuration variables can be set as following.
```Objc

```

# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [GlobalWeatherSoapController](#global_weather_soap_controller)
* [GlobalWeatherSoap12Controller](#global_weather_soap12_controller)
* [GlobalWeatherHttpGetController](#global_weather_http_get_controller)
* [GlobalWeatherHttpPostController](#global_weather_http_post_controller)

## <a name="global_weather_soap_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GlobalWeatherSoapController") GlobalWeatherSoapController

### Get singleton instance
```objc
GlobalWeatherSoap* globalWeatherSoap = [[GlobalWeatherSoap alloc]init] ;
```

### <a name="create_get_weather_async_with_body"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherSoapController.createGetWeatherAsyncWithBody") createGetWeatherAsyncWithBody

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```objc
function createGetWeatherAsyncWithBody:(GetWeatherSoapIn*) body
                completionBlock:(CompletedPostGetWeather) onCompleted(body)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |





#### Example Usage

```objc
    // Parameters for the API call
    GetWeatherSoapIn* body = [[GetWeatherSoapIn alloc]init];

    [self.globalWeatherSoap createGetWeatherAsyncWithBody: body  completionBlock:^(BOOL success, HttpContext* context, GetWeatherSoapOut* response, NSError* error) { 
       //Add code here
    }];
```


### <a name="create_get_cities_by_country_async_with_body"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherSoapController.createGetCitiesByCountryAsyncWithBody") createGetCitiesByCountryAsyncWithBody

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```objc
function createGetCitiesByCountryAsyncWithBody:(GetCitiesByCountrySoapIn*) body
                completionBlock:(CompletedPostGetCitiesByCountry) onCompleted(body)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |





#### Example Usage

```objc
    // Parameters for the API call
    GetCitiesByCountrySoapIn* body = [[GetCitiesByCountrySoapIn alloc]init];

    [self.globalWeatherSoap createGetCitiesByCountryAsyncWithBody: body  completionBlock:^(BOOL success, HttpContext* context, GetCitiesByCountrySoapOut* response, NSError* error) { 
       //Add code here
    }];
```


[Back to List of Controllers](#list_of_controllers)

## <a name="global_weather_soap12_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GlobalWeatherSoap12Controller") GlobalWeatherSoap12Controller

### Get singleton instance
```objc
GlobalWeatherSoap12* globalWeatherSoap12 = [[GlobalWeatherSoap12 alloc]init] ;
```

### <a name="create_get_weather_async_with_body"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherSoap12Controller.createGetWeatherAsyncWithBody") createGetWeatherAsyncWithBody

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```objc
function createGetWeatherAsyncWithBody:(GetWeatherSoapIn*) body
                completionBlock:(CompletedPostGetWeather) onCompleted(body)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |





#### Example Usage

```objc
    // Parameters for the API call
    GetWeatherSoapIn* body = [[GetWeatherSoapIn alloc]init];

    [self.globalWeatherSoap12 createGetWeatherAsyncWithBody: body  completionBlock:^(BOOL success, HttpContext* context, GetWeatherSoapOut* response, NSError* error) { 
       //Add code here
    }];
```


### <a name="create_get_cities_by_country_async_with_body"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherSoap12Controller.createGetCitiesByCountryAsyncWithBody") createGetCitiesByCountryAsyncWithBody

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```objc
function createGetCitiesByCountryAsyncWithBody:(GetCitiesByCountrySoapIn*) body
                completionBlock:(CompletedPostGetCitiesByCountry) onCompleted(body)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |





#### Example Usage

```objc
    // Parameters for the API call
    GetCitiesByCountrySoapIn* body = [[GetCitiesByCountrySoapIn alloc]init];

    [self.globalWeatherSoap12 createGetCitiesByCountryAsyncWithBody: body  completionBlock:^(BOOL success, HttpContext* context, GetCitiesByCountrySoapOut* response, NSError* error) { 
       //Add code here
    }];
```


[Back to List of Controllers](#list_of_controllers)

## <a name="global_weather_http_get_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GlobalWeatherHttpGetController") GlobalWeatherHttpGetController

### Get singleton instance
```objc
GlobalWeatherHttpGet* globalWeatherHttpGet = [[GlobalWeatherHttpGet alloc]init] ;
```

### <a name="get_weather_async_with_city_name"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherHttpGetController.getWeatherAsyncWithCityName") getWeatherAsyncWithCityName

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```objc
function getWeatherAsyncWithCityName:(NSString*) cityName
                countryName:(NSString*) countryName
                completionBlock:(CompletedGetWeather) onCompleted(cityName countryName : countryName)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cityName |  ``` Required ```  | TODO: Add a parameter description |
| countryName |  ``` Required ```  | TODO: Add a parameter description |





#### Example Usage

```objc
    // Parameters for the API call
    NSString* cityName = @"CityName";
    NSString* countryName = @"CountryName";

    [self.globalWeatherHttpGet getWeatherAsyncWithCityName: cityName countryName : countryName  completionBlock:^(BOOL success, HttpContext* context, GetWeatherHttpGetOut* response, NSError* error) { 
       //Add code here
    }];
```


### <a name="get_cities_by_country_async_with_country_name"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherHttpGetController.getCitiesByCountryAsyncWithCountryName") getCitiesByCountryAsyncWithCountryName

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```objc
function getCitiesByCountryAsyncWithCountryName:(NSString*) countryName
                completionBlock:(CompletedGetCitiesByCountry) onCompleted(countryName)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| countryName |  ``` Required ```  | TODO: Add a parameter description |





#### Example Usage

```objc
    // Parameters for the API call
    NSString* countryName = @"CountryName";

    [self.globalWeatherHttpGet getCitiesByCountryAsyncWithCountryName: countryName  completionBlock:^(BOOL success, HttpContext* context, GetCitiesByCountryHttpGetOut* response, NSError* error) { 
       //Add code here
    }];
```


[Back to List of Controllers](#list_of_controllers)

## <a name="global_weather_http_post_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GlobalWeatherHttpPostController") GlobalWeatherHttpPostController

### Get singleton instance
```objc
GlobalWeatherHttpPost* globalWeatherHttpPost = [[GlobalWeatherHttpPost alloc]init] ;
```

### <a name="create_get_weather_async_with_city_name"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherHttpPostController.createGetWeatherAsyncWithCityName") createGetWeatherAsyncWithCityName

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```objc
function createGetWeatherAsyncWithCityName:(NSString*) cityName
                countryName:(NSString*) countryName
                completionBlock:(CompletedPostGetWeather) onCompleted(cityName countryName : countryName)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cityName |  ``` Required ```  | TODO: Add a parameter description |
| countryName |  ``` Required ```  | TODO: Add a parameter description |





#### Example Usage

```objc
    // Parameters for the API call
    NSString* cityName = @"CityName";
    NSString* countryName = @"CountryName";

    [self.globalWeatherHttpPost createGetWeatherAsyncWithCityName: cityName countryName : countryName  completionBlock:^(BOOL success, HttpContext* context, GetWeatherHttpPostOut* response, NSError* error) { 
       //Add code here
    }];
```


### <a name="create_get_cities_by_country_async_with_country_name"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherHttpPostController.createGetCitiesByCountryAsyncWithCountryName") createGetCitiesByCountryAsyncWithCountryName

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```objc
function createGetCitiesByCountryAsyncWithCountryName:(NSString*) countryName
                completionBlock:(CompletedPostGetCitiesByCountry) onCompleted(countryName)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| countryName |  ``` Required ```  | TODO: Add a parameter description |





#### Example Usage

```objc
    // Parameters for the API call
    NSString* countryName = @"CountryName";

    [self.globalWeatherHttpPost createGetCitiesByCountryAsyncWithCountryName: countryName  completionBlock:^(BOOL success, HttpContext* context, GetCitiesByCountryHttpPostOut* response, NSError* error) { 
       //Add code here
    }];
```


[Back to List of Controllers](#list_of_controllers)



