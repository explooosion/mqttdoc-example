define({
  "api": [{
      "type": "topic",
      "url": "room",
      "title": "Create room of a Game",
      "version": "0.0.1",
      "name": "CreaRoom",
      "group": "Room",
      "permission": [{
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission.</p> <p>An &quot;apiDefine&quot;-block can have an &quot;apiVersion&quot;, so you can attach the block to a specific version.</p> "
      }],
      "sampleRequest": [{
        "url": "http://apidocjs.com/example/api_project.json"
      }],
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
        "title": "Example usage:",
        "content": "    MQTT/3.1 0 Connection Accepted\n    {\n      \"action\": \"create\",\n      \"key\": \"keyid\",\n    }",
        "type": "json"
      }],
      // "examples": [{
      //   "title": "Example usage:",
      //   "content": "curl -i http://localhost/user/4711",
      //   "type": "json"
      // }, ],
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "id",
              "description": "<p>The Users-ID.</p> "
            },
          ]
        }
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "optional": false,
              "field": "NoAccessRight",
              "description": "<p>Only authenticated Admins can access the data.</p> "
            },
            {
              "group": "Error 4xx",
              "optional": false,
              "field": "UserNotFound",
              "description": "<p>The <code>id</code> of the User was not found.</p> "
            }
          ]
        },
        "examples": [{
          "title": "Response (example):",
          "content": "    HTTP/1.1 401 Not Authenticated\n    {\n      \"error\": \"NoAccessRight\"\n    }",
          "type": "json"
        }]
      },
      "filename": "source/example/example.js",
      "groupTitle": "User"
    },
    {
      "type": "get",
      "url": "/user/:id",
      "title": "Read data of a User",
      "version": "0.0.2",
      "name": "GetUser",
      "group": "User",
      "permission": [{
        "name": "admin",
        "title": "This title is visible in version 0.1.0 and 0.2.0",
        "description": ""
      }],
      "description": "<p>Here you can describe the function. Multilines are possible.</p> ",
      "parameter": {
        "fields": {
          "Parameter": [{
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p> "
          }]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "id",
              "description": "<p>The Users-ID.</p> "
            },
            {
              "group": "Success 200",
              "type": "Date",
              "optional": false,
              "field": "name",
              "description": "<p>Fullname of the User.</p> "
            }
          ]
        }
      },
      "error": {
        "fields": {
          "Error 4xx": [{
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The error description text in version 0.1.0.</p> "
          }]
        }
      },
      "filename": "source/example/_apidoc.js",
      "groupTitle": "User"
    },
    {
      "type": "post",
      "url": "/user",
      "title": "Create a User",
      "version": "0.2.0",
      "name": "PostUser",
      "group": "User",
      "permission": [{
        "name": "none"
      }],
      "description": "<p>In this case &quot;apiUse&quot; is defined and used. Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p> ",
      "parameter": {
        "fields": {
          "Parameter": [{
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p> "
          }]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p> "
          }]
        }
      },
      "filename": "source/example/_apidoc.js",
      "groupTitle": "User",
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "optional": false,
              "field": "NoAccessRight",
              "description": "<p>Only authenticated Admins can access the data.</p> "
            },
            {
              "group": "Error 4xx",
              "optional": false,
              "field": "UserNameTooShort",
              "description": "<p>Minimum of 5 characters required.</p> "
            }
          ]
        },
        "examples": [{
          "title": "Response (example):",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \"error\": \"UserNameTooShort\"\n    }",
          "type": "json"
        }]
      }
    },
    {
      "type": "put",
      "url": "/user/:id",
      "title": "Change a new User",
      "version": "0.3.0",
      "name": "PutUser",
      "group": "User",
      "permission": [{
        "name": "none"
      }],
      "description": "<p>This function has same errors like POST /user, but errors not defined again, they were included with &quot;apiUse&quot;</p> ",
      "parameter": {
        "fields": {
          "Parameter": [{
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p> "
          }]
        }
      },
      "filename": "source/example/example.js",
      "groupTitle": "User",
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "optional": false,
              "field": "NoAccessRight",
              "description": "<p>Only authenticated Admins can access the data.</p> "
            },
            {
              "group": "Error 4xx",
              "optional": false,
              "field": "UserNameTooShort",
              "description": "<p>Minimum of 5 characters required.</p> "
            }
          ]
        },
        "examples": [{
          "title": "Response (example):",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n      \"error\": \"UserNameTooShort\"\n    }",
          "type": "json"
        }]
      }
    }
  ]
});