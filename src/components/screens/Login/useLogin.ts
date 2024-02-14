import { message } from 'antd';
import { Rule } from 'antd/es/form';
import { useNavigate } from 'react-router-dom';
import { ServiceLocator } from '~/services';
import { LoginCredentials } from './login.type';
import { mockLogin } from './mockLogin';

const emailRules: Rule[] = [
  { required: true, message: 'Please input your Email!' },
  { type: 'email', message: 'Please enter a valid email address' },
];

const validatePassword = (_: any, value: string) => {
  if (value.length < 6) {
    return Promise.reject('Password must be at least 6 characters long');
  }
  return Promise.resolve();
};

const passwordRules: Rule[] = [
  { required: true, message: 'Please input your Password!' },
  { validator: validatePassword },
];

export const useLogin = () => {
  const navigate = useNavigate();

  const login = (data: LoginCredentials) => {
    const isLogin = mockLogin(data);

    return isLogin;
  };

  async function getCurrentTab() {
    const queryOptions = { active: true, lastFocusedWindow: true };
    const [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  const saveToIndexedDB = (email: string) => {
    //use delays for the messages showing
    setTimeout(async () => {
      const currentTab = await getCurrentTab();
      ServiceLocator.getIndexedDB()
        .accounts.createAccount({
          email: email,
          url: currentTab.url,
        })
        .then(() => {
          message.success('Credentials has been saved');
        })
        .catch((e) => {
          message.error('The data saving error: ' + JSON.stringify(e));
        });
    }, 1000);
  };

  const onFinish = (data: LoginCredentials) => {
    const isLogin = login(data);

    if (isLogin) {
      saveToIndexedDB(data.email);

      setTimeout(() => {
        navigate('/');
      }, 1000);
      return;
    }

    message.error('Login failed. Please check your credentials.');
  };

  return {
    emailRules,
    passwordRules,
    onFinish,
    message,
  };
};
