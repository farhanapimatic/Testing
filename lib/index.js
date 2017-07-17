/**
  * @module NewAPILib
  *
  * this should not be a mandatory field
  */

'use strict';

const Configuration = require('./configuration');
const OAuthManager = require('./OAuthManager');
const PaymentController = require('./Controllers/PaymentController');
const OAuthAuthorizationController = require('./Controllers/OAuthAuthorizationController');
const PaymentData = require('./Models/PaymentData');
const OAuthScopeEnum = require('./Models/OAuthScopeEnum');
const OAuthToken = require('./Models/OAuthToken');
const OAuthProviderErrorEnum = require('./Models/OAuthProviderErrorEnum');
const OAuthProviderException = require('./Exceptions/OAuthProviderException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of NewAPILib
    Configuration,
    OAuthManager,
    // controllers of NewAPILib
    PaymentController,
    OAuthAuthorizationController,
    // models of NewAPILib
    PaymentData,
    OAuthScopeEnum,
    OAuthToken,
    OAuthProviderErrorEnum,
    // exceptions of NewAPILib
    OAuthProviderException,
    APIException,
};

module.exports = initializer;
