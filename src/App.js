import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { ProductsDashboardPage } from './components/pages/ProductsDashboardPage';
import { CartPage } from './components/pages/CartPage';
import { RootLayout } from './components/templates/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/*Dashboard is a default component */}
      <Route index element={<ProductsDashboardPage />}></Route>
      <Route path='/cart' element={<CartPage />}></Route>
    </Route>))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
