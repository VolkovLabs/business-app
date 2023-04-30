# Volkov Labs Application for Grafana

![Application](https://raw.githubusercontent.com/volkovlabs/volkovlabs-app/main/img/app.png)

![Grafana 9](https://img.shields.io/badge/Grafana-9.5.1-orange)
[![YouTube](https://img.shields.io/badge/YouTube-Channel-red)](https://youtube.com/@volkovlabs)
![CI](https://github.com/volkovlabs/volkovlabs-app/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-app/branch/main/graph/badge.svg)](https://codecov.io/gh/VolkovLabs/volkovlabs-app)
[![CodeQL](https://github.com/VolkovLabs/volkovlabs-app/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/VolkovLabs/volkovlabs-app/actions/workflows/codeql-analysis.yml)

## Introduction

The Volkov Labs Application includes a Docker image with customized Grafana and an Application plugin with information about Volkov Labs maintained plugins.

## Customization

Months of work bundled with deep expertise nicely wrapped into a 7-minute long video revealing simple steps to customize Grafana. In this tutorial, we answered all community questions we collected to this moment.

[![Customization](https://raw.githubusercontent.com/volkovlabs/volkovlabs-app/main/img/customize.png)](https://youtu.be/ChI78v4UZc0)

## Docker image

We use custom build Docker image for all our projects and keep it up-to-date with the latest version of Grafana.

```sh
docker pull ghcr.io/volkovlabs/app:latest
```

## Bundle

Application plugin includes:

- [RSS/Atom data source](https://volkovlabs.io/plugins/volkovlabs-rss-datasource)
- [Dynamic text panel](https://volkovlabs.io/plugins/volkovlabs-dynamictext-panel)

## Feedback

We love to hear from you. There are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-app/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-app/blob/main/LICENSE).
