import styles from './Options.module.scss';
import { useDeleteAccountsData } from './useDeleteAccountsData';

export default function () {
  const { onClick, message } = useDeleteAccountsData();

  return (
    <div className={styles.mainWrapper}>
      <button className={styles.optionsButton} onClick={onClick}>
        Clear IndexDB
      </button>
      {message && <div className={styles.optionsMessage}>{message}</div>}
    </div>
  );
}
