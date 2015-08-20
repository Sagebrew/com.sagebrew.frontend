import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  beforeModel() {
    if (this.session.isAuthenticated) {
      return this._populateCurrentUser();
    }
  },

  actions: {
    sessionAuthenticationSucceeded() {
      this._populateCurrentUser().then(user => this.transitionTo('base.index'));
    }
  },

  _populateCurrentUser() {
    var _this = this;
    return Ember.$.ajax({
      url:  config.APP.API_HOST + '/v1/me/',
      type: 'GET'
    }).then(function(response) {
        console.log(response);
        Ember.run(function() {
          return _this.container.lookup('service:store').find('user', response.username).then(user => _this.get('currentUser').set('content', user) && user);
        });

    }, function(xhr) {

    });
  }
});
