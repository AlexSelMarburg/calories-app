import MainNavigation from "./components/MainNavigation/MainNavigation";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CaloriesProvider } from "./context/CaloriesContext";
import CaloriesPage from "./pages/CaloriesPage";
import { lazy, Suspense } from "react";
import LoadingPage from "./pages/LoadingPage";
const BodyweightPage = lazy(() => import("./pages/BodyweightPage"));

export default function App() {
  return (
    <CaloriesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CaloriesPage />} />
          <Route
            path="/bodyweight"
            element={
              <Suspense fallback={<LoadingPage />}>
                <BodyweightPage />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <MainNavigation />
      </BrowserRouter>
    </CaloriesProvider>
  );
}
