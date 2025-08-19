import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { AppLayout } from "./components/AppLayout"
import {Home} from "./pages/Home.jsx"
import {About} from "./pages/About.jsx"
import {Contact, ContactData} from "./pages/Contact.jsx"
import {Movies} from "./pages/Movies.jsx";
import { ErrorPage } from "./pages/Error.jsx"
import { getAPIData } from "./components/getAPIData.jsx"
import { Loading } from "./components/Loading.jsx"
import { MovieDetails } from "./pages/MovieDetails.jsx"
import { getMoviesData } from "./components/getMoviesData.jsx"
const HydrateFallback = () => <Loading></Loading>;
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      HydrateFallback,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact />,action:ContactData},
        {
          path: "/movies",
          element: <Movies />,
          loader: getAPIData,
        },
        {
          path: "/movies/:movieID",
          element: <MovieDetails/>,
          loader:getMoviesData,
        },
      ],
    },
  ]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
