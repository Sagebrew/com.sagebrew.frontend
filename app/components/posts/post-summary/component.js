import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Component.extend({

  isVotedUp : Ember.computed(function() {
    if (this.get('post').get('vote_type') === true) {
      return "active";
    } else {
      return "";
    }
  }),

  isVotedDown : Ember.computed(function() {
    if (this.get('post').get('vote_type') === false) {
      return "active";
    } else {
      return "";
    }
  }),

  actions : {
    upvote() {
      var url = config.APP.API_HOST + "/" + config.APP.API_NAMESPACE;
      Ember.$.ajax({
        url:  url + "/" + "posts/" + this.get('post').id + "/votes/?expedite=true",
        type: 'POST',
        data:  {
                'vote_type': true
              },
      });
    },
    downvote() {
      var url = config.APP.API_HOST + "/" + config.APP.API_NAMESPACE;
      Ember.$.ajax({
        url:  url + "/" + "posts/" + this.get('post').id + "/votes/?expedite=true",
        type: 'POST',
        data:  {
                'vote_type': false
              },
      });

    }
  }
});
