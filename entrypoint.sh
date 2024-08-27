#!/usr/bin/env bash

SRC="/app"
GRAFANA_APP_PATH="${GF_PATHS_PLUGINS}/business-app"

## Replace App
rm -rf $GRAFANA_APP_PATH
cp -pr $SRC $GRAFANA_APP_PATH
echo "Copying App plugin ${SRC} to ${GRAFANA_APP_PATH}..."

exec /run.sh "$@"
