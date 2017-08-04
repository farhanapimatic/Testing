# Getting started

## How to Build

The generated code uses a few Maven dependencies e.g., Jackson, UniRest,
and Apache HttpClient. The reference to these dependencies is already
added in the pom.xml file will be installed automatically. Therefore,
you will need internet access for a successful build.

* In order to open the client library in Eclipse click on ``` File -> Import ```.

![Importing SDK into Eclipse - Step 1](https://apidocs.io/illustration/java?step=import0&workspaceFolder=GlobalWeather-Java&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

* In the import dialog, select ``` Existing Java Project ``` and click ``` Next ```.

![Importing SDK into Eclipse - Step 2](https://apidocs.io/illustration/java?step=import1&workspaceFolder=GlobalWeather-Java&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

* Browse to locate the folder containing the source code. Select the detected location of the project and click ``` Finish ```.

![Importing SDK into Eclipse - Step 3](https://apidocs.io/illustration/java?step=import2&workspaceFolder=GlobalWeather-Java&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

* Upon successful import, the project will be automatically built by Eclipse after automatically resolving the dependencies.

![Importing SDK into Eclipse - Step 4](https://apidocs.io/illustration/java?step=import3&workspaceFolder=GlobalWeather-Java&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

## How to Use

The following section explains how to use the GlobalWeather library in a new console project.

### 1. Starting a new project

For starting a new project, click the menu command ``` File > New > Project ```.

![Add a new project in Eclipse](https://apidocs.io/illustration/java?step=createNewProject0&workspaceFolder=GlobalWeather-Java&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

Next, choose ``` Maven > Maven Project ```and click ``` Next ```.

![Create a new Maven Project - Step 1](https://apidocs.io/illustration/java?step=createNewProject1&workspaceFolder=GlobalWeather-Java&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

Here, make sure to use the current workspace by choosing ``` Use default Workspace location ```, as shown in the picture below and click ``` Next ```.

![Create a new Maven Project - Step 2](https://apidocs.io/illustration/java?step=createNewProject2&workspaceFolder=GlobalWeather-Java&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

Following this, select the *quick start* project type to create a simple project with an existing class and a ``` main ``` method. To do this, choose ``` maven-archetype-quickstart ``` item from the list and click ``` Next ```.

![Create a new Maven Project - Step 3](https://apidocs.io/illustration/java?step=createNewProject3&workspaceFolder=GlobalWeather-Java&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

In the last step, provide a ``` Group Id ``` and ``` Artifact Id ``` as shown in the picture below and click ``` Finish ```.

![Create a new Maven Project - Step 4](https://apidocs.io/illustration/java?step=createNewProject4&workspaceFolder=GlobalWeather-Java&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

### 2. Add reference of the library project

The created Maven project manages its dependencies using its ``` pom.xml ``` file. In order to add a dependency on the *GlobalWeatherLib* client library, double click on the ``` pom.xml ``` file in the ``` Package Explorer ```. Opening the ``` pom.xml ``` file will render a graphical view on the cavas. Here, switch to the ``` Dependencies ``` tab and click the ``` Add ``` button as shown in the picture below.

![Adding dependency to the client library - Step 1](https://apidocs.io/illustration/java?step=testProject0&workspaceFolder=GlobalWeather-Java&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

Clicking the ``` Add ``` button will open a dialog where you need to specify GlobalWeather in ``` Group Id ``` and GlobalWeatherLib in the ``` Artifact Id ``` fields. Once added click ``` OK ```. Save the ``` pom.xml ``` file.

![Adding dependency to the client library - Step 2](https://apidocs.io/illustration/java?step=testProject1&workspaceFolder=GlobalWeather-Java&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

### 3. Write sample code

Once the ``` SimpleConsoleApp ``` is created, a file named ``` App.java ``` will be visible in the *Package Explorer* with a ``` main ``` method. This is the entry point for the execution of the created project.
Here, you can add code to initialize the client library and instantiate a *Controller* class. Sample code to initialize the client library and using controller methods is given in the subsequent sections.

![Adding dependency to the client library - Step 2](https://apidocs.io/illustration/java?step=testProject2&workspaceFolder=GlobalWeather-Java&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

## How to Test

The generated code and the server can be tested using automatically generated test cases. 
JUnit is used as the testing framework and test runner.

In Eclipse, for running the tests do the following:

1. Select the project *GlobalWeatherLib* from the package explorer.
2. Select "Run -> Run as -> JUnit Test" or use "Alt + Shift + X" followed by "T" to run the Tests.

## Initialization

### 

API client can be initialized as following.

```java

GlobalWeatherClient client = new GlobalWeatherClient();
```


# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [GlobalWeatherSoapController](#global_weather_soap_controller)
* [GlobalWeatherSoap12Controller](#global_weather_soap12_controller)
* [GlobalWeatherHttpGetController](#global_weather_http_get_controller)
* [GlobalWeatherHttpPostController](#global_weather_http_post_controller)

## <a name="global_weather_soap_controller"></a>![Class: ](https://apidocs.io/img/class.png "com.webservicex.www.controllers.GlobalWeatherSoapController") GlobalWeatherSoapController

### Get singleton instance

The singleton instance of the ``` GlobalWeatherSoapController ``` class can be accessed from the API Client.

```java
GlobalWeatherSoapController globalWeatherSoap = client.getGlobalWeatherSoap();
```

### <a name="create_get_weather_async"></a>![Method: ](https://apidocs.io/img/method.png "com.webservicex.www.controllers.GlobalWeatherSoapController.createGetWeatherAsync") createGetWeatherAsync

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```java
void createGetWeatherAsync(
        final GetWeatherSoapIn body,
        final APICallBack<GetWeatherSoapOut> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
try {
    GetWeatherSoapIn body = new GetWeatherSoapIn();
    // Invoking the API call with sample inputs
    globalWeatherSoap.createGetWeatherAsync(body, new APICallBack<GetWeatherSoapOut>() {
        public void onSuccess(HttpContext context, GetWeatherSoapOut response) {
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


### <a name="create_get_cities_by_country_async"></a>![Method: ](https://apidocs.io/img/method.png "com.webservicex.www.controllers.GlobalWeatherSoapController.createGetCitiesByCountryAsync") createGetCitiesByCountryAsync

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```java
void createGetCitiesByCountryAsync(
        final GetCitiesByCountrySoapIn body,
        final APICallBack<GetCitiesByCountrySoapOut> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
try {
    GetCitiesByCountrySoapIn body = new GetCitiesByCountrySoapIn();
    // Invoking the API call with sample inputs
    globalWeatherSoap.createGetCitiesByCountryAsync(body, new APICallBack<GetCitiesByCountrySoapOut>() {
        public void onSuccess(HttpContext context, GetCitiesByCountrySoapOut response) {
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

## <a name="global_weather_soap12_controller"></a>![Class: ](https://apidocs.io/img/class.png "com.webservicex.www.controllers.GlobalWeatherSoap12Controller") GlobalWeatherSoap12Controller

### Get singleton instance

The singleton instance of the ``` GlobalWeatherSoap12Controller ``` class can be accessed from the API Client.

```java
GlobalWeatherSoap12Controller globalWeatherSoap12 = client.getGlobalWeatherSoap12();
```

### <a name="create_get_weather_async"></a>![Method: ](https://apidocs.io/img/method.png "com.webservicex.www.controllers.GlobalWeatherSoap12Controller.createGetWeatherAsync") createGetWeatherAsync

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```java
void createGetWeatherAsync(
        final GetWeatherSoapIn body,
        final APICallBack<GetWeatherSoapOut> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
try {
    GetWeatherSoapIn body = new GetWeatherSoapIn();
    // Invoking the API call with sample inputs
    globalWeatherSoap12.createGetWeatherAsync(body, new APICallBack<GetWeatherSoapOut>() {
        public void onSuccess(HttpContext context, GetWeatherSoapOut response) {
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


### <a name="create_get_cities_by_country_async"></a>![Method: ](https://apidocs.io/img/method.png "com.webservicex.www.controllers.GlobalWeatherSoap12Controller.createGetCitiesByCountryAsync") createGetCitiesByCountryAsync

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```java
void createGetCitiesByCountryAsync(
        final GetCitiesByCountrySoapIn body,
        final APICallBack<GetCitiesByCountrySoapOut> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
try {
    GetCitiesByCountrySoapIn body = new GetCitiesByCountrySoapIn();
    // Invoking the API call with sample inputs
    globalWeatherSoap12.createGetCitiesByCountryAsync(body, new APICallBack<GetCitiesByCountrySoapOut>() {
        public void onSuccess(HttpContext context, GetCitiesByCountrySoapOut response) {
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

## <a name="global_weather_http_get_controller"></a>![Class: ](https://apidocs.io/img/class.png "com.webservicex.www.controllers.GlobalWeatherHttpGetController") GlobalWeatherHttpGetController

### Get singleton instance

The singleton instance of the ``` GlobalWeatherHttpGetController ``` class can be accessed from the API Client.

```java
GlobalWeatherHttpGetController globalWeatherHttpGet = client.getGlobalWeatherHttpGet();
```

### <a name="get_weather_async"></a>![Method: ](https://apidocs.io/img/method.png "com.webservicex.www.controllers.GlobalWeatherHttpGetController.getWeatherAsync") getWeatherAsync

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```java
void getWeatherAsync(
        final String cityName,
        final String countryName,
        final APICallBack<GetWeatherHttpGetOut> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cityName |  ``` Required ```  | TODO: Add a parameter description |
| countryName |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String cityName = "CityName";
String countryName = "CountryName";
// Invoking the API call with sample inputs
globalWeatherHttpGet.getWeatherAsync(cityName, countryName, new APICallBack<GetWeatherHttpGetOut>() {
    public void onSuccess(HttpContext context, GetWeatherHttpGetOut response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="get_cities_by_country_async"></a>![Method: ](https://apidocs.io/img/method.png "com.webservicex.www.controllers.GlobalWeatherHttpGetController.getCitiesByCountryAsync") getCitiesByCountryAsync

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```java
void getCitiesByCountryAsync(
        final String countryName,
        final APICallBack<GetCitiesByCountryHttpGetOut> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| countryName |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String countryName = "CountryName";
// Invoking the API call with sample inputs
globalWeatherHttpGet.getCitiesByCountryAsync(countryName, new APICallBack<GetCitiesByCountryHttpGetOut>() {
    public void onSuccess(HttpContext context, GetCitiesByCountryHttpGetOut response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


[Back to List of Controllers](#list_of_controllers)

## <a name="global_weather_http_post_controller"></a>![Class: ](https://apidocs.io/img/class.png "com.webservicex.www.controllers.GlobalWeatherHttpPostController") GlobalWeatherHttpPostController

### Get singleton instance

The singleton instance of the ``` GlobalWeatherHttpPostController ``` class can be accessed from the API Client.

```java
GlobalWeatherHttpPostController globalWeatherHttpPost = client.getGlobalWeatherHttpPost();
```

### <a name="create_get_weather_async"></a>![Method: ](https://apidocs.io/img/method.png "com.webservicex.www.controllers.GlobalWeatherHttpPostController.createGetWeatherAsync") createGetWeatherAsync

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```java
void createGetWeatherAsync(
        final String cityName,
        final String countryName,
        final APICallBack<GetWeatherHttpPostOut> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cityName |  ``` Required ```  | TODO: Add a parameter description |
| countryName |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String cityName = "CityName";
String countryName = "CountryName";
// Invoking the API call with sample inputs
globalWeatherHttpPost.createGetWeatherAsync(cityName, countryName, new APICallBack<GetWeatherHttpPostOut>() {
    public void onSuccess(HttpContext context, GetWeatherHttpPostOut response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


### <a name="create_get_cities_by_country_async"></a>![Method: ](https://apidocs.io/img/method.png "com.webservicex.www.controllers.GlobalWeatherHttpPostController.createGetCitiesByCountryAsync") createGetCitiesByCountryAsync

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```java
void createGetCitiesByCountryAsync(
        final String countryName,
        final APICallBack<GetCitiesByCountryHttpPostOut> callBack)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| countryName |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```java
String countryName = "CountryName";
// Invoking the API call with sample inputs
globalWeatherHttpPost.createGetCitiesByCountryAsync(countryName, new APICallBack<GetCitiesByCountryHttpPostOut>() {
    public void onSuccess(HttpContext context, GetCitiesByCountryHttpPostOut response) {
        // TODO success callback handler
    }
    public void onFailure(HttpContext context, Throwable error) {
        // TODO failure callback handler
    }
});

```


[Back to List of Controllers](#list_of_controllers)



