/**
  * @module PurchaseOrderServiceLib
  *
  * TODO Enter a description
  */

'use strict';

const Configuration = require('./configuration');
const OAuthManager = require('./OAuthManager');
const Environments = require('./Environments');
const PurchaseOrderBindingController = require('./Controllers/PurchaseOrderBindingController');
const OAuthAuthorizationController = require('./Controllers/OAuthAuthorizationController');
const PurchaseOrderType = require('./Models/PurchaseOrderType');
const OrderConfirmationType = require('./Models/OrderConfirmationType');
const GetOrderStatusType = require('./Models/GetOrderStatusType');
const GetOrderStatusResponseType = require('./Models/GetOrderStatusResponseType');
const OrderNotFoundFaultType = require('./Models/OrderNotFoundFaultType');
const OrderConfirmation = require('./Models/OrderConfirmation');
const GetOrderStatusResponse = require('./Models/GetOrderStatusResponse');
const PurchaseOrder = require('./Models/PurchaseOrder');
const GetOrderStatus = require('./Models/GetOrderStatus');
const OAuthScopeEnum = require('./Models/OAuthScopeEnum');
const OAuthToken = require('./Models/OAuthToken');
const OAuthProviderErrorEnum = require('./Models/OAuthProviderErrorEnum');
const OrderNotFoundFaultException = require('./Exceptions/OrderNotFoundFaultException');
const OAuthProviderException = require('./Exceptions/OAuthProviderException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of PurchaseOrderServiceLib
    Configuration,
    Environments,
    OAuthManager,
    // controllers of PurchaseOrderServiceLib
    PurchaseOrderBindingController,
    OAuthAuthorizationController,
    // models of PurchaseOrderServiceLib
    PurchaseOrderType,
    OrderConfirmationType,
    GetOrderStatusType,
    GetOrderStatusResponseType,
    OrderNotFoundFaultType,
    OrderConfirmation,
    GetOrderStatusResponse,
    PurchaseOrder,
    GetOrderStatus,
    OAuthScopeEnum,
    OAuthToken,
    OAuthProviderErrorEnum,
    // exceptions of PurchaseOrderServiceLib
    OrderNotFoundFaultException,
    OAuthProviderException,
    APIException,
};

module.exports = initializer;
