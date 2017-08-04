# Getting started

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=GlobalWeather-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=GlobalWeather-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `GlobalWeatherLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=GlobalWeather-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=GlobalWeather-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=GlobalWeather-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=GlobalWeather-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  GlobalWeatherController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=GlobalWeatherController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [GlobalWeatherSoapController](#global_weather_soap_controller)
* [GlobalWeatherSoap12Controller](#global_weather_soap12_controller)
* [GlobalWeatherHttpGetController](#global_weather_http_get_controller)
* [GlobalWeatherHttpPostController](#global_weather_http_post_controller)

## <a name="global_weather_soap_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GlobalWeatherSoapController") GlobalWeatherSoapController

### Get singleton instance

The singleton instance of the ``` GlobalWeatherSoapController ``` class can be accessed from the API Client.

```javascript
var controller = lib.GlobalWeatherSoapController;
```

### <a name="create_get_weather"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherSoapController.createGetWeather") createGetWeather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```javascript
function createGetWeather(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new GetWeatherSoapIn({"key":"value"});

    controller.createGetWeather(body, function(error, response, context) {

    
    });
```



### <a name="create_get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherSoapController.createGetCitiesByCountry") createGetCitiesByCountry

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```javascript
function createGetCitiesByCountry(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new GetCitiesByCountrySoapIn({"key":"value"});

    controller.createGetCitiesByCountry(body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="global_weather_soap12_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GlobalWeatherSoap12Controller") GlobalWeatherSoap12Controller

### Get singleton instance

The singleton instance of the ``` GlobalWeatherSoap12Controller ``` class can be accessed from the API Client.

```javascript
var controller = lib.GlobalWeatherSoap12Controller;
```

### <a name="create_get_weather"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherSoap12Controller.createGetWeather") createGetWeather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```javascript
function createGetWeather(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new GetWeatherSoapIn({"key":"value"});

    controller.createGetWeather(body, function(error, response, context) {

    
    });
```



### <a name="create_get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherSoap12Controller.createGetCitiesByCountry") createGetCitiesByCountry

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```javascript
function createGetCitiesByCountry(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new GetCitiesByCountrySoapIn({"key":"value"});

    controller.createGetCitiesByCountry(body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="global_weather_http_get_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GlobalWeatherHttpGetController") GlobalWeatherHttpGetController

### Get singleton instance

The singleton instance of the ``` GlobalWeatherHttpGetController ``` class can be accessed from the API Client.

```javascript
var controller = lib.GlobalWeatherHttpGetController;
```

### <a name="get_weather"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherHttpGetController.getWeather") getWeather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```javascript
function getWeather(cityName, countryName, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cityName |  ``` Required ```  | TODO: Add a parameter description |
| countryName |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var cityName = 'CityName';
    var countryName = 'CountryName';

    controller.getWeather(cityName, countryName, function(error, response, context) {

    
    });
```



### <a name="get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherHttpGetController.getCitiesByCountry") getCitiesByCountry

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```javascript
function getCitiesByCountry(countryName, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| countryName |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var countryName = 'CountryName';

    controller.getCitiesByCountry(countryName, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="global_weather_http_post_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GlobalWeatherHttpPostController") GlobalWeatherHttpPostController

### Get singleton instance

The singleton instance of the ``` GlobalWeatherHttpPostController ``` class can be accessed from the API Client.

```javascript
var controller = lib.GlobalWeatherHttpPostController;
```

### <a name="create_get_weather"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherHttpPostController.createGetWeather") createGetWeather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```javascript
function createGetWeather(cityName, countryName, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cityName |  ``` Required ```  | TODO: Add a parameter description |
| countryName |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var cityName = 'CityName';
    var countryName = 'CountryName';

    controller.createGetWeather(cityName, countryName, function(error, response, context) {

    
    });
```



### <a name="create_get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png ".GlobalWeatherHttpPostController.createGetCitiesByCountry") createGetCitiesByCountry

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```javascript
function createGetCitiesByCountry(countryName, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| countryName |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var countryName = 'CountryName';

    controller.createGetCitiesByCountry(countryName, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



