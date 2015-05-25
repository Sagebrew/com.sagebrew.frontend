import OAuth2 from 'simple-auth-oauth2/authenticators/oauth2';
import Session from 'simple-auth/session';
import Ember from 'ember';


// var CustomSession = Session.extend({
// 	account: function() {
// 		console.log('account invoked');
// 		var accountId = this.get('account_id');
// 		if (!Ember.isEmpty(accountId)) {
// 			return this.container.lookup('store:main').find('user', accountId);
// 		}
// 	}.property('account_id'),

// 	test: function() {
// 		return "test";
// 	}.property(),
// });

var CustomAuthenticator = OAuth2.extend({
	makeRequest: function(url, data) {
		console.log('makeRequest URL: ' + url);
		console.log('makeRequest DATA: ' + JSON.stringify(data));

    data.client_id = 'abcd';
    data.client_secret = 'defg';

		return this._super(url, data);
	},

	// authenticate: function(credentials) {
	// 	console.log('Username: ' + credentials.identification);
	// 	console.log('Password: ' + credentials.password);
	// 	return new Ember.RSVP.Promise(function(resolve, reject) {
	// 		Ember.$.ajax({
	// 			url:  'http://localhost:8000/oauth2/access_token/',
	// 			type: 'POST',
	// 			contentType: 'application/x-www-form-urlencoded',
	// 			data: {
	// 				client_id: 'c712f05059ce09f0e87e',
	// 				client_secret: 'd5d69555f3ee210c2ebe95c1940b6126c0e603ea',
	// 				grant_type: 'password',
	// 				username: credentials.identification,
	// 				password: credentials.password ,
	// 			}
	// 		}).then(function(response) {
	// 			Ember.run(function() {
	// 				// resolve (including the account id) as the AJAX request was successful; all properties this promise resolves
	// 				// with will be available through the session
	// 				resolve({ access_token: response.access_token, account_id: response.account_id });
	// 			});
	// 		}, function(xhr, status, error) {
	// 			console.log('Failed');
	// 			Ember.run(function() {
	// 				reject(xhr.responseText);
	// 			});
	// 		});
	// 	});
	// }
});

export default {
	name: 'simple-auth-config',
	before: 'simple-auth',
	initialize: function(container) {
		window.ENV = window.ENV || {};
		window.ENV['simple-auth-oauth2'] = {
			serverTokenEndpoint: "https://sagebrew.local.dev/o/token/",
			serverTokenRevokationEndpoint: "https://sagebrew.local.dev/o/token/",
			refreshAccessTokens: true,
		};
		container.register('authenticator:custom', CustomAuthenticator);
        // container.register('session:custom', CustomSession);
	}
};
