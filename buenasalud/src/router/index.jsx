import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, GraficosPage, SignInPage } from "../pages";
import { AuthLayout, MainLayout } from "../layouts";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/graficos" element={<GraficosPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
