export default {
  name: 'simple-auth-config',

	initialize(instance) {
    window.ENV = window.ENV || {};
    window.ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: "https://sagebrew.local.dev/o/token/",
      serverTokenRevokationEndpoint: "https://sagebrew.local.dev/o/token/",
      refreshAccessTokens: true
    };
	}
};
