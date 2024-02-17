'use client';
import { Button, Table } from 'antd/lib';
import styles from './Home.module.scss';
import { useHome } from './useHome';

export default function HomePage() {
  const { data, handleLogoutClick } = useHome();

  const columns = [
    {
      title: 'Property',
      dataIndex: 'property',
      key: 'property',
      width: 80,
      ellipsis: true,
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      width: 200,
      ellipsis: true,
    },
  ];

  return (
    <div className={styles.root}>
      <Button
        size="small"
        className={styles.buttonLogout}
        onClick={handleLogoutClick}
      >
        Log out
      </Button>
      <div className={styles.tableSection}>
        <h1 className={styles.tableHeader}>IndexedDB data</h1>
        <Table dataSource={data} columns={columns} pagination={false} />
      </div>
    </div>
  );
}
