# Getting started

## How to Build


* In order to successfully build and run your SDK files, you are required to have the following setup in your system:
    * **Go**  (Visit [https://golang.org/doc/install](https://golang.org/doc/install) for more details on how to install Go)
    * **Java VM** Version 8 or later
    * **Eclipse 4.6 (Neon)** or later ([http://www.eclipse.org/neon/](http://www.eclipse.org/neon/))
    * **GoClipse** setup within above installed Eclipse (Follow the instructions at [this link](https://github.com/GoClipse/goclipse/blob/latest/documentation/Installation.md#instructions) to setup GoClipse)
* Ensure that ```GOPATH``` environment variable is set in the system variables. If not, set it to your workspace directory where you will be adding your Go projects.
* The generated code uses unirest-go http library. Therefore, you will need internet access to resolve this dependency. If Go is properly installed and configured, run the following command to pull the dependency:

```Go
go get github.com/apimatic/unirest-go
```

This will install unirest-go in the ```GOPATH``` you specified in the system variables.

Now follow the steps mentioned below to build your SDK:

1. Open eclipse in the Go language perspective and click on the ```Import``` option in ```File``` menu.

![Importing SDK into Eclipse - Step 1](https://apidocs.io/illustration/go?step=import0)

2. Select ```General -> Existing Projects into Workspace``` option from the tree list.

![Importing SDK into Eclipse - Step 2](https://apidocs.io/illustration/go?step=import1)

3. In ```Select root directory```, provide path to the unzipped archive for the generated code. Once the path is set and the Project becomes visible under ```Projects``` click ```Finish```

![Importing SDK into Eclipse - Step 3](https://apidocs.io/illustration/go?step=import2&workspaceFolder=GlobalWeather-GoLang&projectName=globalweather_lib)

4. The Go library will be imported and its files will be visible in the Project Explorer

![Importing SDK into Eclipse - Step 4](https://apidocs.io/illustration/go?step=import3&projectName=globalweather_lib)

## How to Use

The following section explains how to use the GlobalweatherLib library in a new project.

### 1. Add a new Test Project

Create a new project in Eclipse by ```File``` -> ```New``` -> ```Go Project```

![Add a new project in Eclipse](https://apidocs.io/illustration/go?step=createNewProject0)

Name the Project as ```Test``` and click ```Finish```

![Create a new Maven Project - Step 1](https://apidocs.io/illustration/go?step=createNewProject1)

Create a new directory in the ```src``` directory of this project

![Create a new Maven Project - Step 2](https://apidocs.io/illustration/go?step=createNewProject2&projectName=globalweather_lib)

Name it ```test.com```

![Create a new Maven Project - Step 3](https://apidocs.io/illustration/go?step=createNewProject3&projectName=globalweather_lib)

Now create a new file inside ```src/test.com```

![Create a new Maven Project - Step 4](https://apidocs.io/illustration/go?step=createNewProject4&projectName=globalweather_lib)

Name it ```testsdk.go```

![Create a new Maven Project - Step 5](https://apidocs.io/illustration/go?step=createNewProject5&projectName=globalweather_lib)

In this Go file, you can start adding code to initialize the client library. Sample code to initialize the client library and using its methods is given in the subsequent sections.

### 2. Configure the Test Project

You need to import your generated library in this project in order to make use of its functions. In order to import the library, you can add its path in the ```GOPATH``` for this project. Follow the below steps:

Right click on the project name and click on ```Properties```

![Adding dependency to the client library - Step 1](https://apidocs.io/illustration/go?step=testProject0&projectName=globalweather_lib)

Choose ```Go Compiler``` from the side menu. Check ```Use project specific settings``` and uncheck ```Use same value as the GOPATH environment variable.```. By default, the GOPATH value from the environment variables will be visible in ```Eclipse GOPATH```. Do not remove this as this points to the unirest dependency.

![Adding dependency to the client library - Step 2](https://apidocs.io/illustration/go?step=testProject1)

Append the library path to this GOPATH

![Adding dependency to the client library - Step 3](https://apidocs.io/illustration/go?step=testProject2&workspaceFolder=GlobalWeather-GoLang)

Once the path is appended, click on ```OK```

### 3. Build the Test Project

Right click on the project name and click on ```Build Project```

![Build Project](https://apidocs.io/illustration/go?step=buildProject&projectName=globalweather_lib)

### 4. Run the Test Project

If the build is successful, right click on your Go file and click on ```Run As``` -> ```Go Application```

![Run Project](https://apidocs.io/illustration/go?step=runProject&projectName=globalweather_lib)

# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [globalweathersoap_pkg](#globalweathersoap_pkg)
* [globalweathersoap12_pkg](#globalweathersoap12_pkg)
* [globalweatherhttpget_pkg](#globalweatherhttpget_pkg)
* [globalweatherhttppost_pkg](#globalweatherhttppost_pkg)

## <a name="globalweathersoap_pkg"></a>![Class: ](https://apidocs.io/img/class.png ".globalweathersoap_pkg") globalweathersoap_pkg

### Get instance

Factory for the ``` GLOBALWEATHERSOAP ``` interface can be accessed from the package globalweathersoap_pkg.

```go
globalWeatherSoap := globalweathersoap_pkg.NewGLOBALWEATHERSOAP()
```

### <a name="create_get_weather"></a>![Method: ](https://apidocs.io/img/method.png ".globalweathersoap_pkg.CreateGetWeather") CreateGetWeather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```go
func (me *GLOBALWEATHERSOAP_IMPL) CreateGetWeather(body *models_pkg.GetWeatherSoapIn)(*models_pkg.GetWeatherSoapOut,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```go
var body *models_pkg.GetWeatherSoapIn

var result *models_pkg.GetWeatherSoapOut
result,_ = globalWeatherSoap.CreateGetWeather(body)

```


### <a name="create_get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png ".globalweathersoap_pkg.CreateGetCitiesByCountry") CreateGetCitiesByCountry

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```go
func (me *GLOBALWEATHERSOAP_IMPL) CreateGetCitiesByCountry(body *models_pkg.GetCitiesByCountrySoapIn)(*models_pkg.GetCitiesByCountrySoapOut,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```go
var body *models_pkg.GetCitiesByCountrySoapIn

var result *models_pkg.GetCitiesByCountrySoapOut
result,_ = globalWeatherSoap.CreateGetCitiesByCountry(body)

```


[Back to List of Controllers](#list_of_controllers)

## <a name="globalweathersoap12_pkg"></a>![Class: ](https://apidocs.io/img/class.png ".globalweathersoap12_pkg") globalweathersoap12_pkg

### Get instance

Factory for the ``` GLOBALWEATHERSOAP12 ``` interface can be accessed from the package globalweathersoap12_pkg.

```go
globalWeatherSoap12 := globalweathersoap12_pkg.NewGLOBALWEATHERSOAP12()
```

### <a name="create_get_weather"></a>![Method: ](https://apidocs.io/img/method.png ".globalweathersoap12_pkg.CreateGetWeather") CreateGetWeather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```go
func (me *GLOBALWEATHERSOAP12_IMPL) CreateGetWeather(body *models_pkg.GetWeatherSoapIn)(*models_pkg.GetWeatherSoapOut,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```go
var body *models_pkg.GetWeatherSoapIn

var result *models_pkg.GetWeatherSoapOut
result,_ = globalWeatherSoap12.CreateGetWeather(body)

```


### <a name="create_get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png ".globalweathersoap12_pkg.CreateGetCitiesByCountry") CreateGetCitiesByCountry

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```go
func (me *GLOBALWEATHERSOAP12_IMPL) CreateGetCitiesByCountry(body *models_pkg.GetCitiesByCountrySoapIn)(*models_pkg.GetCitiesByCountrySoapOut,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```go
var body *models_pkg.GetCitiesByCountrySoapIn

var result *models_pkg.GetCitiesByCountrySoapOut
result,_ = globalWeatherSoap12.CreateGetCitiesByCountry(body)

```


[Back to List of Controllers](#list_of_controllers)

## <a name="globalweatherhttpget_pkg"></a>![Class: ](https://apidocs.io/img/class.png ".globalweatherhttpget_pkg") globalweatherhttpget_pkg

### Get instance

Factory for the ``` GLOBALWEATHERHTTPGET ``` interface can be accessed from the package globalweatherhttpget_pkg.

```go
globalWeatherHttpGet := globalweatherhttpget_pkg.NewGLOBALWEATHERHTTPGET()
```

### <a name="get_weather"></a>![Method: ](https://apidocs.io/img/method.png ".globalweatherhttpget_pkg.GetWeather") GetWeather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```go
func (me *GLOBALWEATHERHTTPGET_IMPL) GetWeather(
            cityName string,
            countryName string)(*models_pkg.GetWeatherHttpGetOut,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cityName |  ``` Required ```  | TODO: Add a parameter description |
| countryName |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```go
cityName := "CityName"
countryName := "CountryName"

var result *models_pkg.GetWeatherHttpGetOut
result,_ = globalWeatherHttpGet.GetWeather(cityName, countryName)

```


### <a name="get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png ".globalweatherhttpget_pkg.GetCitiesByCountry") GetCitiesByCountry

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```go
func (me *GLOBALWEATHERHTTPGET_IMPL) GetCitiesByCountry(countryName string)(*models_pkg.GetCitiesByCountryHttpGetOut,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| countryName |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```go
countryName := "CountryName"

var result *models_pkg.GetCitiesByCountryHttpGetOut
result,_ = globalWeatherHttpGet.GetCitiesByCountry(countryName)

```


[Back to List of Controllers](#list_of_controllers)

## <a name="globalweatherhttppost_pkg"></a>![Class: ](https://apidocs.io/img/class.png ".globalweatherhttppost_pkg") globalweatherhttppost_pkg

### Get instance

Factory for the ``` GLOBALWEATHERHTTPPOST ``` interface can be accessed from the package globalweatherhttppost_pkg.

```go
globalWeatherHttpPost := globalweatherhttppost_pkg.NewGLOBALWEATHERHTTPPOST()
```

### <a name="create_get_weather"></a>![Method: ](https://apidocs.io/img/method.png ".globalweatherhttppost_pkg.CreateGetWeather") CreateGetWeather

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


```go
func (me *GLOBALWEATHERHTTPPOST_IMPL) CreateGetWeather(
            cityName string,
            countryName string)(*models_pkg.GetWeatherHttpPostOut,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cityName |  ``` Required ```  | TODO: Add a parameter description |
| countryName |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```go
cityName := "CityName"
countryName := "CountryName"

var result *models_pkg.GetWeatherHttpPostOut
result,_ = globalWeatherHttpPost.CreateGetWeather(cityName, countryName)

```


### <a name="create_get_cities_by_country"></a>![Method: ](https://apidocs.io/img/method.png ".globalweatherhttppost_pkg.CreateGetCitiesByCountry") CreateGetCitiesByCountry

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


```go
func (me *GLOBALWEATHERHTTPPOST_IMPL) CreateGetCitiesByCountry(countryName string)(*models_pkg.GetCitiesByCountryHttpPostOut,error)
```

#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| countryName |  ``` Required ```  | TODO: Add a parameter description |


#### Example Usage

```go
countryName := "CountryName"

var result *models_pkg.GetCitiesByCountryHttpPostOut
result,_ = globalWeatherHttpPost.CreateGetCitiesByCountry(countryName)

```


[Back to List of Controllers](#list_of_controllers)



