import OAuth2 from 'simple-auth-oauth2/authenticators/oauth2';

var CustomAuthenticator = OAuth2.extend({
	user: null,
	/*
	fetchUser(identification, accessToken) {
			console.log('fetchUser');
			// This doesn't add the auth bearer header...
			// https://github.com/simplabs/ember-simple-auth/blob/master/packages/ember-simple-auth-oauth2/lib/simple-auth-oauth2/authorizers/oauth2.js

			return this.container.lookup('service:store').find('user', identification).then((users) => {
					console.log(users);
					return users.get('firstObject');
			});

	},

	restore(data) {
		console.log("restore");
		return this._super(data).then((response) => {
				console.log(data);
				console.log(response);
				return this.fetchUser(response.my_identification_key).then((user) => {
						this.set('user', user);
						return response;
				});
		});
	},

	authenticate(options) {
			console.log("sup");
			console.log(this);
			return this._super(options).then((data) => {
					console.log(data);
					console.log(options);
					return this.fetchUser(options.identification, data.access_token).then((user) => {
							this.set('user', user);
							return data;
					});
			});
	},

	invalidate(data) {
			console.log("nope)");
			return this._super(data).then(() => {
					this.set('user', null);
			});
	},
	*/
	makeRequest(url, data) {
		//console.log('makeRequest URL: ' + url);
		//console.log('makeRequest DATA: ' + JSON.stringify(data));

    data.client_id = 'IjA4ZDVhODBhLWMwNDYtMTFlNC1iM2I5LTA4MDAyNzI0MjM5NSI1YS9BvnRaztbwNA9RAIAlNj4IfPASdVuc';
    data.client_secret = 'IjBjNWY1ZDBlLWMwNDYtMTFlNC1iM2I5LTA4MDAyNzI0MjM5NSI1YS9C142ReA7DG3JKEv8sy9mwGDH8ZqQIjBjNWZmNDNhLWMwNDYtMTFlNC1iM2I5LTA4MDAyNzI0MjM5NSI1YS9C1H7Jgwh13LzuYf7TGUA3mKHSsDVo';

		return this._super(url, data);
	}

});

export default {
	name: 'simple-auth-config',
	before: 'simple-auth',

	initialize(container, application) {
		application.register('authenticator:custom', CustomAuthenticator);
	}
};
