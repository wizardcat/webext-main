import { useEffect, useState } from 'react';
// Styles
import { Link } from 'react-router-dom';
import { ServiceLocator } from '~/services';
import styles from './Home.module.scss';

export default function () {
  const [email, setEmail] = useState('');
  useEffect(() => {
    // ServiceLocator.getIndexedDB()
    //   .accounts.getAccount('foo')
    //   .then((res) => {
    //     console.log('res', res);
    //   });

    ServiceLocator.getIndexedDB()
      .accounts.getLastAccount()
      .then((res: any) => {
        setEmail(res?.email);
      });
  }, []);

  return (
    <div className={styles.root}>
      {email ? (
        <div className={styles.linkLogin}>
          Hi,{'\u00A0'} {email}
          {'\u00A0'}
          <Link
            to={''}
            onClick={() => {
              setEmail('');
            }}
          >
            Log Out{' '}
          </Link>
        </div>
      ) : (
        <div className={styles.linkLogin}>
          Hi Guest,{'\u00A0'} <Link to={'login'}>Log In </Link>
        </div>
      )}
      <h2>
        The <b>Home</b> page is in development status yet
      </h2>
    </div>
  );
}
