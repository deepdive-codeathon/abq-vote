// import { Permissions, Notifications, Constants } from 'expo';
// import { Constants } from 'expo-constants';

// TODO Move to querys.js and mutations.js

// TODO Move this to .env
const PUSH_ENDPOINT =
  'https://coagisweb.cabq.gov/arcgis/rest/services/public/Voting2019/MapServer/3/query?where=&text=&objectIds=&time=&geometry=35.08673368614533%2C+-106.56775471868217+&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson';

export default (async function fetchVotingLocations() {
  return fetch(PUSH_ENDPOINT, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
});
