import { UserOutlined } from '@ant-design/icons/lib';
import { MenuProps } from 'antd/lib';
import { createElement } from 'react';

export const menuItems: MenuProps['items'] = [UserOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `user${key}`,
      icon: createElement(icon),
      label: 'Users',

      children: [
        {
          key: 1,
          label: 'IndexedDB',
        },
      ],
    };
  }
);
