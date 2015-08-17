import config from '../config/environment';
export default {
  name: 'simple-auth-config',

	initialize(instance) {
    window.ENV = window.ENV || {};
    window.ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: "https://" + config.APP.API_HOST + "/o/token/",
      serverTokenRevokationEndpoint: "https://" + config.APP.API_HOST + "/o/token/",
      refreshAccessTokens: true
    };
	}
};
