import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('base', {path: '/'}, function(){
    this.route("index", { path: '', resetNamespace: true });
    this.route('solutions', { resetNamespace: true });
    this.route('questions', { resetNamespace: true }, function() {
      this.route('view', { path: '/question/:question_id' });
      this.route('create');
    });
  });

  this.route('users', {path: '/users'}, function() {
    this.route('login');
    this.route('logout');
  });


});

export default Router;
