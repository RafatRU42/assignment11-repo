

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Main/Main';
import AddService from './Pages/AddService/AddService';
import Blog from './Pages/Blog/Blog';
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyReviews from './Pages/MyReviews/MyReviews';
import PrivateRoute from './Pages/PriveteRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import Services from './Pages/Services/Services';
import 'react-photo-view/dist/react-photo-view.css';


function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[

      {path:'/', element:<Home></Home>},
      {path:'/home', element:<Home></Home>},
      {path:'/service', element:<Services></Services>},
      {path:'/services', element:<Services></Services>},
      {path:'/login', element: <Login></Login>},
      {path:'/register', element: <Register></Register>},
      {path:'/blog', element: <Blog></Blog>},
      {path:'/myreviews', element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>},
      {path:'/addservice', element: <AddService></AddService>},
      {path:'/services/:id', element: <Details></Details>,loader:({params}) =>fetch(`https://service-review-server-sigma-lyart.vercel.app/allservices/${params.id}`)},
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
