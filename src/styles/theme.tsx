import type { ReactNode, CSSProperties } from 'react';
import ConfigProvider from 'antd/es/config-provider';
// Styles
import './global.scss';

const baseColors: Record<string, CSSProperties['color']> = {
  $brandViolet900: '#20075c',
  BrandViolet800: '#270086',
  BrandViolet700: '#3e00d5',
  BrandNeonGreen: '#ddff56',

  Greyscale800: '#121212',
  Greyscale900: '#0f0f0f',

  Grey900: '#101828',
  Grey800: '#182230',
  Grey700: '#344054',
  Grey600: '#475467',
  Grey500: '#667085',
  Grey400: '#98a2b3',
  Grey300: '#d0d5dd',
  Grey200: '#eaecf0',
  Grey150: '#edeff2',
  Grey100: '#f3f5f9',
  Grey50: '#f5f5f5',
  Grey0: '#ffffff',

  Orange600: '#ef9400',
  Orange200: 'rgba(239, 148, 0, 0.16)',
  Orange100: 'rgba(239, 148, 0, 0.08)',

  Blue600: '#1570ef',
  Blue200: 'rgba(21, 112, 239, 0.16)',
  Blue100: 'rgba(21, 112, 239, 0.08)',

  Red600: '#d92041',
  Red60: '#dc3452',
};

export default function ({ children = null as ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: baseColors.BrandViolet700,
          colorWarning: baseColors.Orange600,
          colorInfo: baseColors.Blue600,
          borderRadius: 8,
          colorBorder: baseColors.Grey300,
        },
        components: {
          Input: {
            paddingInline: 14,
            paddingBlock: 10,
            borderRadius: 8,
            fontSize: 14,
            colorBgContainerDisabled: baseColors.Grey100,
          },
          Button: {
            borderRadius: 100,
            borderRadiusLG: 100,
            borderRadiusSM: 100,
            borderRadiusXS: 100,
            paddingInline: 14,
            fontSize: 14,
            colorBgContainerDisabled: baseColors.Grey300,
          },
          Alert: {
            withDescriptionPadding: 12,
            withDescriptionIconSize: 32,
            fontSizeLG: 14,
            fontSize: 12,
            colorWarning: baseColors.Orange600,
            colorWarningBg: baseColors.Orange100,
            colorWarningBorder: baseColors.Orange200,
          },
          Select: {
            borderRadius: 8,
            optionPadding: '10px 12px',
            fontSize: 14,
          },
          Tooltip: {
            paddingSM: 18,
            paddingXS: 14,
            colorBgSpotlight: 'rgba(35, 35, 43, 0.80)',
            borderRadius: 32,
            fontSize: 14,
          },
          Carousel: {
            dotHeight: 6,
            borderRadius: 18,
            dotActiveWidth: 26,
          },
          Layout: {
            headerBg: baseColors.Grey0,
            bodyBg: baseColors.Grey0,
            footerBg: baseColors.Grey0,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
