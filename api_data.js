define({
  "api": [{
    "type": "topic",
    "url": "room",
    "icon": "📢",
    "message": "Publish",
    "title": "Create Room",
    "version": "0.0.1",
    "name": "pub-create-room",
    "group": "Room",
    "description": "<p>Create room of a game by master.</p> ",
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
          "description": "<p>The Masters-ID.</p> "
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
    "filename": "source/example/example.js",
    "groupTitle": "Room"
  },
  {
    "type": "topic",
    "url": "create/keyid",
    "icon": "🔔",
    "message": "Subscribe",
    "title": "Create Room",
    "version": "0.0.1",
    "name": "sub-create-room",
    "group": "Room",
    "description": "<p>Create room of a game by master.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [{
          "group": "Parameter",
          "type": "String",
          "optional": false,
          "field": "result",
          "description": "<p>Result Name ( success || fail ).</p> "
        },
        {
          "group": "Parameter",
          "type": "String",
          "optional": true,
          "field": "url",
          "description": "<p>The Game Url.</p> "
        }
        ]
      }
    },
    "examples": [{
      "name": "payload",
      "title": "Example usage:",
      "content": "    MQTT/3.1 0 Connection Accepted\n    {\n      \"result\": \"success\",\n      \"url\": \"http://example.com?id=keyid\",\n    }",
      "type": "json"
    }],
    "filename": "source/example/_apidoc.js",
    "groupTitle": "Room"
  },
  {
    "type": "topic",
    "url": "room",
    "icon": "📢",
    "message": "Publish",
    "title": "Join Room",
    "version": "0.0.1",
    "name": "pub-join-room",
    "group": "Room",
    "description": "<p>Join room of a game by player.</p> ",
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
          "description": "<p>The Players-ID.</p> "
        }
        ]
      }
    },
    "examples": [{
      "name": "payload",
      "title": "Example usage:",
      "content": "    MQTT/3.1 0 Connection Accepted\n    {\n      \"action\": \"join\",\n      \"key\": \"keyid\",\n    }",
      "type": "json"
    }],
    "filename": "source/example/example.js",
    "groupTitle": "Room"
  },
  {
    "type": "topic",
    "url": "join/keyid",
    "icon": "🔔",
    "message": "Subscribe",
    "title": "Join Room",
    "version": "0.0.1",
    "name": "sub-join-room",
    "group": "Room",
    "description": "<p>Join room of a game by player.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [{
          "group": "Parameter",
          "type": "String",
          "optional": false,
          "field": "result",
          "description": "<p>Result Name ( success || fail ).</p> "
        },
        {
          "group": "Parameter",
          "type": "String",
          "optional": true,
          "field": "id",
          "description": "<p>The Players-ID.</p> "
        },
        {
          "group": "Parameter",
          "type": "String",
          "optional": true,
          "field": "map",
          "description": "<p>The Game-Map.</p> "
        }
        ]
      }
    },
    "examples": [{
      "name": "payload",
      "title": "Example usage:",
      "content": "    MQTT/3.1 0 Connection Accepted\n    {\n      \"result\": \"success\",\n      \"id\": \"client6451\",\n      \"map\": \"nobu_01\",\n    }",
      "type": "json"
    }],
    "filename": "source/example/_apidoc.js",
    "groupTitle": "Room"
  },
  {
    "type": "topic",
    "url": "delete_room",
    "icon": "📢",
    "message": "Publish",
    "title": "Delete Room",
    "version": "0.0.1",
    "name": "pub-delete-room",
    "group": "Room",
    "description": "<p>Delete room of a game by master or server.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [{
          "group": "Parameter",
          "type": "String",
          "optional": false,
          "field": "key",
          "description": "<p>The Masters-ID.</p> "
        }
        ]
      }
    },
    "examples": [{
      "name": "payload",
      "title": "Example usage:",
      "content": "    MQTT/3.1 0 Connection Accepted\n    {\n      \"id\": \"client123\",\n    }",
      "type": "json"
    }],
    "filename": "source/example/example.js",
    "groupTitle": "Room"
  },
  {
    "type": "topic",
    "url": "newplayer/keyid",
    "icon": "🔔",
    "message": "Subscribe",
    "title": "Add Player",
    "version": "0.0.1",
    "name": "sub-add-player",
    "group": "Player",
    "description": "<p>Add a new player from server.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [{
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "team",
          "description": "<p>The Players-Team.</p> "
        },
        {
          "group": "Parameter",
          "type": "String",
          "optional": false,
          "field": "id",
          "description": "<p>The Players-ID.</p> "
        },
        {
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "hp",
          "description": "<p>The Players-HP.</p> "
        },
        {
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "x",
          "description": "<p>The Players Object's X Current Position.</p> "
        },
        {
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "y",
          "description": "<p>The Players Object's Y Current Position.</p> "
        },
        {
          "group": "Parameter",
          "type": "String",
          "optional": false,
          "field": "name",
          "description": "<p>The Players-Name.</p> "
        }
        ]
      }
    },
    "examples": [{
      "name": "payload",
      "title": "Example usage:",
      "content": "    MQTT/3.1 0 Connection Accepted\n    {\n      \"team\": 0,\n      \"id\": \"client1\",\n      \"hp\": 100,\n      \"x\": 17,\n      \"y\": -33,\n      \"name\": \"myname\",\n    }",
      "type": "json"
    }],
    "filename": "source/example/_apidoc.js",
    "groupTitle": "Player"
  },
  {
    "type": "topic",
    "url": "game/keyid",
    "icon": "📢",
    "message": "Publish",
    "title": "Move Player",
    "version": "0.0.1",
    "name": "pub-move-player",
    "group": "Player",
    "description": "<p>Move player of a game by player.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [{
          "group": "Parameter",
          "type": "String",
          "optional": false,
          "field": "id",
          "description": "<p>The Players-ID.</p> "
        },
        {
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "x",
          "description": "<p>The Players Object's X Current Position.</p> "
        },
        {
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "y",
          "description": "<p>The Players Object's Y Current Position.</p> "
        }
        ]
      }
    },
    "examples": [{
      "name": "payload",
      "title": "Example usage:",
      "content": "    MQTT/3.1 0 Connection Accepted\n    {\n      \"id\": \"client\",\n      \"x\": \"123\",\n      \"y\": \"456\",\n    }",
      "type": "json"
    }],
    "filename": "source/example/example.js",
    "groupTitle": "Player"
  },
  {
    "type": "topic",
    "url": "movecmd/keyid",
    "icon": "🔔",
    "message": "Subscribe",
    "title": "Move Player",
    "version": "0.0.1",
    "name": "sub-move-player",
    "group": "Player",
    "description": "<p>Move player of a game by player.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [{
          "group": "Parameter",
          "type": "Array",
          "optional": false,
          "field": "hero",
          "description": "<p>The Players Of Hero.</p> "
        }, {
          "group": "Parameter",
          "type": "Array",
          "optional": false,
          "field": "creep",
          "description": "<p>The Players Of Creep.</p> "
        }, {
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "x",
          "description": "<p>The Players Object's X Current Position.</p> "
        }, {
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "y",
          "description": "<p>The Players Object's Y Current Position.</p> "
        }, {
          "group": "Parameter",
          "type": "String",
          "optional": false,
          "field": "id",
          "description": "<p>The Players-ID.</p> "
        }
        ]
      }
    },
    "examples": [{
      "name": "payload",
      "title": "Example usage:",
      "content": "    MQTT/3.1 0 Connection Accepted\n    {\n      \"hero\": [\n         { \"x\": 31, \"y\": -28, \"id\": \"client1\" },\n         { \"x\": 20, \"y\": -12, \"id\": \"client2\" },\n         { \"x\": 17, \"y\": -33, \"id\": \"client3\" },\n      ]\n      \"creep\": []\n    }",
      "type": "json"
    }],
    "filename": "source/example/example.js",
    "groupTitle": "Player"
  },
  {
    "type": "topic",
    "url": "delete/keyid",
    "icon": "📢",
    "message": "Publish",
    "title": "Delete Player",
    "version": "0.0.1",
    "name": "pub-delete-player",
    "group": "Player",
    "description": "<p>Delete player of a game by player or server.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [{
          "group": "Parameter",
          "type": "String",
          "optional": false,
          "field": "id",
          "description": "<p>The Players-ID.</p> "
        }
        ]
      }
    },
    "examples": [{
      "name": "payload",
      "title": "Example usage:",
      "content": "    MQTT/3.1 0 Connection Accepted\n    {\n      \"id\": \"client123\",\n    }",
      "type": "json"
    }],
    "filename": "source/example/example.js",
    "groupTitle": "Player"
  },
  {
    "type": "topic",
    "url": "gamedata/keyid",
    "icon": "📢",
    "message": "Publish",
    "title": "Status Player",
    "version": "0.0.1",
    "name": "pub-status-player",
    "group": "Player",
    "description": "<p>The player' status of a game.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [{
          "group": "Parameter",
          "type": "Array",
          "optional": false,
          "field": "hero",
          "description": "<p>The Players Of Hero.</p> "
        }, {
          "group": "Parameter",
          "type": "Array",
          "optional": false,
          "field": "creep",
          "description": "<p>The Players Of Creep.</p> "
        }, {
          "group": "Parameter",
          "type": "String",
          "optional": false,
          "field": "team",
          "description": "<p>The Players-Team.</p> "
        }, {
          "group": "Parameter",
          "type": "String",
          "optional": false,
          "field": "id",
          "description": "<p>The Players-ID.</p> "
        }, {
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "x",
          "description": "<p>The Players Object's X Current Position.</p> "
        }, {
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "y",
          "description": "<p>The Players Object's Y Current Position.</p> "
        }
        ]
      }
    },
    "examples": [{
      "name": "payload",
      "title": "Example usage:",
      "content": "    MQTT/3.1 0 Connection Accepted\n    {\n      \"hero\": [\n         { \"team\": 0, \"id\": \"client1\", \"x\": 17, \"y\": -33 },\n         { \"team\": 0, \"id\": \"client2\", \"x\": -8, \"y\": 54 },\n         { \"team\": 0, \"id\": \"client3\", \"x\": 32, \"y\": -15 },\n        ],\n      \"creep\": [\n         { \"team\": 0, \"id\": \"client4\", \"x\": 17, \"y\": -33 },\n         { \"team\": 0, \"id\": \"client5\", \"x\": -8, \"y\": 54 },\n         { \"team\": 0, \"id\": \"client6\", \"x\": 32, \"y\": -15 },\n        ]\n    }",
      "type": "json"
    }],
    "filename": "source/example/example.js",
    "groupTitle": "Player"
  },
  {
    "type": "topic",
    "url": "game/keyid/clientid",
    "icon": "🔔",
    "message": "Subscribe",
    "title": "Status Player",
    "version": "0.0.1",
    "name": "sub-status-player",
    "group": "Player",
    "description": "<p>The player' status of a game.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [{
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "team",
          "description": "<p>The Players-Team.</p> "
        }, {
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "hp",
          "description": "<p>The Players-HP.</p> "
        }, {
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "attack",
          "description": "<p>The Players-Attack.</p> "
        }, {
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "x",
          "description": "<p>The Players Object's X Current Position.</p> "
        }, {
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "y",
          "description": "<p>The Players Object's Y Current Position.</p> "
        }, {
          "group": "Parameter",
          "type": "Array",
          "optional": false,
          "field": "others",
          "description": "<p>Other Players Information.</p> "
        }, {
          "group": "Parameter",
          "type": "Number",
          "optional": false,
          "field": "type",
          "description": "<p>Other Players's Team.</p> "
        }
        ]
      }
    },
    "examples": [{
      "name": "payload",
      "title": "Example usage:",
      "content": "    MQTT/3.1 0 Connection Accepted\n    {\n      \"team\": 0,\n      \"hp\": 100,\n      \"attack\": 50,\n      \"x\": 17,\n      \"y\": -33,\n      \"others\": [\n         { \"team\": 0, \"id\": \"client2\", \"x\": 17, \"y\": -33 },\n         { \"team\": 0, \"id\": \"client3\", \"x\": -8, \"y\": 54 },\n         { \"team\": 0, \"id\": \"client4\", \"x\": 32, \"y\": -15 },\n        ]\n    }",
      "type": "json"
    }],
    "filename": "source/example/example.js",
    "groupTitle": "Player"
  },
  ]
});