# Getting started

## How to Build

The generated code uses the Newtonsoft Json.NET NuGet Package. If the automatic NuGet package restore
is enabled, these dependencies will be installed automatically. Therefore,
you will need internet access for build.

1. Open the solution (GlobalWeather.sln) file.
2. Invoke the build process using `Ctrl+Shift+B` shortcut key or using the `Build` menu as shown below.

![Building SDK using Visual Studio](https://apidocs.io/illustration/cs?step=buildSDK&workspaceFolder=GlobalWeather-CSharp&workspaceName=GlobalWeather&projectName=GlobalWeather.PCL)

## How to Use

The build process generates a portable class library, which can be used like a normal class library. The generated library is compatible with Windows Forms, Windows RT, Windows Phone 8,
Silverlight 5, Xamarin iOS, Xamarin Android and Mono. More information on how to use can be found at the [MSDN Portable Class Libraries documentation](http://msdn.microsoft.com/en-us/library/vstudio/gg597391%28v=vs.100%29.aspx).

The following section explains how to use the GlobalWeather library in a new console project.

### 1. Starting a new project

For starting a new project, right click on the current solution from the *solution explorer* and choose  ``` Add -> New Project ```.

![Add a new project in the existing solution using Visual Studio](https://apidocs.io/illustration/cs?step=addProject&workspaceFolder=GlobalWeather-CSharp&workspaceName=GlobalWeather&projectName=GlobalWeather.PCL)

Next, choose "Console Application", provide a ``` TestConsoleProject ``` as the project name and click ``` OK ```.

![Create a new console project using Visual Studio](https://apidocs.io/illustration/cs?step=createProject&workspaceFolder=GlobalWeather-CSharp&workspaceName=GlobalWeather&projectName=GlobalWeather.PCL)

### 2. Set as startup project

The new console project is the entry point for the eventual execution. This requires us to set the ``` TestConsoleProject ``` as the start-up project. To do this, right-click on the  ``` TestConsoleProject ``` and choose  ``` Set as StartUp Project ``` form the context menu.

![Set the new cosole project as the start up project](https://apidocs.io/illustration/cs?step=setStartup&workspaceFolder=GlobalWeather-CSharp&workspaceName=GlobalWeather&projectName=GlobalWeather.PCL)

### 3. Add reference of the library project

In order to use the GlobalWeather library in the new project, first we must add a projet reference to the ``` TestConsoleProject ```. First, right click on the ``` References ``` node in the *solution explorer* and click ``` Add Reference... ```.

![Open references of the TestConsoleProject](https://apidocs.io/illustration/cs?step=addReference&workspaceFolder=GlobalWeather-CSharp&workspaceName=GlobalWeather&projectName=GlobalWeather.PCL)

Next, a window will be displayed where we must set the ``` checkbox ``` on ``` GlobalWeather.PCL ``` and click ``` OK ```. By doing this, we have added a reference of the ```GlobalWeather.PCL``` project into the new ``` TestConsoleProject ```.

![Add a reference to the TestConsoleProject](https://apidocs.io/illustration/cs?step=createReference&workspaceFolder=GlobalWeather-CSharp&workspaceName=GlobalWeather&projectName=GlobalWeather.PCL)

### 4. Write sample code

Once the ``` TestConsoleProject ``` is created, a file named ``` Program.cs ``` will be visible in the *solution explorer* with an empty ``` Main ``` method. This is the entry point for the execution of the entire solution.
Here, you can add code to initialize the client library and acquire the instance of a *Controller* class. Sample code to initialize the client library and using controller methods is given in the subsequent sections.

![Add a reference to the TestConsoleProject](https://apidocs.io/illustration/cs?step=addCode&workspaceFolder=GlobalWeather-CSharp&workspaceName=GlobalWeather&projectName=GlobalWeather.PCL)

## How to Test

The generated SDK also contain one or more Tests, which are contained in the Tests project.
In order to invoke these test cases, you will need *NUnit 3.0 Test Adapter Extension for Visual Studio*.
Once the SDK is complied, the test cases should appear in the Test Explorer window.
Here, you can click *Run All* to execute these test cases.

## Initialization

### 

API client can be initialized as following.

```csharp

GlobalWeatherClient client = new GlobalWeatherClient();
```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [GlobalWeatherSoapController](#global_weather_soap_controller)
* [GlobalWeatherSoap12Controller](#global_weather_soap12_controller)
* [GlobalWeatherHttpGetController](#global_weather_http_get_controller)
* [GlobalWeatherHttpPostController](#global_weather_http_post_controller)

## <a name="global_weather_soap_controller"></a>![Class: ](https://apidocs.io/img/class.png "GlobalWeather.PCL.Controllers.GlobalWeatherSoapController") GlobalWeatherSoapController

### Get singleton instance

The singleton instance of the ``` GlobalWeatherSoapController ``` class can be accessed from the API Client.

```csharp
GlobalWeatherSoapController globalWeatherSoap = client.GlobalWeatherSoap;
```

### <a name="create_get_weather"></a>![Method: ](https://apidocs.io/img/method.png "GlobalWeather.PCL.Controllers.GlobalWeatherSoapController.CreateGetWeather") CreateGetWeather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```csharp
Task<Models.GetWeatherSoapOut> CreateGetWeather(Models.GetWeatherSoapIn body)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```csharp
var body = new Models.GetWeatherSoapIn();

Models.GetWeatherSoapOut result = await globalWeatherSoap.CreateGetWeather(body);

```


### <a name="create_get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png "GlobalWeather.PCL.Controllers.GlobalWeatherSoapController.CreateGetCitiesByCountry") CreateGetCitiesByCountry

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```csharp
Task<Models.GetCitiesByCountrySoapOut> CreateGetCitiesByCountry(Models.GetCitiesByCountrySoapIn body)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```csharp
var body = new Models.GetCitiesByCountrySoapIn();

Models.GetCitiesByCountrySoapOut result = await globalWeatherSoap.CreateGetCitiesByCountry(body);

```


[Back to List of Controllers](#list_of_controllers)

## <a name="global_weather_soap12_controller"></a>![Class: ](https://apidocs.io/img/class.png "GlobalWeather.PCL.Controllers.GlobalWeatherSoap12Controller") GlobalWeatherSoap12Controller

### Get singleton instance

The singleton instance of the ``` GlobalWeatherSoap12Controller ``` class can be accessed from the API Client.

```csharp
GlobalWeatherSoap12Controller globalWeatherSoap12 = client.GlobalWeatherSoap12;
```

### <a name="create_get_weather"></a>![Method: ](https://apidocs.io/img/method.png "GlobalWeather.PCL.Controllers.GlobalWeatherSoap12Controller.CreateGetWeather") CreateGetWeather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```csharp
Task<Models.GetWeatherSoapOut> CreateGetWeather(Models.GetWeatherSoapIn body)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```csharp
var body = new Models.GetWeatherSoapIn();

Models.GetWeatherSoapOut result = await globalWeatherSoap12.CreateGetWeather(body);

```


### <a name="create_get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png "GlobalWeather.PCL.Controllers.GlobalWeatherSoap12Controller.CreateGetCitiesByCountry") CreateGetCitiesByCountry

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```csharp
Task<Models.GetCitiesByCountrySoapOut> CreateGetCitiesByCountry(Models.GetCitiesByCountrySoapIn body)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```csharp
var body = new Models.GetCitiesByCountrySoapIn();

Models.GetCitiesByCountrySoapOut result = await globalWeatherSoap12.CreateGetCitiesByCountry(body);

```


[Back to List of Controllers](#list_of_controllers)

## <a name="global_weather_http_get_controller"></a>![Class: ](https://apidocs.io/img/class.png "GlobalWeather.PCL.Controllers.GlobalWeatherHttpGetController") GlobalWeatherHttpGetController

### Get singleton instance

The singleton instance of the ``` GlobalWeatherHttpGetController ``` class can be accessed from the API Client.

```csharp
GlobalWeatherHttpGetController globalWeatherHttpGet = client.GlobalWeatherHttpGet;
```

### <a name="get_weather"></a>![Method: ](https://apidocs.io/img/method.png "GlobalWeather.PCL.Controllers.GlobalWeatherHttpGetController.GetWeather") GetWeather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```csharp
Task<Models.GetWeatherHttpGetOut> GetWeather(string cityName, string countryName)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cityName |  ``` Required ```  | TODO: Add a parameter description |
| countryName |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```csharp
string cityName = "CityName";
string countryName = "CountryName";

Models.GetWeatherHttpGetOut result = await globalWeatherHttpGet.GetWeather(cityName, countryName);

```


### <a name="get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png "GlobalWeather.PCL.Controllers.GlobalWeatherHttpGetController.GetCitiesByCountry") GetCitiesByCountry

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```csharp
Task<Models.GetCitiesByCountryHttpGetOut> GetCitiesByCountry(string countryName)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| countryName |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```csharp
string countryName = "CountryName";

Models.GetCitiesByCountryHttpGetOut result = await globalWeatherHttpGet.GetCitiesByCountry(countryName);

```


[Back to List of Controllers](#list_of_controllers)

## <a name="global_weather_http_post_controller"></a>![Class: ](https://apidocs.io/img/class.png "GlobalWeather.PCL.Controllers.GlobalWeatherHttpPostController") GlobalWeatherHttpPostController

### Get singleton instance

The singleton instance of the ``` GlobalWeatherHttpPostController ``` class can be accessed from the API Client.

```csharp
GlobalWeatherHttpPostController globalWeatherHttpPost = client.GlobalWeatherHttpPost;
```

### <a name="create_get_weather"></a>![Method: ](https://apidocs.io/img/method.png "GlobalWeather.PCL.Controllers.GlobalWeatherHttpPostController.CreateGetWeather") CreateGetWeather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```csharp
Task<Models.GetWeatherHttpPostOut> CreateGetWeather(string cityName, string countryName)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cityName |  ``` Required ```  | TODO: Add a parameter description |
| countryName |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```csharp
string cityName = "CityName";
string countryName = "CountryName";

Models.GetWeatherHttpPostOut result = await globalWeatherHttpPost.CreateGetWeather(cityName, countryName);

```


### <a name="create_get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png "GlobalWeather.PCL.Controllers.GlobalWeatherHttpPostController.CreateGetCitiesByCountry") CreateGetCitiesByCountry

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```csharp
Task<Models.GetCitiesByCountryHttpPostOut> CreateGetCitiesByCountry(string countryName)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| countryName |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```csharp
string countryName = "CountryName";

Models.GetCitiesByCountryHttpPostOut result = await globalWeatherHttpPost.CreateGetCitiesByCountry(countryName);

```


[Back to List of Controllers](#list_of_controllers)



