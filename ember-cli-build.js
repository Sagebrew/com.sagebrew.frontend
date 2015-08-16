/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var env = EmberApp.env();
    var isProductionLikeBuild = ['production', 'staging'].indexOf(env) > -1;
    var app = new EmberApp(defaults, {
      fingerprint: {
        enabled: isProductionLikeBuild,
        prepend: 'https://d6tmbwuijbg7w.cloudfront.net/'
      },
      sourcemaps: {
        enabled: !isProductionLikeBuild
      },
      minifyCSS: { enabled: isProductionLikeBuild },
      minifyJS: { enabled: isProductionLikeBuild },

      tests: process.env.EMBER_CLI_TEST_COMMAND || !isProductionLikeBuild,
      hinting: process.env.EMBER_CLI_TEST_COMMAND || !isProductionLikeBuild,

      vendorFiles: {
        'handlebars.js': {
          staging:  'bower_components/handlebars/handlebars.runtime.js'
        },
        'ember.js': {
          staging:  'bower_components/ember/ember.prod.js'
        }
      }
    });

    return app.toTree();
};
