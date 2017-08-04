# Getting started

## How to Build

The generated code uses a few Gradle dependencies e.g., Jackson, Volley,
and Apache HttpClient. The reference to these dependencies is already
added in the build.gradle file will be installed automatically. Therefore,
you will need internet access for a successful build.

* In order to open the client library in Android Studio click on ``` Open an Existing Android Project ```.

![Importing SDK into Android Studio - Step 1](https://apidocs.io/illustration/android?step=import1&workspaceFolder=GlobalWeather&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

* Browse to locate the folder containing the source code. Select the location of the GlobalWeather gradle project and click ``` Ok ```.

![Importing SDK into Android Studio - Step 2](https://apidocs.io/illustration/android?step=import2&workspaceFolder=GlobalWeather&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

* Upon successful import, the project can be built by clicking on ``` Build > Make Project ``` or  pressing ``` Ctrl + F9 ```.

![Importing SDK into Android Studio - Step 3](https://apidocs.io/illustration/android?step=import3&workspaceFolder=GlobalWeather&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

## How to Use

The following section explains how to use the GlobalWeather library in a new project.

### 1. Starting a new project 

For starting a new project, click on ``` Create New Android Studio Project ```.

![Add a new project in Android Studio - Step 1](https://apidocs.io/illustration/android?step=createNewProject0&workspaceFolder=GlobalWeather&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

Here, configure the new project by adding the name, domain and location of the sample application followed by clicking ``` Next ```.

![Create a new Android Studio Project - Step 2](https://apidocs.io/illustration/android?step=createNewProject1&workspaceFolder=GlobalWeather&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

Following this, select the ``` Phone and Tablet ```` option as shown in the illustration below and click ``` Next ```. 

![Create a new Android Studio Project - Step 3](https://apidocs.io/illustration/android?step=createNewProject2&workspaceFolder=GlobalWeather&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

In the following step, choose ``` Empty Activity ``` as the activity type and click ``` Next ```.

![Create a new Android Studio Project - Step 4](https://apidocs.io/illustration/android?step=createNewProject3&workspaceFolder=GlobalWeather&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

In this step, provide an ``` Activity Name ``` and ``` Layout Name ``` and click ``` Finish ```.  This would take you to the newly created project.

![Create a new Android Studio Project - Step 4](https://apidocs.io/illustration/android?step=createNewProject4&workspaceFolder=GlobalWeather&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

### 2. Add reference of the library project

In order to add a dependency to this sample application, click on the android button shown in the project explorer on the left side as shown in the picture. Click on ``` Project ``` in the drop down that emerges.  

![Adding dependency to the client library - Step 1](https://apidocs.io/illustration/android?step=testProject0&workspaceFolder=GlobalWeather&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

Right click the sample application in the project explorer and click on ``` New > Module ```  as shown in the picture.

![Adding dependency to the client library - Step 2](https://apidocs.io/illustration/android?step=testProject1&workspaceFolder=GlobalWeather&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

Choose ``` Import Gradle Project ``` and click ``` Next ```.

![Adding dependency to the client library - Step 3](https://apidocs.io/illustration/android?step=testProject2&workspaceFolder=GlobalWeather&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

Click on ``` Finish ``` which would take you back to the sample application with the refernced SDK. 

![Adding dependency to the client library - Step 4](https://apidocs.io/illustration/android?step=testProject3&workspaceFolder=GlobalWeather&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

In the following step naigate to the ``` SampleApplication >  app > build.gradle ``` file and add the following line ```compile project(path: ':GlobalWeather')``` to the dependencies section as shown in the illustration below.

![Adding dependency to the client library - Step 5](https://apidocs.io/illustration/android?step=testProject4&workspaceFolder=GlobalWeather&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

Finally, press ``` Sync Now ``` in the warning visible as shown in the picture below.

![Adding dependency to the client library - Step 6](https://apidocs.io/illustration/android?step=testProject5&workspaceFolder=GlobalWeather&workspaceName=GlobalWeather&projectName=GlobalWeatherLib&rootNamespace=com.webservicex.www)

### 3. Write sample code

Once the ``` SampleApplication ``` is created, a file named ``` SampleApplication > app > src > main > java > MainActivity ``` will be visible in the *Project Explorer* with an ``` onCreate ``` method. This is the entry point for the execution of the created project.
Here, you can add code to initialize the client library and instantiate a *Controller* class. Sample code to initialize the client library and using controller methods is given in the subsequent sections.

## How to Test

The generated code and the server can be tested using automatically generated test cases. 
JUnit is used as the testing framework and test runner.

In Android Studio, for running the tests do the following:

1. Right click on *SampleApplication > GlobalWeatherLib > androidTest > java)* from the project explorer.
2. Select "Run All Tests" or use "Ctrl + Shift + F10" to run the Tests.

## Initialization

### 

API client can be initialized as following. The `appContext` being passed is the Android application [`Context`](https://developer.android.com/reference/android/content/Context.html).

```java

com.webservicex.www.Configuration.initialize(appContext);
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



