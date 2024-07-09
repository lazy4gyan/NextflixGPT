import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
// import Login from "./Login";
import Auth from "./Auth";

const Layout = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);


  
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Layout;
