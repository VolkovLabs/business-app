FROM grafana/grafana:9.4.3

ARG EXPECT_CLAIMS

## Set Grafana options
ENV GF_ENABLE_GZIP=true
ENV GF_USERS_DEFAULT_THEME=light
ENV GF_FEATURE_TOGGLES_ENABLE=topnav,newPanelChromeUI

## security
ENV GF_SECURITY_ALLOW_EMBEDDING=true

## Enable Anonymous Authentication
ENV GF_AUTH_ANONYMOUS_ENABLED=false
ENV GF_AUTH_BASIC_ENABLED=true

## Enable JWT Authentication
ENV GF_AUTH_JWT_ENABLED=true
ENV GF_AUTH_JWT_URL_LOGIN=true
ENV GF_AUTH_JWT_KEY_FILE=/etc/grafana/pubkey.pem
ENV GF_AUTH_JWT_ENABLE_LOGIN_TOKEN=true
ENV GF_AUTH_JWT_HEADER_NAME=X-JWT-Assertion
ENV GF_AUTH_JWT_EMAIL_CLAIM=email
ENV GF_AUTH_JWT_USERNAME_CLAIM=login
ENV GF_AUTH_JWT_EXPECT_CLAIMS='{"iss": "https://jwt.io/"}'
ENV GF_AUTH_JWT_AUTO_SIGN_UP=true

## Disable Sanitize
ENV GF_PANELS_DISABLE_SANITIZE_HTML=true

## Disable Explore
ENV GF_EXPLORE_ENABLED=false

## Disable Alerting
ENV GF_ALERTING_ENABLED=false
ENV GF_UNIFIED_ALERTING_ENABLED=true

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

##################################################################
## Customization depends on the Grafana version
## May work or not work for the version different from the current
## Check GitHub file history for the previous Grafana versions
##################################################################
USER root

## Replace Favicon
COPY img/fav32.png /usr/share/grafana/public/img

## Replace Logo
COPY src/img/logo.svg /usr/share/grafana/public/img/grafana_icon.svg

## Update Background
COPY img/background.svg /usr/share/grafana/public/img/g8_login_dark.svg
COPY img/background.svg /usr/share/grafana/public/img/g8_login_light.svg

## Replace custom alert templates
COPY custom/ng_alert_notification.html /usr/share/grafana/public/emails/ng_alert_notification.html
COPY custom/ng_alert_notification.txt /usr/share/grafana/public/emails/ng_alert_notification.txt

## Update Main Org. to Sakundi Dashboards
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
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|AppTitle="Grafana"|AppTitle="Sakundi Dashboards"|g' {} \;

## Update Login Title
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|LoginTitle="Welcome to Grafana"|LoginTitle="Welcome to Sakundi Dashboards"|g' {} \;

## Remove Documentation, Support, Community in the Footer
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|\[{target:"_blank",id:"documentation".*grafana_footer"}\]|\[\]|g' {} \;

## Remove Edition in the Footer
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|({target:"_blank",id:"version",.*licenseUrl})|()|g' {} \;

## Remove Version in the Footer
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|({target:"_blank",id:"version",.*CHANGELOG.md":void 0})|()|g' {} \;

## Remove New Version is available in the Footer
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|({target:"_blank",id:"updateVersion",.*grafana_footer"})|()|g' {} \;

## Update Search Place holder in the Top Navigation
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|("nav.search.placeholder","Search Grafana")|("nav.search.placeholder","Search")|g' {} \;

## Replace loading message
RUN find /usr/share/grafana/public/views/ -name *.html -exec sed -i 's|Loading Grafana|Loading|g' {} \;
##################################################################

USER grafana

## Entrypoint
ENTRYPOINT [ "/bin/bash", "/entrypoint.sh" ]
