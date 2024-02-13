import { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// Constants
import { ROUTES, RouteName } from '~/constants/routes';
// Components
import Home from '~/components/screens/Home/Home';
import Login from '~/components/screens/Login/Login';

export default function () {
  const routes: {
    path: RouteName;
    element: ReactNode;
  }[] = [
    {
      path: ROUTES.HOME,
      element: <Home />,
    },
    {
      path: ROUTES.LOGIN,
      element: <Login />,
    },
  ];

  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/" />} />

      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
