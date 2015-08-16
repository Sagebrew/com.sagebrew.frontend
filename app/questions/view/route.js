import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    Ember.$('body').addClass('question-detail');
  },
  deactivate() {
    Ember.$('body').removeClass('question-detail');
  },
  model(params) {
    return this.store.find('question', params.question_id);
  }
});
