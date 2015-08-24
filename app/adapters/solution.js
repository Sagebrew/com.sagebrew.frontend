import DRFAdapter from './drf';
import UrlTemplates from "ember-data-url-templates";

export default DRFAdapter.extend(UrlTemplates, {
  urlTemplate: '{+host}/v1/solutions{/id}/',
  findUrlTemplate: '{+host}/v1/questions/{questionId}/solutions/',
  queryUrlTemplate: '{+host}/v1/questions/{questionId}/solutions/',
  createRecordUrlTemplate: '{+host}/v1/questions/{questionId}/solutions/',

  urlSegments: {
    questionId(type, id, snapshot, query) {
      if (query && query.questionId) {
        return query.questionId;
      } else {
        return snapshot.attr('question_id');
      }
    }
  }
});
