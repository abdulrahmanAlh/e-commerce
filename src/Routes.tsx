import { Layout } from "layout";
import { lazy } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const ProductListPage = lazy(() => import("pages/product-list"));

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
