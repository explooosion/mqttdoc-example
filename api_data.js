define({
  "api": [{
    "type": "topic",
    "url": "Room",
    "title": "Create room of a Game",
    "version": "0.0.1",
    "name": "CreaRoom",
    "group": "Room",
    // "permission": [{
    //   "name": "admin",
    //   "title": "Admin access rights needed.",
    //   "description": "<p>Optionally you can write here further Informations about the permission.</p> <p>An &quot;apiDefine&quot;-block can have an &quot;apiVersion&quot;, so you can attach the block to a specific version.</p> "
    // }],
    // "sampleRequest": [{
    //   "url": "http://apidocjs.com/example/api_project.json"
    // }],
    "description": "<p>Create room of a game by master</p> ",
    "parameter": {
      "fields": {
        "Parameter": [{
          "group": "Parameter",
          "type": "String",
          "optional": false,
          "field": "action",
          "description": "<p>Action Name.</p> "
        },
        {
          "group": "Parameter",
          "type": "String",
          "optional": false,
          "field": "key",
          "description": "<p>The Users-ID.</p> "
        }
        ]
      }
    },
    "examples": [{
      "name": "payload",
      "title": "Example usage:",
      "content": "    MQTT/3.1 0 Connection Accepted\n    {\n      \"action\": \"create\",\n      \"key\": \"keyid\",\n    }",
      "type": "json"
    }],
    // "success": {
    //   "fields": {
    //     "Success 0": [{
    //       "group": "Success 0",
    //       "type": "String",
    //       "optional": false,
    //       "field": "id",
    //       "description": "<p>The Users-ID.</p> "
    //     },
    //     ]
    //   }
    // },
    // "error": {
    //   "fields": {
    //     "Error 4xx": [{
    //       "group": "Error 4xx",
    //       "optional": false,
    //       "field": "NoAccessRight",
    //       "description": "<p>Only authenticated Admins can access the data.</p> "
    //     },
    //     {
    //       "group": "Error 4xx",
    //       "optional": false,
    //       "field": "UserNotFound",
    //       "description": "<p>The <code>id</code> of the User was not found.</p> "
    //     }
    //     ]
    //   },
    //   "examples": [{
    //     "title": "Response (example):",
    //     "content": "    HTTP/1.1 401 Not Authenticated\n    {\n      \"error\": \"NoAccessRight\"\n    }",
    //     "type": "json"
    //   }]
    // },
    "filename": "source/example/example.js",
    "groupTitle": "Room"
  }
  ]
});