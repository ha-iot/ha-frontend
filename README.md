<!-- The blank line below the opening "div" just makes it work -->
<div align="center">

# HAIoT - Frontend App

A user-friendly [Progressive Web App][pwa_link] to control a house from anywhere.

[![Build Status][travis_badge]][travis_link]
[![codecov][codecov_badge]][codecov_link]
![David DM][david_dependencies]
</div>

## HAIoT System

This is part of the **HAIoT System** for house automation.

- [Hardware Handler][hardware_handler_link]
- [Socket Server][socket_server_link]

## Development

At the end of the next steps, a server will be up and running on your [local 3000 port](http://localhost:3000/)
(but you can change this [at environment level](.env.example)).

```bash
git clone https://github.com/ha-iot/ha-frontend/
cd ha-frontend
npm i
npm start
```

[hardware_handler_link]: https://github.com/ha-iot/hardware-handler/
[socket_server_link]: https://github.com/ha-iot/ha-socket-server/
[travis_badge]: https://travis-ci.org/ha-iot/ha-frontend.svg?branch=master
[travis_link]: https://travis-ci.org/ha-iot/ha-sfrontend
[codecov_badge]: https://codecov.io/gh/ha-iot/ha-frontend/branch/master/graph/badge.svg
[codecov_link]: https://codecov.io/gh/ha-iot/ha-frontend
[david_dependencies]: https://david-dm.org/ha-iot/ha-frontend.svg
[pwa_link]: https://developers.google.com/web/progressive-web-apps/
