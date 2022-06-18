ARG GRAFANA_VERSION="9.0.0"

FROM grafana/grafana:${GRAFANA_VERSION}

# Set DEBIAN_FRONTEND=noninteractive in environment at build-time
ARG DEBIAN_FRONTEND=noninteractive

# Set Grafana options
ENV GF_ENABLE_GZIP=true
ENV GF_USERS_DEFAULT_THEME=light

# Authentication
ENV GF_AUTH_ANONYMOUS_ORG_ROLE=Admin
ENV GF_AUTH_ANONYMOUS_ENABLED=true
ENV GF_AUTH_BASIC_ENABLED=false

# Sanitize
ENV GF_PANELS_DISABLE_SANITIZE_HTML=true

# Explore
ENV GF_EXPLORE_ENABLED=false

# Alerting
ENV GF_ALERTING_ENABLED=false
ENV GF_UNIFIED_ALERTING_ENABLED=false

# Paths
ENV GF_PATHS_PROVISIONING="/etc/grafana/provisioning"
ENV GF_PATHS_PLUGINS="/var/lib/grafana/plugins"

# Copy artifacts
COPY --chown=grafana:root dist /app
COPY entrypoint.sh /

###### Customization ########################################
USER root

# Replace Favicon
COPY img/fav32.png /usr/share/grafana/public/img

# Replace Logo
COPY src/img/logo.svg /usr/share/grafana/public/img/grafana_icon.svg

# Update Title
RUN sed -i 's|<title>\[\[.AppTitle\]\]</title>|<title>Volkov Labs</title>|g' /usr/share/grafana/public/views/index.html

# Update Javascript
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|o(l,"AppTitle","Grafana")|o(l,"AppTitle","Volkov Labs")|g' {} \;
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|o(l,"LoginTitle","Welcome to Grafana")|o(l,"LoginTitle","Welcome to Volkov Labs")|g' {} \;
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|{text:"Documentation",icon:"document-info",url:"https://grafana.com/docs/grafana/latest/?utm_source=grafana_footer",target:"_blank"},{text:"Support",icon:"question-circle",url:"https://grafana.com/products/enterprise/?utm_source=grafana_footer",target:"_blank"},{text:"Community",icon:"comments-alt",url:"https://community.grafana.com/?utm_source=grafana_footer",target:"_blank"}||g' {} \;
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|{text:`${e.edition}${a}`,url:t.licenseUrl}||g' {} \;
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|{text:`v${e.version} (${e.commit})`}||g' {} \;
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|{id:"updateVersion",text:"New version available!",icon:"download-alt",url:"https://grafana.com/grafana/download?utm_source=grafana_footer",target:"_blank"}||g' {} \;

# Entrypoint
ENTRYPOINT [ "/bin/bash", "/entrypoint.sh" ]
