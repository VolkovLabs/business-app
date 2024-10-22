import { Card, LinkButton, TagList } from '@grafana/ui';
import React from 'react';

/**
 * Static
 */
export const BusinessInput: React.FC = () => {
  return (
    <Card>
      <Card.Heading>Business Input</Card.Heading>
      <Card.Description>Allows storing and emulating your data using JavaScript and LLM.</Card.Description>
      <Card.Figure>
        <a target="_blank" rel="noreferrer" href="https://volkovlabs.io/plugins/business-input/">
          <svg width={40} height={40} viewBox="0 0 121 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="22.627" y="18.9824" width="98.1561" height="63.6777" fill="#9D70F9" />
            <rect x="22.627" width="98.1561" height="18.9824" fill="black" />
            <circle cx="33.4064" cy="9.17207" r="3.36445" fill="white" />
            <circle cx="44.135" cy="9.17207" r="3.36445" fill="white" />
            <circle cx="54.8645" cy="9.17207" r="3.36445" fill="white" />
            <rect x="53.7363" y="33.376" width="49.3179" height="7.28895" fill="white" />
            <rect x="71.4883" y="47.1768" width="31.5654" height="7.28895" fill="white" />
            <rect x="53.7363" y="60.9775" width="49.3179" height="7.28895" fill="white" />
            <path d="M53.7373 51.0762L0.000468014 82.6602V19.4922L53.7373 51.0762Z" fill="#FF5656" />
            <path
              d="M8.99219 65.2132V61.545C9.56346 61.545 10.0796 61.4097 10.5406 61.1391C11.0017 60.8786 11.3675 60.5178 11.6381 60.0567C11.9087 59.6057 12.044 59.0996 12.044 58.5384V42.663H15.7121V58.5384C15.7121 59.7611 15.4115 60.8786 14.8101 61.8908C14.2188 62.9031 13.412 63.7099 12.3898 64.3112C11.3775 64.9125 10.245 65.2132 8.99219 65.2132ZM13.9081 40.7237C13.3669 40.7237 12.9109 40.5483 12.5401 40.1975C12.1693 39.8367 11.9838 39.3857 11.9838 38.8445C11.9838 38.3133 12.1693 37.8673 12.5401 37.5065C12.9109 37.1457 13.3619 36.9653 13.8931 36.9653C14.4243 36.9653 14.8703 37.1457 15.2311 37.5065C15.6019 37.8673 15.7873 38.3133 15.7873 38.8445C15.7873 39.3857 15.6069 39.8367 15.2461 40.1975C14.8853 40.5483 14.4393 40.7237 13.9081 40.7237Z"
              fill="white"
            />
            <path
              d="M23.745 57.9671C22.9632 57.917 22.2065 57.7616 21.4749 57.501C20.7533 57.2304 20.1119 56.8646 19.5506 56.4036C18.9894 55.9426 18.5584 55.3914 18.2577 54.7499L21.3546 53.427C21.4749 53.6274 21.6703 53.8429 21.9409 54.0734C22.2115 54.2939 22.5323 54.4793 22.9031 54.6297C23.2839 54.78 23.6999 54.8552 24.1509 54.8552C24.5317 54.8552 24.8925 54.805 25.2333 54.7048C25.584 54.5946 25.8647 54.4292 26.0751 54.2087C26.2956 53.9882 26.4059 53.7026 26.4059 53.3518C26.4059 52.981 26.2756 52.6953 26.015 52.4949C25.7644 52.2844 25.4437 52.1291 25.0529 52.0289C24.672 51.9186 24.3012 51.8184 23.9404 51.7282C22.9883 51.5378 22.1013 51.2421 21.2795 50.8412C20.4677 50.4403 19.8112 49.9242 19.3101 49.2928C18.819 48.6513 18.5734 47.8796 18.5734 46.9776C18.5734 45.9854 18.834 45.1285 19.3552 44.4069C19.8864 43.6853 20.5729 43.1291 21.4148 42.7382C22.2667 42.3473 23.1837 42.1519 24.1659 42.1519C25.3585 42.1519 26.451 42.4024 27.4432 42.9036C28.4454 43.3946 29.2372 44.0912 29.8185 44.9932L26.917 46.707C26.7767 46.4665 26.5813 46.246 26.3307 46.0455C26.0802 45.8351 25.7945 45.6647 25.4738 45.5344C25.1531 45.3941 24.8173 45.3139 24.4666 45.2939C24.0156 45.2738 23.6046 45.3139 23.2338 45.4141C22.863 45.5144 22.5623 45.6847 22.3318 45.9253C22.1113 46.1658 22.0011 46.4865 22.0011 46.8874C22.0011 47.2683 22.1514 47.5539 22.4521 47.7443C22.7527 47.9247 23.1135 48.065 23.5345 48.1653C23.9654 48.2655 24.3764 48.3757 24.7672 48.496C25.6492 48.7866 26.476 49.1424 27.2478 49.5634C28.0295 49.9843 28.6559 50.5005 29.1269 51.1118C29.598 51.7232 29.8235 52.4548 29.8034 53.3067C29.8034 54.2789 29.5128 55.1308 28.9315 55.8624C28.3502 56.584 27.5985 57.1352 26.6765 57.5161C25.7644 57.8969 24.7873 58.0473 23.745 57.9671Z"
              fill="white"
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
          href="https://volkovlabs.io/plugins/business-input/"
        >
          Documentation
        </LinkButton>
        <LinkButton
          variant="secondary"
          icon="github"
          target="_blank"
          href="https://github.com/volkovlabs/business-input"
        >
          GitHub
        </LinkButton>
        <LinkButton
          variant="success"
          icon="cloud-download"
          target="_blank"
          href="https://grafana.com/grafana/plugins/marcusolsson-static-datasource/"
        >
          Grafana Catalog
        </LinkButton>
      </Card.Actions>
    </Card>
  );
};
