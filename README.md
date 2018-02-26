# mqttdoc-example

Example mqttdoc (for internal tests)

This project design base on [apidoc](https://github.com/apidoc/apidoc)


## Status
+ [Connect Return code](http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc398718035)

| Value  | Return Code Response  | Description  |
|---|---|---|
| 0  | 0x00 Connection Accepted  | Connection accepted  |
| 1  | 0x01 Connection Refused, unacceptable protocol version  | The Server does not support the level of the MQTT protocol requested by the Client  |
| 2  | 0x02 Connection Refused, identifier rejected  | The Client identifier is correct UTF-8 but not allowed by the Server |
| 3  | 0x03 Connection Refused, Server unavailable  | The Network Connection has been made but the MQTT service is unavailable |
| 4  | 0x04 Connection Refused, bad user name or password  | The data in the user name or password is malformed  |
| 5  | 0x05 Connection Refused, not authorized  | The Client is not authorized to connect  |
| 6-255  |   | Reserved for future use  |