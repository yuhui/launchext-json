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
    "nullString": {
      "settings": {
        "path": "nullString"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "sandbox/javascriptVariable.js",
      "storageDuration": ""
    },
    "undefinedObject": {
      "settings": {
        "path": "undefinedObject"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "sandbox/javascriptVariable.js",
      "storageDuration": ""
    },
    "undefinedString": {
      "settings": {
        "path": "undefinedString"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "sandbox/javascriptVariable.js",
      "storageDuration": ""
    },
    "reviverFunction": {
      "settings": {
        "path": "reviverFunction"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "sandbox/javascriptVariable.js",
      "storageDuration": ""
    },
    "replacerFunction": {
      "settings": {
        "path": "replacerFunction"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "sandbox/javascriptVariable.js",
      "storageDuration": ""
    },
    "replacerArray": {
      "settings": {
        "path": "replacerArray"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "sandbox/javascriptVariable.js",
      "storageDuration": ""
    },
    "spaceChar": {
      "settings": {
        "path": "spaceChar"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "sandbox/javascriptVariable.js",
      "storageDuration": ""
    },
    "spaceNum": {
      "settings": {
        "path": "spaceNum"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "sandbox/javascriptVariable.js",
      "storageDuration": ""
    },
    "parsed sampleString": {
      "settings": {
        "stringValue": "%sampleString%"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "json-helper/src/lib/dataElements/parse.js",
      "storageDuration": ""
    },
    "parsed sampleString with reviverFunction": {
      "settings": {
        "stringValue": "%sampleString%",
        "reviver": "%reviverFunction%"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "json-helper/src/lib/dataElements/parse.js",
      "storageDuration": ""
    },
    "stringified sampleObject": {
      "settings": {
        "objectValue": "%sampleObject%"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "json-helper/src/lib/dataElements/stringify.js",
      "storageDuration": ""
    },
    "stringified sampleObject with replacerFunction": {
      "settings": {
        "objectValue": "%sampleObject%",
        "replacer": "%replacerFunction%",
        "space": null
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "json-helper/src/lib/dataElements/stringify.js",
      "storageDuration": ""
    },
    "stringified sampleObject with replacerArray": {
      "settings": {
        "objectValue": "%sampleObject%",
        "replacer": "%replacerArray%",
        "space": null
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "json-helper/src/lib/dataElements/stringify.js",
      "storageDuration": ""
    },
    "stringified sampleObject with spaceChar": {
      "settings": {
        "objectValue": "%sampleObject%",
        "replacer": null,
        "space": "%spaceChar%"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "json-helper/src/lib/dataElements/stringify.js",
      "storageDuration": ""
    },
    "stringified sampleObject with spaceNum": {
      "settings": {
        "objectValue": "%sampleObject%",
        "replacer": null,
        "space": "%spaceNum%"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "json-helper/src/lib/dataElements/stringify.js",
      "storageDuration": ""
    },
    "parsed nullString": {
      "settings": {
        "stringValue": "%nullString%"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "json-helper/src/lib/dataElements/parse.js",
      "storageDuration": ""
    },
    "stringified undefinedObject": {
      "settings": {
        "objectValue": "%undefinedObject%"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "json-helper/src/lib/dataElements/stringify.js",
      "storageDuration": ""
    },
    "parsed undefinedString": {
      "settings": {
        "stringValue": "%undefinedString%"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "json-helper/src/lib/dataElements/parse.js",
      "storageDuration": ""
    },
    "parsed sampleObject logs error": {
      "settings": {
        "stringValue": "%sampleObject%",
        "reviver": null
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "json-helper/src/lib/dataElements/parse.js",
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
  "environment": {
    "id": "EN00000000000000000000000000000000",
    "stage": "development"
  },
  "buildInfo": {
    "turbineVersion": "27.5.0",
    "turbineBuildDate": "2024-01-08T15:16:07.508Z",
    "buildDate": "2024-01-08T15:16:07.508Z",
    "environment": "development"
  }
}