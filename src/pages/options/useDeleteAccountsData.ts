import { message } from 'antd';
import { ServiceLocator } from '~/services';

export const useDeleteAccountsData = () => {
  const handleConfirmClick = () => {
    ServiceLocator.getIndexedDB()
      .accounts.table.clear()
      .then(() => {
        message.success('The users data has been deleted');
      })
      .catch((e) => message.error(`The error: ${e}`));
  };

  return { handleConfirmClick, message };
};
