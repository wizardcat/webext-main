import { useState } from 'react';
import { ServiceLocator } from '~/services';

export const useDeleteAccountsData = () => {
  const [message, setMessage] = useState('');
  const onClick = () => {
    ServiceLocator.getIndexedDB()
      .accounts.table.clear()
      .then(() => {
        setMessage('The accounts table has been cleared');

        setTimeout(() => {
          setMessage('');
        }, 3000);
      });
  };

  return { onClick, message };
};
