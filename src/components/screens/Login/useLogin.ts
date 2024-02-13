import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ServiceLocator } from '~/services';
import { LoginCredentials } from './login.type';
import { mockLogin } from './mockLogin';

export const useLogin = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required')
      .required(),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters')
      .required('Password is required')
      .required(),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: yupResolver(validationSchema),
  });

  const login = (data: LoginCredentials) => {
    const isLogin = mockLogin(data);
    if (isLogin) setMessage('Login successful!');
    return isLogin;
  };

  async function getCurrentTab() {
    const queryOptions = { active: true, lastFocusedWindow: true };
    const [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  const saveToIndexedDB = (email: string) => {
    setMessage('Saving the user data to the IndexDB');
    //use delays for the messages showing
    setTimeout(async () => {
      const currentTab = await getCurrentTab();
      ServiceLocator.getIndexedDB()
        .accounts.createAccount({
          email: email,
          url: currentTab.url,
        })
        .then(() => {
          setMessage(`The data of ${email} has been saved`);
        })
        .catch((e) => {
          setMessage('The data saving error: ' + JSON.stringify(e));
        });
      setTimeout(() => {
        setMessage('');
      }, 1000);
    }, 1000);
  };

  const onSubmit = (data: LoginCredentials) => {
    const isLogin = login(data);

    if (isLogin) {
      saveToIndexedDB(data.email);

      setTimeout(() => {
        navigate('/');
      }, 4000);
      return;
    }

    setMessage('Login failed. Please check your credentials.');
  };

  return { handleSubmit, onSubmit, register, errors, message };
};
