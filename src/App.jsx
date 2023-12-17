import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import { queryClient } from './util/http';
import LoginPage, { action as loginAction } from './pages/Login';
import HomePage from './pages/Home';
import SignUpPage from './pages/SignUp';
import FoodsPage from './pages/Food';
import auth from './ui/auth';
import { action as logoutAction } from './ui/Logout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      id="root"
      element={<RootLayout />}
      errorElement={<ErrorPage />}
      loader={auth}
    >
      <Route index element={<HomePage />} />
      <Route path="foods" element={<FoodsPage />} />
      <Route path="login" element={<LoginPage />} action={loginAction} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="logout" action={logoutAction} />
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
