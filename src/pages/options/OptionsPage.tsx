import { Button, Layout, Menu, Popconfirm, Space, theme } from 'antd';
import styles from './Options.module.scss';
import OptionsBreadcrumb from './components/OptionsBreadcrumb';
import { menuItems } from './components/menuItems';
import { useDeleteAccountsData } from './useDeleteAccountsData';

const { Content, Footer, Sider } = Layout;

export default function () {
  const { handleConfirmClick } = useDeleteAccountsData();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Content className={styles.contentMain}>
        <OptionsBreadcrumb />
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
          <Content className={styles.contentDelete}>
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
      <Footer className={styles.footer}></Footer>
    </Layout>
  );
}
