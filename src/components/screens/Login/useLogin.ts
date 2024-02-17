import { message } from 'antd/lib';
import { Rule } from 'antd/lib/form';
import { useRouter } from 'next/navigation';
import { ServiceLocator } from '~/services';
import { getCurrentTab } from '~/services/getCurrentTab';
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
  const router = useRouter();

  const login = (data: LoginCredentials) => {
    const isLogin = mockLogin(data);

    return isLogin;
  };

  const saveToIndexedDB = (email: string) => {
    //use delays for the messages showing
    setTimeout(async () => {
      const currentTab = await getCurrentTab();
      ServiceLocator.getIndexedDB()
        .accounts.createAccount({
          email: email,
          url: currentTab.url || '',
        })
        .then(() => {
          message.success('Credentials has been saved');
        })
        .catch((e) => {
          message.error('The data saving error: ' + JSON.stringify(e));
        });
    }, 1000);
  };

  const handleFinish = (data: LoginCredentials) => {
    const isLogin = login(data);
    if (isLogin) {
      saveToIndexedDB(data.email);
      setTimeout(() => {
        router.push('/');
      }, 1000);
      return;
    }
    message.error('Login failed. Please check your credentials.');
  };

  return {
    emailRules,
    passwordRules,
    handleFinish,
    message,
  };
};
