import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.session.isAuthenticated) {
      return this._populateCurrentUser();
    }
  },

  actions: {
    sessionAuthenticationSucceeded() {
      this._populateCurrentUser().then(user => this.transitionTo('base.index'));
    },
  },

  _populateCurrentUser() {
    var self = this;
    return Ember.$.ajax({
      url:  'https://sagebrew.local.dev/v1/me/',
      type: 'GET'
    }).then(function(response) {
      return self.container.lookup('service:store').find('user', response.username).then(user => self.get('currentUser').set('content', user) && user);
    });
  }
});
