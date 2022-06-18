import React, { FC } from 'react';
import { SVGProps } from '../types';

/**
 * Base64 Image/Video/Audio/PDF panel
 */
export const Base64Image: FC<SVGProps> = ({ size, fill, ...rest }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://volkovlabs.io/plugins/volkovlabs-image-panel/"
      title="Base64 Image/Video/Audio/PDF panel"
    >
      <svg id="Base64Image" width={size} height={size} viewBox="0 0 88 62" {...rest}>
        <rect x="0.837646" y="0.64502" width="86.7975" height="61.1037" fill="#FF5656" />
        <circle cx="69.5012" cy="19.302" r="9.13037" fill="#F5F6F9" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.837646 61.7487H24.911L24.9109 61.7488H78.6315L51.7712 32.4673L37.088 48.474L16.9507 26.5216L0.837646 44.0871V61.7487Z"
          fill="#111111"
        />
      </svg>
    </a>
  );
};
