

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Main/Main';
import Home from './Pages/Home/Home';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[

      {path:'/', element:<Home></Home>},
      {path:'/home', element:<Home></Home>},
      {path:'/service', element:<Home></Home>},
      {path:'/login', element:<Home></Home>},
    ]}
  ])

  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
