FROM grafana/grafana:9.4.2

## Set Grafana options
ENV GF_ENABLE_GZIP=true
ENV GF_USERS_DEFAULT_THEME=light
ENV GF_FEATURE_TOGGLES_ENABLE=topnav

## Enable Anonymous Authentication
ENV GF_AUTH_ANONYMOUS_ENABLED=true
ENV GF_AUTH_BASIC_ENABLED=false

## Disable Sanitize
ENV GF_PANELS_DISABLE_SANITIZE_HTML=true

## Disable Explore
ENV GF_EXPLORE_ENABLED=false

## Disble Alerting
ENV GF_ALERTING_ENABLED=false
ENV GF_UNIFIED_ALERTING_ENABLED=false

## Set Home Dashboard
ENV GF_DASHBOARDS_DEFAULT_HOME_DASHBOARD_PATH=/etc/grafana/provisioning/dashboards/news.json

## Paths
ENV GF_PATHS_PROVISIONING="/etc/grafana/provisioning"
ENV GF_PATHS_PLUGINS="/var/lib/grafana/plugins"

## Copy artifacts
## Required for the Application plugin
COPY --chown=grafana:root dist /app
COPY entrypoint.sh /

## Copy Provisioning
COPY --chown=grafana:root provisioning $GF_PATHS_PROVISIONING

###### Customization ########################################
USER root

## Replace Favicon
COPY img/fav32.png /usr/share/grafana/public/img

## Replace Logo
COPY src/img/logo.svg /usr/share/grafana/public/img/grafana_icon.svg

## Update Background
COPY img/background.svg /usr/share/grafana/public/img/g8_login_dark.svg
COPY img/background.svg /usr/share/grafana/public/img/g8_login_light.svg

## Update Main Org. to Volkov Labs
## Anonymous authentication will stop working as set for Main Org. by default
# RUN sed -i 's|Main Org.|VolkovLab|g' /usr/share/grafana/bin/grafana-server

## Update Help menu
RUN sed -i "s|\[\[.NavTree\]\],|nav,|g; \
    s|window.grafanaBootData = {| \
    let nav = [[.NavTree]]; \
    nav[nav.length -1]['subTitle'] = 'Application'; \
    window.grafanaBootData = {|g" \
    /usr/share/grafana/public/views/index.html

## Update Title
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|r.AppTitle="Grafana"|r.AppTitle="Volkov Labs"|g' {} \;

## Update Login Title
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|r.LoginTitle="Welcome to Grafana"|r.LoginTitle="Welcome to Volkov Labs"|g' {} \;

## Remove Documentation, Support, Community in the Footer
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|{target:"_blank",id:"documentation",text:(0,s.t)("nav.help/documentation","Documentation"),icon:"document-info",url:"https://grafana.com/docs/grafana/latest/?utm_source=grafana_footer"},{target:"_blank",id:"support",text:(0,s.t)("nav.help/support","Support"),icon:"question-circle",url:"https://grafana.com/products/enterprise/?utm_source=grafana_footer"},{target:"_blank",id:"community",text:(0,s.t)("nav.help/community","Community"),icon:"comments-alt",url:"https://community.grafana.com/?utm_source=grafana_footer"}||g' {} \;

## Remove Edition in the Footer
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|{target:"_blank",id:"version",text:`${d.edition}${y}`,url:g.licenseUrl}||g' {} \;

## Remove Version in the Footer
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|{target:"_blank",id:"version",text:`v${d.version} (${d.commit})`,url:h?"https://github.com/grafana/grafana/blob/main/CHANGELOG.md":void 0}||g' {} \;

#############################################################

USER grafana

## Entrypoint
ENTRYPOINT [ "/bin/bash", "/entrypoint.sh" ]
