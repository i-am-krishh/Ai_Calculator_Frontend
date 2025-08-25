import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import { Toaster } from "react-hot-toast";

import Home  from "./screens/home";

import './index.css'

const paths = [
  {
    path: '/',
    element: (
      <Home/>
    ),
  },
];

const BrowserRouter = createBrowserRouter(paths);

const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={BrowserRouter} />
      <Toaster />
    </MantineProvider>
  )
}

export default App;
