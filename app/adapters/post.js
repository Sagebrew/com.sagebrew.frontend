import DRFAdapter from './drf';
import UrlTemplates from "ember-data-url-templates";

export default DRFAdapter.extend(UrlTemplates, {
  urlTemplate: '{+host}/v1/profiles/{profileId}/wall{/id}/',
  findUrlTemplate: '{+host}/v1/profiles/{profileId}/wall/',
  createRecordUrlTemplate: '{+host}/v1/profiles/{profileId}/wall/',
  urlSegments: {
    profileId(type, id, snapshot, query) {
      console.log(type);
      console.log(id);
      console.log(snapshot);
      console.log(query);
      return query.profileId;
//      return snapshot.belongsTo('post', { id: true });
    },
  }
});