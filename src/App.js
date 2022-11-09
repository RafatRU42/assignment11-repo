

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Main/Main';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[

      {path:'/', element:<Home></Home>},
      {path:'/home', element:<Home></Home>},
      {path:'/service', element:<Home></Home>, loader:() =>fetch('http://localhost:5000/services')},
      {path:'/login', element: <Login></Login>},
      {path:'/register', element: <Register></Register>},
      {path:'/blog', element: <Blog></Blog>},
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
