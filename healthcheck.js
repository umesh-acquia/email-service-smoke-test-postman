const newman = require('newman'); // require newman in your project
 
// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./smokeTest.json'),
    reporters: 'cli',
    environment: {
      "id": "dab9997d-f667-46bd-8087-8c3ed879ee8d",
      "values": [
        {
          "key": "url",
          "value": "https://o5iwmfj610.execute-api.us-east-2.amazonaws.com",
          "type": "text",
          "description": "",
          "enabled": true
        },
        {
          "key": "xApiKey",
          "value": process.argv.slice(2)[0],
          "type": "text",
          "description": "",
          "enabled": true
        }
      ],
      "name": "My Workspace Globals",
      "_postman_variable_scope": "globals",
      "_postman_exported_at": "2019-02-05T13:08:07.028Z",
      "_postman_exported_using": "Postman/6.7.3"
    }
}, function (err) {
  if (err) { throw err; }
  console.error('collection run complete!');
}).on('start', function (err, args) { // on start of run, log to console
  console.log('running a collection...');
}).on('done', function (err, summary) {
  if (err || summary.error) {
    console.error('collection run encountered an error.');

  }
  else {
    console.log("Api Test completed successfully...");
  }
});