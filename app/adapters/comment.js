import DRFAdapter from './drf';
import UrlTemplates from "ember-data-url-templates";

export default DRFAdapter.extend(UrlTemplates, {
  urlTemplate: '{+host}/v1/comments{/id}/',
  findUrlTemplate: '{+host}/v1/{parentResourceType}s/{parentResourceId}/comments{/id}/',
  queryUrlTemplate: '{+host}/v1/{parentResourceType}s/{parentResourceId}/comments{/id}/',
  createRecordUrlTemplate: '{+host}/v1/{parentResourceType}s/{parentResourceId}/comments{/id}/',

  urlSegments: {
    parentResourceType(type, id, snapshot, query) {
      console.log(type);
      console.log(id);
      console.log(snapshot);
      console.log(query);
      return query.parentResourceType;
//      return snapshot.belongsTo('post', { id: true });
    },
    parentResourceId(type, id, snapshot, query) {
      console.log(type);
      console.log(id);
      console.log(snapshot);
      console.log(query);
      return query.parentResourceId;
//      return snapshot.belongsTo('post', { id: true });
    },
  }
});
