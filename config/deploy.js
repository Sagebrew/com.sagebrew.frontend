module.exports = {
  development: {
    buildEnv: 'development', // Override the environment passed to the ember asset build. Defaults to 'production'
    store: {
      type: 'redis', // the default store is 'redis'
      host: 'localhost',
      port: 6379
    },
    assets: {
      type: 's3', // default asset-adapter is 's3'
      gzip: false, // if undefined or set to true, files are gziped
      gzipExtensions: ['js', 'css', 'svg'], // if undefined, js, css & svg files are gziped
      exclude: ['.DS_Store', '*-test.js'], // defaults to empty array
      accessKeyId: process.env['AWS_ACCESS_KEY'],
      secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'],
      bucket: 'massive-dangerzone-dev'
    }
  },

  staging: {
    buildEnv: 'staging', // Override the environment passed to the ember asset build. Defaults to 'production'
    store: {
      host: process.env['REDIS_STAGING'],
      port: 6379
    },
    assets: {
      accessKeyId: process.env['AWS_ACCESS_KEY_STAGING'],
      secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY_STAGING'],
      bucket: process.env['BUCKET_STAGING']
    },
    manifestPrefix: 'stage-app' // optional, defaults to this.project.name()
  },

   production: {
    store: {
      host: process.env['REDIS_PROD'],
      port: 6379
    },
    assets: {
      accessKeyId: process.env['AWS_ACCESS_KEY_PROD'],
      secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY_PROD'],
      bucket: process.env['BUCKET_PROD']
    }
  }
};