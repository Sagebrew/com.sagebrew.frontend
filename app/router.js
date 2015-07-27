import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  'use strict';
  this.route('solutions');
  this.route('questions');

  this.route('users', {path: '/users'}, function() {
    this.route('login');
    this.route('logout');
  });


});

export default Router;
