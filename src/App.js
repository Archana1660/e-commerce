import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './components/pages/ProductsPage';
import { Dashboard } from './components/pages/Dashboard';
import { Cart } from './components/pages/Cart';
import { RootLayout } from './components/templates/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/*Dashboard is a default component */}
      <Route index element={<Dashboard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>))
  return (
    <div className="App">
      {/* <ProductsPage /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
