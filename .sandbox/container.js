module.exports = {
  "extensions": {},
  "dataElements": {
    "sampleObject": {
      "settings": {
        "path": "sampleObject"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "sandbox/javascriptVariable.js",
      "storageDuration": ""
    },
    "sampleString": {
      "settings": {
        "path": "sampleString"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "sandbox/javascriptVariable.js",
      "storageDuration": ""
    },
    "stringified sampleObject": {
      "settings": {
        "objectValue": "%sampleObject%"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "json/src/lib/dataElements/stringify.js",
      "storageDuration": ""
    },
    "parsed sampleString": {
      "settings": {
        "stringValue": "%sampleString%"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "json/src/lib/dataElements/parse.js",
      "storageDuration": ""
    }
  },
  "rules": [],
  "property": {
    "name": "Sandbox property",
    "settings": {
      "domains": ["adobe.com", "example.com"],
      "linkDelay": 100,
      "trackingCookieName": "sat_track",
      "undefinedVarsReturnEmpty": false
    }
  },
  "company": {
    "orgId": "ABCDEFGHIJKLMNOPQRSTUVWX@AdobeOrg"
  },
  "buildInfo": {
    "turbineVersion": "26.0.2",
    "turbineBuildDate": "2021-04-04T15:18:00.116Z",
    "buildDate": "2021-04-04T15:18:00.116Z",
    "environment": "development"
  }
}