# Volkov Labs Application for Grafana

![Application](https://raw.githubusercontent.com/volkovlabs/volkovlabs-app/main/img/app.png)

![Grafana 9](https://img.shields.io/badge/Grafana-9.4.3-orange)
[![YouTube](https://img.shields.io/badge/YouTube-Playlist-red)](https://youtube.com/playlist?list=PLPow72ygztmTm_zY_PYqJtRYpMPpZglYC)
![CI](https://github.com/volkovlabs/volkovlabs-app/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-app/branch/main/graph/badge.svg)](https://codecov.io/gh/VolkovLabs/volkovlabs-app)
[![CodeQL](https://github.com/VolkovLabs/volkovlabs-app/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/VolkovLabs/volkovlabs-app/actions/workflows/codeql-analysis.yml)

## Introduction

The Volkov Labs Application includes a Docker image and Application plugin with information about Volkov Labs maintained Grafana plugins.

## Requirements

- Grafana 9.0+ is required.

## Docker image

We use custom build Docker image for all our projects and keep it up-to-date with the latest version of Grafana.

```sh
docker pull ghcr.io/volkovlabs/app:latest
```

## Bundle

Application plugin includes.

- [RSS/Atom data source](https://volkovlabs.io/plugins/volkovlabs-rss-datasource)
- [Dynamic text panel](https://volkovlabs.io/plugins/volkovlabs-dynamictext-panel)

## Feedback

We love to hear from you. There are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-app/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-app/blob/main/LICENSE).
