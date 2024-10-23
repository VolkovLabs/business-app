import { Card, LinkButton, TagList } from '@grafana/ui';
import React from 'react';

/**
 * Business Satellite
 */
export const BusinessSatellite: React.FC = () => {
  return (
    <Card>
      <Card.Heading>Business Satellite</Card.Heading>
      <Card.Description>Allows to retrieve data from local and remote Grafana instances via HTTP API.</Card.Description>
      <Card.Figure>
        <a target="_blank" rel="noreferrer" href="https://volkovlabs.io/plugins/business-satellite/">
          <svg width={40} height={40} viewBox="0 0 150 98" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M138.221 8.40285C139.03 8.39004 139.671 8.41821 140.173 8.46435C139.982 8.93074 139.712 9.5125 139.327 10.2245C137.473 13.6589 133.901 18.2439 128.494 23.6866C117.773 34.4772 101.181 47.3034 81.2424 59.4119C61.3035 71.5204 42.2714 80.328 27.7528 84.8648C20.4296 87.1532 14.7144 88.2077 10.8117 88.2695C10.0027 88.2823 9.36167 88.2541 8.86004 88.208C9.05042 87.7416 9.32102 87.1598 9.70549 86.4478C11.56 83.0134 15.1312 78.4285 20.5388 72.9857C24.2813 69.2188 28.7392 65.2039 33.8053 61.058C33.0302 57.857 32.6241 54.5709 32.5998 51.2642C9.68483 69.2142 -3.56231 85.8301 0.839592 93.0786C5.42252 100.625 27.837 95.8792 55.8853 82.652C61.7293 86.4247 68.6912 88.6144 76.1646 88.6144C78.36 88.6144 80.5112 88.4254 82.6029 88.0629C81.3854 85.131 80.7134 81.9156 80.7134 78.5431C80.7134 64.8244 91.8346 53.7031 105.553 53.7031C108.301 53.7031 110.944 54.1491 113.414 54.9727C113.54 53.7237 113.605 52.4566 113.605 51.1744C113.605 50.0074 113.551 48.8528 113.447 47.7131C138.185 28.8934 152.783 11.1516 148.193 3.59368C143.388 -4.3188 118.981 1.28215 89.0299 16.0033C85.018 14.5354 80.6849 13.7344 76.1646 13.7344C55.4871 13.7344 38.7246 30.4968 38.7246 51.1744C38.7246 58.4805 40.8173 65.2979 44.4361 71.0597C55.8253 65.8995 67.9752 59.3827 79.8195 52.0606C90.1563 45.6704 99.7871 38.7488 108.292 31.9392C105.704 27.6254 102.272 23.876 98.2233 20.9194C106.655 17.0079 114.465 13.9372 121.28 11.8075C128.603 9.51916 134.318 8.46465 138.221 8.40285ZM140.622 6.91223C140.623 6.89999 140.622 6.89416 140.622 6.89416C140.622 6.89416 140.622 6.89549 140.622 6.89797C140.622 6.90098 140.622 6.90575 140.622 6.91223ZM7.25937 87.883C7.25937 87.883 7.26508 87.8854 7.27533 87.8913C7.2643 87.8861 7.25937 87.883 7.25937 87.883ZM8.41022 89.7601L8.41047 89.7705C8.41047 89.7755 8.41028 89.7782 8.41028 89.7782C8.41028 89.7782 8.4098 89.7723 8.41022 89.7601ZM141.757 8.78098C141.768 8.78625 141.773 8.78935 141.773 8.78935C141.773 8.78935 141.768 8.78689 141.757 8.78098Z"
              fill="#9D70F9"
            />
            <path
              d="M124.472 78.5428C124.472 88.9914 116.002 97.4616 105.554 97.4616C95.105 97.4616 86.6348 88.9914 86.6348 78.5428C86.6348 68.0943 95.105 59.624 105.554 59.624C116.002 59.624 124.472 68.0943 124.472 78.5428Z"
              fill="#FF5656"
            />
          </svg>
        </a>
      </Card.Figure>
      <Card.Tags>
        <TagList tags={['Data Source']} />
      </Card.Tags>
      <Card.Actions>
        <LinkButton
          variant="primary"
          icon="book-open"
          target="_blank"
          href="https://volkovlabs.io/plugins/business-satellite/"
        >
          Documentation
        </LinkButton>
        <LinkButton
          variant="secondary"
          icon="github"
          target="_blank"
          href="https://github.com/volkovlabs/business-satellite"
        >
          GitHub
        </LinkButton>
        <LinkButton
          variant="success"
          icon="cloud-download"
          target="_blank"
          href="https://grafana.com/grafana/plugins/volkovlabs-grapi-datasource/"
        >
          Grafana Catalog
        </LinkButton>
      </Card.Actions>
    </Card>
  );
};
