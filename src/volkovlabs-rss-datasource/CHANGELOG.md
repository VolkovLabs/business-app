# Change Log

## 2.4.0 (2023-04-08)

### Features / Enhancements

- Update to Grafana 9.4.7 (#44)
- Update CI and Release workflows (#45)
- Update Documentation, Provisioning (#46)
- Add URL parameters with variables support (#47, #48)

## 2.3.0 (2022-11-16)

### Features / Enhancements

- Update to Grafana 9.1.4 (#36)
- Add Compatibility Check Workflow (#37)
- Update CI to Node 16 and Synchronize with Release workflow (#39)
- Update to Grafana 9.2.2 (#40)
- Update CI to upload signed artifacts (#41)

## 2.2.0 (2022-08-25)

### Features / Enhancements

- Add YouTube video in README (#32)
- Rebuild based on 9.1.1 (#35)

## 2.1.0 (2022-06-23)

### Features / Enhancements

- Add YouTube fields parsing and refactoring (#31)

## 2.0.0 (2022-06-17)

### Breaking changes

- Requires Grafana 8.5+ and 9.0+

### Features / Enhancements

- Rebuild based on 9.0.0 (#30)

## 1.7.0 (2022-05-21)

### Features / Enhancements

- Support Feed URL with query parameters (#28)

## 1.6.2 (2022-05-13)

### Breaking changes

- Requires Grafana 8.3.0 or newer.

## 1.6.1 (2022-05-13)

### Features / Enhancements

- Clarify Breaking change introduced in 1.6.0 (#24)
- Refactor API tests and set parsing `rss.channel.item` as array always (#25)
- Improve test coverage (#26)

## 1.6.0 (2022-05-12)

### Breaking changes

- Automatic parsing of `author.name` and `media:thumbnail.url` fields break templates who uses them. To fix it, just replace it with `author` and `media:thumbnail`. Thanks to @vfauth for testing.

### Features / Enhancements

- Rebuild based on 8.5.2 (#23)

### Bug fixes

- Can't parse GitHub releases feed (#21)

## 1.5.0 (2022-04-25)

### Features / Enhancements

- Add Provisioning instructions to README (#16)
- Rebuild using 8.4.3 (#17)
- Adding RSS 1.0 support (#19)
- Rebuild based on 8.5.0 (#20)

## 1.4.0 (2022-02-18)

### Features / Enhancements

- Rebuild using 8.3.6 (#13)
- Rebuild using 8.4.0 and use PluginCheck v2 (#14)
- Select items/entries based on the selected Time Range (#3)

## 1.3.1 (2022-02-02)

### Bug fixes

- Google Workspace Atom feed failed #11

## 1.3.0 (2022-01-24)

### Features / Enhancements

- Update README with link to the Grafana Marketplace (#8)
- Rebuild using 8.3.4 (#6)

## 1.2.0 (2022-01-11)

### Features / Enhancements

- Signed as Community datasource plugin (#7).

## 1.1.0 (2021-12-27)

### Features / Enhancements

- Extract <img src="X"> from the <figure> (#5)
- Extract Guid's text from the <guid> (#5)
- Update dashboards layout

## 1.0.0 (2021-12-26)

### Features / Enhancements

- Supports RSS 2.0 and Atom.
- Works great with Dynamic Text panel by Marcus Olsson (marcusolsson-dynamictext-panel).
- Initial release based on the Volkov Labs Abc Data source template.
