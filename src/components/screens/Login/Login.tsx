import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import styles from './Login.module.scss';
import { useLogin } from './useLogin';

export default function () {
  const { emailRules, passwordRules, onFinish } = useLogin();

  return (
    <div className={styles.root}>
      <div className={styles.mainWrapper}>
        <h1 className={styles.header}>Login</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item name="email" rules={emailRules}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              className={styles.formInput}
            />
          </Form.Item>
          <Form.Item name="password" rules={passwordRules}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              className={styles.formInput}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
