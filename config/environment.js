/* jshint node: true */

module.exports = function(environment) {
  var web_app = "sagebrew.local.dev",
      domain = "sagebrew.local.dev";
  if (environment === 'staging') {
    web_app = 'staging.sagebrew.com';
    domain = "staging-app.sagebrew.com";
  }

  if (environment === 'production') {
    web_app = 'www.sagebrew.com';
    domain = "app.sagebrew.com";
  }
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
      crossOriginWhitelist: ['https://' + web_app, domain]
    },
    'simple-auth-oauth2': {
      'serverTokenEndpoint': 'https://' + web_app + '/o/token/'
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' https://fonts.googleapis.com http://fonts.googleapis.com http://fonts.gstatic.com",
      'connect-src': "'self' https://" + web_app,
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
    ENV.APP.CLIENT_ID = "IjA4ZDVhODBhLWMwNDYtMTFlNC1iM2I5LTA4MDAyNzI0MjM5NSI1YS9BvnRaztbwNA9RAIAlNj4IfPASdVuc";
    ENV.APP.CLIENT_SECRET = "IjBjNWY1ZDBlLWMwNDYtMTFlNC1iM2I5LTA4MDAyNzI0MjM5NSI1YS9C142ReA7DG3JKEv8sy9mwGDH8ZqQIjBjNWZmNDNhLWMwNDYtMTFlNC1iM2I5LTA4MDAyNzI0MjM5NSI1YS9C1H7Jgwh13LzuYf7TGUA3mKHSsDVo";

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
    ENV.APP.CLIENT_ID = process.env['CLIENT_ID'];
    ENV.APP.CLIENT_SECRET = process.env['CLIENT_SECRET'];
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'https://www.sagebrew.com';
    ENV.APP.API_NAMESPACE = 'v1';
    ENV.APP.CLIENT_ID = process.env['CLIENT_ID'];
    ENV.APP.CLIENT_SECRET = process.env['CLIENT_SECRET'];
  }

  return ENV;
};
