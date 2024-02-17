'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ServiceLocator } from '~/services';

type TableData = {
  key: string;
  property: string;
  value: string;
};

export const useHome = () => {
  const [data, setData] = useState([] as TableData[]);
  const router = useRouter();
  useEffect(() => {
    ServiceLocator.getIndexedDB()
      .accounts.getLastAccount()
      .then((res: any) => {
        const dataSource = Object.entries(res).map(([key, value]: any) => ({
          key: key,
          property: key,
          value: value,
        }));
        setData(dataSource);
      });
  }, []);

  const handleLogoutClick = () => {
    router.push('/login');
  };

  return {
    data,
    handleLogoutClick,
  };
};
