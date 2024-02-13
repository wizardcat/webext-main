import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import { useLogin } from './useLogin';

export default function () {
  const { handleSubmit, onSubmit, register, errors, message } = useLogin();

  return (
    <div className={styles.login}>
      <div className={styles.loginHeader}>
        <div>
          <Link to={'/'}>Back</Link>
        </div>
        <h1>Login</h1>
      </div>
      <div>
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.loginFormGroup}>
            <label htmlFor="email" className={styles.labelFormInput}>
              Email
            </label>
            <input
              id="email"
              type="text"
              {...register('email')}
              className={clsx(
                styles.loginFormControl,
                errors.email ? styles.formControlIsInvalid : ''
              )}
            />
            <div className={styles.invalidValue}>{errors.email?.message}</div>
          </div>

          <div className={styles.loginFormGroup}>
            <label htmlFor="password" className={styles.labelFormInput}>
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register('password')}
              className={clsx(
                styles.loginFormControl,
                errors.password ? styles.formControlIsInvalid : ''
              )}
            />
            <div className={styles.invalidValue}>
              {errors.password?.message}
            </div>
          </div>

          <div className={styles.loginFormGroup}>
            <button type="submit" className={styles.loginButton}>
              Log In
            </button>
          </div>
        </form>
      </div>
      {message && <div className={styles.dataSaveMessage}>{message}</div>}
    </div>
  );
}
