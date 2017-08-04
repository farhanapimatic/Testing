# 



## Server Configuration for Base URLs

This section provides details on the environments available and lists down the servers in each of the environment. The default environment for this API is set to `production` while the default server is set to `GlobalWeatherSoap`.
### Environments

An environment consists of a set of servers with base URL values. The environment can be changed programatically allowing rapid switching between different environments e.g.the user can specify a Production and Testing Environment.The available environments for this API are: 

#### production
The environment comprises of the following servers: 

| Name | Base URL | 
|-----------|-------------|
| GlobalWeatherSoap | http://www.webservicex.com/globalweather.asmx |
| GlobalWeatherSoap12 | http://www.webservicex.com/globalweather.asmx |
| GlobalWeatherHttpGet | http://www.webservicex.com/globalweather.asmx |
| GlobalWeatherHttpPost | http://www.webservicex.com/globalweather.asmx |







# <a name="api_reference"></a>API Reference

* [GlobalWeatherSoap](#global_weather_soap)
* [GlobalWeatherSoap12](#global_weather_soap12)
* [GlobalWeatherHttpGet](#global_weather_http_get)
* [GlobalWeatherHttpPost](#global_weather_http_post)

## <a name="global_weather_soap"></a>![Endpoint Group: ](https://apidocs.io/img/class.png "GlobalWeatherSoap") GlobalWeatherSoap


### <a name="get_weather"></a>![Endpoint: ](https://apidocs.io/img/method.png "GetWeather") GetWeather


**`POST`** `/GetWeather`

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.



#### Request Headers
>Accept=application/json;
>Content-Type=application/json;

#### Request Body
Raw 

|  Type | Tags | Description |
| ------| ---- |-------------| 
| `getweathersoapin` |  ``` Required ```  | TODO: Add a parameter description | 

 Example 
``` 
{
  "parameters": {
    "CityName": "CityName",
    "CountryName": "CountryName"
  }
}
``` 

#### Responses
**200** 

Body (_GetWeatherSoapOut_) 
```
{
  "parameters": {
    "GetWeatherResult": "GetWeatherResult"
  }
}
```


### <a name="get_cities_by_country"></a>![Endpoint: ](https://apidocs.io/img/method.png "GetCitiesByCountry") GetCitiesByCountry


**`POST`** `/GetCitiesByCountry`

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).



#### Request Headers
>Accept=application/json;
>Content-Type=application/json;

#### Request Body
Raw 

|  Type | Tags | Description |
| ------| ---- |-------------| 
| `getcitiesbycountrysoapin` |  ``` Required ```  | TODO: Add a parameter description | 

 Example 
``` 
{
  "parameters": {
    "CountryName": "CountryName"
  }
}
``` 

#### Responses
**200** 

Body (_GetCitiesByCountrySoapOut_) 
```
{
  "parameters": {
    "GetCitiesByCountryResult": "GetCitiesByCountryResult"
  }
}
```


[Back to API Reference](#api_reference)

## <a name="global_weather_soap12"></a>![Endpoint Group: ](https://apidocs.io/img/class.png "GlobalWeatherSoap12") GlobalWeatherSoap12


### <a name="get_weather"></a>![Endpoint: ](https://apidocs.io/img/method.png "GetWeather") GetWeather


**`POST`** `/GetWeather`

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


#### Base URL
This endpoint uses server `GlobalWeatherSoap12`.

#### Request Headers
>Accept=application/json;
>Content-Type=application/json;

#### Request Body
Raw 

|  Type | Tags | Description |
| ------| ---- |-------------| 
| `getweathersoapin` |  ``` Required ```  | TODO: Add a parameter description | 

 Example 
``` 
{
  "parameters": {
    "CityName": "CityName",
    "CountryName": "CountryName"
  }
}
``` 

#### Responses
**200** 

Body (_GetWeatherSoapOut_) 
```
{
  "parameters": {
    "GetWeatherResult": "GetWeatherResult"
  }
}
```


### <a name="get_cities_by_country"></a>![Endpoint: ](https://apidocs.io/img/method.png "GetCitiesByCountry") GetCitiesByCountry


**`POST`** `/GetCitiesByCountry`

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


#### Base URL
This endpoint uses server `GlobalWeatherSoap12`.

#### Request Headers
>Accept=application/json;
>Content-Type=application/json;

#### Request Body
Raw 

|  Type | Tags | Description |
| ------| ---- |-------------| 
| `getcitiesbycountrysoapin` |  ``` Required ```  | TODO: Add a parameter description | 

 Example 
``` 
{
  "parameters": {
    "CountryName": "CountryName"
  }
}
``` 

#### Responses
**200** 

Body (_GetCitiesByCountrySoapOut_) 
```
{
  "parameters": {
    "GetCitiesByCountryResult": "GetCitiesByCountryResult"
  }
}
```


[Back to API Reference](#api_reference)

## <a name="global_weather_http_get"></a>![Endpoint Group: ](https://apidocs.io/img/class.png "GlobalWeatherHttpGet") GlobalWeatherHttpGet


### <a name="get_weather"></a>![Endpoint: ](https://apidocs.io/img/method.png "GetWeather") GetWeather


**`GET`** `//GetWeather`

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


#### Base URL
This endpoint uses server `GlobalWeatherHttpGet`.

#### Query Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| CityName | `string` |  ``` Required ```  | TODO: Add a parameter description | `"CityName"` | 
| CountryName | `string` |  ``` Required ```  | TODO: Add a parameter description | `"CountryName"` | 

#### Responses
**200** 

Body (_GetWeatherHttpGetOut_) 
```
{
  "Body": "Body"
}
```


### <a name="get_cities_by_country"></a>![Endpoint: ](https://apidocs.io/img/method.png "GetCitiesByCountry") GetCitiesByCountry


**`GET`** `//GetCitiesByCountry`

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


#### Base URL
This endpoint uses server `GlobalWeatherHttpGet`.

#### Query Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| CountryName | `string` |  ``` Required ```  | TODO: Add a parameter description | `"CountryName"` | 

#### Responses
**200** 

Body (_GetCitiesByCountryHttpGetOut_) 
```
{
  "Body": "Body"
}
```


[Back to API Reference](#api_reference)

## <a name="global_weather_http_post"></a>![Endpoint Group: ](https://apidocs.io/img/class.png "GlobalWeatherHttpPost") GlobalWeatherHttpPost


### <a name="get_weather"></a>![Endpoint: ](https://apidocs.io/img/method.png "GetWeather") GetWeather


**`POST`** `//GetWeather`

> *Tags:*  ``` Skips Authentication ``` 

> Get weather report for all major cities around the world.


#### Base URL
This endpoint uses server `GlobalWeatherHttpPost`.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;

#### Request Body
Url Encoded

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| CityName | `string` |  ``` Required ```  | TODO: Add a parameter description | `"CityName"` | 
| CountryName | `string` |  ``` Required ```  | TODO: Add a parameter description | `"CountryName"` | 

#### Responses
**200** 

Body (_GetWeatherHttpPostOut_) 
```
{
  "Body": "Body"
}
```


### <a name="get_cities_by_country"></a>![Endpoint: ](https://apidocs.io/img/method.png "GetCitiesByCountry") GetCitiesByCountry


**`POST`** `//GetCitiesByCountry`

> *Tags:*  ``` Skips Authentication ``` 

> Get all major cities by country name(full / part).


#### Base URL
This endpoint uses server `GlobalWeatherHttpPost`.

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;

#### Request Body
Url Encoded

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| CountryName | `string` |  ``` Required ```  | TODO: Add a parameter description | `"CountryName"` | 

#### Responses
**200** 

Body (_GetCitiesByCountryHttpPostOut_) 
```
{
  "Body": "Body"
}
```


[Back to API Reference](#api_reference)

