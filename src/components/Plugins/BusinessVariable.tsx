import { Card, LinkButton, TagList } from '@grafana/ui';
import React from 'react';

/**
 * Business Variable
 */
export const BusinessVariable: React.FC = () => {
  return (
    <Card>
      <Card.Heading>Business Variable</Card.Heading>
      <Card.Description>
        Allows you to have dashboard filters in a separate panel to place anywhere on the dashboard.
      </Card.Description>
      <Card.Figure>
        <a target="_blank" rel="noreferrer" href="https://volkovlabs.io/plugins/business-variable/">
          <svg width="40" height="40" viewBox="0 0 135 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="134.309" height="99.6489" fill="#9D70F9" />
            <rect y="8.66528" width="134.309" height="1.08314" fill="white" />
            <circle cx="117.977" cy="4.71319" r="1.81499" fill="white" />
            <circle cx="123.419" cy="4.71319" r="1.81499" fill="white" />
            <circle cx="128.866" cy="4.71319" r="1.81499" fill="white" />
            <path d="M37.5957 19.6726H118.001V33.328H37.5957V19.6726Z" fill="white" />
            <path d="M64.3965 46.9839H118V60.6392H64.3965V46.9839Z" fill="white" />
            <path d="M91.1953 75.3445H117.997V88.9998H91.1953V75.3445Z" fill="white" />
            <path
              d="M40.0773 64.8408H54.9672C55.6254 64.8408 56.2566 64.5641 56.722 64.0716C57.1874 63.5791 57.4488 62.9112 57.4488 62.2147V46.4585C57.4488 45.7621 57.1874 45.0941 56.722 44.6017C56.2566 44.1092 55.6254 43.8325 54.9672 43.8325H40.0773C39.4192 43.8325 38.788 44.1092 38.3226 44.6017C37.8572 45.0941 37.5957 45.7621 37.5957 46.4585V62.2147C37.5957 62.9112 37.8572 63.5791 38.3226 64.0716C38.788 64.5641 39.4192 64.8408 40.0773 64.8408ZM42.559 49.0846H52.4856V59.5887H42.559V49.0846Z"
              fill="white"
            />
            <path
              d="M14.1408 35.4293H28.2861C28.9114 35.4293 29.511 35.1664 29.9532 34.6986C30.3953 34.2307 30.6437 33.5962 30.6437 32.9345V17.9662C30.6437 17.3045 30.3953 16.67 29.9532 16.2021C29.511 15.7343 28.9114 15.4714 28.2861 15.4714H14.1408C13.5155 15.4714 12.9158 15.7343 12.4737 16.2021C12.0316 16.67 11.7832 17.3045 11.7832 17.9662V32.9345C11.7832 33.5962 12.0316 34.2307 12.4737 34.6986C12.9158 35.1664 13.5155 35.4293 14.1408 35.4293ZM16.4983 20.4609H25.9286V30.4398H16.4983V20.4609Z"
              fill="white"
            />
            <path
              d="M69.9595 88.9998H69.9328C69.6402 88.9977 69.3509 88.9368 69.0815 88.8205C68.8121 88.7042 68.568 88.5349 68.3632 88.3224L64.025 83.7359C63.6155 83.3053 63.3909 82.7268 63.4007 82.1278C63.4105 81.5288 63.6538 80.9582 64.0772 80.5417C64.5005 80.1251 65.0692 79.8967 65.6582 79.9067C65.9498 79.9116 66.2376 79.9749 66.5052 80.0929C66.7727 80.211 67.0148 80.3815 67.2176 80.5947L69.9972 83.5304L77.3881 76.1031C77.59 75.8719 77.8365 75.6853 78.1122 75.5549C78.3879 75.4245 78.6871 75.3532 78.991 75.3452C79.295 75.3373 79.5973 75.3929 79.8793 75.5087C80.1612 75.6245 80.4168 75.798 80.6301 76.0184C80.8435 76.2388 81.01 76.5014 81.1194 76.79C81.2289 77.0785 81.2789 77.3869 81.2663 77.6959C81.2538 78.0049 81.1789 78.308 81.0465 78.5864C80.914 78.8648 80.7268 79.1126 80.4963 79.3143L71.5136 88.3472C71.0997 88.7636 70.5416 88.9979 69.9595 88.9998Z"
              fill="#FF5656"
            />
          </svg>
        </a>
      </Card.Figure>
      <Card.Tags>
        <TagList tags={['Panel']} />
      </Card.Tags>
      <Card.Actions>
        <LinkButton
          variant="primary"
          icon="book-open"
          target="_blank"
          href="https://volkovlabs.io/plugins/business-variable/"
        >
          Documentation
        </LinkButton>
        <LinkButton
          variant="secondary"
          icon="github"
          target="_blank"
          href="https://github.com/volkovlabs/business-variable"
        >
          GitHub
        </LinkButton>
        <LinkButton
          variant="success"
          icon="cloud-download"
          target="_blank"
          href="https://grafana.com/grafana/plugins/volkovlabs-variable-panel/"
        >
          Grafana Catalog
        </LinkButton>
      </Card.Actions>
    </Card>
  );
};
