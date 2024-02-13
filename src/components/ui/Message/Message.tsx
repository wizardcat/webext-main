import styles from './Message.module.scss';

export default function (messageText: string) {
  return (
    <div>
      <div className={styles.message}>{messageText}</div>
    </div>
  );
}
