import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import MealItems from './components/MealItems';
import { queryClient } from './util/http';
import SignIn from './pages/SignIn';
import HomePage from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="foods" element={<MealItems />} />
      <Route path="sign-in" element={<SignIn />} />
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
