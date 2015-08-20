import DRFAdapter from './drf';
import UrlTemplates from "ember-data-url-templates";

export default DRFAdapter.extend(UrlTemplates, {
  urlTemplate: '{+host}/v1/comments{/id}/',
  findUrlTemplate: '{+host}/v1/{parentResourceType}s/{parentResourceId}/comments{/id}/',
  queryUrlTemplate: '{+host}/v1/{parentResourceType}s/{parentResourceId}/comments{/id}/',
  createRecordUrlTemplate: '{+host}/v1/{parentResourceType}s/{parentResourceId}/comments{/id}/',

  urlSegments: {
    parentResourceType(type, id, snapshot, query) {
      if (query && query.parentResourceType) {
        return query.parentResourceType;
      } else {
        return snapshot.get('parent_type');
      }
    },
    parentResourceId(type, id, snapshot, query) {
      if (query && query.parentResourceId) {
        return query.parentResourceId;
      } else {
        return snapshot.get('parent_id');
      }
    },
  }
});
