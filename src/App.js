import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Error from "./components/Error";
import { Provider } from "react-redux";
import store from "./Utils/store";

const Head = () => {
  return (
    <>
     <Provider store={store}>
      <Header />
      <Outlet />
      </Provider>
    
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    element: <Head />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
     
    </>
  );
}

export default App;
