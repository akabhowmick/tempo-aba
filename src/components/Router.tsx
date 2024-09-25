
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Header } from "./Header";
import { HomePage } from "./HomeSections/HomePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<HomePage />} />
    </Route>
  )
);