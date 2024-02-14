import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {
  Breadcrumb,
  Button,
  Layout,
  Menu,
  Popconfirm,
  Space,
  theme,
} from 'antd';
import { createElement } from 'react';
import styles from './Options.module.scss';
import { useDeleteAccountsData } from './useDeleteAccountsData';

const { Content, Footer, Sider } = Layout;

const menuItems: MenuProps['items'] = [UserOutlined].map((icon, index) => {
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
});

export default function () {
  const { handleConfirmClick } = useDeleteAccountsData();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>ZPass</Breadcrumb.Item>
          <Breadcrumb.Item>Preferences</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['user1']}
              style={{ height: '100%' }}
              items={menuItems}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Space>
              <p>Delete all user accounts from IndexedDB</p>

              <Popconfirm
                title="Delete the data"
                description="Are you sure to delete this data?"
                onConfirm={handleConfirmClick}
                okText="Yes"
                cancelText="No"
                okType="danger"
              >
                <Button danger className={styles.buttonDelete}>
                  Delete
                </Button>
              </Popconfirm>
            </Space>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}></Footer>
    </Layout>
  );
}
