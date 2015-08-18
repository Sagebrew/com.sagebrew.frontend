import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Component.extend({
    isVotedUp : Ember.computed('vote_type', function() {
      if (this.get('model').get('vote_type') === true) {
        return "active";
      } else {
        return "";
      }
    }),

    isVotedDown : Ember.computed('vote_type', function() {
      if (this.get('model').get('vote_type') === false) {
        return "active";
      } else {
        return "";
      }
    }),

    actions : {
      upvote() {
        var url = config.APP.API_HOST + "/" + config.APP.API_NAMESPACE;
        Ember.$.ajax({
          url:  url + "/" + this.get('type') + "s/" + this.get('model').id + "/votes/?expedite=true",
          type: 'POST',
          data:  {
                  'vote_type': true
                },
        });
        var model = this.get('model');
        model.reload();
      },
      downvote() {
        var url = config.APP.API_HOST + "/" + config.APP.API_NAMESPACE;
        Ember.$.ajax({
          url:  url + "/" + this.get('type') + "s/" + this.get('model').id + "/votes/?expedite=true",
          type: 'POST',
          data:  {
                  'vote_type': false
                },
        });
        var model = this.get('model');
        model.reload();
      }
    }
});
