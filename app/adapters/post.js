import DRFAdapter from './drf';
import UrlTemplates from "ember-data-url-templates";

export default DRFAdapter.extend(UrlTemplates, {
  urlTemplate: '{+host}/v1/profiles/{profileId}/wall{/id}/',
  findUrlTemplate: '{+host}/v1/profiles/{profileId}/wall/',
  queryUrlTemplate: '{+host}/v1/profiles/{profileId}/wall/',
  createRecordUrlTemplate: '{+host}/v1/posts/{profileId}/wall/',
  urlSegments: {
    profileId(type, id, snapshot, query) {
      console.log(snapshot);
      if (query && query.profileId) {
        return query.profileId;
      } else {
        return snapshot.belongsTo('profile', { id: true });
      }


//      return snapshot.belongsTo('post', { id: true });
    },
  }
});
