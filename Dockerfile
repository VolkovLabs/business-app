FROM grafana/grafana:9.3.0

# Set Grafana options
ENV GF_ENABLE_GZIP=true
ENV GF_USERS_DEFAULT_THEME=light

# Authentication
ENV GF_AUTH_ANONYMOUS_ENABLED=true
ENV GF_AUTH_BASIC_ENABLED=false

# Sanitize
ENV GF_PANELS_DISABLE_SANITIZE_HTML=true

# Explore
ENV GF_EXPLORE_ENABLED=false

# Alerting
ENV GF_ALERTING_ENABLED=false
ENV GF_UNIFIED_ALERTING_ENABLED=false

# Home Dashboard
ENV GF_DASHBOARDS_DEFAULT_HOME_DASHBOARD_PATH=/etc/grafana/provisioning/dashboards/news.json

# Paths
ENV GF_PATHS_PROVISIONING="/etc/grafana/provisioning"
ENV GF_PATHS_PLUGINS="/var/lib/grafana/plugins"

# Copy artifacts
COPY --chown=grafana:root dist /app
COPY entrypoint.sh /

# Provisioning
COPY --chown=grafana:root provisioning $GF_PATHS_PROVISIONING

###### Customization ########################################
USER root

# Replace Favicon
COPY img/fav32.png /usr/share/grafana/public/img

# Replace Logo
COPY src/img/logo.svg /usr/share/grafana/public/img/grafana_icon.svg

# Background
COPY img/background.svg /usr/share/grafana/public/img/g8_login_dark.svg
COPY img/background.svg /usr/share/grafana/public/img/g8_login_light.svg

# Update Javascript
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|"AppTitle","Grafana")|"AppTitle","Volkov Labs")|g' {} \;
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|"LoginTitle","Welcome to Grafana")|"LoginTitle","Welcome to Volkov Labs")|g' {} \;
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|{target:"_blank",id:"documentation",text:"Documentation",icon:"document-info",url:"https://grafana.com/docs/grafana/latest/?utm_source=grafana_footer"},{target:"_blank",id:"support",text:"Support",icon:"question-circle",url:"https://grafana.com/products/enterprise/?utm_source=grafana_footer"},{target:"_blank",id:"community",text:"Community",icon:"comments-alt",url:"https://community.grafana.com/?utm_source=grafana_footer"}||g' {} \;

RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|{target:"_blank",id:"version",text:`${e.edition}${s}`,url:t.licenseUrl}||g' {} \;
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|{target:"_blank",id:"version",text:`v${e.version} (${e.commit})`,url:i?"https://github.com/grafana/grafana/blob/main/CHANGELOG.md":void 0}||g' {} \;
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|{target:"_blank",id:"updateVersion",text:"New version available!",icon:"download-alt",url:"https://grafana.com/grafana/download?utm_source=grafana_footer"}||g' {} \;

#############################################################

USER grafana

# Entrypoint
ENTRYPOINT [ "/bin/bash", "/entrypoint.sh" ]
