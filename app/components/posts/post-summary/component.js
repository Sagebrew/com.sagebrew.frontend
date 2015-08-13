import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Component.extend({
  actions : {
    upvote() {
      console.log("upvote");
      console.log(this.get('post'));
      console.log(config);
      var url = config.APP.API_HOST + "/" + config.APP.API_NAMESPACE;
      return Ember.$.ajax({
        url:  url + "/" + "posts/" + this.get('post').id + "/votes/?expedite=true",
        type: 'POST',
        data:  JSON.stringify({
                'vote_type': true
            }),
      });
    },
    downvote() {
      console.log("downvote");
    }
  }
});
