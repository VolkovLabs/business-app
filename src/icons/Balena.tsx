import React, { FC } from 'react';
import { SVGProps } from '../types';

/**
 * Balena Application
 */
export const Balena: FC<SVGProps> = ({ size, fill, ...rest }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://volkovlabs.io/plugins/volkovlabs-echarts-panel/"
      title="Apache ECharts Panel"
    >
      <svg id="ECharts" width={size} height={size} viewBox="0 0 176 176" {...rest}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M141.545 137.134L141.748 147.155L137.553 147.24L137.35 137.219L141.545 137.134Z"
          fill="#111111"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M128.777 136.941L128.98 146.962L124.785 147.047L124.582 137.026L128.777 136.941Z"
          fill="#111111"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M116.484 137.287L116.687 147.308L112.492 147.393L112.289 137.372L116.484 137.287Z"
          fill="#111111"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.7367 7.91157V17.9341H68.541V7.91157H72.7367Z"
          fill="#111111"
        />
        <circle cx="51.041" cy="13.434" r="4.5" stroke="#111111" strokeWidth="2" />
        <path
          d="M74.2761 136.611L35.0603 122.098M74.2761 136.611C74.2761 136.611 71.5449 92.9114 69.5449 64.4114M74.2761 136.611L151.545 114.911M35.0603 122.098L29.7755 55.5722M35.0603 122.098C35.0603 122.098 60.0449 82.9114 69.5449 64.4114M29.7755 55.5722C52.1755 45.2723 97.2445 24.9883 98.3201 26.2513M29.7755 55.5722C29.7755 55.5722 60.0449 62.9114 69.5449 64.4114M98.3201 26.2513C99.3957 27.5143 126.154 44.009 139.398 52.0984M98.3201 26.2513L106.045 106.911M98.3201 26.2513C98.3201 26.2513 84.0449 44.9114 69.5449 64.4114M139.398 52.0984L151.545 114.911M139.398 52.0984L106.045 106.911M151.545 114.911L106.045 106.911M69.5449 64.4114C69.5449 64.4114 105.518 107.212 106.045 106.911"
          stroke="#111111"
          strokeWidth="2"
        />
        <rect x="92.5449" y="13.9114" width="20" height="20" fill="#9D70F9" />
        <rect x="96" y="94" width="20" height="20" fill="#111111" />
        <rect x="21.5449" y="46.9114" width="20" height="20" fill="#111111" />
        <rect x="61.5449" y="57.9114" width="14" height="14" fill="#FF5656" />
        <rect x="66" y="129" width="14" height="14" fill="#9D70F9" />
        <rect x="145" y="107" width="14" height="14" fill="#9D70F9" />
        <rect x="28" y="114" width="14" height="14" fill="#FF5656" />
        <rect x="128.547" y="46.9116" width="14" height="14" fill="#FF5656" />
      </svg>
    </a>
  );
};
