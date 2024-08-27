FROM grafana/grafana-oss:11.1.4

##################################################################
## CONFIGURATION
##################################################################

## Set Grafana options
ENV GF_ENABLE_GZIP=true
ENV GF_USERS_DEFAULT_THEME=light

## Enable Anonymous Authentication
ENV GF_AUTH_ANONYMOUS_ENABLED=true
ENV GF_AUTH_BASIC_ENABLED=false

## Disable Sanitize
ENV GF_PANELS_DISABLE_SANITIZE_HTML=true

## Check for Updates
ENV GF_ANALYTICS_CHECK_FOR_UPDATES=false

## Scenes-engine Dashboards
#ENV GF_FEATURE_TOGGLES_ENABLE=dashboardScene

## Set Home Dashboard
ENV GF_DASHBOARDS_DEFAULT_HOME_DASHBOARD_PATH=/etc/grafana/provisioning/dashboards/business.json

## Paths
ENV GF_PATHS_PROVISIONING="/etc/grafana/provisioning"
ENV GF_PATHS_PLUGINS="/var/lib/grafana/plugins"

##################################################################
## Copy Artifacts
## Required for the App plugin
##################################################################

COPY --chown=grafana:root dist /app
COPY entrypoint.sh /

## Copy Provisioning
COPY --chown=grafana:root provisioning $GF_PATHS_PROVISIONING

##################################################################
## Customization depends on the Grafana version
## May work or not work for the version different from the current
## Check GitHub file history for the previous Grafana versions
##################################################################
USER root

##################################################################
## VISUAL
## Update Image files
##################################################################

## Replace Favicon and Apple Touch
COPY img/fav32.png /usr/share/grafana/public/img
COPY img/fav32.png /usr/share/grafana/public/img/apple-touch-icon.png

## Replace Logo
COPY img/logo.svg /usr/share/grafana/public/img/grafana_icon.svg

## Update Background
COPY img/background.svg /usr/share/grafana/public/img/g8_login_dark.svg
COPY img/background.svg /usr/share/grafana/public/img/g8_login_light.svg

##################################################################
## HANDS-ON
## Update HTML, INI files
##################################################################

# Update Title
RUN sed -i 's|<title>\[\[.AppTitle\]\]</title>|<title>Business App</title>|g' /usr/share/grafana/public/views/index.html
RUN sed -i 's|Loading Grafana|Loading Business App|g' /usr/share/grafana/public/views/index.html

## Update Mega and Help menu
RUN sed -i "s|\[\[.NavTree\]\],|nav,|g; \
    s|window.grafanaBootData = {| \
    let nav = [[.NavTree]]; \
    const alerting = nav.find((element) => element.id === 'alerting'); \
    if (alerting) { alerting['url'] = '/alerting/list'; } \
    const dashboards = nav.find((element) => element.id === 'dashboards/browse'); \
    if (dashboards) { dashboards['children'] = [];} \
    const connections = nav.find((element) => element.id === 'connections'); \
    if (connections) { connections['url'] = '/datasources'; connections['children'].shift(); } \
    const help = nav.find((element) => element.id === 'help'); \
    if (help) { help['subTitle'] = 'Business App 4.2.0'; help['children'] = [];} \
    window.grafanaBootData = {|g" \
    /usr/share/grafana/public/views/index.html

# Move Business App to navigation root section
RUN sed -i 's|\[navigation.app_sections\]|\[navigation.app_sections\]\nbusiness-app=root|g' /usr/share/grafana/conf/defaults.ini

##################################################################
## HANDS-ON
## Update JavaScript files
##################################################################

RUN find /usr/share/grafana/public/build/ -name *.js \
## Update Title
    -exec sed -i 's|AppTitle="Grafana"|AppTitle="Business App"|g' {} \; \
## Update Login Title
    -exec sed -i 's|LoginTitle="Welcome to Grafana"|LoginTitle="Business App for Grafana"|g' {} \; \
## Remove Documentation, Support, Community in the Footer
    -exec sed -i 's|\[{target:"_blank",id:"documentation".*grafana_footer"}\]|\[\]|g' {} \; \
## Remove Edition in the Footer
    -exec sed -i 's|({target:"_blank",id:"license",.*licenseUrl})|()|g' {} \; \
## Remove Version in the Footer
    -exec sed -i 's|({target:"_blank",id:"version",.*CHANGELOG.md":void 0})|()|g' {} \; \
## Remove News icon
    -exec sed -i 's|..createElement(....,{className:.,onClick:.,iconOnly:!0,icon:"rss","aria-label":"News"})|null|g' {} \; \
## Remove Open Source icon
    -exec sed -i 's|.push({target:"_blank",id:"version",text:`${..edition}${.}`,url:..licenseUrl,icon:"external-link-alt"})||g' {} \;

##################################################################
## CLEANING
## Remove Native Data Sources
##################################################################

RUN rm -rf /usr/share/grafana/public/app/plugins/datasource/elasticsearch /usr/share/grafana/public/build/elasticsearch* \
    /usr/share/grafana/public/app/plugins/datasource/graphite /usr/share/grafana/public/build/graphite* \
    /usr/share/grafana/public/app/plugins/datasource/opentsdb /usr/share/grafana/public/build/opentsdb* \
    /usr/share/grafana/public/app/plugins/datasource/influxdb /usr/share/grafana/public/build/influxdb* \
    /usr/share/grafana/public/app/plugins/datasource/mssql /usr/share/grafana/public/build/mssql* \
    /usr/share/grafana/public/app/plugins/datasource/mysql /usr/share/grafana/public/build/mysql* \
    /usr/share/grafana/public/app/plugins/datasource/tempo /usr/share/grafana/public/build/tempo* \
    /usr/share/grafana/public/app/plugins/datasource/jaeger /usr/share/grafana/public/build/jaeger* \
    /usr/share/grafana/public/app/plugins/datasource/zipkin /usr/share/grafana/public/build/zipkin* \
    /usr/share/grafana/public/app/plugins/datasource/azuremonitor /usr/share/grafana/public/build/azureMonitor* \
    /usr/share/grafana/public/app/plugins/datasource/cloudwatch /usr/share/grafana/public/build/cloudwatch* \
    /usr/share/grafana/public/app/plugins/datasource/cloud-monitoring /usr/share/grafana/public/build/cloudMonitoring* \
    /usr/share/grafana/public/app/plugins/datasource/parca /usr/share/grafana/public/build/parca* \
    /usr/share/grafana/public/app/plugins/datasource/phlare /usr/share/grafana/public/build/phlare* \
    /usr/share/grafana/public/app/plugins/datasource/grafana-pyroscope-datasource /usr/share/grafana/public/build/pyroscope*

## Remove Cloud and Enterprise categories
RUN find /usr/share/grafana/public/build/ -name *.js \
    -exec sed -i 's|.id==="enterprise"|.id==="notanenterprise"|g' {} \; \
    -exec sed -i 's|.id==="cloud"|.id==="notacloud"|g' {} \;

##################################################################
## CLEANING
## Remove Native Panels
##################################################################

RUN rm -rf /usr/share/grafana/public/app/plugins/panel/alertlist \
    /usr/share/grafana/public/app/plugins/panel/annolist \
    /usr/share/grafana/public/app/plugins/panel/dashlist \
    /usr/share/grafana/public/app/plugins/panel/news \
    /usr/share/grafana/public/app/plugins/panel/geomap \
    /usr/share/grafana/public/app/plugins/panel/table-old \
    /usr/share/grafana/public/app/plugins/panel/traces \
    /usr/share/grafana/public/app/plugins/panel/flamegraph

##################################################################

USER grafana

## Entrypoint
ENTRYPOINT [ "/bin/bash", "/entrypoint.sh" ]
