/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'sandbox',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    'simple-auth': {
      authenticationRoute: 'users.login',
      authorizer: 'simple-auth-authorizer:oauth2-bearer',
      session: 'session:custom',
      crossOriginWhitelist: ['https://sagebrew.local.dev']
    },
    'simple-auth-oauth2': {
      'serverTokenEndpoint': 'https://sagebrew.local.dev/o/token/'
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' https://fonts.googleapis.com http://fonts.googleapis.com http://fonts.gstatic.com",
      'connect-src': "'self' https://sagebrew.local.dev",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'media-src': "'self'"
      }
  };

  if (environment === 'development') {
    //ENV.APP.LOG_RESOLVER = true;
      //ENV.APP.LOG_ACTIVE_GENERATION = true;
     ENV.APP.LOG_TRANSITIONS = true;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     //ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.API_HOST = 'https://sagebrew.local.dev';
    ENV.APP.API_NAMESPACE = 'v1';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'staging') {
    ENV.APP.API_HOST = 'https://staging.sagebrew.com';
    ENV.APP.API_NAMESPACE = 'v1';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'https://www.sagebrew.com';
    ENV.APP.API_NAMESPACE = 'v1';
  }

  return ENV;
};
