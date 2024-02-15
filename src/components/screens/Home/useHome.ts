import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceLocator } from '~/services';

export const useHome = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    ServiceLocator.getIndexedDB()
      .accounts.table.count()
      .then((res) => {
        if (!res) navigate('login');

        ServiceLocator.getIndexedDB()
          .accounts.getLastAccount()
          .then((res: any) => {
            const dataSource = Object.entries(res).map(([key, value]) => ({
              key,
              property: key,
              value,
            }));
            setData(dataSource);
          });
      });
  }, [navigate]);

  const handleLogoutClick = () => {
    navigate('/login');
  };

  return {
    data,
    handleLogoutClick,
  };
};
